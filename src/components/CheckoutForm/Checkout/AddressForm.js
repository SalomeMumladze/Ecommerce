import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import FormInput from "./components/CustomTextFiled";

const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
          </Grid>
          <Box display="flex" justifyContent="space-between" m={2}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
