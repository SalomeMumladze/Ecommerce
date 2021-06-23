import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Grid, Box } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Icon from "components/components/icon";
import Text from "components/components/text";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import LogoWithText from "components/components/logoWithText";

const useStyles = makeStyles((theme) => ({
  modal: {
    // border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "10px 27px 45px",
    borderRadius: "0px 0px 400px 0px",
    backgroundColor: "rgba(57,61,70)",
    "&:focus": { outline: "none" },
    width: "230px",
    height: "250px",
  },
}));

export default function OpenModule() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuList = [{}];

  return (
    <div>
      <MenuRoundedIcon onClick={handleOpen} />
      <Modal
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
            <Box display="flex" justifyContent="space-between">
              <LogoWithText
                component={Link}
                to="/"
                color="white"
                marginLeft="0px"
              >
                EleShoply
              </LogoWithText>
              <Icon color="white">
                <CloseIcon onClick={handleClose} />
              </Icon>
            </Box>

            <Box display="grid">
              <Text component={Link} to="/" margin="15px" color="white">
                Home
              </Text>
              <Text component={Link} to="/about" margin="15px" color="white">
                About us
              </Text>
              <Text component={Link} to="/contact" margin="15px" color="white">
                Contact
              </Text>
              <Text component={Link} to="/shopping" margin="15px" color="white">
                Product
              </Text>{" "}
              <Text component={Link} to="/cart" margin="15px" color="white">
                cart
              </Text>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
