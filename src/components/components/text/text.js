import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { darkGray, textColor, backColor, white } from "../color/color";

const Text = (props) => {
  const classes = useStyles({
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    fontWeight: props.fontWeight,
    textDecoration: props.textDecoration,
    textAlign: props.textAlign,
    opacity: props.opacity,
    height: props.height,
    fontSizeMd: props.fontSizeMd,
    fontSizeSm: props.fontSizeSm,
    lineHeightSm: props.lineHeightSm,
    marginSm: props.marginSm,
  });
  const { children, ...rest } = props;
  return (
    <Typography className={classes.root} {...rest}>
      {children}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    fontFamily: "Shippori Mincho B1, seri",
    height: (props) => props.height,
    color: (props) => props.color || darkGray || white,
    opacity: (props) => props.opacity,
    textAlign: (props) => props.textAlign || "none",
    fontSize: (props) => props.fontSize || "16px",
    lineHeight: (props) => props.lineHeight || "16px",
    fontWeight: (props) => props.fontWeight || "300px",
    textDecoration: (props) => props.textDecoration || "none",
    margin: (props) => props.margin || "0px 0px 0px 30px",
    [theme.breakpoints.down("sm")]: {
      margin: (props) => props.margin || "0px 0px 0px 10px",
      fontSize: (props) => props.fontSizeSm,
      lineHeight: (props) => props.lineHeightSm,
      margin: (props) => props.marginSm,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: (props) => props.fontSizeLg,
    },
  },
}));

export default Text;
