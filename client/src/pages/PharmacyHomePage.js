import { Box } from '@mui/material';
import Navigation from '../components/Navigation.js';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import BasicInfoCard from '../components/BasicInfoCard/BasicInfoCard';
import InsuranceInfoCard from '../components/InsuranceInfoCard/InsuranceInfoCard';
import PharmacyWorkflowCard from '../components/PharmacyWorkflowCard/PharmacyWorkflowCard';
import MedicationListGrid from '../components/MedicationList/MedicationListGrid';
import lottie from "lottie-web";
import { useEffect, useRef } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const Background = styled("div", {
  name: "Background",
  slot: "Wrapper",
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  zIndex: -2,
  margin: "auto",
  padding: 0,
  // backgroundColor: "purple"
});

const AnimationContainer = styled("div", {
  name: "AnimationContainer",
  slot: "Wrapper",
})({
  bottom: 0,
  left: 0,
  right: 0,
  margin: "0",
  width: "100%",
  // backgroundColor: "purple"
});

const PharmacyHomePage = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../animations/bg.json')
    });
  }, []);

  return (
    <Background>    
        <Navigation />
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
        <AnimationContainer className="container" ref={container} />
    </Background>
  );
};

export default PharmacyHomePage;
