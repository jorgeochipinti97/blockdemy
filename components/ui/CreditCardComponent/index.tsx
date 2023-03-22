import { TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Box } from "@mui/system";
import React, { useState } from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import CreditCardIcon from "@mui/icons-material/CreditCard";
interface CardImageProps {
  "aria-label": string;
  children: React.ReactElement;
  width: string;
  height: string;
  viewBox: string;
}

interface GetCardImageProps {
  (props?: { images: any }): CardImageProps;
}

export const CreditCardComponent = () => {
  const ERROR_MESSAGES = {
    emptyCardNumber: "El número de la tarjeta es inválido",
    invalidCardNumber: "El número de la tarjeta es inválido",
    emptyExpiryDate: "La fecha de expiración es inválida",
    monthOutOfRange: "El mes de expiración debe estar entre 01 y 12",
    yearOutOfRange: "El año de expiración no puede estar en el pasado",
    dateOutOfRange: "La fecha de expiración no puede estar en el pasado",
    invalidExpiryDate: "La fecha de expiración es inválida",
    emptyCVC: "El código de seguridad es inválido",
    invalidCVC: "El código de seguridad es inválido",
  };

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNumberChange = (event: any) => {
    const formattedCardNumber = event.target.value
      .replace(/[^\d]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedCardNumber);
  };

  const handleExpirationDateChange = (event: any) => {
    const formattedExpirationDate = event.target.value
      .replace(/[^\d]/g, "")
      .replace(/(.{2})/, "$1/")
      .trim();
    setExpirationDate(formattedExpirationDate);
  };

  const handleCvcChange = (event: any) => {
    const formattedCvc = event.target.value.replace(/[^\d]/g, "");
    setCvc(formattedCvc);
  };

  return (
    <>
      <Box>
        <Box>
          <Typography variant="subtitle1" sx={{color:'black', mx:2, fontWeight:'bold'}}>
            Número de la tarjeta de crédito:
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            flexWrap: {
              xs: "wrap",
              sm: "wrap",
              md: "nowrap",
              lg: "nowrap",
              xl: "nowrap",
            },
          }}
          justifyContent="center"
        >

  <TextField
            sx={{ border: "none", m: 1 }}
            label="Número de la tarjeta"
            placeholder="0000 0000 0000 0000"
                InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreditCardIcon />
            </InputAdornment>
          ),
        }}
            inputProps={{
              maxLength: 19, // format: 0000 0000 0000 0000
              pattern: "^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$",
              inputMode: "numeric",
            }}
            variant="standard"
            onChange={handleCardNumberChange}
            value={cardNumber}
          />
          <TextField
            sx={{ border: "none", m: 1 }}
            label="(MM/YY)"
            variant="standard"
            placeholder="MM/YY"
            inputProps={{
              maxLength: 5, // format: MM/YY
              pattern: "^(0[1-9]|1[0-2])\\/([0-9]{2})$",
              inputMode: "numeric",
            }}
            onChange={handleExpirationDateChange}
            value={expirationDate}
          />
          <TextField
            sx={{ border: "none", m: 1 }}
            label="CVC"
            variant="standard"
            placeholder="000"
            inputProps={{
              maxLength: 3, // format: 000
              pattern: "^[0-9]{3}$",
              inputMode: "numeric",
            }}
            onChange={handleCvcChange}
            value={cvc}
          />
        </Box>
      </Box>
    </>
  );
};
