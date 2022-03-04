
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./components/auth/loginComponent/Login";
import Register from "./components/auth/loginComponents/registerComponents/Register";
import Navbar from "./components/navbar/Navbar";
import Home from './mainComponents/Home';
function App() {
  return (
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

      </Routes>
    </div>
    </Router>
  );
}
export default App;
