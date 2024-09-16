import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes.routes";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Materias from "../pages/Materias";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Recursos from "../pages/Recursos";

const AllRoutes = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/usuarios" element={<Users/>} />
                <Route path="/materias" element={<Materias/>} />
                <Route path="/recursos" element={<Recursos/>} />
            </Route>

        </Routes>
    );
}

export default AllRoutes;
