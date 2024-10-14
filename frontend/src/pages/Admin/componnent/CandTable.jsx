import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdUpdate, MdDelete } from 'react-icons/md';

const CandTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/candidate/getAllCandidates');
      const fetchedCandidates = response.data;

      // Charger l'état des candidats depuis localStorage
      const storedCandidates = localStorage.getItem('candidates');
      if (storedCandidates) {
        const parsedCandidates = JSON.parse(storedCandidates);
        // Mettre à jour l'état avec les candidats récupérés de l'API
        const updatedCandidates = fetchedCandidates.map(candidate => {
          const storedCandidate = parsedCandidates.find(c => c._id === candidate._id);
          return storedCandidate ? { ...candidate, status: storedCandidate.status } : candidate;
        });
        setCandidates(updatedCandidates);
      } else {
        setCandidates(fetchedCandidates);
      }

      // Gérer le cas où aucun candidat n'est trouvé
      if (fetchedCandidates.length === 0) {
        setError('Aucun candidat trouvé.');
      } else {
        setError(null); // Réinitialiser l'erreur si des candidats sont trouvés
      }
    } catch (error) {
      console.error('Error fetching candidates:', error);
      setError('Une erreur est survenue lors de la récupération des candidats.'); // Message d'erreur
    }
  };

  const handleStatusChange = async (candidateId) => {
    try {
      const candidate = candidates.find(c => c._id === candidateId);
      const registerData = {
        name: candidate.name,
        email: candidate.email,
        password: candidate.password,
        // genre: candidate.genre,
        // isAdmin: false,
      };
      await axios.post('http://localhost:8080/api/users/register', registerData);

      // Mettre à jour le statut du candidat localement
      const updatedCandidates = candidates.map(c => 
        c._id === candidateId ? { ...c, status: 'submitted' } : c
      );

      setCandidates(updatedCandidates);

      // Stocker l'état des candidats dans localStorage
      localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
    } catch (error) {
      console.error('Error updating candidate status:', error);
      setError('Une erreur est survenue lors de la mise à jour du statut du candidat.'); // Message d'erreur
    }
  };

  return (
    <div className="container mx-auto mt-32">
      {error && <p className="text-red-500">{error}</p>} {/* Afficher le message d'erreur */}
      {candidates.length === 0 ? ( // Vérifier si aucun candidat n'est trouvé
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
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id}>
                <td className="py-2 px-4 border-b">{candidate.name}</td>
                <td className="py-2 px-4 border-b">{candidate.email}</td>
                <td className="py-2 px-4 border-b">{candidate.password}</td>
                <td className="py-2 px-4 border-b">{candidate.genre}</td>
                <td className="py-2 px-4 border-b">{candidate.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{candidate.domaine}</td>
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
