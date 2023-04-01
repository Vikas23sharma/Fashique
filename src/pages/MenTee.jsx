import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenTee = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "Shirt",
      },
    };
    dispatch(getMenProduct(obj));
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
          heading={"Shirts"}
          para={
            "We’re gonna say it, shirts are probs one of the most versatile pieces in your 'drobe. Ready to dress up or down for everything from dinner dates to vacay plans, the possibilities are E-N-D-L-E-S-S. That’s why we’ve packed a loada styles into our men’s shirts edit to help with your scrollin’. Browse ASOS DESIGN to find summer shirts for men ft. a range of funky prints – think geometric, floral and striped. Or team your shorts with a linen shirt for men from Topman to max out those casj-cool vibes. And if you need to smarten up your 'fit, filter by New Look to scroll dress shirts in plain and classic black designs. The only question is, how will you style yours?"
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

