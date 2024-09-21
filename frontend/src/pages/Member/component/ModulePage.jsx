import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChapterByCoursId } from '../../../store/coursSlice';
import { Link, useParams } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Loading from '../../../components/Loading';
import Sidebar from '../Sidebar';
import NavBar from '../../Admin/NavBar';
import chaptervide from "../../../assets/chaptervide.png";
import axios from 'axios';

const ModulePage = () => {
    const dispatch = useDispatch();
    const chapterData = useSelector((state) => state.cours.chapterData);
    const [loading, setLoading] = useState(true);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [progressPercentage, setProgressPercentage] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllChapterByCoursId(id));
            await getProgress();
            setLoading(false);
        };

        fetchData();
    }, [dispatch, id]);

    useEffect(() => {
        if (!loading && chapterData.length > 0) {
            setSelectedChapter(chapterData[0]);
        }
    }, [loading, chapterData]);

    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter);
    };

    const handleNextChapter = () => {
        const currentIndex = chapterData.findIndex(chap => chap._id === selectedChapter._id);
        if (currentIndex < chapterData.length - 1) {
            const nextChapter = chapterData[currentIndex + 1];
            setSelectedChapter(nextChapter);
        }
    };

    const addProgress = async (chapterId) => {
        try {
            await axios.post(`http://localhost:8080/api/cours/addProgress?chapitres=${chapterId}&cours=${id}`);
            await getProgress();
            alert("Progression ajoutée avec succès!");
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'ajout de la progression");
        }
    };

    const getProgress = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/cours/getProgress?cours=${id}`);
            const { coursProgressPourcentage } = response.data;
            setProgressPercentage(coursProgressPourcentage);
        } catch (error) {
            console.error(error);
            alert("Erreur lors de la récupération de la progression");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Lien copié dans le presse-papiers !");
        });
    };

    const filteredChapters = chapterData.filter(chapter => chapter.titre.toLowerCase().includes(searchTerm.toLowerCase()));

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="container mx-auto w-full h-screen p-4 pt-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/4 bg-gray-100 p-4 lg:sticky lg:top-0 mb-4 lg:mb-0">
                        <input
                            type="text"
                            placeholder="Rechercher un cours..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <h2 className="font-bold mb-2">Nos chapitres disponibles</h2>
                        <ul className="bg-blue-950 text-white p-2 font-sans rounded-lg">
                            {filteredChapters.map((chapter) => (
                                <li key={chapter._id}>
                                    <button
                                        onClick={() => handleChapterClick(chapter)}
                                        className={`w-full text-left rounded ${selectedChapter && selectedChapter._id === chapter._id ? 'bg-blue-700 text-white' : 'text-blue-200 hover:bg-blue-600'} p-2`}
                                    >
                                        {chapter.titre}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full lg:w-3/4 p-4 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-3/4">
                            <div className="progress-bar h-2 bg-green-500 mb-4 rounded" style={{ width: `${progressPercentage}%` }} />
                            <h1 className="text-lg font-semibold">Progression : {progressPercentage}%</h1>

                            {selectedChapter ? (
                                <>
                                    {selectedChapter.video ? (
                                        <video 
                                            className='rounded-xl my-4' 
                                            src={selectedChapter.video} 
                                            controls 
                                            controlsList="nodownload noremoteplayback" 
                                            disablePictureInPicture 
                                            disableRemotePlayback 
                                            onEnded={() => addProgress(selectedChapter._id)} 
                                            autoPlay 
                                            width="100%" 
                                        />
                                    ) : (
                                        <video 
                                            className='rounded-xl my-4' 
                                            src="#" 
                                            controls 
                                            controlsList="nodownload noremoteplayback" 
                                            disablePictureInPicture 
                                            disableRemotePlayback 
                                            onEnded={() => addProgress(selectedChapter._id)} 
                                            autoPlay 
                                            width="100%" 
                                        />
                                    )}
                                    <h1 className='text-3xl font-bold text-gray-500 mb-4'>{selectedChapter.titre}</h1>
                                    <div className='w-full bg-gray-100 text-xl text-gray-600 h-full p-3 mb-6 text-justify leading-7 rounded-xl' dangerouslySetInnerHTML={{ __html: selectedChapter.contenu }} />
                                    <div className='flex justify-around mb-4'>
                                        <Link to="/member-cours" className='w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-center'>Tous les cours</Link>
                                        <button className='w-full bg-green-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Terminer</button>
                                        <button className='w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded' onClick={handleNextChapter}>Prochain</button>
                                    </div>
                                    <div className='w-full bg-gray-300 my-4'>
                                        <h1 className="p-2">Les liens complémentaires du module</h1>
                                    </div>
                                    <div className='bg-blue-300 text-white p-4 my-4 rounded-xl mb-20'>
                                        <h2 className='text-xl font-bold mb-2'>Partager ce cours</h2>
                                        <div className='flex space-x-4'>
                                            <FaFacebook onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href)} className='cursor-pointer text-2xl text-blue-950' />
                                            <FaTwitter onClick={() => window.open("https://twitter.com/intent/tweet?url=" + window.location.href)} className='cursor-pointer text-2xl text-blue-950' />
                                            <FaInstagram onClick={() => window.open("https://www.instagram.com/sharer/sharer.php?u=" + window.location.href)} className='cursor-pointer text-2xl text-blue-950' />
                                            <FaWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?text=" + window.location.href)} className='cursor-pointer text-2xl text-blue-950' />
                                            <FaLinkedin onClick={() => window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href)} className='cursor-pointer text-2xl text-blue-950' />
                                            <FaCopy onClick={handleCopy} className='cursor-pointer text-2xl text-blue-950' />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <img src={chaptervide} alt="Chapitre vidéo non disponible" />
                                    <Link to="/member-cours" className='w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-center mt-4'>Tous les cours</Link>
                                </div>
                            )}
                        </div>

                        <div className="w-full lg:w-1/4 lg:pl-4">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
                                <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Placeholder" />
                                <div className="p-4">
                                    <h5 className="text-lg font-bold mb-2">Titre 1</h5>
                                    <p className="text-gray-700 text-base">Description 1</p>
                                </div>
                            </div>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Placeholder" />
                                <div className="p-4">
                                    <h5 className="text-lg font-bold mb-2">Titre 2</h5>
                                    <p className="text-gray-700 text-base">Description 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModulePage;
