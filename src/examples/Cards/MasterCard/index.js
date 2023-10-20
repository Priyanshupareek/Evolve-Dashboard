

// prop-types is a library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import billingCard from "assets/images/billing-background-card.png";
// Evolve X Roko Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import PropTypes from "prop-types";
import { RiMastercardFill } from "react-icons/ri";

import { FaEllipsisH } from "react-icons/fa";
import Graph from "assets/images/shapes/graph-billing.svg";

import Rokologo from "assets/images/logos/RokoLogo.png";


function MasterCard({ number, valid, cvv }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 3).join("");
  const num2 = numbers.slice(3, 6).join("");
  const num3 = numbers.slice(6, 9).join("");
  const num4 = numbers.slice(9, 12).join("");

  return (
    <Card sx={{ background: `url('${billingCard}')`, backdropfilter: "blur(31px)" }}>
      <VuiBox p={2} pt={0}>
        <VuiBox
          color="white"
          lineHeight={0}
          display="flex"
          justifyContent="space-beetween"
          alignItems="center"
          width="100%"
          sx={{ width: "100%" }}
        >
          <VuiTypography color="white" variant="lg" fontWeight="bold" mr="auto">
            ROKO
          </VuiTypography>
        </VuiBox>
        <VuiTypography
          variant="h4"
          color="white"
          mt="auto"
          fontWeight="medium"
          sx={({ breakpoints }) => ({
            mt: 2,
            pb: 1,
            [breakpoints.only("sm")]: {
              fontSize: "22px",
            },
          })}
        >
        </VuiTypography>
        <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
          </VuiBox>
          <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
          <VuiBox component="img" src={Rokologo} sx={{ width: "50px", height: "50px" }} />
            <VuiTypography variant="h2" color="white" fontWeight="bold" mr="auto">
              925,214
            </VuiTypography>
            <VuiBox component="img" src={Graph} sx={{ width: "58px", height: "20px" }} />
          </VuiBox>
          <VuiTypography variant="caption" color="white" fontWeight="medium" mr="auto">
              ~ $26,000
            </VuiTypography>
        

      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "text",
  ]),
};

export default MasterCard;
