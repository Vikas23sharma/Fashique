import { Routes, Route } from "react-router-dom";
import Join from "../pages/Join";
import { Login } from "../pages/Login";
import SignIn from "../pages/SignIn";
import { Women } from "../pages/Women";
import { Men } from "../pages/Men";
import Admin from "../pages/Admin";

export default function AllRoutes() {
    return (
        <Routes>
          
            <Route path="/" element={<Women></Women>}></Route>
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/join" element={<Join />}></Route>
        </Routes>
    )

}