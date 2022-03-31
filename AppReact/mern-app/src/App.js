
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./components/auth/loginComponent/Login";
import Register from "./components/auth/loginComponents/registerComponents/Register";
import AuthContextProvider from "./components/Context/AuthContext";
import Help from "./components/help/Help";
import History from "./components/History/History";
import OrderHome from "./components/orders/OrderHome";
import SellProducts from "./components/ProductsCategoriesComponents/Sell-Products/SellProducts";
import MainForm from "./components/ProductsCategoriesComponents/Sell-Products/SellProductsCategory/MainForm";
import Home from './mainComponents/Home';
import CarsBrands from "./mainComponents/ProductSections/cars/CarsBrands/CarsBrands";
import CarsSections from "./mainComponents/ProductSections/cars/CarsSections";
import IndumentaryCategories from "./mainComponents/ProductSections/indumentary/IndumentaryCategory/IndumentaryCategories";
import IndumentarySection from "./mainComponents/ProductSections/indumentary/IndumentarySection";
import ProductById from "./mainComponents/ProductSections/ProductId/ProductById";
import ProductEdit from "./mainComponents/ProductSections/ProductId/ProductEdit/ProductEdit";
import SupermarketCategory from "./mainComponents/ProductSections/supermarket/SupermarketCategory/SupermarketCategory";
import SupermarketSection from "./mainComponents/ProductSections/supermarket/SupermarketSection";
import TechnologyCategory from "./mainComponents/ProductSections/technology/TechnologyCategory/TechnologyCategory";
import TechnologySections from "./mainComponents/ProductSections/technology/TechnologySections";
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
   <Route exact path='/buy-products/supermarket/:category'  element={<SupermarketCategory/>}/> 

   <Route exact path='/buy-products/indumentary'  element={<IndumentarySection/>}/>
    <Route exact path='/buy-products/indumentary/:category'  element={<IndumentaryCategories/>}/> 

   <Route exact path='/buy-products/technology'  element={<TechnologySections/>}/>
   <Route exact path='/buy-products/technology/:category'  element={<TechnologyCategory/>}/>


   <Route exact path={`/product/buy-product/:id`}  element={<ProductById/>}/>
   <Route exact path={`/product/update-product/:id`}  element={<ProductEdit/>}/>


   <Route exact path='/history'  element={<History/>}/>

   <Route exact path='/cart'  element={<OrderHome/>}/>


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
