import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

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

  const getCardImageProps: GetCardImageProps = (props = { images: null }) => {
    return {
      "aria-label": "Card Image",
      children: <image href={props.images} />,
      width: "100%",
      height: "100%",
      viewBox: "0 0 400 400",
    };
  };
  const { wrapperProps, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs({ errorMessages: ERROR_MESSAGES });
  return (
    <>
      <Box display="flex" flexDirection='column'>
        <Box display="flex" justifyContent="start">
          <Typography variant="subtitle1" sx={{ textAlign: "start" ,color:'black',mb:1,fontWeight:'bold'}}>
            Número de la tarjeta de crédito:
          </Typography>
        </Box>
        <Box>
          <Box sx={{ maxWidth: "100%" }}>
            <PaymentInputsWrapper {...wrapperProps}>
              {/* <svg {...getCardImageProps({ images })} /> */}
              <input
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "70%",
                }}
                {...getCardNumberProps()}
                placeholder="Numero de la tarjeta"
              />
              <input
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "30%",
                }}
                {...getExpiryDateProps()}
              />
              <input
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "30%",
                }}
                {...getCVCProps()}
              />
            </PaymentInputsWrapper>
          </Box>
        </Box>
      </Box>
    </>
  );
};
