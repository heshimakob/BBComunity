import React from 'react';
import Modal from './Modal'; // Assurez-vous d'importer votre modal

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Confirmation</h2>
        <p>{message}</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Annuler
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Supprimer
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
