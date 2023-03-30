import { Button } from '@chakra-ui/react'
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import "../Style/Productcard.css";



const Productcard = ({id,title,image,brand,price,style,category,gender,size,discount}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div>-{discount}%</div>
      <button>
        <IoIosHeartEmpty />
      </button>
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}

export default Productcard;