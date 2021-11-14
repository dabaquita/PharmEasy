import { SvgIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import PharmEasyLogo from "../images/PharmEasyLogo.svg";

const ImageContainer = styled("div", {
  name: "ImageContainer",
})({
  // height: "50%",
  // width: "50%",
});

const LogoContainerDefault = styled("div", {
  name: "CenteredLogo",
})({
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
});

const LogoContainerCentered = styled("div", {
  name: "DefaultLogo",
})({
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
});

const Logo = ({ pos }) => {
  if (pos === "centered") {
    return (
      <div>
        <LogoContainerCentered>
        <SvgIcon>
          {/* <PharmEasyLogo /> */}
          </SvgIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PharmEasyCentered
          </Typography>
        </LogoContainerCentered>
      </div>
    );
  } else {
    return (
      <div>
        <LogoContainerDefault>
          <SvgIcon>
            <img src={PharmEasyLogo} />
          </SvgIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PharmEasyDefault
          </Typography>
        </LogoContainerDefault>
      </div>
    );
  }
};

export default Logo;
