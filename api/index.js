const axios = require('axios');

const config = {
    url: process.env.GOOGLE_URL,
    key: process.env.API_KEY,
};



// Обработчик вебхука
module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end();

    try {
        const body = req.body;
        const endpoint = `${config.url}?key=${config.key}`;
        const response = await axios.post(endpoint, body, { headers: { 'Content-Type': 'application/json' } });
        const data = response.data;
        const content = data.candidates[0]?.content;
        console.log(response.content);
        res.status(200).json({ status: "OK" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};