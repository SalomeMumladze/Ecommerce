import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import Product from "../components/product";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../components/text";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Icon from "../components/icon";
import { darkGray } from "../components/color/color";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.container}>
        <Box container display="flex" alignItems="center">
          <Text fontSize="26px" fontWeight="500">
            Products
          </Text>
          <Icon color={darkGray} marginLeft="auto">
            <Link to="/shopping">
              <ArrowForwardIcon />
            </Link>
          </Icon>
        </Box>
        <Grid container justify="center" spacing={4} className={classes.space}>
          {products.map(
            (product, index) =>
              index < 6 && (
                <Grid
                  key={product.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  className={classes.product}
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              )
          )}
        </Grid>
      </div>
    </main>
  );
};

export default Products;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: "0px 0px 0px 70px",
    margin: "90px 0px",
  },
  container: {
    background: "#fff",
    padding: "20px 20px 50px",
  },
  space: {
    display: "flex",
    justifyContent: "space-around",
  },
  product: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
