import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenJacket } from '../Redux/MenCloths/action';
import { Footer } from './Footer';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenJacket = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");
  const [size, setSize] = useState("");
  const [searchParams, setSearchParam] = useSearchParams();
  const { isLoading } = useSelector((store) => store.MenCloths);
  // console.log(isLoading);
  useEffect(() => {
    let obj = {
      params: {
        category: "jacket",
        gender: "men",
      },
    };
    order && (obj.params._sort = "price");
    order && (obj.params._order = order);
    brand && (obj.params.brand = brand);
    discount && (obj.params.discount = discount);
    size && (obj.params.size = size);
    dispatch(getMenJacket(obj));
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
          heading={"Men's Jackets & Coats"}
          para={
            "Finding fresh layers to match your 'fit isn't always easy. Enter: our edit of men's coats and jackets – your go-to for scoring maximum points in the outerwear game. Filter by ASOS DESIGN for a men’s lightweight jackets – think vests and bomber jackets serving minimalist utility vibes, or for a men’s summer jacket that can slot right into your everyday rotation, go for a low-key denim jacket from New Look. Looking for somethin' practical that never goes out of style? Hit up The North Face for raincoats, puffer and men’s jackets that combine technical features with a streetwear flex. TBQH, these men’s coats can do it all (and then some)."
          }
        />
      </div>
      <div>
        <SortingBar
          brands={["Brand", "Levi's", "Allen Solly", "Roadster", "Spyker"]}
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
