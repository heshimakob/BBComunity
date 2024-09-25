import { useEffect, useState } from 'react';

interface Candidate {
    _id: string;
    name: string;
    email: string;
    genre: string;
    phoneNumber: string;
    domaine: string;
}

const CandidateTable = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    
    useEffect(() => {
        const fetchCandidates = async () => {
            const response = await fetch('/api/getAllCandidates');
            const data = await response.json();
            setCandidates(data);
        };

        fetchCandidates();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro de téléphone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domaine</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {candidates.map(candidate => (
                        <tr key={candidate._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.genre}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.phoneNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.domaine}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CandidateTable;