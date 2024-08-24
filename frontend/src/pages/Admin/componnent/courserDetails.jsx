import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
  const { courseId } = useParams(); // récupère le paramètre courseId de l'URL
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api//cours/${courseId}`)
      .then(response => {
        setCourse(response.data);
        setChapters(response.data.chapters);
      })
      .catch(error => {
        console.error(error);
      });
  }, [courseId]); // dépendance à courseId pour relancer la requête si courseId change

  return (
    <div>
      <h1>{course.title}</h1>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter._id}>{chapter.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;