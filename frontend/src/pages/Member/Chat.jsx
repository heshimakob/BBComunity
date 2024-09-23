import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError("Token manquant");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:8080/api/users/userDetail', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const userInfo = response.data; // Ajustez cela si nécessaire en fonction de la réponse de votre API
        setUserId(userInfo._id);
        setUserName(userInfo.name);
        setUserImage(userInfo.image);
      } catch (err) {
        setError(err.response?.data?.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchChats = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/chat/userChat/${userId}`);
          setChats(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchChats();
    }
  }, [userId]);

  const handleChatSelect = async (chatId) => {
    setSelectedChat(chatId);
    const response = await axios.get(`http://localhost:8080/api/message/getMessage/${chatId}`);
    setMessages(response.data);
  };

  const handleMessageSend = async (e) => {
    e.preventDefault();
    if (messageText && selectedChat) {
      const newMessage = {
        chatId: selectedChat,
        senderId: userId,
        text: messageText,
      };
      await axios.post('http://localhost:8080/api/message/addMessage', newMessage);
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Informations de l'utilisateur */}
      <div className="p-4">
        <img src={userImage} alt={userName} className="w-10 h-10 rounded-full" />
        <span className="font-bold">{userName}</span>
      </div>

      {/* Liste des chats */}
      <div className="flex flex-col w-1/3 bg-white shadow-lg p-4">
        <h2 className="font-bold text-xl">Chats</h2>
        <div className="mt-4">
          {chats.map(chat => (
            <div
              key={chat._id}
              onClick={() => handleChatSelect(chat._id)}
              className="p-2 hover:bg-gray-200 cursor-pointer rounded"
            >
              Chat avec {chat.members.find(id => id !== userId)} {/* Ajustez pour afficher le nom */}
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col w-2/3 p-4">
        {selectedChat ? (
          <>
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`my-1 p-2 ${msg.senderId === userId ? 'bg-blue-200' : 'bg-gray-200'} rounded`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleMessageSend} className="flex mt-4">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 border rounded p-2"
                placeholder="Écrire un message..."
              />
              <button type="submit" className="bg-blue-500 text-white rounded px-4 ml-2">Envoyer</button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-gray-300">Sélectionnez un chat pour voir les messages</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;