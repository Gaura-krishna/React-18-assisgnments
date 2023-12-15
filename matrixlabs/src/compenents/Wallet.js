import React from 'react';
import RainbowKit from '@rainbow-me/rainbowkit';

function Wallet() {
    const [wallet, setWallet] = useState(null);

    const connectWallet = async () => {
        const wallet = await RainbowKit.connect();
        setWallet(wallet);
    };

    const getBalance = async () => {
        if (!wallet) {
            return;
        }

        const balance = await wallet.getBalance();
        return balance;
    };




    return (
        <>
            <div>
                <button onClick={connectWallet}>Connect Wallet</button>
                <p>Wallet balance: {getBalance()}</p>
            </div>

        </>

    )
}

export default Wallet

