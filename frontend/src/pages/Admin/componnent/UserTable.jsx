// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsers, deleteUserById, updateUserById } from '../../../store/userSlice';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


// import styled from 'styled-components';

// const Modal = styled.div`
//   display: none;
//   &.modal-open {
//     display: block;
//   }
// `;

// const UserTable = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);
//   const [updateModal, setUpdateModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState({});

//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     dispatch(getUsers());
//   }, [dispatch]);

//   const handleUpdate = (user) => {
//     setSelectedUser(user);
//     setUpdateModal(true);
//   };

//   const handleDelete = (user) => {
//     setSelectedUser(user);
//     setDeleteModal(true);
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateUserById(selectedUser._id, { ...selectedUser, name: e.target.name.value }));
//     setUpdateModal(false);
//   };

//   const handleDeleteSubmit = () => {
//     dispatch(deleteUserById(selectedUser._id));
//     setDeleteModal(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Utilisateurs</h1>
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Nom</th>
//             <th className="px-4 py-2">Email</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>

//       <tbody>
//   {Array.isArray(users) && users.map((user) => (
//     <tr key={user._id}>
//       <td className="px-4 py-2">{user.name}</td>
//       <td className="px-4 py-2">{user.email}</td>
//       <td className="px-4 py-2">
//         <button
//           className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => handleUpdate(user)}
//         >
//           <AiOutlineEdit size={20} />
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => handleDelete(user)}
//         >
//           <AiOutlineDelete size={20} />
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>
//       </table>

//    Update Modal
// {updateModal && (
//   <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ${updateModal ? 'modal-open' : ''}`}>
//     <form
//       className="bg-white p-4 rounded shadow-md"
//       onSubmit={handleUpdateSubmit}
//     >
//       <h2 className="text-2xl font-bold mb-4">Mettre à jour l'utilisateur</h2>
//       <input
//         type="text"
//         name="name"
//         value={selectedUser.name}
//         onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
//         className="w-full p-2 mb-4 border border-gray-400"
//       />
//       <button
//         type="submit"
//         className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Mettre à jour
//       </button>
//     </form>
//   </div>
// )}

// {/* Delete Modal */}
// {deleteModal && (
//   <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ${deleteModal ? 'modal-open' : ''}`}>
//     <div className="bg-white p-4 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Supprimer l'utilisateur</h2>
//       <p>Êtes-vous sûr de vouloir supprimer l'utilisateur {selectedUser.name} ?</p>
//       <button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleDeleteSubmit}
//       >
//         Supprimer
//       </button>
//       <button
//         className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//         onClick={() => setDeleteModal(false)}
//       >
//         Annuler
//       </button>
//     </div>
//   </div>
// )}
//     </div>
//   );
// };

// export default UserTable;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUserById, updateUserById } from '../../../store/userSlice';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const UserTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
                <button className="mr-2">
                  <AiOutlineEdit size={20} />
                </button>
                <button>
                  <AiOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;