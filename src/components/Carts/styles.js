import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 90,
    },
  },
  title: {
    marginTop: "5%",
    marginBottom: "30px",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Shippori Mincho B1, seri",
    color: "#474747",
  },
  sub: {
    fontFamily: "Shippori Mincho B1, seri",
    color: "#474747",
    fontSize: 23,
    fontWeight: "500",
    height: 160,
  },

  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "5%",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 70,
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  contain: {
    paddingLeft: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 24,
    },
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
    margin: "0px 0px 0px 10px",
    padding: 20,
  },
}));
