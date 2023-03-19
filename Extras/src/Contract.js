// define contract address and ABI
const contractAddress = "0xaD234Cf1a6c50E005e98eDB524ABfC3eEb9c6923";
const contractABI = [
    {
        constant: false,
        inputs: [],
        name: "mine",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getMiningStatus",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    { anonymous: false, inputs: [], name: "MiningStarted", outputs: [], type: "event" },
];