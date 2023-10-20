

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Evolve X Roko Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import roko from "examples/Icons/RokoLogo"

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "Node", align: "left" },
    { name: "compute", align: "left" },
    { name: "status", align: "left" },
    { name: "blocks", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      Node: (
        <VuiBox display="flex" alignItems="center">
          <roko size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Alpha.ens
          </VuiTypography>
        </VuiBox>
      ),
      compute: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          289 TFLOPs
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Running
        </VuiTypography>
      ),
      blocks: <Completion value={27} color="info" />,
      action,
    },
    {
      Node: (
        <VuiBox display="flex" alignItems="center">
          <roko size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          2DMPTfTL5SLmv7DivfNa1A1zP1eP5QGefi
          </VuiTypography>
        </VuiBox>
      ),
      compute: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          723 TFLOPs
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Running
        </VuiTypography>
      ),
      blocks: <Completion value={93} color="info" />,
      action,
    },
    {
      Node: (
        <VuiBox display="flex" alignItems="center">
          <roko size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          P5QGefi2DMPTfTL5SLmv7DivfNa
          </VuiTypography>
        </VuiBox>
      ),
      compute: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          397 TFLOPs
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Running
        </VuiTypography>
      ),
      blocks: <Completion value={60} color="info" />,
      action,
    },
    {
      Node: (
        <VuiBox display="flex" alignItems="center">
          <roko size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
          </VuiTypography>
        </VuiBox>
      ),
      compute: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          982 TFLOPs
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Running
        </VuiTypography>
      ),
      blocks: <Completion value={81} color="info" />,
      action,
    },
    {
      Node: (
        <VuiBox display="flex" alignItems="center">
          <roko size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
          </VuiTypography>
        </VuiBox>
      ),
      compute: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          209 TFLOPs
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Unhealthy
        </VuiTypography>
      ),
      blocks: <Completion value={11} color="info" />,
      action,
    },
  ],
};
