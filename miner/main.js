const express = require('express');
const bodyParser = require("body-parser");
const Web3 = require('web3');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const web3 = new Web3('https://sepolia.infura.io/v3/1d2d5def71f94ffcb8822005cceeca14');

const CryptoJS = require("crypto-js");
var miningInterval; // Global variable to hold the mining interval ID

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

// Start mining route
app.get('/start-mining', (req, res) => {
    res.redirect('/');
    startMining();
});

// Stop mining route
app.get('/stop-mining', (req, res) => {
    res.redirect('/');
    stopMining();
});

function startMining() {
    console.log("mining started")
    miningInterval = setInterval(simulateMining, 10);
}

function stopMining() {
    clearInterval(miningInterval);
    console.log("mining stopped");
    process.exit(0)
}

function simulateMining() {
    let nonce = Math.floor(Math.random() * 10); // range can be changed according to difficulty.
    let target = 10; // Difficulty target 
    const startTime = Date.now();
    const maxDuration = 1 * 60 * 1000; // max duration to run the function 
    //const targetCPUUsage = 0.7;
    let elapsed = 0
    let cpuUsage = 0
    while (true) {
        const now = Date.now();
        elapsed = now - startTime;
        //cpuUsage = performance.now() / 1000;
        console.log(maxDuration)

        if (elapsed > maxDuration) {
            console.log("TIMEOUT")
            //transferETH()
            stopMining()
        }

        if (cpuUsage > 150) {
            console.log("MINING STOPPED : CPU THROTTLE DETECTED")
            stopMining()
        }

        let hash = sha256(nonce); // Calculate the SHA-256 hash of the nonce
        console.log("HASH : " + hash);
        console.log("MINING NOW == Time Elapsed : " + Math.floor(elapsed) + "ms")
        console.log()
        // Check if the hash is less than the target
        if (parseInt(hash, 16) < target) {
            console.log(hash);
            console.log("Block mined with nonce: " + nonce);
            clearInterval(miningInterval); // Stop the mining process
            //transferETH();
            break;
        }

        nonce++; // Increment the nonce and try again
    }
}

// A simple SHA-256 hash function (for demonstration purposes only)
function sha256(input) {
    let hash = CryptoJS.SHA256(input.toString());
    return hash.toString(CryptoJS.enc.Hex);
}


// transfer ethereum

/* Connect to an Ethereum node or provider
function transferETH() {

    // Set the sender and recipient addresses and the amount of Ethereum to transfer
    // 17 real ETH account // 0x1234567890123456789012345678901234567890
    const sender = '';
    const recipient = "";
    const amount = web3.utils.toWei('0.0005', 'ether');

    // Set the gas price and limit
    const gasPrice = web3.utils.toWei('10', 'gwei');
    const gasLimit = 21000;

    // Create a transaction object
    const txObject = {
        from: sender,
        to: recipient,
        value: amount,
        gasPrice: gasPrice,
        gas: gasLimit,
    };

    // Sign the transaction with the sender's private key
    const privateKey = '';
    const signedTx = web3.eth.accounts.signTransaction(txObject, privateKey);

    // Send the signed transaction to the Ethereum network
    const txReceipt = web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    // Monitor the transaction status
    console.log(`Transaction hash: ${txReceipt.transactionHash}`);
    console.log(`Gas used: ${txReceipt.gasUsed}`);
    console.log(`Transaction status: ${txReceipt.status}`);
}*/

app.listen(3500, () => {
    console.log('Server started on port 3500');
});