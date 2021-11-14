import { Box } from '@mui/material';
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

const PharmacyHomePage = () => {
  return (
    <div>    
        <Navigation isUserLoggedIn={true}/>
        <Box sx={{ display:"flex", flexDirection:"row"}} >
            <Box paddingTop={10} paddingLeft={5}>
              <Item>
                <BasicInfoCard />
              </Item>
            </Box>

            <Box paddingTop={4} paddingLeft={90}>
              <PharmacyWorkflowCard />
            </Box>
        </Box>

        <Box sx={{ display:"flex", flexDirection:"row"}} >
            <Box paddingTop={5} paddingLeft={5}>
              <Item>
                <InsuranceInfoCard />
              </Item>
            </Box>

            <Box paddingTop={0} paddingLeft={10}>
              <MedicationListGrid />
            </Box>
        </Box>
    </div>
  );
};

export default PharmacyHomePage;
