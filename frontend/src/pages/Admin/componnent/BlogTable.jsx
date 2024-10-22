import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from "../../../store/blogSlice";
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const BlogTable = () => {
    const dispatch = useDispatch();
    const { data: blogs, loading, error } = useSelector((state) => state.blogs);

    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
    const [updatedBlog, setUpdatedBlog] = useState({ titre: '', description: '', image: '', auteur: '' });

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5;

    // Quill setup
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill && selectedBlog.description) {
            quill.clipboard.dangerouslyPasteHTML(selectedBlog.description);
            quill.on('text-change', () => {
                setUpdatedBlog(prevState => ({
                    ...prevState,
                    description: quill.root.innerHTML
                }));
            });
        }
    }, [quill, selectedBlog]);

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const handleUpdate = (blog) => {
        setSelectedBlog(blog);
        setUpdatedBlog(blog);
        setUpdateModal(true);
    };

    const handleDelete = (blog) => {
        setSelectedBlog(blog);
        setDeleteModal(true);
    };

    const handleDeleteSubmit = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/blogs/deleteBlog/${selectedBlog._id}`);
            setDeleteModal(false);
            dispatch(getBlogs());
        } catch (error) {
            console.error("Erreur lors de la suppression du blog", error);
        }
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/blogs/updateBlog/${selectedBlog._id}`, updatedBlog);
            setUpdateModal(false);
            dispatch(getBlogs());
        } catch (error) {
            console.error("Erreur lors de la mise à jour du blog", error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedBlog(prevState => ({
                    ...prevState,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Get current blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="overflow-x-auto mb-10 border rounded-xl">
            <table className="table-auto w-full border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Auteur</th>
                        <th className="px-4 py-2">Catégorie</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentBlogs.map(blog => (
                        <tr key={blog._id} className='border'>
                            <td className="px-4 py-2">{blog.titre}</td>
                            <td className="px-4 py-2">{blog.auteur}</td>
                            <td className="px-4 py-2">{blog.category}</td>
                            <td className="px-4 py-2">
                                <img src={blog.image} alt={blog.titre} className="h-16 w-16 object-cover" />
                            </td>
                            <td className="px-4 py-2 flex justify-center">
                                <button className="mr-2 bg-blue-900 text-white" onClick={() => handleUpdate(blog)}>
                                    <FaEdit size={20} />
                                </button>
                                <button className='bg-red-800 text-white' onClick={() => handleDelete(blog)}>
                                    <FaTrash size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-4">
                {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>

            {/* Update Modal */}
            {updateModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-2xl">
                    <form
                        className="bg-white p-4 rounded shadow-md"
                        onSubmit={handleUpdateSubmit}
                    >
                        <h2 className="text-2xl font-bold mb-4">Modifier le blog</h2>
                        <input
                            type="text"
                            value={updatedBlog.titre}
                            onChange={(e) => setUpdatedBlog({ ...updatedBlog, titre: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-400"
                            placeholder="Titre"
                        />
                        <div style={{ width: 700, height: 500 }}>
                            <div ref={quillRef} />
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-2 mb-4 mt-20 border border-gray-400"
                        />
                        <input
                            type="text"
                            value={updatedBlog.auteur}
                            onChange={(e) => setUpdatedBlog({ ...updatedBlog, auteur: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-400"
                            placeholder="Auteur"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Mettre à jour
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                            onClick={() => setUpdateModal(false)}
                        >
                            Annuler
                        </button>
                    </form>
                </div>
            )}

            {/* Delete Modal */}
            {deleteModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Confirmer la suppression</h2>
                        <p>Êtes-vous sûr de vouloir supprimer le blog "{selectedBlog.titre}" ?</p>
                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleDeleteSubmit}
                            >
                                Oui, supprimer
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
                                onClick={() => setDeleteModal(false)}
                            >
                                Non, annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogTable;
