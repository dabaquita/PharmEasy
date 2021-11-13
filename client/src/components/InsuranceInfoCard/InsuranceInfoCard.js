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
      <Typography variant="h8" component="div">
        Bin: 001233 <br />
        PCN: FLBC <br />
        ID: H245914806 <br />
        Group: 9999 <br /> <br />
      </Typography>

        <Typography variant="body2" component="div">
            Relation: Cardholder <br />
            Description: 
        </Typography>

    </CardContent>
    <CardActions>
      <Button size="small">Edit Card</Button>
      <Button size="small">Add Card</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 400 }}>
      <Card variant="outlined">{BasicInfoCard}</Card>
    </Box>
  );
}