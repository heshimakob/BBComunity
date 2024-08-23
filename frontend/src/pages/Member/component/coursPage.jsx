import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCours } from '../../../store/coursSlice';

const CoursPage = () => {
  const dispatch = useDispatch();
  const cours = useSelector((state) => state.cours.data);

  useEffect(() => {
    dispatch(getCours());
  }, [dispatch]);

  return (
    <div>
      <h1>Cours</h1>
      <ul>
        {cours.map((cours) => (
          <li key={cours._id}>{cours.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursPage;