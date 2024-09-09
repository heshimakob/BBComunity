import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUserById, updateUserById } from '../../../store/userSlice';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const UserTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [updateModal, setUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setUpdateModal(true);
  };
  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteModal(true);
  };

  const handleDeleteSubmit = () => {
    dispatch(deleteUserById(selectedUser._id));
    setDeleteModal(false);
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserById(selectedUser.id, { ...selectedUser, name: e.target.name.value, email: e.target.email.value, password: e.target.password.value }));
    setUpdateModal(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
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