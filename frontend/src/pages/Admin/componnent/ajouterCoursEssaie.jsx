import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import toast, { Toaster } from 'react-hot-toast';
import { FaBookOpen, FaRegEdit, FaUserCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AjouterCours() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null); // Pour stocker le cours actuellement modifié ou supprimé

  const handleSubmiti = async (formData) => {
    try {
      // Ajouter ou mettre à jour le cours
      const response = await fetch('http://localhost:8080/api/cours/addCours', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data.message); // Gérer le succès
    } catch (error) {
      console.error('Erreur lors de l\'ajout du cours:', error);
    }
  };

  const handleUpdate = course => {
    setCurrentCourse(course);
    setName(course.name);
    setDescription(course.description);
    setImage(course.image);
    setModalOpen(true);
  };

  const handleDelete = async courseId => {
    try {
      // Supprimer le cours
      await axios.delete(`http://localhost:8080/api/cours/deleteCours/${courseId}`);
      setCourses(courses.filter(course => course._id !== courseId)); // Mettre à jour la liste des cours
      toast.success('Cours supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression du cours:', error);
      toast.error('Erreur lors de la suppression du cours');
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/cours/getAllcours')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <>
     
      <div className="bbc-container mx-auto w-full h-screen p-4 pt-5">
      <div>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 mt-10 rounded-xl"
        >
          Ajouter un Cours
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmiti}
          course={currentCourse} // Passer le cours courant pour la modification
        />
      </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-12 px-6">
            <div className="w-[75%]">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Apprentissage et développement personnel</h1>
              <p className="text-gray-600 mb-12">
                Gagner en potentiel et en qualités afin de dénicher des talents hors normes.
              </p>
            </div>
            <div className="w-[25%]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1t9B2bcBn8RpB9T_Mpk_ixrvbUPFADIj6g&s=https://www.shutterstock.com/image-vector/illustration-learning-with-computer-260nw-2076016010.jpg"
                alt="Learn"
                className="w-1/2"
              />
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaUserCircle className="text-blue-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-gray-800">Nos Cours</h2>
            </div>
            <div className="flex flex-wrap justify-center mb-4">
              {courses.map((course) => (
                <div key={course._id} className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <Link to={`/addChapitre/${course._id}`}>
                    <div className="bg-white rounded shadow-md">
                      <div className="px-4 py-5">
                        <div className='flex justify-between'>
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            {course.name}
                          </h4>
                          <span className="flex justify-between bg-blue-800 text-sm text-white rounded p-2 mb-2"><p className='text-white '>{course.duration} heures</p></span>
                        </div>
                        <img src={course.image} alt={course.name} className="w-full h-48 object-cover mb-2" />
                        <div className='flex justify-between'>
                          <p className="text-sm text-gray-600">{course.description}</p>
                          <span className="flex justify-between bg-red-600 text-sm text-white rounded p-2"><p className='text-white '>{course.category}</p></span>
                        </div>
                      </div>
                      <div className="px-4 py-3 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <FaRegEdit className="text-blue-500 mr-3 cursor-pointer" size={24} onClick={() => handleUpdate(course)} />
                          <FaTrash className="text-red-500 cursor-pointer" size={24} onClick={() => handleDelete(course._id)} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-blue-500 mr-2" size={24} />
              <h2 className="text-xl font-bold text-gray-800">Courses</h2>
            </div>
            <p className="text-gray-600">
              Nous simplifions des sujets complexes pour en extraire les éléments clés, afin que vous puissiez acquérir des compétences exploitables en quelques heures (au lieu de semaines ou de mois). Les cours sont fournis gratuitement et vous pouvez maintenant obtenir des certificats.{' '}
              <a href="#" className="underline text-blue-500 hover:text-blue-700">
                En savoir plus.
              </a>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default AjouterCours;