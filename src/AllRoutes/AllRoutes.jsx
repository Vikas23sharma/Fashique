import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import MenCloths from "../pages/MenCloths";
import { Women } from "../pages/Women";
import { Men } from "../pages/Men";
import Adminorders from "../pages/Adminorders";
import Admincustomers from "../pages/Admincustomers";
import Adminproductsmen from "../pages/Adminproductsmen";
import AdminAddProductMen from "../pages/AdminAddProductMen";
import AdminLogin from "../pages/AdminLogin";
import CheckOut from "../pages/CheckOut";
// import AdminEditProduct from "../pages/AdminEditProduct";
import Admin from "../pages/Admins";
import { SingleProductPage } from "../pages/SingleProductPage";
import { MenTshirt } from "../pages/MenTshirt";
import { MenPants } from "../pages/MenPants";
import { MenShoes } from "../pages/MenShoes";
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
// import { AdminEditProduct } from "../pages/AdminEditProduct";
import { AdminProductsJackets } from "../pages/AdminProductsJackets";
import { AdminProductWomen } from "../pages/AdminProductWomen";
import { AdminProductShoe } from "../pages/AdminProductShoe";
import { MenJacket } from "../pages/MenJacket";
import Error404 from "../pages/Error404";
import Cart from "../pages/Cart";
import PrivateRoutes from "./PrivateRoutes";
import { WishList } from "../pages/WishList";
import AdminEditProduct from "../pages/AdminEditProduct";
//import { AdminSingleCustomer } from "../pages/AdminSingleCustomer";


export default function AllRoutes() {
    return (

        <Routes>
            <Route path="/" element={<Women></Women>}></Route>

            <Route path="/adminlogin" element={<AdminLogin />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/adminorders" element={<Adminorders />}></Route>
            <Route path="/admincustomers" element={<Admincustomers />}></Route>
            <Route path="/account" element={<PrivateRoutes><Account></Account></PrivateRoutes>}></Route>
            <Route path="/adminproductmen" element={<Adminproductsmen />}></Route>
            <Route path="/admin-product-jacket" element={<AdminProductsJackets />}></Route>
            <Route path="/admin-product-women" element={<AdminProductWomen />}></Route>
            <Route path="/admin-product-shoes" element={<AdminProductShoe />}></Route>
            <Route path="adminaddproductmen" element={<AdminAddProductMen />}></Route>
            <Route path="/admin-edit/:id" element={<AdminEditProduct />}></Route>
            <Route path="/checkout" element={<PrivateRoutes><CheckOut /> </PrivateRoutes>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/mencloth" element={<MenCloths />} />
            <Route path="/mentshirt" element={<MenTshirt />} />
            <Route path="/menpants" element={<MenPants />} />
            <Route path="/menshoes" element={<MenShoes />} />
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/menjacket" element={<MenJacket />} />
            <Route path="/mentee" element={<MenTee />} />
            <Route path="/mensuit" element={<MenSuit />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/:product_id" element={<SingleProductPage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/womenshorts" element={<WomenShorts />} />
            <Route path="/womendress" element={<WomenDress />} />
            <Route path="/womenpants" element={<WomenPants />} />
            <Route path="/womentop" element={<WomenTop />} />
            <Route path="/womenshoes" element={<WomenShoes />} />
             <Route path="/wishlist" element={<WishList></WishList>}></Route>
            <Route path="/womenjacket" element={<WomenJacket />} />
             {/* <Route path="/admin-edit/:id" element={<AdminEditProduct />}></Route> */}
            <Route element={<Error404 />}></Route> {/* all team member keep this line at last */}
            {/* <Route path="/adminSingleUser/:id" element={<AdminSingleCustomer/>}></Route> */}
        </Routes>
    )
}