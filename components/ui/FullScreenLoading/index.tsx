
import { Box, CircularProgress, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const FullScreenLoading = () => {
  return (
    <Box 
        display='flex' 
        flexDirection='column'
        justifyContent='center' 
        alignItems='center' 
        height='100vh'
    >
        <Image src='/block-academy-cyb-.png' alt='' width={400} height={400}/>
        <Typography sx={{ mb: 3 }} variant="h2" fontWeight={ 200 } fontSize={ 20 }>¡Por favor espere!</Typography>
        <CircularProgress thickness={ 2 } />
    </Box>
  )
}