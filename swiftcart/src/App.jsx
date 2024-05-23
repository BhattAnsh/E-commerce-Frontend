import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Cart from './Pages/CartPage/Cart';
import Checkout from './Pages/CheckoutPage/Checkout';
import ProductList from './Pages/PLPage/PL';
import ProductDetails from './Pages/PDPage/PD';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/product-details' element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
