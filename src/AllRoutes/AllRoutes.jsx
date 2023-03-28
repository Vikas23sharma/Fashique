import { Routes, Route } from "react-router-dom";
import Join from "../pages/Join";
import { Login } from "../pages/Login";
import SignIn from "../pages/SignIn";
import { Women } from "../pages/Women";


export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Women />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/join" element={<Join />}></Route>
        </Routes>
    )
}