import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from "next/image";

interface Props {
    image: string;
    body: string;
}

export const ContentSliderCard: FC<Props> = ({ image, body }) => {
    return (
        <>
            <Box>
                <Box display='flex' justifyContent='center'>
                    <Image src={`${image}`} width={100} height={100} alt='' />
                </Box>
                <Box display='flex' justifyContent='center' sx={{ py: 2 }}>
                    <Box display='flex' justifyContent='center' sx={{ py: 2, width:'90%' }}>
                        <Typography variant='body1' sx={{ color: 'white', textAlign: 'center', fontWeight: '700', lineHeight: '25px', fontSize: '20px',fontFamily:'Montserrat' }}>{body} </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
