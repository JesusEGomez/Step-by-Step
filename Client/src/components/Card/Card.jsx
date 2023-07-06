import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card as MaterialUICard, CardContent, CardMedia, Typography, Button } from '@mui/material';
import 'tailwindcss/tailwind.css';

function Card({ name, price, brand, model, images }) {

  return (
    <div className="w-72 bg-base-100 shadow-xl m-5">
      <MaterialUICard>
        <CardMedia component="img" height="140" image={images} alt={name} />
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

export default Card;
