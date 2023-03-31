import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenSuit = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.MenCloths);
  console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "Tracksuits",
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
          heading={"Men's Tracksuits & Sweatsuits"}
          para={
            "Not just for chillin’, our edit of men’s tracksuits features everything from simple streetwear styles to designer sets that are just as cool as they are comfy. For a head-to-toe look, filter your search by ASOS DESIGN for smart-casj tracksuits and sweatpants in oversized fits. For tie-dye prints, statement designs and bold colorways in cozy borg fabrics, trust the fashion OG’s at Topman. And if it’s a subtle Swoosh logo or an all-over branded print you’re after, it doesn’t get better than the iconic tracksuits at Nike and adidas Originals – think classic black sets and men’s sweatpants in versatile neutral tones. Effortlessly laidback looks, incoming."
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
