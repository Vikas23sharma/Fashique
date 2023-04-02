import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getShoes } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenShoes = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");
  const [size, setSize] = useState("");
  const [searchParams, setSearchParam] = useSearchParams();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "shoes",
        gender: "men",
      },
    };
    order && (obj.params._sort = "price");
    order && (obj.params._order = order);
    brand && (obj.params.brand = brand);
    discount && (obj.params.discount = discount);
    size && (obj.params.size = size);
    dispatch(getShoes(obj));
    let param = {
      sort: "price",
    };
    order && (param.order = order);
    brand && (param.brand = brand);
    discount && (param.discount = discount);
    size && (param.size = size);
    setSearchParam(param);
  }, [order, brand, discount, size]);
  const { products } = useSelector((store) => store.MenCloths);
  console.log(products);
  return isLoading ? (
    <LoadingWithLetter />
  ) : (
    <div>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <ProductHeading
          heading={"Shoes, Boots & Sneakers"}
          para={
            "Level-up your unboxing game with new kicks from our edit of men's footwear. Let's face it, choosing the right pair for those cal’ invites can be tricky – whether you wanna go smart in loafers or finish your 'fit with fresh sneaks, our edit of men’s shoes is here to help. Scroll and find the slickest selection of Chelsea boots from ASOS DESIGN or get vacay-ready with a pair of men’s summer shoes – think sandals, slides and flip-flops. For your new faves, filter by Nike and adidas Originals where you'll find everything from running sneakers to 90s-inspired everyday styles. And browse our formal shoes for men to round off your best looks for wedding szn – happy shopping."
          }
        />
      </div>
      <div>
        <SortingBar
          brands={["Brand", "adidas", "nike", "puma", "vans"]}
          size={["Size", 6, 7, 8, 9]}
          order={setOrder}
          brand={setBrand}
          discount={setDiscount}
          sizes={setSize}
        />
      </div>
      <div className="container">
        {products.map((el) => (
          <Productcard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
