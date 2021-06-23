import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 130,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    justifyContent: "space-between",
    padding: "0px 60px 10px 0px",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  cards: {
    width: 230,
    boxShadow: "none",
    borderBottom: "1px solid #474747",
    borderRadius: "0px",
  },
  button: {
    height: 30,
    border: "1px solid #bbb",
    color: "#474747",
    background: "none",
    textAlign: "center",
    textTransform: "none",
    borderRadius: "0px",
    boxShadow: "none",
  },
}));
