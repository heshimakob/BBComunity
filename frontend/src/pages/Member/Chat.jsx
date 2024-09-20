import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async () => {
    setLoading(true);
    setError('');
    try {
      const apiUrl = 'http://localhost:8080/api/chat/chatter'; // URL de votre serveur
      const { data } = await axios.post(apiUrl, { input }); // Envoi de l'input
      setResponse(data.response); // Réponse de l'API
    } catch (error) {
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bbc-container mt-20'>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tapez votre message ici..."
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {response && <p>{response}</p>} {/* Ajout d'un check pour afficher la réponse */}
      </div>
    </div>
  );
};

export default Chat;