Web 3.0 blockchain app process
### need
Purpose : to send ethereum over the blockchain and store and  view all transactions from that address.
## Client Part: 
1)The client part which is our frontend is a react application using react hooks for dynamic functions.
2)Components : Navbar, welcome section , transactions, services, footer
3)Navbar features the our other additional services.
4)Welcome section is the main section it has the input form where we can enter sender and receiver’s wallet address along with the message that needs to be passed through the blockchain.

## Smart contract
1)Now the heart of this the project is this smart contract.
2)Smart contract is a self executing contract which is written as lines of code to make the transactions traceable between buyer and seller.

3)The solidity contract for ethereum transactions is written in the solidity programming language (based on java and javascript).
4)We then use a ethereum development environment provider name hardhat. It allows us to test our contract on the local system.
5)In the smart contract we define the structure of information about the transaction we want to get from the blockchain.
6)Then to deploy the contract we need to make transactions and for that we use metamask.
7)Now we need an API that will deploy our smart contract on the blockchain and for that we use the API from a provider like alchemy.
8)Then we modify the hardhat config.js to deploy the smart contract over the real blockchain.
We use our Alchemy api and wallet’s private key.
9)Then we run npx run scripts/deploy.js –sepolia (we have to specify which ethereum network we are using (in this case we are using the test network of sepoliaETH).

10)After deployment we get the Contract address and contract ABI (Application Binary Interface) It is basically the structure of the application to which the contract will interact.

11)Once contactABI and contract address are generated, we transfer these values or constants to our client app. 
12)Then we create a transactionContext component that will have all the functions to retrieve the smart contract that we created,  send ethereum check if wallet is connected or not, checks if metamask is installed or not ,and fetch transactions. 

13)Then we create the frontend to view the transactions dynamically. It just fetches the data received from the blockchain.

14)the main part of the project is over then we created the services section and footer.
