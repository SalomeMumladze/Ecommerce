import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Grid,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import logo from "assets/logo1.jpg";
import LogoWithText from "../components/logoWithText";
import { makeStyles } from "@material-ui/core/styles";
import IconContainer from "../components/iconContainer";
import { backColor } from "../components/color/color";
import Menu from "./menu";
import Input from "../components/input";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Grid container className={classes.container}>
          <Menu />
          <LogoWithText component={Link} to="/" fontWeight="500">
            EleShoply
          </LogoWithText>
          <Box marginLeft="auto" display="flex" alignItems="center">
            {/* <Input width="300px">erfe</Input> */}

            <IconContainer component={Link} to="/cart">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconContainer>

            <IconContainer>
              <Badge color="secondary">
                <FavoriteBorderIcon />
              </Badge>
            </IconContainer>
          </Box>
        </Grid>
      </AppBar>
    </>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    background: backColor,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  container: {
    height: "70px",
    padding: "0px 40px 0px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));
