import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
const regeneratorRuntime = require('regenerator-runtime');
import Product from '../components/Product.js';
import NewItem from './NewItem.js';

let products;

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  
  // useEffect(() => {
  //   axios
  //     .get('/api/menu')
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(err => console.log(err.message))
  // }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/menu');
  
      setProducts(data);
    }
    fetchProducts();
  }, [])
  
  return (
    <div>
      <h1>Current Offerings</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Row>
        <NewItem />
      </Row>
    </div>
  )
}

export default HomeScreen;

