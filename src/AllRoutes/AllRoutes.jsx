
import { Routes, Route } from "react-router-dom";
import Join from "../pages/Join";
import { Login } from "../pages/Login";
import SignIn from "../pages/SignIn";
import { Women } from "../pages/Women";
import { Men } from "../pages/Men";
import AdminLogin from "../pages/AdminLogin";
import CheckOut from "../pages/CheckOut";


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
        </Routes>
    )

}