import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenTshirt = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "T-shirt",
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
      <div style={{ marginTop: "150px" }}>
        <ProductHeading
          heading={"T-Shirts & Tank Tops"}
          para={
            "Want wardrobe essentials that work harder for your style? Stock up with our T-shirts sale and sale tanks. Whether you're looking to expand your wardrobe with a few new unique designs, or just need to replace your normal rotation, our men's sale tees have a great range of options that will carry you through to next season and beyond. With the likes of French Connection and Brave Soul featuring in our T-shirts sale, as well as ASOS DESIGN, you'll find plenty of looks to play around with. Team a cool T-shirt with jeans or chinos and you've got a classic, standout look. Throw on a blazer and add a pair of chelsea boots to the mix and you've got a winning combination. However you choose to wear your T-shirt or tank, let ASOS be your go-to for the wardrobe essentials."
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
