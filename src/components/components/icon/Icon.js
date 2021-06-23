import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import { backColor, white } from "../color/color";
const Icon = (props) => {
  const classes = useStyles({
    color: props.color,
    width: props.width,
    height: props.height,
    background: props.background,
    margin: props.margin,
    marginLeft: props.marginLeft,
  });

  const { children } = props;
  return <IconButton className={classes.tool}>{children}</IconButton>;
};

const useStyles = makeStyles((theme) => ({
  tool: {
    color: (props) => props.color || backColor || white,
    width: (props) => props.width || "50px",
    height: (props) => props.height || "50px",
    background: (props) => props.background || "none",
    margin: (props) => props.margin || "0px",
    marginLeft: (props) => props.marginLeft || "0px",
  },
}));

export default Icon;
