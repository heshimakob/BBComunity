import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChapterByCoursId } from '../../../store/coursSlice';

const ChapitrePage = () => {
  const dispatch = useDispatch();
  const chapitres = useSelector((state) => state.cours.chapterData);
  const coursId = '1234567890'; // Remplacez par l'ID du cours que vous souhaitez afficher

  useEffect(() => {
    dispatch(getAllChapterByCoursId(coursId));
  }, [dispatch, coursId]);

  return (
    <div>
      <h1>Chapitres</h1>
      <ul>
        {chapitres.map((chapitre) => (
          <li key={chapitre._id}>{chapitre.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChapitrePage;