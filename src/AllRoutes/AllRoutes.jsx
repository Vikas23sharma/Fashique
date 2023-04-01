import { Routes, Route } from "react-router-dom";
import Join from "../pages/Join";
import { Login } from "../pages/Login";
import SignIn from "../pages/SignIn";
import MenCloths from "../pages/MenCloths";
import { Women } from "../pages/Women";
import { Men } from "../pages/Men";
import Admins from "../pages/Admins";
import Adminorders from "../pages/Adminorders";
import Admincustomers from "../pages/Admincustomers";
import Adminproductsmen from "../pages/Adminproductsmen";
import AdminAddProductMen from "../pages/AdminAddProductMen";
import AdminLogin from "../pages/AdminLogin";
import CheckOut from "../pages/CheckOut";


import  AdminEditProduct from "../pages/AdminEditProduct";

import Admin from "../pages/Admins";
import { SingleProductPage } from "../pages/SingleProductPage";
import { MenTshirt } from "../pages/MenTshirt";
import { MenPants } from "../pages/MenPants";
import { MenShoes } from "../pages/MenShoes";
import { MenJacket } from "../pages/MenJacket";
import { WomenShorts } from "../pages/WomenShorts";
import { WomenDress } from "../pages/WomenDress";
import { WomenPants } from "../pages/WomenPants";
import { WomenTop } from "../pages/WomenTop";
import { WomenShoes } from "../pages/WomenShoes";
import { WomenJacket } from "../pages/WomenJacket";
import { MenTee } from "../pages/MenTee";
import { MenSuit } from "../pages/MenSuit";

import { Search } from "../pages/Search";

import { Account } from "../pages/Account";


import { AdminProductsJackets } from "../pages/AdminProductsJackets";
import { AdminProductWomen } from "../pages/AdminProductWomen";
import { AdminProductShoe } from "../pages/AdminProductShoe";




export default function AllRoutes() {
    return (

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/" element={<Women></Women>}></Route>
        <Route path="/men" element={<Men></Men>}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/adminorders" element={<Adminorders />}></Route>
        <Route path="/admincustomers" element={<Admincustomers />}></Route>
        <Route path="/adminproductmen" element={<Adminproductsmen />}></Route>
        <Route path="/mencloth" element={<MenCloths />} />
        <Route path="/mentshirt" element={<MenTshirt />} />
        <Route path="/menpants" element={<MenPants />} />
        <Route path="/menshoes" element={<MenShoes />} />
        <Route path="/menjacket" element={<MenJacket />} />
        <Route path="/womenshorts" element={<WomenShorts />} />
        <Route path="/womendress" element={<WomenDress />} />
        <Route path="/womenpants" element={<WomenPants />} />
        <Route path="/womentop" element={<WomenTop />} />
        <Route path="/womenshoes" element={<WomenShoes />} />
        <Route path="/womenjacket" element={<WomenJacket />} />
        <Route path="/mentee" element={<MenTee />} />
        <Route path="/mensuit" element={<MenSuit />} />
        <Route path="/:product_id" element={<SingleProductPage />}></Route>
         <Route path="/search" element={<Search/>}></Route>
            <Route path="/admin-product-jacket" element={<AdminProductsJackets/>}></Route>
            <Route path="/admin-product-women"  element={<AdminProductWomen/>}></Route>
            <Route path="/admin-product-shoes" element={<AdminProductShoe/>}></Route>
            <Route path="adminaddproductmen" element={<AdminAddProductMen />}></Route>
            <Route path="/account" element={<Account></Account>}></Route>
             <Route path="/admin-edit/:id" element={<AdminEditProduct/>}></Route>
      </Routes>
    );

       
           
            
           


}