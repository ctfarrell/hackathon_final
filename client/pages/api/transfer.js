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
    try{
        const body = await JSON.parse(req.body)
        console.log(body)
        const provider = await new ethers.providers.AlchemyProvider("matic", alchemy_key);
        const wallet = await new ethers.Wallet(pri_key, provider)
        const signedContract = await new ethers.Contract(contractAddress,abi,wallet)
        console.log("Contract Signed")
        const tx = await signedContract.safeTransferFrom(
            wallet.getAddress(),
            body.data.address,
            body.data.tokenId,
            {maxPriorityFeePerGas: ethers.BigNumber.from(50000000000),
            maxFeePerGas: ethers.BigNumber.from(50000000000)
            }
            )
        //console.log("Transfer Started", tx)
        //const txResponse = await tx.wait()
        //console.log("Transfer Complete")
        //console.log("transaction Response",txResponse)
        res.status(200).json({"transfer": "nft", "tx": tx});
    }catch(e){console.log("error", e)
    res.status(500).json({"transfer": "nft", "error": e})
    }
}