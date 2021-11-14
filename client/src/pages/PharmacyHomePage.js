import { Container, Box, Grid } from '@mui/material';
import Navigation from '../components/Navigation.js';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import BasicInfoCard from '../components/BasicInfoCard/BasicInfoCard';
import InsuranceInfoCard from '../components/InsuranceInfoCard/InsuranceInfoCard';
import PharmacyWorkflowCard from '../components/PharmacyWorkflowCard/PharmacyWorkflowCard';
import MedicationListGrid from '../components/MedicationList/MedicationListGrid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const StyledPaper = styled(Paper, {
    name: "StyledPaper",
    slot: "Wrapper",
  })({
    color: '#6B8068',
    backgroundColor: "white",
    margin: "auto",
    marginTop: 100,
    borderRadius: 2,
    height: 300,
    weight: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiButton-root" : { color: "#FF0000"}
  });



function PharmacyHomePage() {
  // const classes = useStyles();

  return (
    <div>    
        <Navigation />

        <Box sx={{ display:"flex", flexDirection:"row"}} >
            <Box paddingTop={10} paddingLeft={5}>
                    <BasicInfoCard />
            </Box>

            <Box paddingTop={4} paddingLeft={90}>
                <PharmacyWorkflowCard />
            </Box>
        </Box>

        <Box sx={{ display:"flex", flexDirection:"row"}} >
            <Box paddingTop={5} paddingLeft={5}>
                    <InsuranceInfoCard />
            </Box>

            <Box paddingTop={0} paddingLeft={10}>
                <MedicationListGrid />
            </Box>

        </Box>



            

        
    </div>


  );
}

export default PharmacyHomePage;
