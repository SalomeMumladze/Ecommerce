import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import AddressForm from "./Checkout/AddressForm";
import PaymentForm from "./Checkout/PaymentForm";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const Confirmation = () => {
    <div>conf</div>;
  };

  const Form = () => (activeStep == 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center" className={classes.check}>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
