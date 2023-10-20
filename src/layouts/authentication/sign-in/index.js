

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Web3 from "web3";

// Evolve X Roko Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";

// Evolve X Roko Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signInImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [account, setAccount] = useState(null);
  const [showTokenInput, setShowTokenInput] = useState(false);  // New State
  const [enteredToken, setEnteredToken] = useState(''); // New State
  const history = useHistory();  // For navigating to /dashboard

  const imageContext = require.context('assets/images/RokoGenImages', false, /\.(png|jpe?g)$/);
  const imagesArray = imageContext.keys().map(imageContext);
  const randomImageIndex = Math.floor(Math.random() * imagesArray.length);
  const randomImage = imagesArray[randomImageIndex];

  const handleShowTokenInput = () => {
    setShowTokenInput(true);
  };
  
  const handleTokenChange = (event) => {
    setEnteredToken(event.target.value);
  };

  const handleSubmitToken = () => {
    const hardcodedToken = "ROKODEVBOYS22";
    if (enteredToken === hardcodedToken) {
      localStorage.setItem("walletConnected", "true"); // Marking as connected for uniformity
      history.push("/dashboard");
    } else {
      alert("Invalid code!");
    }
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        localStorage.setItem("walletConnected", "true");
        localStorage.setItem("walletAddress", accounts[0]);
        // Set a timeout to redirect to the dashboard after 3 seconds
        setTimeout(() => {
          history.push("/dashboard");
        }, 500);
      } catch (error) {
        console.error("User denied account access");
      }
    } 
    else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        localStorage.setItem("walletConnected", "true");
        localStorage.setItem("walletAddress", accounts[0]); // Store the wallet address

    } 
    else {
        console.error("Ethereum browser extension not detected");
    }
};
  return (
    <CoverLayout
      title="Nice to see you!"
      color="white"
      description="Connect your wallet to get in"
      premotto="THE FUTURE OF AI:"
      motto="ROKO NETWORK"
      image={randomImage}
    >
      <VuiBox component="form" role="form">
        <VuiBox mt={4} mb={1}>
          <VuiButton color="info" fullWidth onClick={connectWallet}>
            Connect Wallet
          </VuiButton>
        </VuiBox>
        <VuiBox mt={3} textAlign="center">
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Got a special token?{" "}
{/*             <VuiTypography
              component={Link}
              to="/authentication/dashboard"
              variant="button"
              color="white"
              fontWeight="medium"
            >
              Enter code
            </VuiTypography> */}
                    {showTokenInput ? (
          <>
            <VuiInput 
              value={enteredToken}
              onChange={handleTokenChange}
              placeholder="Enter your token"
            />
            <VuiButton style={{ marginTop: '16px' }} color ="info" onClick={handleSubmitToken}>Submit</VuiButton>
          </>
        ) : (
          <VuiTypography
            component="span"
            variant="button"
            fontWeight="medium"
            color="white"
            onClick={handleShowTokenInput}
          >
            Enter code
          </VuiTypography>
        )}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox mt={3} textAlign="center">
    {account ? (
        <VuiTypography variant="button" color="text" fontWeight="regular">
            Connected Wallet: {account}
        </VuiTypography>
    ) : (
        <VuiTypography variant="button" color="text" fontWeight="regular">
            Please connect your wallet.
        </VuiTypography>
    )}
</VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
