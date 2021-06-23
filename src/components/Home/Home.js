import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Text from "../components/text";
import { makeStyles } from "@material-ui/core/styles";
import img from "assets/Capture.jpg";
import ImageContainer from "components/components/image";
import FilledButton from "components/components/button/FilledButton";
import SideBar from "./sideBar";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" alignItems="center">
        <SideBar />
        <Grid className={classes.home} container>
          <Grid item lg={6}>
            <Text
              fontWeight="900"
              fontSize="55px"
              margin="30px"
              lineHeight="40px"
              fontSizeSm="30px"
            >
              Summer 21'
            </Text>
            <Text
              lineHeight="30px"
              fontSize="20px"
              opacity="0.8"
              fontSizeSm="16px"
              lineHeightSm="25px"
            >
              The history of our production is more than 5 years old. During
              this time we have come a long way in finding the best technology &
              materials to be born, our perfect cloths goes through several
              dozen hands, each of which perform its indispensable role.
            </Text>
            <Link to="/shopping">
              <FilledButton width="160px" marginSm="20px 30px">
                Shop Now
              </FilledButton>
            </Link>
          </Grid>
          <Grid item lg={6}>
            <Box
              display="flex"
              justifyContent="flex-end"
              className={classes.img}
            >
              <ImageContainer image={img} height="400px" width="auto" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  home: {
    height: 500,
    background: "#fff",
    padding: "0px 70px 0px 70px",
    display: "flex",
    alignItems: "center",
    margin: "37px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "70px 0px",
      padding: "0px",
    },
  },
  img: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
