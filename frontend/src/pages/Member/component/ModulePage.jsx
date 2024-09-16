import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChapterByCoursId } from '../../../store/coursSlice';
import { Link, useParams } from 'react-router-dom';
import { FaAngleRight, FaList, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Ajoutez d'autres icônes si nécessaire
import Loading from '../../../components/Loading';
import Sidebar from '../Sidebar';
import NavBar from '../../Admin/NavBar';
import chaptervide from "../../../assets/chaptervide.png";

const ModulePage = () => {
    const dispatch = useDispatch();
    const chapterData = useSelector((state) => state.cours.chapterData);
    const [loading, setLoading] = useState(true);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllChapterByCoursId(id));
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

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Lien copié dans le presse-papiers !");
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="container mx-auto w-full h-screen p-4 pt-20">
                <div className="w-full flex items-center justify-center pt-10">
                    <div className="left w-[90%] h-screen justify-center items-center">
                        {selectedChapter ? (
                            <>
                                {selectedChapter.video ? (
                                    <video className='rounded-xl'
                                        src={selectedChapter.video}
                                        width={"100%"}
                                        controls
                                        controlsList="nodownload noremoteplayback"
                                        disablePictureInPicture
                                        disableRemotePlayback
                                        autoPlay
                                    ></video>
                                ) : (
                                    <video
                                        src="#"
                                        width={"100%"}
                                        controls
                                        controlsList="nodownload noremoteplayback"
                                        disablePictureInPicture
                                        disableRemotePlayback
                                        autoPlay></video>
                                )}
                                <div className='bg-blue-900 text-white p-4 my-4 rounded'>
                                    <h2 className='text-xl font-bold mb-2'>Partager ce cours</h2>
                                    <div className='flex space-x-4'>
                                        <button onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href)}>
                                            <FaFacebook className='text-2xl' />
                                        </button>
                                        <button onClick={() => window.open("https://twitter.com/intent/tweet?url=" + window.location.href)}>
                                            <FaTwitter className='text-2xl' />
                                        </button>
                                        <button onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href)}>
                                            <FaInstagram className='text-2xl' />
                                        </button>
                                        <button onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href)}>
                                            <FaWhatsapp className='text-2xl' />
                                        </button>
                                        <button onClick={() => window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href)}>
                                            <FaLinkedin className='text-2xl' />
                                        </button>
                                        <button onClick={handleCopy}>
                                            <FaCopy className='text-2xl' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-3xl font-bold text-gray-500 mb-20'>{selectedChapter.titre}</h1>
                                    <div
                                        className='w-full text-xl  text-gray-600 h-full p-3 mb-6 text-justify items-center leading-7'
                                        dangerouslySetInnerHTML={{ __html: selectedChapter.contenu }}
                                    />
                                </div>
                                <div className='flex justify-between p-20 pt-10'>
                                    <div className='flex justify-between'>
                                        <button className='w-full justify-between bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
                                            <Link to="/member-cours">
                                                <span>Tous les cours</span>
                                            </Link>
                                        </button>
                                    </div>
                                    <div>
                                        <button className='w-full bg-green-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Terminer</button>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button className='w-full flex bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded' onClick={handleNextChapter}>Prochain</button>
                                    </div>
                                </div>
                                <div className='w-full bg-gray-300'>
                                    <h1>les liens complementaires du module</h1>
                                </div>
                            </>
                        ) : (
                            <div>
                                <img src={chaptervide} />
                                <button className='w-full justify-between bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
                                    <Link to="/member-cours">
                                        <span>Tous les cours</span>
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="fixed right-0 top-0 w-1/4 bg-white h-screen flex flex-col text-xl p-10">
                        <div className='flex w-full mt-20 bg-blue-950 text-white h-16 justify-center items-center'>
                            <h1 className='font-bold'>Nos chapitres disponibles</h1>
                        </div>
                        <div className='p-10 mb-10 '>
                            <ul className='bg-blue-950 text-white p-10 font-sans rounded-lg'>
                                {chapterData.map((chapitre) => (
                                    <li key={chapitre._id}>
                                        <button
                                            onClick={() => handleChapterClick(chapitre)}
                                            className={selectedChapter && selectedChapter._id === chapitre._id ? 'bg-blue-700 text-white rounded w-full' : ''}
                                        >
                                            {chapitre.titre}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModulePage;