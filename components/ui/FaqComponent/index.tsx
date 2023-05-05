import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Props {
    question: string
    label: String
    marginNumber: number
    isMobile: boolean
}

export const FaqComponent: FC<Props> = ({ question, label, marginNumber, isMobile }) => {
    const [clicked, setIsClicked] = useState(false)


    const handleClick = () => {
        setIsClicked(!clicked)
    }


    return (
        <>

            <Accordion sx={{
                border: 'none !important', borderRadius: '9px', boxShadow: 'none', backgroundColor: !clicked ? '#D9D9D9' : '#D3ABF5', width: '100%', '&:before': {
                    display: 'none',
                }
            }} onChange={handleClick} >
                <AccordionSummary
                    sx={{ borderBottom: 'none !important', border: 'none !important' }}
                >
                    <Box display='flex' justifyContent='start' alignItems='center'>
                        <ExpandMoreIcon sx={{
                            color: "white",
                            backgroundColor: clicked ? '#380366' : 'gray',
                            borderRadius: '100px',
                            transition: "background-color 0.5s ease-in-ou",
                            mr: 1,
                        }} />
                        <Typography
                            variant="body1"
                            textAlign={isMobile ? "start" : "center"}
                            sx={{
                                fontSize: isMobile ? "14px" : "1.5rem",
                                color: clicked ? "#380366" : "#333",
                                fontWeight: "bold",
                                transition: "color 0.5s ease", fontFamily: 'Montserrat'
                            }}
                        >
                            {question}
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ borderBottom: 'none !important', border: 'none !important' }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: isMobile ? "12px" : "1rem",
                            color: "#380366",
                            transition: "all 1s ease-in-out",
                            textAlign: 'justify', fontFamily: 'Montserrat'
                        }}
                    >
                        {label}
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </>
    )
}
