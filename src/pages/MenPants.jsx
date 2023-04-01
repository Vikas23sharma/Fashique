import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenPants = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "Pants",
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
        <Navbar/>
      <div style={{marginTop:"150px"}}>
        <ProductHeading
          heading={"Pants & Chinos"}
          para={
            "We love you denim, but our edit of men's pants has grabbed our FULL attention. Featuring a range of casual pants for men, we’ve packed our fave styles into one place, cuz you know you only deserve the best. Level-up your lower half and filter by ASOS DESIGN for men’s pants in different cuts and colors. Or stop by Topman for cargo and chino pants to nail that casual-cool vibe, not to mention their statement prints and patterns (plaid and stripe, you heard us). And ICYDK, you can never go wrong with a pair of classic men’s chinos – and with Jack & Jones serving sleek slim-fit designs, you'll def find the perfect pair. Keep scrollin’ to see what we mean..."
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
