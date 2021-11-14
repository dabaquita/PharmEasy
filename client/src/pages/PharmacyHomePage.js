import { Box } from "@mui/material";
import Navigation from "../components/Navigation.js";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import BasicInfoCard from "../components/BasicInfoCard/BasicInfoCard";
import InsuranceInfoCard from "../components/InsuranceInfoCard/InsuranceInfoCard";
import PharmacyWorkflowCard from "../components/PharmacyWorkflowCard/PharmacyWorkflowCard";
import MedicationListGrid from "../components/MedicationList/MedicationListGrid";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(1),
  marginTop: 50,
  textAlign: "left",
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
});

const HomePageBox = styled("div", {
  name: "HomePageBox",
  slot: "Wrapper",
})({
  // margin: "auto",
  marginTop: "50",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const CardHolder = styled("div", {
  name: "CardHolder",
  slot: "Wrapper",
})({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "center",
  margin: "auto",
  padding: 0,
});

const TopDiv = styled("div", {
  name: "TopDiv",
  slot: "Wrapper",
})({
  position: "relative",
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "auto",
  marginBottom: "10%",
  padding: 0,
});

const PillWrapper = styled("div", {
  name: "PillWrapper",
  slot: "Wrapper",
})({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop:20,
});

const TableContainer = styled("div", {
  name: "TopDiv",
  slot: "Wrapper",
})({
  position: "relative",
  marginTop: "20",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PharmacyHomePage = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/bg.json"),
    });
  }, []);

  return (
    <Background>
      <Navigation isUserLoggedIn={true}/>
      <HomePageBox>
        <TopDiv>
          <CardHolder>
            <Item>
              <BasicInfoCard />
            </Item>
            <Item>
              <InsuranceInfoCard />
            </Item>
          </CardHolder>
          <PillWrapper>
            <PharmacyWorkflowCard />
          </PillWrapper>
        </TopDiv>

        <TableContainer>
          <MedicationListGrid />
        </TableContainer>
        <AnimationContainer className="container" ref={container} />
      </HomePageBox>
    </Background>
  );
};

export default PharmacyHomePage;
