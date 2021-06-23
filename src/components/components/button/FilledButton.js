import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { backColor, darkGray } from "../color/color";

const FilledButton = (props) => {
  const classes = Styles({
    background: props.background,
    color: props.color,
    borderColor: props.borderColor,
    height: props.height,
    width: props.width,
    margin: props.margin,
    marginSm: props.marginSm,
  });
  const { text, icon, inElement, loading, ...rest } = props;
  return (
    <Button
      className={classes.root}
      startIcon={
        icon ? <img src={icon} alt="icon" /> : inElement ? inElement : null
      }
      classes={{ disabled: classes.disabled }}
      {...rest}
    ></Button>
  );
};

export default FilledButton;

const Styles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width || "100%",
    height: (props) => props.height || "45px",
    margin: (props) => props.margin || "30px 0px 0px 30px",
    border: "1px solid",
    borderColor: (props) => props.borderColor || darkGray,
    backgroundColor: (props) => props.background || backColor,
    color: (props) => props.color || darkGray,
    padding: (props) => props.padding || null,
    borderRadius: "0px",
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "fRegular",
    textTransform: "none",
    "&:hover": {
      backgroundColor: (props) => props.background,
    },
    [theme.breakpoints.down("md")]: {
      width: (props) => props.widthSm,
    },
    [theme.breakpoints.down("sm")]: {
      margin: (props) => props.marginSm,
    },
  },
  disabled: {
    borderColor: (props) => props.borderColor || props.background,
    backgroundColor: (props) => props.background,
    color: (props) => props.color,
  },
}));
