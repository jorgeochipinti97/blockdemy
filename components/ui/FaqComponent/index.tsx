import { Box, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Props {
    question: string
    label: String
    marginNumber: number
}

export const FaqComponent: FC<Props> = ({ question, label, marginNumber }) => {
    const [clicked, setIsClicked] = useState(false)


    const handleClick = () => {
        setIsClicked(!clicked)
    }


    return (
        <>
            <Box sx={{ backgroundColor: clicked ? '#D3ABF5' : '', borderRadius: '9px', p: 1, my: marginNumber }} onClick={handleClick} >
                <Box display='flex' alignItems='center' justifyContent='start'>
                  {  clicked ?  (< KeyboardArrowRightIcon sx={{fontSize:30}} />) : (<ExpandMoreIcon sx={{fontSize:30}}/>) }
                    <Box sx={{ py: 2 }}>
                        <Typography variant='body1' sx={{ fontSize: '32px', color: clicked ? '#380366' : '#252425', fontFamily: 'Montserrat', lineHeight: '39.01px', mx: 2, fontWeight: clicked ? '700' : '500', borderRadius: '9px' }}>{question}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='body1' sx={{ fontSize: '28px', color: '#380366', fontWeight: '350', lineHeight: '34.13px', fontFamily: 'Montserrat', p: 2, mx: 2, display: clicked ? '' : 'none' }}>{label}</Typography>
                </Box>
            </Box>
        </>
    )
}
