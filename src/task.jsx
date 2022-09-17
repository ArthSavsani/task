import React, { useState } from "react";
import API from "./product";
import "./task.css";

function Task() {
  const [cart, setCart] = useState(API);

  const addToCart = (i) => {
    setCart((prevState) =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal,
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false,
          };
        }
        return item;
      })
    );
  };

  const cartItems = cart.map((item, i) => (
    <React.Fragment key={item.name}>
      {item.inCart && (
        <>
          <p> Item Name: {item.name}</p>

          <p>Total: ${item.price}</p>
          <button onClick={() => removeFromCart(i)}>Remove From Cart</button>
          <hr />
        </>
      )}
    </React.Fragment>
  ));

  const cartProducts = () => (
    <div className="flexParent">
      {cart.map((item, i) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          {!item.inCart ? (
            <>
              <button onClick={() => addToCart(i)}>Add to cart</button>
            </>
          ) : (
            <p>
              <b>Item added!</b>
            </p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {cartItems}
      {cartProducts()}
    </div>
  );
}
export default Task;
