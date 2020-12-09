const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const products = require('./data/data.js')

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/images', express.static('/public/images'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

app.get('/api/menu', (req, res) => {
  res.send(products);
  // try {
  //   await axios
  //     .get('https://api.spoonacular.com/food/menuItems')
  //     .then(response => {
  //       res.send(response.data);
  //     })
  // } catch(err) {
  //   console.log('ERR inside server GET to spoonacular', err.message)
  // }
});

app.get('/api/newItem', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log('server running.... 5000');
})