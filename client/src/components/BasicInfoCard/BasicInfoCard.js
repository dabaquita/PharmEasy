import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const BasicInfoCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Esguerra, Justin Kieran
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        05/02/1997   -   954-682-****
      </Typography>
      <Typography variant="body2">
        Address: 13007 Marsh St. Orlando 32929
        <br /> 
        <br />
      </Typography>
      <Typography sx={{ mb: 0.5 }} variant="body3">
        Hypertension | No Allergy
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Edit Profile</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ width: 400 }}>
      <Card variant="none">{BasicInfoCard}</Card>
    </Box>
  );
}