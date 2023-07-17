import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function Section1() {
  return (
    <Box marginY={10} align='center'>
        <Grid container justifyContent='center'>
             <Grid item xs={12} md= {8} lg={8}>
                <Box>
                <Typography variant='h2' fontWeight={300}>
                    Album layout
                </Typography>

                <Typography variant='h5' fontWeight={300} color={(theme) => theme.palette.mode === 'light'? grey[700] : grey[300]} marginY={5}>
                    Something short and leading about the collection 
                    below—its contents, the creator, etc. Make it short
                    and sweet, but not too short so folks don't simply 
                    skip over it entirely.
                </Typography>
                <Box sx={{display: 'inline-flex', flexDirection: {sx: 'column', md: 'row'}, gap: '15px'}}>
                    
                    <Button variant='contained'>
                        Main Call to action
                    </Button>
                    <Button variant='outlined'>
                        Secondary action
                    </Button>
                    
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Box> 
  )
}

export default Section1