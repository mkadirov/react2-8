import React from 'react'
import Card1 from '../../Cards/Card'
import { Box, Grid } from '@mui/material'

function Section2() {
    const cards =()=> {
        return Array(9).fill(<Card1/>)
    }
  return (
    <Box >
        <Grid container spacing={4} justifyContent='center'>
            {
                cards().map((item, index) => {
                    return(
                        <Grid item xs={11} md={6} lg= {4} marginBottom={4}  sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card1 key={index} />
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default Section2