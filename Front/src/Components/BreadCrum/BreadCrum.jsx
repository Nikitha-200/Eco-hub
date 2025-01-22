import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';
const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
    <Link to='/'>Home</Link><img src={arrow_icon} alt="" /><Link to={`/${product.category}`}>{product.category}</Link> <img src={arrow_icon} alt="" /> {product.name}
  </div>
  )
}

export default BreadCrum
