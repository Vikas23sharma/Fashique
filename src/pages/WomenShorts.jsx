import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenShorts = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "shorts",
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
          heading={"Shorts"}
          para={
            "The sun called, it’s time for a new wardrobe. Lucky for you, you’ll find your summer styles in our women’s shorts edit, because sweatpants = *so* last season. Vaycay in the cal? Think ASOS DESIGN’s floaty beach shorts in gingham and floral prints, or for that training sesh, find women’s gym shorts in comfy body-conscious fits. If it’s denim you’re after, Topshop is where it’s at for long shorts for women. Browse the brand’s i-c-o-n-i-c longline and mom-fit shorts in washed denim, or channel that edgy vibe with distressed finishes – perfect for pairing with a graphic tee. Over at Stradivarius, scroll ladies’ shorts in tailored cuts for those desk-to-date plans. In the mood for more? This way please..."
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
