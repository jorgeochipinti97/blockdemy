
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
      sx={{backgroundColor:'black'}}
    >
      <Box sx={{ width: '40%' }}>
        <img src='/Block-Academy-cyb-.png' alt='' style={{ maxWidth: '100%' }} />
      </Box>
      <Typography sx={{ mb: 3,color:'white' }} variant="h2" fontWeight={200} fontSize={20}>¡Por favor espere!</Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}