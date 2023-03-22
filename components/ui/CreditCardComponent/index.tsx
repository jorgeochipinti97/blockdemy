import { Box } from "@mui/system";
import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

export const CreditCardComponent = () => {
  const ERROR_MESSAGES = {
    emptyCardNumber: 'El número de la tarjeta es inválido',
    invalidCardNumber: 'El número de la tarjeta es inválido',
    emptyExpiryDate: 'La fecha de expiración es inválida',
    monthOutOfRange: 'El mes de expiración debe estar entre 01 y 12',
    yearOutOfRange: 'El año de expiración no puede estar en el pasado',
    dateOutOfRange: 'La fecha de expiración no puede estar en el pasado',
    invalidExpiryDate: 'La fecha de expiración es inválida',
    emptyCVC: 'El código de seguridad es inválido',
    invalidCVC: 'El código de seguridad es inválido'
  }


  
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs({ errorMessages: ERROR_MESSAGES});
  return (
    <Box sx={{maxWidth:'80%'}}>

    <PaymentInputsWrapper {...wrapperProps}>
    {/* <svg {...getCardImageProps({ images })} /> */}
    <input style={{backgroundColor:'white',color:'black',width:'70%'}}{...getCardNumberProps()} />
    <input style={{backgroundColor:'white',color:'black',width:'30%'}}{...getExpiryDateProps()} />
    <input style={{backgroundColor:'white',color:'black',width:'30%'}}{...getCVCProps()} />
  </PaymentInputsWrapper>
    </Box>
  );
};
