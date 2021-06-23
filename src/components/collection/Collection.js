import React from "react";
import Text from "../components/text";
import { makeStyles } from "@material-ui/core/styles";
import BoxContainer from "../components/box";
import { Box, Grid } from "@material-ui/core";
import CollectionBox from "../components/collectionBox";
import BlackClothImg from "assets/black.jpg";
import SummerClothImg from "assets/summer.jpg";

const Collection = () => {
  const classes = Styles();
  return (
    <BoxContainer height="300px" marginBottom="250px">
      <Text
        color="white"
        fontSize="50px"
        fontWeight="bold"
        lineHeight="40px"
        margin="50px"
        fontSizeSm="30px"
      >
        Stay in Trend with Eleshoply
      </Text>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} sm={12} md={6}>
          <CollectionBox
            colTxt="NEW ARRIVALS"
            title="Black Beauty"
            subTitle="Look sophisticated in our new collection of all black cloth"
            buttonTxt="Black Collection"
            type="darkColor"
            img={BlackClothImg}
          />
        </Grid>
        <Grid item lg={6} sm={12} md={6}>
          <CollectionBox
            colTxt="SUMMER COLlECTION"
            title="Summer's Best"
            subTitle="Check out our best summer collection to stay warm in style this season"
            buttonTxt="Discover more"
            type="whiteColor"
            img={SummerClothImg}
          />
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default Collection;

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
