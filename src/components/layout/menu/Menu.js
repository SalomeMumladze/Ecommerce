import React, { Children } from "react";
import { makeStyles } from "@material-ui/core";
import { darkGray } from "../../components/color/color";
import OpenModule from "./OpenMenu";

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <OpenModule />
    </div>
  );
};

export default Menu;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70px",
    background: darkGray,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
    },
    [theme.breakpoints.down("md")]: {
      width: "65px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70px",
    },
  },
}));
