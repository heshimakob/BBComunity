import React, { useState } from 'react';
import Sidebar from './Sidebar';
import NavBar from '../Admin/NavBar';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "text-davinci-003",
          prompt: input,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-LIr8DSbJ4Ua-FVsebqS7OSRU0ZlN3qUD7lNpiEozrrT3BlbkFJ6ve3qv8MIxyngqGrDYLZTilAIk8-V22jz38K_dTLEA`, // Remplacez par votre clé API OpenAI
          }
        }
      );

      const botMessage = { sender: 'bot', text: response.data.choices[0].text.trim() };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    } finally {
      setInput('');
    }
  };

  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="bbc-container flex flex-col h-screen ">
        <div className="flex-grow flex flex-col">
          <div className="flex justify-center items-center p-4 bg-gray-100 border-b border-gray-200 mt-20">
            <h1 className="text-xl font-semibold text-gray-700">Chat Assistant</h1>
          </div>
          <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 flex mb-20">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
