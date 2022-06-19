import React from 'react';
import starimage from '../../../json-data/home/star-img.png';
import './styles.css';

export const StarImage = () => {
  return (
    <div className='star-image'>
        <img src={starimage} alt="star"/>
    </div>
  )
}
