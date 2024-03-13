import React from 'react';
import Image from 'next/image';
const Card = ({ image, heading,date, content, buttonText,backgroundColor }) => {
  return (
    <div className="card" style={{backgroundColor}}>
      <Image src={image} alt="Card" />
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