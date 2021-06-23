import React, { Children } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { darkGray, white } from "../color/color";

const LogoWithText = (props) => {
  const classes = useStyles({
    image_size: props.image_size,
    marginLeft: props.marginLeft,
    fontWeight: props.fontWeight,
  });
  const { children, containerProps, ...rest } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...containerProps}
    >
      {/* {props.image && (
        <img src={props.image} alt="" className={classes.image} />
      )} */}
      <Typography className={classes.root} {...rest}>
        {children}
      </Typography>
    </Box>
  );
};

export default LogoWithText;

const useStyles = makeStyles((theme) => ({
  image: {
    width: (props) => props.image_size || 70,
    height: (props) => props.image_size || 70,
    fontWeight: (props) => props.fontWeight || 500,
    padding: 2,
    [theme.breakpoints.down("sm")]: {
      width: (props) => props.image_size || 50,
      height: (props) => props.image_size || 50,
    },
  },
  root: {
    marginLeft: (props) => props.marginLeft || "20px",
    textTransform: "none",
    color: (props) => props.color || darkGray || white,
    fontSize: (props) => props.fontSize || "20px",
    lineHeight: (props) => props.lineHeight || "16px",
    fontWeight: (props) => props.fontWeight || "700",
    textDecoration: (props) => props.textDecoration || "none",
    [theme.breakpoints.down("md")]: {
      fontSize: (props) => props.fontSizeLg,
      lineHeight: (props) => props.lineHeightMd,
    },
    [theme.breakpoints.down("sm")]: {
      // display: "none",
    },
  },
}));
