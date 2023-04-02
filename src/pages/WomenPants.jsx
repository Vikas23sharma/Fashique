import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import { Footer } from './Footer';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenPants = () => {
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
        category: "pants",
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
          heading={"Pants & Leggings"}
          para={
            "Give top-half 'fits a run for their money with our edit of women’s pants. Experimenting with day-to-day style is the vibe with Bershka – get ready for cargo pants in bright hues, casj-cool jersey flares and dad pants galore. Filed under casualwear hero, you’ll find leggings and all eyes are on Stradivarius with faux leather and seamless styles that’ll have you feeling cozy – grocery shopping and weekend lounging, we’re looking at you. After ladies pants to *srsly* amp up looks? Consider ASOS DESIGN your new bestie. Its tailored cuts in high-vis shades, wide-leg satin styles and flares with party-esque sequins are calling for your wish list. Serving bottom-half l-e-w-k-s in 3, 2, 1…"
          }
        />
      </div>
      <div>
        <SortingBar
          brands={[
            "Brand",
            "Miss Selfridge",
            "Reclaimed Vintage",
            "Miss Selfridge petite",
          ]}
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
