import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Nombre d'utilisateurs par page

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/getAllUsers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Ajoutez le token si nécessaire
        }
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setUpdateModal(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteModal(true);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/users/deleteUser/${selectedUser._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Ajoutez le token si nécessaire
        }
      });
      setDeleteModal(false);
      fetchUsers(); // Rafraîchir la liste des utilisateurs
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/update/${selectedUser.id}`, {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Ajoutez le token si nécessaire
        }
      });
      setUpdateModal(false);
      fetchUsers(); // Rafraîchir la liste des utilisateurs
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Calculer l'index de début et de fin des utilisateurs à afficher
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Changer de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Nombre total de pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border rounded-xl mt-10 w-full">
        <thead className="bg-gray-100 border">
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className='border'>
          {Array.isArray(currentUsers) && currentUsers.length > 0 && currentUsers.map((user) => (
            <tr key={user.id} className='border'>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">{user.password}</td>
              <td className="px-4 py-2 flex justify-center">
                <button className="mr-2 bg-blue-900 text-white" onClick={() => handleUpdate(user)}>
                  <AiOutlineEdit size={20} />
                </button>
                <button className='bg-red-800 text-white' onClick={() => handleDelete(user)}>
                  <AiOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="mx-2 p-2 bg-gray-300 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            className={`mx-1 p-2 ${currentPage === number + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'} rounded`}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </button>
        ))}
        <button
          className="mx-2 p-2 bg-gray-300 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>

      {/* Update Modal */}
      {updateModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-2xl">
          <form
            className="bg-white p-4 rounded shadow-md"
            onSubmit={handleUpdateSubmit}
          >
            <h2 className="text-2xl font-bold mb-4">Mettre à jour l'utilisateur</h2>
            <input
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-400"
            />
            <input
              type="email"
              name="email"
              value={selectedUser.email}
              onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-400"
            />
            <input
              type="password"
              name="password"
              value={selectedUser.password}
              onChange={(e) => setSelectedUser({ ...selectedUser, password: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Mettre à jour
            </button>
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setUpdateModal(false)}
            >
              Annuler
            </button>
          </form>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Supprimer l'utilisateur</h2>
            <p>Êtes-vous sûr de vouloir supprimer l'utilisateur {selectedUser.name} ({selectedUser.email}) ?</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDeleteSubmit}
              >
                Oui, supprimer
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={() => setDeleteModal(false)}
              >
                Non, annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
