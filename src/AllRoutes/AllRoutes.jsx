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
import { Search } from "../pages/Search";
import { Account } from "../pages/Account";
import { AdminEditProduct } from "../pages/AdminEditProduct";
import { AdminProductsJackets } from "../pages/AdminProductsJackets";
import { AdminProductWomen } from "../pages/AdminProductWomen";
import { AdminProductShoe } from "../pages/AdminProductShoe";


export default function AllRoutes() {
    return (
        <Routes>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Women></Women>}></Route>
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/adminlogin" element={<AdminLogin />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
            <Route path="/admin" element={<Admins />}></Route>
            <Route path="/adminorders" element={<Adminorders />}></Route>
            <Route path="/admincustomers" element={<Admincustomers />}></Route>
            <Route path="/adminproductmen" element={<Adminproductsmen />}></Route>
            <Route path="/mencloth" element={<MenCloths/>} />
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/admin-product-jacket" element={<AdminProductsJackets/>}></Route>
            <Route path="/admin-product-women"  element={<AdminProductWomen/>}></Route>
            <Route path="/admin-product-shoes" element={<AdminProductShoe/>}></Route>
            <Route path="adminaddproductmen" element={<AdminAddProductMen />}></Route>
            <Route path="/account" element={<Account></Account>}></Route>
            <Route path="/admin-edit/:id" element={<AdminEditProduct/>}></Route>

        </Routes>
    )
}