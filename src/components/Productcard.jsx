import { Button } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import "../Style/Productcard.css";



const Productcard = ({id,title,image,brand,price,style,category,gender,size,discount}) => {

  const wishlistAdd = ()=>{
    let obj = {
      id,title,image,brand,price,style,category,gender,size,discount
    }
    axios.post(`https://fashique-api.onrender.com/wishlist`,obj)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
  }
  return (
    <Link to={`/${id}`}>
      <div className="card">
        <img src={image} alt={title} />
        <div>-{discount}%</div>
        <button onClick={wishlistAdd}>
          <IoIosHeartEmpty />
        </button>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
}

export default Productcard;