import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../components/text";

const useStyles = makeStyles((theme) => ({
  contain: {
    margin: "60px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  about: {
    maxWidth: 700,
    lineHeight: 2,
    fontFamily: "Shippori Mincho B1, seri",
    padding: 20,
    textAlign: "left",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.contain}>
      <Grid>
        <Text
          fontSize="24px"
          textDecoration="underline"
          margin="50px"
          colo="#fff"
        >
          About us
        </Text>
        <Grid className={classes.about}>
          Welcome to Ecommerce, your number one source for all things. We're
          dedicated to giving you the very best of Ecommerce, with a focus on
          our products Founded in 2021 by salome, Ecommerce has come a long way
          from its beginnings in aoffice When salome first started out, her
          passion for passion of founder, ie: helping other parents be more
          eco-friendly, providing the best equipment for his fellow musicians
          drove him to action, ie: do intense research, quit her day job, and
          gave him the impetus to turn hard work and inspiration into to a
          booming online store. We now serve customers all over place, ie: the
          US, the world, the Austin area, and are thrilled to be a part of the
          [adjective, ie: quirky, eco-friendly, fair trade] wing of the
          industry. We hope you enjoy our products as much as we enjoy offering
          them to you. If you have any questions or comments, please don't
          hesitate to contact us.
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AboutUs;
