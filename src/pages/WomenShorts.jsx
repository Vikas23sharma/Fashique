import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import { Footer } from './Footer';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenShorts = () => {
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
        category: "shorts",
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
          heading={"Shorts"}
          para={
            "The sun called, it’s time for a new wardrobe. Lucky for you, you’ll find your summer styles in our women’s shorts edit, because sweatpants = *so* last season. Vaycay in the cal? Think ASOS DESIGN’s floaty beach shorts in gingham and floral prints, or for that training sesh, find women’s gym shorts in comfy body-conscious fits. If it’s denim you’re after, Topshop is where it’s at for long shorts for women. Browse the brand’s i-c-o-n-i-c longline and mom-fit shorts in washed denim, or channel that edgy vibe with distressed finishes – perfect for pairing with a graphic tee. Over at Stradivarius, scroll ladies’ shorts in tailored cuts for those desk-to-date plans. In the mood for more? This way please..."
          }
        />
      </div>
      <div>
        <SortingBar
          brands={["Brand", "ASOS DESIGN", "Nike"]}
          size={["Size", "S", "M", "L", "XL", "XXL"]}
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
      <Footer/>
    </div>
  );
}
