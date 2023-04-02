import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenDress = () => {
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
        category: "dress",
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
          heading={"Women's Dresses"}
          para={
            "It's official, you've got a busy social calendar and we've got the women's dresses edit to complement it. Weekend plans calling for a LBD? Don’t worry, ASOS DESIGN is answering *big time* with its collection of mini and midi dresses for women ft. velvet and satin-feel fabrics. If you’ve had your eye on an ASOS EDITION dress forever (us too), add it to cart and figure out the plans later – bc the owner of a faux-feather and fully embellished ladies dress is definitely getting invited to all the parties. For casj-cool commitments, scroll Topshop and complete your line-up with sweater, smock and shirt dresses. We hope you’ve been taking notes…"
          }
        />
      </div>
      <div>
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
      </div>
      <div className="container">
        {products.map((el) => (
          <Productcard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
