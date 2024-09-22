import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
    const token = localStorage.getItem('token');
    const [chat, setChat] = useState([]);
    const [_id, setId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/users/userDetail', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setId(response.data._id); // Assurez-vous que l'API retourne l'_id de l'utilisateur
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, [token]);

    useEffect(() => {
        const fetchChat = async () => {
            if (!_id) return; // Ne pas exécuter si _id n'est pas encore défini

            try {
                const response = await axios.get(`http://localhost:8080/api/chat/userChat/${_id}`); // Utilisation de la nouvelle route
                setChat(response.data); // Assurez-vous que les données renvoyées sont dans un format utilisable
            } catch (error) {
                console.error('Error fetching chat:', error);
            }
        };

        fetchChat();
    }, [_id]); // Le tableau de dépendance pour lancer l'effet chaque fois que _id change

    return (
        <div className="chat">
            <div className="left-side-chat">
                <h2>Chat</h2>
                <div className="chat-list">
                    {chat.map((message, index) => (
                        <div key={index} className={message.senderId === _id ? 'right' : 'left'}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-side-chat">
                <div className="chat-header">
                    {/* Contenu pour l'en-tête de chat */}
                </div>
            </div>
        </div>
    );
}

export default Chat;