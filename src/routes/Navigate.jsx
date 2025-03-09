import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Authlayout from "../components/Authlayout";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Details from "../pages/dashboard/Details";


export default function Navigate(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="/" element={<Authlayout />} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="details" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}