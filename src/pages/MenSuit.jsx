import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import { Footer } from './Footer';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenSuit = () => {
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
        category: "Tracksuits",
      },
    };
    order && (obj.params._sort = "price");
    order && (obj.params._order = order);
    brand && (obj.params.brand = brand);
    discount && (obj.params.discount = discount);
    size && (obj.params.size = size);
    dispatch(getMenProduct(obj));
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
          heading={"Men's Tracksuits & Sweatsuits"}
          para={
            "Not just for chillin’, our edit of men’s tracksuits features everything from simple streetwear styles to designer sets that are just as cool as they are comfy. For a head-to-toe look, filter your search by ASOS DESIGN for smart-casj tracksuits and sweatpants in oversized fits. For tie-dye prints, statement designs and bold colorways in cozy borg fabrics, trust the fashion OG’s at Topman. And if it’s a subtle Swoosh logo or an all-over branded print you’re after, it doesn’t get better than the iconic tracksuits at Nike and adidas Originals – think classic black sets and men’s sweatpants in versatile neutral tones. Effortlessly laidback looks, incoming."
          }
        />
      </div>
      <div>
        <SortingBar
          brands={[
            "Brand",
            "Crooked Tongues",
            "Topman",
            "Nike",
            "Adidas",
            "Puma",
            "Reebok",
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
