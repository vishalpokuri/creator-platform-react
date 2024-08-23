import React, { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
function HomePageLogin() {
  console.log("homepage rendered");
  const [userDetails, setUserDetails] = useState(null);
  const [portfolioData] = useState(null);
  const [wallets, setWallets] = useState(null);
  const [transferResponse] = useState(null);
  const [orderResponse] = useState(null);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const { getUserDetails, createWallet } = useOkto();

  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/dashboard");
  }
  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
      setActiveSection("userDetails");
    } catch (error) {
      setError(`Failed to fetch user details: ${error.message}`);
    }
  };

  const fetchWallets = async () => {
    try {
      const walletsData = await createWallet();
      localStorage.setItem("wallets", walletsData);
      console.log(walletsData);
      setWallets(walletsData);
      setActiveSection("wallets");
    } catch (error) {
      setError(`Failed to fetch wallets: ${error.message}`);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };
  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1>Home Page</h1>

      <div>
        <button style={buttonStyle} onClick={fetchUserDetails}>
          View User Details
        </button>

        <button style={buttonStyle} onClick={fetchWallets}>
          View Wallets
        </button>
        <button>
          <Button onClick={handleNavigate}></Button>
        </button>
      </div>
      {activeSection === "userDetails" && userDetails && (
        <div>
          <h2>User Details:</h2>
          <pre>{JSON.stringify(userDetails, null, 2)}</pre>
        </div>
      )}
      {activeSection === "portfolio" && portfolioData && (
        <div>
          <h2>Portfolio Data:</h2>
          <pre>{JSON.stringify(portfolioData, null, 2)}</pre>
        </div>
      )}
      {activeSection === "wallets" && wallets && (
        <div>
          <h2>Wallets:</h2>
          <pre>{JSON.stringify(wallets, null, 2)}</pre>
        </div>
      )}
      <h2>Transfer Tokens</h2>

      {activeSection === "transferResponse" && transferResponse && (
        <div>
          <h2>Transfer Response:</h2>
          <pre>{JSON.stringify(transferResponse, null, 2)}</pre>
        </div>
      )}
      <h2>Check Order</h2>

      {activeSection === "orderResponse" && orderResponse && (
        <div>
          <h2>Order Status:</h2>
          <pre>{JSON.stringify(orderResponse, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: "red" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
export default HomePageLogin;
