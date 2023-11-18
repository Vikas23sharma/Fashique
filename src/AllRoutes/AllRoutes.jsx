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
import { Womenproduct } from "../pages/Womenproduct";
import AdminPrivateRoutes from "./AdminPrivateRoutes";
import { Menproduct } from "../pages/Menproduct";


export default function AllRoutes() {
    return (

        <Routes>
            <Route path="/" element={<Women></Women>}></Route>
            <Route path="/adminlogin" element={<AdminLogin />}></Route>
            <Route path="/admin" element={<AdminPrivateRoutes><Admin /></AdminPrivateRoutes>}></Route>
            <Route path="/adminorders" element={<AdminPrivateRoutes><Adminorders /></AdminPrivateRoutes>}></Route>
            <Route path="/admincustomers" element={<AdminPrivateRoutes><Admincustomers /></AdminPrivateRoutes>}></Route>
            <Route path="/account" element={<PrivateRoutes><Account></Account></PrivateRoutes>}></Route>
            <Route path="/adminproductmen" element={<AdminPrivateRoutes><Adminproductsmen /></AdminPrivateRoutes>}></Route>
            <Route path="/admin-product-jacket" element={<AdminPrivateRoutes><AdminProductsJackets /></AdminPrivateRoutes>}></Route>
            <Route path="/admin-product-women" element={<AdminPrivateRoutes><AdminProductWomen /></AdminPrivateRoutes>}></Route>
            <Route path="/admin-product-shoes" element={<AdminPrivateRoutes><AdminProductShoe /></AdminPrivateRoutes>}></Route>
            <Route path="adminaddproductmen" element={<AdminPrivateRoutes><AdminAddProductMen /></AdminPrivateRoutes>}></Route>
            <Route path="/admin-edit/:id" element={<AdminPrivateRoutes><AdminEditProduct /></AdminPrivateRoutes>}></Route>
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
            <Route path="/wishlist" element={<WishList></WishList>}></Route>
            {/* <Route path="/admin-edit/:id" element={<AdminEditProduct />}></Route> */}
            <Route element={<Error404 />}></Route> {/* all team member keep this line at last */}
            {/* <Route path="/adminSingleUser/:id" element={<AdminSingleCustomer/>}></Route> */}
            <Route path="/women-product/:ctg" element={<Womenproduct/>}></Route>
            <Route path="/men-product/:ctg" element={<Menproduct/>}></Route>

        </Routes>
    )
}