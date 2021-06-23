import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { backColor, white, textColor, darkGray, black } from "../color/color";

const SimpleInput = (props) => {
  const classes = useStyles({
    width: props.width,
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label={props.label} variant="outlined" />
    </form>
  );
};

export default SimpleInput;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: (props) => props.width || "151px",
    },
    "& label.Mui-focused": {
      color: backColor,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: black,
        borderRadius: "10px",
        border: "1px solid",
        opacity: 0.3,
      },
      "&:hover fieldset": {
        borderColor: backColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: backColor,
        border: "1px solid",
        // backgroundColor: black,
        opacity: 1,
      },
    },
  },
}));
