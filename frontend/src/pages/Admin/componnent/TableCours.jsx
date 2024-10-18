import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

const TableCours = () => {
  const [courses, setCourses] = useState([]);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null); // Pour stocker le cours actuellement modifié ou supprimé

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/cours/getAllcours');
        setCourses(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = (courseId) => {
    setCurrentCourse(courseId);
    setConfirmationModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/cours/deleteCourse/${currentCourse}`);
      setCourses(courses.filter(course => course._id !== currentCourse));
      toast.success('Cours supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression du cours:', error);
      toast.error('Erreur lors de la suppression du cours');
    } finally {
      setConfirmationModalOpen(false);
    }
  };

  const handleUpdate = (course) => {
    setCurrentCourse(course);
    setUpdateModalOpen(true);
  };

  const handleSubmitUpdate = async (formData) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/cours/updateCourse//${currentCourse._id}`, formData);
      console.log(response.data.message);
      toast.success('Cours mis à jour avec succès');
      // Mettez à jour la liste des cours après la mise à jour
      setCourses(courses.map(course => (course._id === currentCourse._id ? { ...course, ...formData } : course)));
    } catch (error) {
      console.error('Erreur lors de la mise à jour du cours:', error);
      toast.error('Erreur lors de la mise à jour du cours');
    } finally {
      setUpdateModalOpen(false);
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nom du Cours</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Durée</th>
              <th className="py-2 px-4 border-b">Catégorie</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id}>
                <td className="py-2 px-4 border-b">{course.name}</td>
                <td className="py-2 px-4 border-b">{course.description}</td>
                <td className="py-2 px-4 border-b">{course.duration} heures</td>
                <td className="py-2 px-4 border-b">{course.category}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <FaRegEdit 
                    className="text-blue-500 cursor-pointer" 
                    size={20} 
                    onClick={() => handleUpdate(course)} 
                  />
                  <FaTrash 
                    className="text-red-500 cursor-pointer" 
                    size={20} 
                    onClick={() => handleDelete(course._id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de confirmation */}
      {isConfirmationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Confirmation</h2>
            <p>Êtes-vous sûr de vouloir supprimer ce cours ?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={() => setConfirmationModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annuler</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded">Supprimer</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de mise à jour */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Mettre à jour le Cours</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                description: e.target.description.value,
                duration: e.target.duration.value,
                category: e.target.category.value,
              };
              handleSubmitUpdate(formData);
            }}>
              <div className="mt-4">
                <label>Nom du Cours:</label>
                <input type="text" name="name" defaultValue={currentCourse.name} className="border p-2 w-full" required />
              </div>
              <div className="mt-4">
                <label>Description:</label>
                <textarea name="description" defaultValue={currentCourse.description} className="border p-2 w-full" required></textarea>
              </div>
              <div className="mt-4">
                <label>Durée:</label>
                <input type="number" name="duration" defaultValue={currentCourse.duration} className="border p-2 w-full" required />
              </div>
              <div className="mt-4">
                <label>Catégorie:</label>
                <input type="text" name="category" defaultValue={currentCourse.category} className="border p-2 w-full" required />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button onClick={() => setUpdateModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annuler</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Mettre à jour</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default TableCours;
