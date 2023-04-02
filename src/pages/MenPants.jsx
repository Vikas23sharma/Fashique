import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenPants = () => {
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
        category: "Pants",
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
          heading={"Pants & Chinos"}
          para={
            "We love you denim, but our edit of men's pants has grabbed our FULL attention. Featuring a range of casual pants for men, we’ve packed our fave styles into one place, cuz you know you only deserve the best. Level-up your lower half and filter by ASOS DESIGN for men’s pants in different cuts and colors. Or stop by Topman for cargo and chino pants to nail that casual-cool vibe, not to mention their statement prints and patterns (plaid and stripe, you heard us). And ICYDK, you can never go wrong with a pair of classic men’s chinos – and with Jack & Jones serving sleek slim-fit designs, you'll def find the perfect pair. Keep scrollin’ to see what we mean..."
          }
        />
      </div>
      <div>
        <SortingBar
          brands={["Brand", "New Look", "Jack & Jones", "Bershka Ripstop"]}
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
