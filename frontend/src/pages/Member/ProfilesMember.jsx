import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/userSlice';

import Sidebar from './Sidebar';
import { ClassesContainer, Content } from '../../styles/ClassesStyles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import NavBar from '../Admin/NavBar';

const ProfilesMember = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  
  const { user } = currentUser;
  const [name, setName] = useState(user ? user.name : '');

  const [email, setEmail] = useState(user ? user.email : '');

  const [password, setPassword] = useState(user ? user.password : '');

  const [genre, setGenre] = useState(user ? user.genre : '');

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPassword(currentUser.password);
      setGenre(currentUser.genre);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email, password, genre }));
  };

  return (
    <>
      {/* <NavBar/> */}
      <NavBar/>
      <Sidebar />
      <ClassesContainer>
        <Content>
          <div className="h-screen w-1/3 p-10 mt-20 ml-32">
            <h1 className="text-2xl mb-10">Modifier votre profile</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
                Nom complet*
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="titre"
                className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
              <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
                Adresse mail*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse mail"
                className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
              <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="auteur"
                  className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                />
                <span className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </span>
              </div>
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                Gender identity*
              </label>
              <select
                id="gender"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <button
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </Content>
      </ClassesContainer>
    </>
  );
};

export default ProfilesMember;