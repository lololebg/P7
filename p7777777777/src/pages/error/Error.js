import React from 'react';
import {data } from '../../data/data';


function Property(props) {
  const { id } = props.match.params;
  const property = getPropertyById(id);

  if (!property) {
    // Rediriger vers la page d'erreur si la propriété n'existe pas
    return null;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <p>{property.price} €</p>
      <img src={property.imageUrl} alt={property.name} />
    </div>
  );
}

export default Property;
