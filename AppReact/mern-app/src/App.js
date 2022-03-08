
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./components/auth/loginComponent/Login";
import Register from "./components/auth/loginComponents/registerComponents/Register";
import AuthContextProvider from "./components/Context/AuthContext";
import Help from "./components/help/Help";
import Navbar from "./components/navbar/Navbar";
import SellProducts from "./components/ProductsCategoriesComponents/Sell-Products/SellProducts";
import MainForm from "./components/ProductsCategoriesComponents/Sell-Products/SellProductsCategory/MainForm";
import Home from './mainComponents/Home';
import CarsBrands from "./mainComponents/ProductSections/cars/CarsBrands/CarsBrands";
import CarsSections from "./mainComponents/ProductSections/cars/CarsSections";
import IndumentarySection from "./mainComponents/ProductSections/indumentary/IndumentarySection";
import SupermarketSection from "./mainComponents/ProductSections/supermarket/SupermarketSection";
function App() {
  return (
    <AuthContextProvider>
    <Router>
    <div className="App">
      <Routes>

     {/*Path To Home*/}
      <Route exact path='/'  element={<Home/>}/>


   {/*Path To Products*/}
   <Route exact path='/buy-products/cars'  element={<CarsSections/>}/>
   <Route exact path='/buy-products/cars/:brand'  element={<CarsBrands/>}/>


   <Route exact path='/buy-products/supermarket'  element={<SupermarketSection/>}/>

   <Route exact path='/buy-products/indumentary'  element={<IndumentarySection/>}/>
   {/* <Route exact path='/buy-products/indumentary/:category'  element={<CarsBrands/>}/> */}

   <Route exact path='/buy-products/technology'  element={<Navbar/>}/>



   <Route exact path='/auth/Register'  element={<Register/>}/>
   <Route exact path='/auth/Login'  element={<Login/>}/>



   <Route exact path='/product/sell-Products' element={<SellProducts/>}/>

   <Route exact path='/product/sell-Products/:category' element={<MainForm/>}/>


   <Route exact path='/help' element={<Help/>}/>

      </Routes>
    </div>
    </Router>
    </AuthContextProvider>
  );
}
export default App;
