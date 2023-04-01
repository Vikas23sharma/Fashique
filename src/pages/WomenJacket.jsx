import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenJacket = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "jacket",
        gender: "women",
      },
    };
    dispatch(getWomenProduct(obj));
  }, []);
  const { products } = useSelector((store) => store.MenCloths);
  console.log(products);
  return isLoading ? (
    <LoadingWithLetter />
  ) : (
    <div>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <ProductHeading
          heading={"Coats & Jackets"}
          para={
            "Need an outerwear refresh ASAP? You've scrolled to the right place… shop our edit of just-dropped women’s coats and jackets. Whether you want a women’s jacket to throw on over your gorge look, or you want the *jacket* to be the main act – browse ASOS DESIGN for statement pieces that your ‘fit deserves. Look to Topshop for lightweight women’s summer jackets – we’re talking longline trench coats and biker jackets, or hit up its selection of denim jackets for women offering classic staples. If you're after something durable and waterproof, then set your filter to The North Face for woman’s coats that'll see you through the festi’ season and beyond. Consider your outerwear ELEVATED."
          }
        />
      </div>
      <div>
        <SortingBar />
      </div>
      <div className="container">
        {products.map((el) => (
          <Productcard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
