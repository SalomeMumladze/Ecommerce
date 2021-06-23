import React from "react";
import { Card, CardMedia, Grid, Box } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Text from "../../components/text";
import IconContainer from "../../components/iconContainer";
import { makeStyles } from "@material-ui/core/styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <Grid>
        <Box display="flex" justifyContent="space-between">
          <Text
            fontSize="15px"
            fontWeight="bold"
            textAlign="center"
            margin="15px 0px 0px 0px"
          >
            {product.name}
          </Text>
          <IconContainer aria-label="Add to favourite Cart">
            <FavoriteBorderIcon />
          </IconContainer>
        </Box>

        <Text
          dangerouslySetInnerHTML={{ __html: product.description }}
          fontSize=".75rem"
          position="relative"
          bottom="12px"
          opacity="0.8"
          margin="0"
          height="40px"
        />

        <Box display="flex" justifyContent="space-between">
          <Text fontWeight="700" margin="5px 0px">
            ${product.price.formatted}
          </Text>

          <IconContainer
            position="relative"
            bottom="12px"
            onClick={handleAddToCart}
          >
            <AddShoppingCart />
          </IconContainer>
        </Box>
      </Grid>
    </Card>
  );
};

export default Product;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    width: "200px",
    height: "auto",
    boxShadow: "none",
    borderRadius: "0px",
    // borderBottom: "1px solid rgb(71, 71, 71, 0.3)",
  },
  media: {
    height: "180px",
    paddingTop: "56.25%", // 16:9
  },
}));
