import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
/*============================TASK:=====================================================

-> add item to cart
-> user can select amount for each item
-> show total price

*/

function App() {
  //creat items data
  const [items] = useState([
    {
      name: 'Item#1',
      price: 33,
    },
    {
      name: 'Item#2',
      price: 99,
    },
    {
      name: 'Item#3',
      price: 5,
    },
    {
      name: 'Item#4',
      price: 125,
    },
    {
      name: 'Item#5',
      price: 25,
    }
  ])
  //creat users cart
  const [cart, setCart] = useState([]);
  //add item to cart
  const addItem = function (product) {
    setCart([...cart, product]);
  }
  //remove item from cart
  const removeItem = (product) => {
    setCart(cart.filter((thisProduct) => thisProduct !== product));
  }
  //calculate total price of all item
  const checkPrice = () => {
    let sum = 0;
    for (let x of cart)
      sum += x.price;
    alert('Your price total: ' + sum + '$');
  }
  return (
  //render user cart 
    <div className="App">
      <div className="bg-light container">
        <div>
          <h3><i class="fa fa-shopping-cart" aria-hidden="true"></i> Your Cart({cart.length}):</h3>
          <div>
            {cart.map((product, id) => (
              <div key={id} className="d-inline-block">
                <b className="bg-info m-2 rounded">{product.name}
                  <span id="removeItem" className="btn-danger rounded" onClick={() => removeItem(product)}>&times;</span>
                </b>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="btn btn-success" onClick={() => checkPrice()}>Check Total Price</button>
      </div>
      <div className="container">
        {items.map((product, id) => (
          <div key={id}>
            <h3>{product.name + ' price: ' + product.price + '$'}</h3>
            <button className="btn btn-primary" onClick={() => addItem(product)}>Add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
