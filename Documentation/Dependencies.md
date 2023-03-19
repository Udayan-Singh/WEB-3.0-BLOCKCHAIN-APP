defpendencies from hardhat

npm install --save-dev hardhat
npm install --save-dev chai @nomiclabs/hardhat-waffle
npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
npm install --save-dev "hardhat@^2.13.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"

for testing 
npx hardhat test

used Metamask Extension

npx hardhat run scripts/deploy.js --network sepolia


useful websites

https://app.infura.io/

https://dashboard.alchemy.com/

https://goerlifaucet.com/

// FULL LIST OF DEPENDENCIES FOR CLIENT PART

dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "ethers": "^5.6.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }

  // Note : ethers 6.X had some issues so its recommended to use version 5.X

// FULL LIST OF DEPENDENCIES FOR SMART CONTRACT PART

"devDependencies": {
    "@nomicfoundation/hardhat-toolbox": "^2.0.0",
    "@nomiclabs/hardhat-ethers": "^2.2.2",
    "@nomiclabs/hardhat-waffle": "^2.0.5",
    "chai": "^4.3.7",
    "ethers": "^5.0.0",
    "hardhat": "^2.13.0"
  }

// FULL LIST OF DEPENDENCIES FOR ETHEREUM BALANCE CHECK APP

"dependencies": {
    "body-parser": "^1.20.2",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "readline": "^1.3.0",
    "web3": "^1.8.2"
  }

// more to be added soon...