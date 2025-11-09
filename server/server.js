// ✅ server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/suggest', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`
    );
    res.json(response.data); // send YouTube data back to frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
