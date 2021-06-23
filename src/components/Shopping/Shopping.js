import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Product from "../components/product";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Shopping = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main className={classes.content}>
      <div className={classes.container} onClick={handleOpen}>
        <Grid container justify="center" spacing={4} className={classes.space}>
          {products.map((product) => (
            <Grid
              key={product.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.product}
            >
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {products.map((product) => (
              <Grid
                key={product.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.product}
              >
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </div>
        </Fade>
      </Modal>
    </main>
  );
};

export default Shopping;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  content: {
    flexGrow: 1,
    padding: "0px 0px 0px 70px",
    margin: "70px 0px",
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
