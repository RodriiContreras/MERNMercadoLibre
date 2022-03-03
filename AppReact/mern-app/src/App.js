
import CarrouselHome from './components/carrouselHome/CarrouselHome';
import Navbar from './components/navbar/Navbar';
import Methods from './components/paymentMethods/Methods';
import ProductosHome from './components/productosHome/ProductosHome';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarrouselHome/>
      <Methods/>
      <ProductosHome/>
    </div>
  );
}

export default App;
