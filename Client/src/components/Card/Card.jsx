import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card as MaterialUICard, CardContent, CardMedia, Typography, Button } from '@mui/material';
import 'tailwindcss/tailwind.css';

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const displayedProducts = products.slice(0, 6); // Mostrar solo los primeros 6 productos

  return (
    <div className="flex flex-wrap h-full w-screen items-center justify-center enlarge">
      {displayedProducts.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          model={product.model}
        />
      ))}
    </div>
  );
}

function Card({ name, price, brand, model }) {
  const imageUrl = 'https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/1.png';

  return (
    <div className="w-72 bg-base-100 shadow-xl m-5">
      <MaterialUICard>
        <CardMedia component="img" height="140" image={imageUrl} alt={name} />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}, {brand}, {model}
          </Typography>
        </CardContent>
        <div className="card-actions justify-end">
          <Button variant="contained" color="primary">
            Añadir al Carrito
          </Button>
        </div>
      </MaterialUICard>
    </div>
  );
}

export default Cards;
