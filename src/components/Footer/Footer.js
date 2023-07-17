import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function Footer() {
  return (
    <Box align='center' paddingY={10}>
        <Typography variant='h6'>
            Footer
        </Typography>

        <Typography fontSize={14} color={grey[400]}>
          Something here to give the footer a purpose!
        </Typography>
        <Typography fontSize={14} color={grey[400]}>
          Copyright © Your Website 2023.
        </Typography>
    </Box>
  )
}

export default Footer