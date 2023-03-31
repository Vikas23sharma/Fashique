import { Button } from '@chakra-ui/react'
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import "../Style/Productcard.css";



const Productcard = ({id,title,image,brand,price,style,category,gender,size,discount}) => {
  return (
    <Link to={`/${id}`}>
      <div className="card">
        <img src={image} alt={title} />
        <div>-{discount}%</div>
        <button>
          <IoIosHeartEmpty />
        </button>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
}

export default Productcard;