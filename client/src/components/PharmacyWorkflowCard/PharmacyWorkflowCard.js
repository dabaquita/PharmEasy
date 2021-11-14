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
                    <Box sx={{ bgcolor: '#fdc716', width: 70, height: '20vh', borderRadius: 8}}>
                        <CardContent>
                        <br />
                            <Typography variant="h8" component="div" color="#ffffff">
                                Input
                            </Typography>
                                <br />
                            <Typography variant="h8" component="div" color="#ffffff">
                                4/2/0
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{ bgcolor: '#97d8e8', width: 70, height: '20vh', borderRadius: 8}}>
                    <CardContent>
                    <br />
                            <Typography paddingLeft={1}variant="h8" component="div" color="#ffffff">
                                Fill
                            </Typography>
                                <br />
                            <Typography variant="h8" component="div" color="#ffffff" >
                                0/6/9
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{ bgcolor: '#cccccc', width: 70, height: '20vh', borderRadius: 8}}>
                    <CardContent>
                    <br />
                            <Typography variant="h8" component="div" color="#ffffff">
                                Verify
                            </Typography>
                                <br />
                            <Typography variant="h8" component="div" color="#ffffff">
                                3/2/10
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
      </Container>
    </React.Fragment>
  );
}