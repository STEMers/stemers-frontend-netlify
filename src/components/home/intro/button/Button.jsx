import React from 'react';
import './styles.css'

export const Button = ({cls,name}) => {
  return (
    <button className={cls}>{name}</button>
  )
}
