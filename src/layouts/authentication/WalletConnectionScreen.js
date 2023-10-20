import React, { useContext } from 'react';
import Web3Context from 'context/Web3Context';

const WalletConnectionScreen = () => {
    const { connectWallet } = useContext(Web3Context);

    return (
        <div>
            <h1>Please connect your Web3 wallet</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
        </div>
    );
};

export default WalletConnectionScreen;
