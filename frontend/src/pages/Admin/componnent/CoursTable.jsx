import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCours} from '../../../store/coursSlice';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const CoursTable = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cours);
  console.log('cours:', data);


  useEffect(() => {
    dispatch(getCours());
    
  }, [dispatch]);


  if (!data) {
    return <div>Loading...</div>; // or any other loading indicator
  }



  return (
    <div className="overflow-x-auto">
    <table className="table-auto w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2">Nom</th>
          <th className="px-4 py-2">description</th>
          <th className="px-4 py-2">image</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((cour) => (
            <tr key={cour.id}>
              <td className="px-4 py-2">{cour.name}</td>
              <td className="px-4 py-2">{cour.description}</td>
              <td className="px-4 py-2">{cour.image}</td>
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

export default CoursTable;
