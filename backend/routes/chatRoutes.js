const express = require('express');
const axios = require('axios');
const router = express.Router();



router.post('/chatter', async (req, res) => {

    const OpenAI = require("openai");
    const configuration = new OpenAI.Configuration({
      
    });
    const openai = new OpenAI.OpenAIApi(configuration);


    const {prompt}= req.body;

    const completion = await openai.createCompletion ({
        model:"text-davinci-003",
        max_tokens:512,
        temperature:0,
        prompt:prompt,
    });

    res.send(completion.data.choice[0].text)
//   const { input } = req.body;
//   const apiUrl = 'https://api.openai.com/v1/chat/completions';
//   const apiKey = process.env.OPENAI_API_KEY;

//   if (!apiKey) {
//     return res.status(500).json({ error: 'API key is missing' });
//   }

//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`,
//   };

//   const requestBody = {
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: input }],
//   };

//   const sendRequest = async (retryCount = 0) => {
//     try {
//       const { data } = await axios.post(apiUrl, requestBody, { headers });
//       return res.json({ response: data.choices[0].message.content });
//     } catch (error) {
//       if (error.response && error.response.status === 429 && retryCount < 3) {
//         const retryAfter = error.response.headers['retry-after'] || 1;
//         console.warn(`Rate limited. Retrying after ${retryAfter} seconds...`);
//         setTimeout(() => sendRequest(retryCount + 1), retryAfter * 1000);
//       } else {
//         console.error('Error sending message:', error);
//         return res.status(500).json({ error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' });
//       }
//     }
//   };

//   sendRequest();
});

module.exports = router;
