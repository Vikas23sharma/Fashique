import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getShoes } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenShoes = () => {
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
          gender: "women",
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
            heading={"Women's Shoes"}
            para={
              "Look to our edit of shoes for women to get your 'fit sorted from the ground up. Carry your work look into a BNO with pump, stiletto and platform heels by ASOS DESIGN, or scroll our selection of wedding shoes for women that are aisle approved. On the hunt for your new go-to? Browse Converse for ladies’ shoes in low-profile and high-top designs (not to mention the huge range of colors and prints, ofc). If your athleisure aesthetic is making an appearance, Nike is hard to beat, serving up casual women’s shoes and sporty sneakers that you can hit the ground running in. Or, filter slides that you can slip on for those off-duty days – we give them 10/10 in the comfort stakes."
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
