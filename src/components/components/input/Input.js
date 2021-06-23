import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { darkGray, backColor } from "../color/color";
import { makeStyles } from "@material-ui/core/styles";

const TextInput = (props) => {
  const classes = Styles({
    background: props.background,
    color: props.color,
    borderColor: props.borderColor,
    height: props.height,
    width: props.width,
    margin: props.margin,
  });
  return (
    <TextField
      className={classes.root}
      id="filled-full-width"
      style={{ margin: 8 }}
      placeholder="search..."
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    >
    </TextField>
  );
};

export default TextInput;

const Styles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width || "100%",
    height: (props) => props.height || "45px",
    margin: (props) => props.margin || "30px 0px 0px 30px",
    border: "1px solid",
    borderColor: (props) => props.borderColor ,
    backgroundColor: (props) => props.background ,
    color: (props) => props.color ,
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
  },
}));
