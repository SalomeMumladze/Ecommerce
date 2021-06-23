import React from "react";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../components/text";
import { darkGray, backColor } from "../components/color/color";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Icon from "../components/icon";
import ContactUs from "./ContuctUs";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" JustifyContent="center">
        <Grid container>
          <Grid item lg={6}>
            <ContactUs />
          </Grid>
          <Grid item lg={6}>
            <div>
              <Text color="white" margin="10px 0px 0px 15px" fontSize="14px">
                Contact Us:
              </Text>
              <Icon>
                <FacebookIcon />
              </Icon>
              <Icon>
                <InstagramIcon />
              </Icon>
              <Icon>
                <TwitterIcon />
              </Icon>
              <Icon>
                <LinkedInIcon />
              </Icon>
              <Box
                display="flex"
                alignItems="center"
                JustifyContent="center"
                m={2}
              >
                <Grid item lg={12} container>
                  <Text color={backColor} margin="0px" fontSize="16px">
                    EleShoply
                  </Text>
                  <Text color={backColor} margin="0px 20px" fontSize="14px">
                    © Copyright2021
                  </Text>
                </Grid>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    boxShadow: "0px 0px 60px 0px #a19b9b",
    background: darkGray,
    padding: "40px 75px 40px 75px",
  },
}));
