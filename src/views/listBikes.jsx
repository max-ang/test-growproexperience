import React, { useEffect, useState } from 'react';
import BikeCard from '../components/bikes/bikeCard';
import { Link } from 'react-router-dom';

// Vista del Listado de bicicletas

function ListBikes() {
  const [bikes, setBikes] = useState([]);
  
  // se hace la API Call desde el cliente aunque lo ideal en este caso sería hacerlo desde el Server para mejorar la performance
  useEffect(() => {
    fetch('http://localhost:3001/bikes') // seria conveniente tener en un .env el host y el puerto configurable por entorno
      .then((res) => res.json())
      .then((result) => {
        setBikes(result);
      });
  }, []);

  return (
    <div className="container">
      <h1>Lista de Bicicletas para alquilar</h1>
      <div className='card-container'>
        {bikes.map((bike) => (<Link to={`/bike/${bike.id}`} key={bike.id}><BikeCard info={bike}/></Link>))}
      </div>
    </div>
  );
}

export default ListBikes;
