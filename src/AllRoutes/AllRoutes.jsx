import { Routes,Route } from "react-router-dom";
import { Men } from "../pages/Men";
import { Women } from "../pages/Women";


export default function AllRoutes(){
return (
    <Routes>
    <Route path="/" element={<Women></Women>}></Route>
    <Route path="/men" element={<Men></Men>}></Route>
    </Routes>
)
}