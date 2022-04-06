const { ethers } = require("ethers");
const Web3 = require('web3')
const infura_url = process.env.NEXT_PUBLIC_RPC_URL
const infura_key = process.env.SIGNER_PRIVATE_KEY
const infura_id = process.env.INFURA_PROJECT_ID
const network = 'matic'
const pri_key = process.env.INTRINSIC_PRI_KEY
const alchemy_endpoint = process.env.ALCHEMY_URL
const alchemy_key = process.env.ALCHEMY_KEY


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
    //const provider = new ethers.providers.InfuraProvider(network, {projectId: infura_id, projectSecret: infura_key } )
    const provider = new ethers.providers.AlchemyProvider("matic", alchemy_key);
    try{
        const wallet = await new ethers.Wallet(pri_key, provider)
        const blockDetails = await provider.getBlock(-1)
        //console.log("block details", blockDetails)
        //console.log("wallet", wallet)
        const feeData = await provider.getFeeData()
        //console.log("gas fees", feeData)
        const address = await wallet.getAddress()
        console.log("address", address)
        const theContract = await new ethers.Contract(contractAddress,abi,wallet)
        console.log("the contract", theContract)
        // estimate gas for our transaction here
        const gas = await theContract.estimateGas.safeTransferFrom(address, body.data.address, body.data.tokenId)
        // multiply the estimate by 2x or 3x
        const newGas = feeData.maxFeePerGas.mul(2)
        console.log("new fee data", feeData)
        console.log("base fee", blockDetails.baseFeePerGas, "max prio fee", ethers.utils.parseUnits("1" ,"gwei") )
        //set the gas price here
        const tx = await theContract.safeTransferFrom(address, body.data.address, body.data.tokenId, { maxFeePerGas: newGas, maxPriorityFeePerGas: feeData.maxPriorityFeePerGas})
        console.log("tx", tx)
        res.status(200).json({"transfer": "nft", "tx": tx});
    }catch(e){console.log("error", e)
res.status(500).json({"transfer": "nft", "error": e})}
}
