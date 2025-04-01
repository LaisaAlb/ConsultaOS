import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SingIn from "../pages/SingIn";
import Private from "./Private";
import Home from "../pages/home";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SingIn/>} />
            <Route path="/home" element={<Private><Home/></Private>}/>
            <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
            <Route path="/dashboard/:id" element={<Private><Dashboard/></Private>} />
        </Routes>
    )
}

export default RoutesApp;
