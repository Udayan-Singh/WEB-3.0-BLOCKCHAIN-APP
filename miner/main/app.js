const Web3 = require('web3');
const ethers = require('ethers');
const express = require('express');
const app = express();
//import api from "./miner"

// Connect to the Ethereum network
const web3 = new Web3(new Web3.providers.HttpProvider("<infura web API>"));

// Set up a new Ethereum wallet
const wallet = ethers.Wallet.createRandom();



// Connect to the Ethereum network
web3.eth.net.isListening().then(() => {
    console.log('Connected to the Ethereum network');
}).catch((error) => {
    console.error(error);
});


web3.eth.isSyncing((error, syncStatus) => {
    if (error) {
        console.error(error);
    } else if (syncStatus === false) {
        console.log('Personal API is enabled on this node.');
    } else {
        console.log('Node is syncing.');
    }
});


// Start mining
web3.eth.getAccounts().then((accounts) => {
    if (accounts.length > 0) {
        console.log(accounts)
        web3.eth.personal.unlockAccount(accounts[0], '', 0).then(() => {
            web3.eth.mining.start().then(() => {
                console.log('Mining started');
            }).catch((error) => {
                console.error(error);
            });
        }).catch((error) => {
            console.error(error);
        });
    } else {
        console.error('No accounts found');
    }
}).catch((error) => {
    console.error(error);
});

const address = "<your wallet address>";
const password = "<ethereum wallet passphrase/password>";

async function startMining() {
    try {
        await web3.eth.personal.unlockAccount(address, password, 60);
        const result = await web3.eth.personal.startMining();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function stopMining() {
    try {
        const result = await web3.eth.personal.stopMining();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Handle form submission
app.post('/start-mining', (req, res) => {
    const address = req.body.address;
    if (web3.utils.isAddress(address)) {
        wallet.connect(web3);
        web3.eth.personal.unlockAccount(wallet.address, '', 0).then(() => {
            startMining();
            res.redirect('/');
        });
    } else {
        res.send('Invalid wallet address');
    }
});

// Start mining route
app.get('/start-mining', (req, res) => {
    startMining();
    res.redirect('/');
});

// Stop mining route
app.get('/stop-mining', (req, res) => {
    stopMining();
    res.redirect('/');
});

// Home page route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});


