import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material';


export default function Card1() {

  const StyledCard = styled(Card)({
    maxWidth: '420px'
  })

  return (
    <StyledCard sx={{ '&:hover' : { boxShadow: 10} }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://source.unsplash.com/random?wallpapers"
        title="green iguana"
      />
      <CardContent sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'? grey[200] : grey[900]
      }}>
        <Typography gutterBottom variant="h5" component="div">
          Headding
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'? grey[200] : grey[900]
      }}>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </StyledCard>
  );
  
}