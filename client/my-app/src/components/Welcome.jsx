import React, { useContext } from "react";
import etherium from '../Image/etherium.png'
import Loader from '../components/Loader.jsx'
import { TransactionContext } from '../context/TransactionContext'



const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
    />
)

const Welcome = () => {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);


    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;

        e.preventDefault(); // prevent page refreshing

        if (!addressTo || !amount || !message) return;

        sendTransaction();
    };

    return (<div className="MainSection">
        <div className="welcomeStyle">
            <h1 className="welcometext">Process Ethereum with elegance...</h1>
            <p className="greetingstext">Easy and Secure way to send ETHEREUM</p>
            {!currentAccount && (<button
                type="button"
                onClick={connectWallet}
                className="wlecome-button">
                <p className="button-text">Connect Wallet</p>
            </button>)}
            <div className="welcomefeatures">
                <div className="featureboxTL">
                    Relaible
                </div>
                <div className="featureboxMD">
                    Secure
                </div>
                <div className="featureboxMD">
                    User Friendly
                </div>
                <div className="featureboxMD">
                    Fast
                </div>
                <div className="featureboxMD">
                    Modern
                </div>
                <div className="featureboxBR">
                    WEB 3.0
                </div>
            </div>
        </div>
        <div className='rightSide'>

            <div className='Inputsection'>
                <div className="TokenCard">
                    <div className="TokenLogo">
                        <img src={etherium} alt="etherium" className='tokenimage' />
                        <h2 className="Cryptoname">Ethereum</h2>
                    </div>
                    <div className='TokenAddress'>
                        <h2 className="addresstxt"> &nbsp;{currentAccount}</h2>
                    </div>
                </div>
                <Input placeholder="Address to" name="addressTo" type="text" handleChange={handleChange} />
                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Enter message" name="message" type="text" handleChange={handleChange} />

                <div className='selfclosingDiv' />

                {isLoading ? (
                    <Loader />
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="sendButton"
                    >
                        send
                    </button>
                )}
            </div>
        </div>
    </div>

    )
}

export default Welcome