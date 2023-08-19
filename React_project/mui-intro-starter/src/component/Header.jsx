import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgCard from "../images/resim.png"

export default function Header() {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 2 }}>
      <CardMedia
        component="img"
        alt="consulmen"
        height="140"
        image={imgCard}
        sx={{objectFit: "contain"}}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Arkhe Family Consulmen
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The family is the most important building block of society. That's why it takes dedication, effort and care.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
