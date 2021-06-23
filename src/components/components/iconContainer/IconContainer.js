import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { darkGray, white } from "../color/color";

const IconContainer = (props) => {
  const classes = useStyles({
    color: props.color,
    position: props.position,
    bottom: props.bottom,
  });
  const { children, icon, size, ...rest } = props;

  return (
    <IconButton
      alignItems="center"
      justifyContent="center"
      display="flex"
      width={size || 40}
      height={size || 40}
      borderRadius="50%"
      className={classes.iconContainer}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    color: (props) => props.color || darkGray || white,
    bottom: (props) => props.bottom || "none",
    position: (props) => props.position || "none",
  },
}));

export default IconContainer;
