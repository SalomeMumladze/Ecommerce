import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { textColor, darkGray, white } from "../color/color";
import Text from "../text";
import FilledButton from "../button/FilledButton";
import ImageContainer from "../image";

const CollectionBox = (props) => {
  const classes = Styles({
    background: props.background,
    color: props.color,
    borderColor: props.borderColor,
    height: props.height,
    width: props.width,
    margin: props.margin,
    marginSm: props.marginSm,
  });
  return (
    <>
      <Grid className={classes.root}>
        <Grid item lg={6} md={5}>
          <Text margin="30px 0px 50px 30px" fontSize="12px">
            {props.colTxt}
          </Text>
          <Text
            fontSize="30px"
            lineHeight="40px"
            fontWeight="bold"
            marginSm="30px"
            fontSizeSm="20px"
          >
            {props.title}
          </Text>
          <Text margin="20px 0px 10px 30px" opacity="0.8" marginSm="30px">
            {props.subTitle}
          </Text>

          {props.type === "darkColor" ? (
            <FilledButton
              margin="20px 0px 40px 30px"
              width="150px"
              color="white"
              fontWeight="normal"
              marginSm="30px"
              background={darkGray}
            >
              {props.buttonTxt}
            </FilledButton>
          ) : (
            <FilledButton
              margin="20px 0px 40px 30px"
              width="150px"
              fontWeight="normal"
              marginSm="30px"
              background={white}
            >
              {props.buttonTxt}
            </FilledButton>
          )}

          
        </Grid>
        <Grid item lg={6} md={5}>
          <Box display="flex" justifyContent="center" className={classes.img}>
            <ImageContainer
              height="270px"
              width="auto"
              heightSm="200px"
              widthSm="auto"
              image={props.img}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CollectionBox;

const Styles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width || "100%",
    height: (props) => props.height,
    boxShadow: (props) => props.boxShadow || "black 0px 1px 100px -46px",
    background: (props) => props.background || white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
