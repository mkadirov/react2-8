import { Box, Container } from '@mui/material'
import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'

function Main() {
  return (
    <Box >
        <Container>
          <Section1/>
          <Section2/>
        </Container>
    </Box>
  )
}

export default Main