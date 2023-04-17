import { Box, Typography } from '@mui/material'
import React, { FC, useState } from 'react'




interface Props {
    question: string
    label: String
}

export const FaqComponent: FC<Props> = ({ question, label }) => {
    const [clicked, setIsClicked] = useState(false)


    const handleClick = () => {
        setIsClicked(!clicked)
    }


    return (
        <>
            <Box sx={{ backgroundColor: clicked ? '#D3ABF5' : '', borderRadius: '9px', height: clicked ? '308px' : '114px' }} onClick={handleClick} >
                <Box sx={{p:2}}>
                    <Typography variant='body1' sx={{ fontSize: '32px', color: clicked ? '#380366' : '#252425', fontFamily: 'Montserrat', lineHeight: '39.01px',mx:2, fontWeight: clicked ? '700' : '500', borderRadius: '9px' }}>{question}</Typography>
                </Box>
                <Box>
                    <Typography variant='body1' sx={{ fontSize: '28px', color: '#380366', fontWeight: '350', lineHeight: '34.13px', fontFamily: 'Montserrat',p:2,mx:2, display: clicked ? '' : 'none' }}>{label}</Typography>
                </Box>

            </Box>
        </>
    )
}
