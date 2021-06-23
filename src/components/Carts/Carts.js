import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import useStyles from "./styles";

const Carts = ({ cart, handleUpdateCar, handleRemove, handleEmptyCart }) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1" className={classes.sub}>
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return "Loading...";

  const renderCart = () => (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((lineItem) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            className={classes.container}
            key={lineItem.id}
          >
            <Cart
              item={lineItem}
              handleUpdateCar={handleUpdateCar}
              handleRemove={handleRemove}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography className={classes.sub} variant="h5">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.button}
            type="button"
            variant="contained"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            type="button"
            variant="contained"
            className={classes.button}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container className={classes.contain}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.line_items < 1 ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Carts;
