
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./components/auth/loginComponent/Login";
import Register from "./components/auth/loginComponents/registerComponents/Register";
import AuthContextProvider from "./components/Context/AuthContext";
import Help from "./components/help/Help";
import Navbar from "./components/navbar/Navbar";
import SellProducts from "./components/ProductsCategoriesComponents/Sell-Products/SellProducts";
import MainForm from "./components/ProductsCategoriesComponents/Sell-Products/SellProductsID/MainForm";
import Home from './mainComponents/Home';
function App() {
  return (
    <AuthContextProvider>
    <Router>
    <div className="App">
      <Routes>

     {/*Path To Home*/}
      <Route exact path='/'  element={<Home/>}/>


   {/*Path To Products*/}
   <Route exact path='/product/cars'  element={<Navbar/>}/>
   <Route exact path='/product/supermarket'  element={<Navbar/>}/>
   <Route exact path='/product/indumentary'  element={<Navbar/>}/>
   <Route exact path='/product/technology'  element={<Navbar/>}/>


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
