import { Box, Typography } from '@mui/material'

import React, { FC } from 'react'

interface IPhrases {
    label: string
    value: string
}

interface Props {
    phrases: IPhrases[]
    isMobile: boolean
}


export const CourseValue: FC<Props> = ({ phrases, isMobile }) => {
    return (
        <>
            <Box sx={{ width: isMobile ? "90%" : '1068px', backgroundColor: '#D9D9D9', boxShadow: '0px 0px 10px 10px rgba(84,108,233,.3);', borderRadius: '9px', p: 3, my: 3 }}>
                <Box display='flex' justifyContent='center'>
                    <Box display='flex' sx={{ width: '95%' }} flexDirection='column'>
                        {
                            phrases.map(e => (
                                <>
                                    <Box display='flex' sx={{ my: 1 }}>
                                        <Box sx={{ width: isMobile ? "60%" : '759px' }}>
                                            <Typography variant='body1' sx={{ fontSize: isMobile ? "12px" : '24px', color: '#380366', lineHeight: isMobile ? "20px" : '29px', fontWeight: isMobile ? "700" : '500', fontFamily: 'Montserrat' }}>{e.label}</Typography>
                                        </Box>
                                        <Box flex={1} />
                                        <Box display={isMobile ? 'flex' : 'flex'} alignItems={isMobile ? 'start' : 'center'} >
                                            <Typography variant='body1' sx={{ fontSize: isMobile ? "12px" : '24px', color: '#380366', lineHeight: '29px', fontWeight: isMobile ? "700" : '500', fontFamily: 'Montserrat' }}>{e.value}</Typography>
                                        </Box>
                                    </Box>
                                </>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}
