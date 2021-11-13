import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: 210, height: '20vh', borderRadius: 8}}>
                    <Box sx={{ bgcolor: '#fff222', width: 70, height: '20vh', borderRadius: 8}}>
                        <CardContent>
                        <br />
                            <Typography variant="h8" component="div">
                                Input
                            </Typography>
                                <br />
                            <Typography variant="h8" component="div">
                                4/2/0
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{ bgcolor: '#cfe8fc', width: 70, height: '20vh', borderRadius: 8}}>
                    <CardContent>
                    <br />
                            <Typography variant="h8" component="div">
                                Fill
                            </Typography>
                                <br />
                            <Typography variant="h8" component="div">
                                0/6/9
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{ bgcolor: '#cccccc', width: 70, height: '20vh', borderRadius: 8}}>
                    <CardContent>
                    <br />
                            <Typography variant="h8" component="div">
                                Verify
                            </Typography>
                                <br />
                            <Typography variant="h8" component="div">
                                3/2/10
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
      </Container>
    </React.Fragment>
  );
}