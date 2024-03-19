import React from 'react';
import Card from './Blogscard';
const CardGrid = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          heading={card.heading}
          date={card.date}
          content={card.content}
          buttonText={card.buttonText}
          backgroundColor={index % 2 === 0 ? '#002D70' : '#007DC5'}
        />
      ))}
    </div>
  );
};
export default CardGrid;