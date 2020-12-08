const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

app.get('/api/menu', async (req, res) => {
  try {
    await axios
      .get('https://api.spoonacular.com/food/menuItems')
      .then(response => {
        res.send(response.data);
      })
  } catch(err) {
    console.log('ERR inside server GET to spoonacular', err.message)
  }
});

app.listen(PORT, () => {
  console.log('server running.... 5000');
})