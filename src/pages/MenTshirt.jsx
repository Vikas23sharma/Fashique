import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Productcard from '../components/Productcard';
import ProductHeading from '../components/ProductHeading';
import SortingBar from '../components/sortingBar';
import { getMenProduct } from '../Redux/MenCloths/action';
import { Footer } from './Footer';
import LoadingWithLetter from './LoadingWithLetter';
import { Navbar } from './Navbar';

export const MenTshirt = () => {
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
        category: "T-shirt",
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
          heading={"T-Shirts & Tank Tops"}
          para={
            "Want wardrobe essentials that work harder for your style? Stock up with our T-shirts sale and sale tanks. Whether you're looking to expand your wardrobe with a few new unique designs, or just need to replace your normal rotation, our men's sale tees have a great range of options that will carry you through to next season and beyond. With the likes of French Connection and Brave Soul featuring in our T-shirts sale, as well as ASOS DESIGN, you'll find plenty of looks to play around with. Team a cool T-shirt with jeans or chinos and you've got a classic, standout look. Throw on a blazer and add a pair of chelsea boots to the mix and you've got a winning combination. However you choose to wear your T-shirt or tank, let ASOS be your go-to for the wardrobe essentials."
          }
        />
      </div>
      <div>
        <SortingBar
          brands={["Brand", "ASOS DESIGN", "New Look", "SSVSV DESIGN"]}
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
