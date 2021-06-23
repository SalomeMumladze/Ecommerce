import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { backColor, darkGray } from "../color/color";

const BoxContainer = (props) => {
  const classes = useStyles({
    background: props.background,
    padding: props.padding,
    margin: props.margin,
    height: props.height,
    marginBottom: props.marginBottom,
    marginSm: props.marginSm,
    marginMd: props.marginMd,
  });
  const { children } = props;
  return (
    <main className={classes.content}>
      <div className={classes.container}>{children}</div>
    </main>
  );
};

export default BoxContainer;

const useStyles = makeStyles((theme) => ({
  content: {
    padding: (props) => props.padding || "0px 0px 0px 70px",
    margin: (props) => props.margin || "90px 0px",
  },
  container: {
    height: (porps) => porps.height,
    background: (props) => props.background || darkGray,
    padding: (props) => props.padding || "20px 20px 50px",
    marginBottom: (props) => props.marginBottom || "none",
    [theme.breakpoints.down("sm")]: {
      marginBottom: (props) => props.marginSm || "800px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: (props) => props.marginMd || "none",
    },
  },
}));
