import { Routes,Route } from "react-router-dom";
import { AdminAddProductPage } from "../pages/AdminAddProductPage";
import { AdminEditProduct } from "../pages/AdminEditProduct";
import { AdminHomePage } from "../pages/AdminHomePage";
import { AdminLoginPage } from "../pages/AdminLoginPage";
import { AdminOrdersPage } from "../pages/AdminOrdersPage";
import { AdminAllProducts } from "../pages/AdminAllProducts";


export default function AllRoutes(){
return (
    <Routes>
       <Route path="/admin" element={<AdminHomePage/>}/>
       <Route path="/admin_login" element={<AdminLoginPage />}/>
       <Route path="/admin_orders" element={<AdminOrdersPage/>}/>
       <Route path="/admin_add-product" element={<AdminAddProductPage/>}/>
       <Route path="/admin_products" element={<AdminAllProducts/>}/>
       <Route path="/admin_edit/:id" element={ <AdminEditProduct/> }/>
       <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
)
}