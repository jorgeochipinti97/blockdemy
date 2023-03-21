import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { Person, CreditCard, DateRange, Security } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  })
);

const PaymentForm = () => {
  const classes = useStyles();
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(event.target.value);
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  };

  return (
    <Box>
      <Cards
        number={cardNumber}
        name={name}
        expiry={expiry}
        cvc={cvc}
        preview={true}
      />
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.form}>
            <Typography variant="h6" component="h2">
              Payment Information
            </Typography>
            <TextField
              label="Card Number"
              variant="outlined"
              value={cardNumber}
              onChange={handleCardNumberChange}
              InputProps={{
                startAdornment: <CreditCard className={classes.icon} />,
              }}
            />
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              InputProps={{
                startAdornment: <Person className={classes.icon} />,
              }}
            />
            <TextField
              label="Expiry"
              variant="outlined"
              value={expiry}
              onChange={handleExpiryChange}
              InputProps={{
                startAdornment: <DateRange className={classes.icon} />,
              }}
            />
            <TextField
              label="CVC"
              variant="outlined"
              value={cvc}
              onChange={handleCvcChange}
              InputProps={{
                startAdornment: <Security className={classes.icon} />,
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaymentForm;
