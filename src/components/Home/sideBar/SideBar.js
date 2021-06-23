import React, { Children } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { darkGray } from "../../components/color/color";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const SideBar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} spacing={3}>
        <Box display="flex" justifyContent="center">
          <div className={classes.line} />
        </Box>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default SideBar;

const useStyles = makeStyles((theme) => ({
  line: {
    boxSizing: "border-box",
    width: 1,
    background: darkGray,
    height: 190,
    opacity: "0.5",
    margin: "50px 0px",
  },
  container: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "50px",
    width: "75px",
    [theme.breakpoints.down("sm")]: {
      width: "65px",
    },
    [theme.breakpoints.down("md")]: {
      width: "75px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90px",
    },
  },
}));
