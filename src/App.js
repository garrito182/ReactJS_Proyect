import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div class="shell">
        <div class="container">
          <div class="row">
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/category" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/contact" element={< Contact />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
