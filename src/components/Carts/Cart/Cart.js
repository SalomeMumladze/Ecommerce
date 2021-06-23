import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Text from "../../components/text";

import useStyles from "./styles";

const Cart = ({ item, handleRemove, handleUpdateCar }) => {
  const classes = useStyles();

  return (
    <Card className="cart-item" className={classes.cards}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Text fontSize="15px" fontWeight="bold" textAlign="center" margin="0px">
          {item.name}
        </Text>
        <Text fontWeight="700">{item.line_total.formatted_with_symbol}</Text>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCar(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Text margin="0px">&nbsp;{item.quantity}&nbsp;</Text>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCar(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          className={classes.button}
          onClick={() => handleRemove(item.id)}
        >
          <Typography style={{ fontSize: "12px" }}>Remove</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cart;
