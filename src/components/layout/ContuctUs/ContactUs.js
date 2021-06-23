import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import SimpleInput from "../../components/input/SimpleInput";
import FilledButton from "../../components/button";
import {
  textColor,
  darkGray,
  white,
  backColor,
} from "../../components/color/color";

const ContactUs = () => {
  return (
    <form>
      <Box display="flex">
        <SimpleInput label="First Name" />
        <SimpleInput label="Last Name" />
      </Box>
      <SimpleInput width="320px" label="@Mail" />
      <SimpleInput width="320px" label="Message" />
      <FilledButton
        color={backColor}
        borderColor={backColor}
        background={darkGray}
        margin="10px"
        borderRadius="10px"
        width="120px"
      >
        Send
      </FilledButton>
    </form>
  );
};

export default ContactUs;

const useStyles = makeStyles((theme) => ({
  root: {},
}));
