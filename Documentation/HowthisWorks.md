### To run the WEB 3.0 Ethereum Transaction Simulation Blockchain App ==>

=> Before running the project install necessary dependencies and modify the smart contract.
=> open the client directory in terminal.
=> cd to my-app.
=> Then type npm start to start the react app at localhost:3000.
=> To start the ethereum balance checker use node/nodemon [nodemon / node main.js].
=> This will start the server in localhost:4000.

# Requirements to run the Blockchain app
1) Metamask [account, a working wallet to connect to the app]
2) Alchemy Project account [For Transaction Simulation and API KEY] and also to get free 0.1 Goerli test ETH.
3) Wallet Must have enough Goerli or Sepolia TEST ETH to pay gas fee.
4) Transactions can be viewed in https://etherscan.io/
5) Required node modules must be installed.
6) React is needed to run the app.
7) Alchemy API key is need for the deployment of the smart contract.

# Creating the Solidity smart contract [It is an agreement between buyer and seller]
=> Modifications 
1) Edit the hardhat.config.js file and make the following changes.
   =>goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/<"your-own-api-key">',
      accounts: ['<wallet-private-key>']
    }

    ! You can choose between goerli / sepolia / or any other popular testnet/mainnet ethereum

# Requirements

1) Hardhat module to test/create/and modify the smart contract.
2) It will give the contract address and contract abi (Both can be viewed in "/artifacts/contracts/Transactions.sol/Transactions.json")
3) Note these folders wil be created once you test the smart contract.
=> to test the hardhat configuration ==>run npx hardhat test. [in the "smart_contract" directory]

4) For hardhat installation install hardhat see "/Dependencies.md"
