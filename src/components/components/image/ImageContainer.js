import React, { Children } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const ImageContainer = (props) => {
  const classes = useStyles({
    width: props.width,
    height: props.height,
    widthSm: props.widthSm,
    heightSm: props.heightSm,
  });
  return (
    <>
      {props.image && (
        <img src={props.image} alt="" className={classes.image} />
      )}
    </>
  );
};

export default ImageContainer;

const useStyles = makeStyles((theme) => ({
  image: {
    width: (props) => props.width || 70,
    height: (props) => props.height || 70,
    padding: 2,
    [theme.breakpoints.down("md")]: {
      width: (props) => props.widthSm || 50,
      height: (props) => props.heightSm || 50,
    },
  },
}));
