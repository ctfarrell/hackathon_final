const { ethers } = require("ethers");
const Web3 = require('web3')
const infura_url = process.env.NEXT_PUBLIC_RPC_URL
const infura_key = process.env.SIGNER_PRIVATE_KEY
const infura_id = process.env.INFURA_PROJECT_ID
const alchemy_endpoint = process.env.ALCHEMY_URL
const network = 'matic'
const pri_key = process.env.INTRINSIC_PRI_KEY
const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const contractAddress = "0x21eDb2F1bfef829Ff04b08638a28cBF7671d401f"

export default async function sendHackathonEmail(req, res) {
    const body = JSON.parse(req.body)
    console.log(body)
    const w3Options = {
        keepAlive: true,
        withCredentials: false,
        timeout: 20000, // ms
        headers: [
            {
                name: 'Access-Control-Allow-Origin',
                value: '*'
            },

        ],
    };
    try{    
        var web3 = new Web3(alchemy_endpoint, w3Options);
        const account = await web3.eth.accounts.privateKeyToAccount(pri_key)
        //console.log("wallet", wallet)
        const gasPrice = await web3.eth.getGasPrice();        
        console.log("gas price", gasPrice)
        const theContract = await new web3.eth.Contract(abi,contractAddress)
        console.log("options", {from: account.address, gas: gasPrice, gas2: gasPrice * 2})
        console.log(account.address, body.data.address, body.data.tokenId)
        const actualGas = await theContract.methods.safeTransferFrom(account.address, body.data.address, body.data.tokenId).estimateGas({from: account.address})
        console.log("actual gas", actualGas, "actual gas x 2", actualGas * 2)
        const tx = await theContract.methods.safeTransferFrom(account.address, body.data.address, body.data.tokenId)
        tx.gas = actualGas
        console.log("TX", tx)
        const stx = await web3.eth.accounts.signTransaction(tx, pri_key)
        console.log("STX", stx)
        const ftx = await web3.eth.sendSignedTransaction(stx.rawTransaction)
        console.log("FTX", ftx)
        res.status(200).json({"transfer": "nft", "sent": stx})
    }catch(e){console.log(e)
        res.status(500).json({"transfer": "nft", "error": e})}
}
