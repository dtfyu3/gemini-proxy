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
        const response = JSON.stringify(await axios.post(endpoint, body));
        console.log(response.data);
        res.status(200).json({ status: "OK" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};