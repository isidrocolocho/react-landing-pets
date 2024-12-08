import { Routes,Route } from "react-router-dom";
import Header from "../views/partials/Header";
import Footer from "../views/partials/Footer";
import Contador from "../views/Contador";
import LandingPets from "../views/LandingPets";
import Iconos from "./Iconos";
const Router = () => {
    return(
        <div> 
            <Header/>
            <Routes>
                <Route path="/" element={<LandingPets/>}/>
                <Route path="/contador" element={<Contador/>}/>
            </Routes> 
            <Footer/> 
            <Iconos/>
        </div>
    )
}

export default Router;