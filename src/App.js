import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "components/lib/commerce";
import Products from "components/Products";
import Carts from "components/Carts";
import Checkout from "components/CheckoutForm";
import AboutUs from "components/AboutUs/AboutUs";
import HomePageLayout from "components/layout/HomePagelayout";
import Home from "components/Home";
import Collection from "components/collection";
import Shopping from "components/Shopping/Shopping";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCart = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };
  const handleRemove = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Router>
        <HomePageLayout totalItems={cart.total_items}>
          <div style={{ margin: "0px 50px 0px 0px" }}>
            <Switch>
              <Route exact path="/">
                <Home />
                <Collection />
                <Products products={products} onAddToCart={handleAddToCart} />
              </Route>
              <Route exact path="/cart">
                <Carts
                  cart={cart}
                  handleUpdateCar={handleUpdateCart}
                  handleRemove={handleRemove}
                  handleEmptyCart={handleEmptyCart}
                />
              </Route>
              <Route exact path="/about">
                <AboutUs />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/shopping">
                <Shopping products={products} onAddToCart={handleAddToCart} />
              </Route>
            </Switch>
          </div>
        </HomePageLayout>
      </Router>
    </>
  );
}

export default App;
