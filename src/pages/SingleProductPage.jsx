import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from './Navbar'
import "../Style/singleProduct.css";
import { IoIosHeartEmpty} from "react-icons/io";
import {BsTruck} from "react-icons/bs"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  
  Box,
  
} from "@chakra-ui/react";
import {MinusIcon,
  AddIcon,} from "@chakra-ui/icons"
import { Slider } from '../components/Slider';
import { Footer } from './Footer';
import { useToast } from "@chakra-ui/react";




export const SingleProductPage = () => {
 const [data,setData] = useState({});
//  const [cart_item, setcart_item] = useState([]);
// let cartData = JSON.parse(localStorage.getItem("cart_item")) || [];
//  let token = JSON.parse(localStorage.getItem("token"));
//  console.log(token)
//  console.log(cart_item)
 console.log("data",data)
   const toast = useToast();
  let param = useParams();
  const id = param.product_id;
  
  useEffect(()=>{
    axios
      .get(`https://asos-of6d.onrender.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  const addToCart =()=>{
    // cartData.push(data);
    // localStorage.setItem("cart_item",JSON.stringify(cartData));
    // console.log(cartData)
   axios
     .post(`https://asos-of6d.onrender.com/cart`, data)
     .then((res) => {
      toast({
        title: "Product Added Successfully",
        description: "Enjoy Shopping With Us",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
       console.log(res);
     })
     .catch((err) => {
       toast({
         title: " Already in Cart",
        //  description: "Enjoy Shopping With Us",
         status: "success",
         duration: 1000,
         isClosable: true,
       });
       console.log(err);
     });
    
  }
  
  const addToWishlist=()=>{
     
     axios
       .post(`https://asos-of6d.onrender.com/wishlist`,data)
       .then((res) => {
         toast({
           title: "Product Added Successfully",
           description: "Enjoy Shopping With Us",
           status: "success",
           duration: 1000,
           isClosable: true,
         });
         console.log(res);
       })
       .catch((err) => {
         toast({
           title: "Already in Wishlist",
          //  description: "Enjoy Shopping With Us",
           status: "success",
           duration: 1000,
           isClosable: true,
         });
         console.log(err);
       });
  }

  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <div className="singleImage">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="singleDetails">
          <h2>{data.title}</h2>
          <h1>Now ${data.price}</h1>
          <p>discount {data.discount}%</p>
          <p>
            <b>SIZE : </b>
            {data.size}
          </p>
          <div style={{display:"flex"}}>
            <button className="addToCart" onClick={addToCart}>ADD TO CART</button>
            <button className="Wishlist" onClick={addToWishlist}>
              <IoIosHeartEmpty />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              border: "1px solid #B0BEC5",
              padding: "20px",
              gap: "10px",
              marginButtom: "20px",
            }}
          >
            <BsTruck fontSize="30px" />
            <p>Free Delivery</p>
          </div>
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bolder"}
                      >
                        Product Details
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"15px"} w={"300px"}>
                    <b>{data.category}</b>.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bolder"}
                      >
                        Brand
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"15px"} w={"300px"}>
                    <b>{data.brand}</b>.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bolder"}
                      >
                        Size & Fit
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"15px"} w={"300px"}>
                    Size : <b>{data.size}</b>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bolder"}
                      >
                        Look After Me
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"15px"} w={"300px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bolder"}
                      >
                        About Me
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"15px"} w={"300px"}>
                    Style : <b>{data.style}</b>
                    <br></br>
                    Product Id :<b>{data.id}</b>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Slider/>
      <Footer/>
    </div>
  );
}
