import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Order from './pages/Order';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <div className="shell">
          <div className="container">
            <div className="row">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
