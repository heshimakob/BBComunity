import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChapterByCoursId} from '../../../store/coursSlice';

const AddCourseChapter = () => {
  const dispatch = useDispatch();
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [chapters, setChapters] = useState([]);
  const [newChapterTitle, setNewChapterTitle] = useState('');
  const [newChapterDescription, setNewChapterDescription] = useState('');

  const handleAddCourse = () => {
    const course = { title: courseTitle, description: courseDescription, chapters };
    dispatch(addChapterByCoursId(course));
  };

  const handleAddChapter = () => {
    const newChapter = { title: newChapterTitle, description: newChapterDescription };
    setChapters([...chapters, newChapter]);
    setNewChapterTitle('');
    setNewChapterDescription('');
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">Ajouter un cours</h1>
      <form>
        <label className="block mb-2">
          Titre du cours :
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full p-3 mb-6  border border-gray-200 rounded-md"
          />
        </label>
        <label className="block mb-2">
          Description du cours :
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
           className="w-full p-3 mb-6  border border-gray-200 rounded-md"
          />
        </label>
        <h2 className="text-lg font-bold mb-2">Chapitres</h2>
        <ul className="list-none mb-4">
          {chapters.map((chapter, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-600">{chapter.title}</span>
              <span className="text-gray-400">{chapter.description}</span>
            </li>
          ))}
        </ul>
        <label className="block mb-2">
          Ajouter un chapitre :
          <input
            type="text"
            value={newChapterTitle}
            onChange={(e) => setNewChapterTitle(e.target.value)}
             className="w-full p-3 mb-6  border border-gray-200 rounded-md"
            placeholder="Titre du chapitre"
          />
        </label>
        <label className="block mb-2">
          Description du chapitre :
          <textarea
            value={newChapterDescription}
            onChange={(e) => setNewChapterDescription(e.target.value)}
            className="w-full p-3 mb-6  border border-gray-200 rounded-md"
            placeholder="Description du chapitre"
          />
        </label>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddChapter}
        >
          Ajouter le chapitre
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddCourse}
        >
          Ajouter le cours
        </button>
      </form>
    </div>
  );
};

export default AddCourseChapter;