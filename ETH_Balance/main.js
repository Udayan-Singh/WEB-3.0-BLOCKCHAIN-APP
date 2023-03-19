const express = require("express");
const Web3 = require('web3');
const ejs = require("ejs");
require("dotenv").config();

const app = express();
const port = 4000;
app.set('view engine', 'ejs');



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html")
})
const M_web3 = new Web3(process.env.MAPIID);
app.get('/M-balance/:address', (req, res) => {
    const address = req.params.address;

    M_web3.eth.getBalance(address, (error, wei) => {
        if (error) {
            res.send(error);
        } else {
            const balance = M_web3.utils.fromWei(wei, 'ether');
            res.render("index", {Name:address, Balance:balance})
            /*res.send(`Balance of ${address}: ${balance} ETH`);*/
        }
    });
});

const G_web3 = new Web3(process.env.GAPIID);
app.get('/G-balance/:address', (req, res) => {
    const address = req.params.address;

    G_web3.eth.getBalance(address, (error, wei) => {
        if (error) {
            res.send(error);
        } else {
            const balance = G_web3.utils.fromWei(wei, 'ether');
            res.render("index", {Name:address, Balance:balance})
            //res.send(`Balance of ${address}: ${balance} ETH`);
        }
    });
});

const S_web3 = new Web3(process.env.SAPIID);
app.get('/S-balance/:address', (req, res) => {
    const address = req.params.address;

    S_web3.eth.getBalance(address, (error, wei) => {
        if (error) {
            res.send(error);
        } else {
            const balance = S_web3.utils.fromWei(wei, 'ether');
            res.render("index", {Name:address, Balance:balance})
            //res.send(`Balance of ${address}: ${balance} ETH`);
        }
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});