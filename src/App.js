import './App.css';
import CartItem from './components/CartItem';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState, useEffect } from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Sayfa yenilendiğinde sepeti sıfırla
    setCartItems([]);
  }, []);

  return (
    <div className="App">
      <div className='container mx-auto px-48 items-center'>
        <Header cartItems={cartItems}></Header>
        <ProductList cartItems={cartItems} setCartItems={setCartItems}/>
        <CartItem cartItems={cartItems} setCartItems={setCartItems}/>
      </div>
    </div>
  );
}

export default App;
