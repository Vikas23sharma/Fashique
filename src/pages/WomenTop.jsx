import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import {  getWomenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const WomenTop = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "top",
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
          heading={"Tops"}
          para={
            "Jeans – check. ‘Nice top’? Let our edit of women’s tops complete your look. Filter by Topshop for everyday T-shirts, tank tops and cami tops that are sure to check your casj daytime boxes. Or shop Stradivarius to find bold printed shirts and satin blouses that take you from office to night out – win-win. If you’re needing a perf partner to pair with your low-rise pants, check out ASOS DESIGN for ladies' tops you can dress up or down – we’re talking crop tops, ribbed bodysuits and corset-style tops that set your upper half up for success (velvet and faux-leather, incoming). Note to self: our edit of tops for women is not to be missed."
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
