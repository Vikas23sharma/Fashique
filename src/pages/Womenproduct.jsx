import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Box } from '@chakra-ui/react';

export const Womenproduct = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");
  const [size, setSize] = useState("");
  const [searchParams, setSearchParam] = useSearchParams();
  const {ctg} = useParams()

  // console.log(ctg)

  useEffect(() => {
    let obj = {
      params: {
        category: ctg,
        gender: "women",
      },
    };
    order && (obj.params._sort = "price");
    order && (obj.params._order = order);
    brand && (obj.params.brand = brand);
    discount && (obj.params.discount = discount);
    size && (obj.params.size = size);
    dispatch(getWomenProduct(obj));
    let param = {
      // sort: "price",
    };
    order && (param.order = order);
    brand && (param.brand = brand);
    discount && (param.discount = discount);
    size && (param.size = size);
    setSearchParam(param);
  }, [order, brand, discount, size]);
  const { products, isLoading } = useSelector((store) => store.MenCloths);
  // console.log(products);
  return(
    <div>
      <Navbar />
      {isLoading?
      <h1 style={{margin:'6cm 0 0 0',textAlign:'center',fontSize:'25px',fontWeight:'bolder'}}>Loding...</h1>
      :
      <div>
            <Box mt={['70px','90px','80px','130px']}>
            <center style={{fontSize:'20px',margin:'40px 0 20px 0',padding:'15px 0',fontWeight:'bolder'}}>Women {ctg}</center>
              <SortingBar
                brands={[
                  "Brand",
                  "Miss Selfridge ",
                  "Reclaimed Vintage",
                  "Miss Selfridge Petite",
                ]}
                size={["Size", "S", "M", "L", "XL", "XXL"]}
                order={setOrder}
                brand={setBrand}
                discount={setDiscount}
                sizes={setSize}
              />
            </Box>
            <div className="container">
              {products.map((el) => (
                <Productcard key={el.id} {...el} />
              ))}
            </div>
            <Footer/>
            </div>
}
    </div>
  );
}
