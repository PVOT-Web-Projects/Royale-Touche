import React from 'react';
const Card = ({ image, heading,date, content, buttonText,backgroundColor }) => {
  return (
    <div className="card" style={{backgroundColor}}>
      <img src={image} alt="Card" />
      <div className="cardcolor" >
      <p className='heading'>{heading}</p>
      <p className='date'>{date}</p>
      <p className='content'>{content}</p>
      
      <button>{buttonText}</button>
      </div>
    </div>
  );
};
export default Card;