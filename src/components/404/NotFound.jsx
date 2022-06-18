import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/404_2.webp';
import "./styles.css";

export const NotFound = () => {
  return (
    <div className='not-found'>
        <img src={NotFoundImage} alt='404 not found'/>
        <h3>The resources that you are looking for are not found !</h3>
        <h3> check if you are visiting the correct URL</h3>
        <h2>Return to <Link to="/">Home</Link> </h2>
    </div>
  )
}
