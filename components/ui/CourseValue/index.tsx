import { Box, Typography } from '@mui/material'

import React, { FC } from 'react'

interface IPhrases {
    label: string
    value: string
}

interface Props {
    phrases: IPhrases[]
}


export const CourseValue: FC<Props> = ({ phrases }) => {
    return (
        <>
            <Box sx={{ width: '1068px', backgroundColor: '#D9D9D9', boxShadow: '0px 0px 10px 10px rgba(84, 108, 233, 0.5);', borderRadius: '9px',p:3,my:3 }}>
                <Box display='flex' justifyContent='center'>
                    <Box display='flex' sx={{ width: '95%' }} flexDirection='column'>
                        {
                            phrases.map(e => (
                                <>
                                <Box display='flex' sx={{ my:1}}>
                                    <Box sx={{width:'759px'}}>
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', lineHeight: '29px', fontWeight: '500',fontFamily:'Montserrat'}}>{e.label}</Typography>
                                    </Box>
                                    <Box flex={1} />
                                    <Typography variant='body1' sx={{ fontSize: '24px', color: '#380366', lineHeight: '29px', fontWeight: '500' }}>{e.value}</Typography>
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
