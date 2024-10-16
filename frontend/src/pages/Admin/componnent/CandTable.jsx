import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdUpdate, MdDelete } from 'react-icons/md';

const CandTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [error, setError] = useState(null);
  const [genreFilter, setGenreFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [domaineFilter, setDomaineFilter] = useState('');
  const [dateFilter, setDateFilter] = useState({
    day: '',
    month: '',
    year: ''
  });

  useEffect(() => {
    fetchCandidates();
  }, []);

  useEffect(() => {
    filterCandidates();
  }, [genreFilter, statusFilter, domaineFilter, dateFilter, candidates]);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/candidate/getAllCandidates');
      const fetchedCandidates = response.data;

      const storedCandidates = localStorage.getItem('candidates');
      if (storedCandidates) {
        const parsedCandidates = JSON.parse(storedCandidates);
        const updatedCandidates = fetchedCandidates.map(candidate => {
          const storedCandidate = parsedCandidates.find(c => c._id === candidate._id);
          return storedCandidate ? { ...candidate, status: storedCandidate.status } : candidate;
        });
        setCandidates(updatedCandidates);
      } else {
        setCandidates(fetchedCandidates);
      }

      if (fetchedCandidates.length === 0) {
        setError('Aucun candidat trouvé.');
      } else {
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching candidates:', error);
      setError('Une erreur est survenue lors de la récupération des candidats.');
    }
  };

  const handleStatusChange = async (candidateId) => {
    try {
      const candidate = candidates.find(c => c._id === candidateId);
      const registerData = {
        name: candidate.name,
        email: candidate.email,
        password: candidate.password,
      };
      await axios.post('http://localhost:8080/api/users/register', registerData);

      const updatedCandidates = candidates.map(c => 
        c._id === candidateId ? { ...c, status: 'submitted' } : c
      );

      setCandidates(updatedCandidates);

      localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
    } catch (error) {
      console.error('Error updating candidate status:', error);
      setError('Une erreur est survenue lors de la mise à jour du statut du candidat.');
    }
  };

  const filterCandidates = () => {
    let updatedCandidates = [...candidates];

    if (genreFilter) {
      updatedCandidates = updatedCandidates.filter(candidate => candidate.genre === genreFilter);
    }
    if (statusFilter) {
      updatedCandidates = updatedCandidates.filter(candidate => candidate.status === statusFilter);
    }
    if (domaineFilter) {
      updatedCandidates = updatedCandidates.filter(candidate => candidate.domaine === domaineFilter);
    }
    if (dateFilter.day || dateFilter.month || dateFilter.year) {
      updatedCandidates = updatedCandidates.filter(candidate => {
        const candidateDate = new Date(candidate.createdAt);
        return (
          (!dateFilter.day || candidateDate.getDate() === parseInt(dateFilter.day)) &&
          (!dateFilter.month || candidateDate.getMonth() + 1 === parseInt(dateFilter.month)) &&
          (!dateFilter.year || candidateDate.getFullYear() === parseInt(dateFilter.year))
        );
      });
    }

    setFilteredCandidates(updatedCandidates);
  };

  return (
    <div className="container mx-auto mt-32">
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className="mr-2 p-2 border">
          <option value="">Tous les genres</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="mr-2 p-2 border">
          <option value="">Tous les états</option>
          <option value="submitted">Submitted</option>
          <option value="pending">Pending</option>
        </select>
        <select value={domaineFilter} onChange={(e) => setDomaineFilter(e.target.value)} className="mr-2 p-2 border">
          <option value="">Tous les domaines</option>
          <option value="Entreprenariat">Entreprenariat</option>
          <option value="Software Development">Software Development</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Art numerique">Art numerique</option>
          <option value="AR, VR et Design">AR, VR et Design</option>
        </select>
        <input 
          type="number" 
          placeholder="Jour" 
          value={dateFilter.day} 
          onChange={(e) => setDateFilter({...dateFilter, day: e.target.value})} 
          className="mr-2 p-2 border" 
        />
        <input 
          type="number" 
          placeholder="Mois" 
          value={dateFilter.month} 
          onChange={(e) => setDateFilter({...dateFilter, month: e.target.value})} 
          className="mr-2 p-2 border" 
        />
        <input 
          type="number" 
          placeholder="Année" 
          value={dateFilter.year} 
          onChange={(e) => setDateFilter({...dateFilter, year: e.target.value})} 
          className="mr-2 p-2 border" 
        />
      </div>
      {filteredCandidates.length === 0 ? (
        <p className="text-gray-500">Aucun candidat à afficher.</p>
      ) : (
        <table className="min-w-full bg-white border rounded-xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nom</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Mot de passe</th>
              <th className="py-2 px-4 border-b">Genre</th>
              <th className="py-2 px-4 border-b">Numéro de téléphone</th>
              <th className="py-2 px-4 border-b">Domaine</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate._id}>
                <td className="py-2 px-4 border-b">{candidate.name}</td>
                <td className="py-2 px-4 border-b">{candidate.email}</td>
                <td className="py-2 px-4 border-b">{candidate.password}</td>
                <td className="py-2 px-4 border-b">{candidate.genre}</td>
                <td className="py-2 px-4 border-b">{candidate.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{candidate.domaine}</td>
                <td className="py-2 px-4 border-b">{new Date(candidate.createdAt).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b flex items-center space-x-2">
                  <MdUpdate className="cursor-pointer text-blue-500" />
                  <MdDelete className="cursor-pointer text-red-500" />
                  <button
                    className={`px-2 py-1 rounded ${
                      candidate.status === 'submitted' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                    onClick={() => handleStatusChange(candidate._id)}
                  >
                    {candidate.status === 'submitted' ? 'Submitted' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CandTable;
