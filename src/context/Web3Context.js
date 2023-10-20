import React, { createContext, useState, useContext } from 'react';
import Web3 from 'web3';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWeb3(web3Instance);
            setAccount(accounts[0]);
        } else {
            console.error("Ethereum provider is not installed");
        }
    };

    return (
        <Web3Context.Provider value={{ web3, account, connectWallet }}>
            {children}
        </Web3Context.Provider>
    );
};

export const useWeb3 = () => {
    return useContext(Web3Context);
};

export default Web3Context;
