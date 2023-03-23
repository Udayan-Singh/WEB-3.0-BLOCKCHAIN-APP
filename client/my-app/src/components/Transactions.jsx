import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    return (
        <div className="TransactionCard">
            <div className="TransactionDets">
                <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                    <p>Sender : {addressFrom.slice(0, 10)}</p>
                </a>
                <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                    <p>Receiver : {addressTo.slice(0, 10)}</p>
                </a>
                <h2>Amount: {amount} ETH</h2>
                <p>Message: {message}</p>
                <div className="timestamp">
                    <p>{timestamp}</p>
                </div>
            </div>

        </div>
    );
};

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

    return (
        <div className="transactionArea">
            <div className="TransactionUpdater">
                {currentAccount ? (
                    <h1 className="">
                        All Transactions
                    </h1>
                ) : (
                    <h1 className="">
                        Connect your account to see this your transactions
                    </h1>
                )}

                <div className="transactionInfo">
                    {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                        <TransactionsCard key={i} {...transaction} />
                    ))}
                </div>
                
            </div>

        </div>
    );
};

export default Transactions;