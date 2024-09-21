import React, { useState } from 'react';
import axios from 'axios';


function Chat() {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;

        const userMessage = { message };
        try {
            const { data } = await axios.post('http://localhost:8080/api/chat', userMessage);
            setResponses([...responses, { user: message, ai: data.choices[0].message.content }]);
            setMessage('');
        } catch (error) {
            console.error('Error fetching the AI response', error);
        }
    };

    return (
        <div className="App">
            <h1>Chat avec GPT</h1>
            <div>
                {responses.map((item, index) => (
                    <div key={index}>
                        <p><strong>Vous:</strong> {item.user}</p>
                        <p><strong>GPT:</strong> {item.ai}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    required
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Chat;