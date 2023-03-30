import axios from 'axios'
import React, {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar'
import { getMenProduct } from '../Redux/MenCloths/action';
import "../Style/ProductList.css";


const MenCloths = () => {
const dispatch = useDispatch();



useEffect(()=>{
    let obj = {
        params:{
           category:"Shorts"
        }
    }
   dispatch(getMenProduct(obj))
},[])
const {products}= useSelector((store) => store.MenCloths);
console.log(products)
  return (
    <div>
      <div>
        <ProductHeading heading={"Shorts"} para={"Clear out your winter wardrobe and make some space, because our men's shorts sale is here. Familiarise yourself with our edit of shorts and keep your summer look in check when the temperatures start to soar.Looking for a refined yet casual look? Shop our sale chino short collection for an effortless look that's easy to maintain, whether you're at the office or holidaying it up by the beach. Filter by Brave Soul and grab a pair of easy jersey shorts for that ultimate throw-on-and-go vibe, perfect for those laidback occasions. Keep those relaxed vibes coming with the cargo shorts sale and find yourself a pair that can answer the call, no matter what your schedule has planned. Our very own ASOS DESIGN collection includes festival-prepped prints, vacay-ready swim shorts, and classic denim that has your weekends sorted. For the style-conscious man, browse through the D-Struct edit for all your go-to occasionwear. Want to beat the heat? Scroll down for our collection of men's sale shorts."}/>
        
      </div>
      <div><SortingBar/></div>
      <div className='container'>
       {products.map((el)=>(
        <Productcard key={el.id} {...el}/>
       ))}
      </div>
    </div>
  );
}

export default MenCloths
