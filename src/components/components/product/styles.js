import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: { maxWidth: "100%",
    width: "200px",
    height: "auto",
    boxShadow: "none",
    borderRadius: "0px",
    borderBottom: "1px solid rgb(71, 71, 71, 0.3)",
  },
  media: {
    height: "180px",
    paddingTop: "56.25%", // 16:9
  },
}));
