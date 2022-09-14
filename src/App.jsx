import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div class="shell">
        <div class="container">
          <div class="row">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
