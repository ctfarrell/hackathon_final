import { formatUnits } from "@ethersproject/units";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";



export const nftAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const nftContract = '0x196f733d53f3397924b39c732991af5c7ce0d663'

export function shortenHex(hex, length = 4) {
    if(hex == null) return null
    if(hex.length > 0){
        return `${hex.substring(0, length + 2)}…${hex.substring(
            hex.length - length
          )}`;
    }else{return null}
}

const ETHERSCAN_PREFIXES = {
  1: "",
  3: "ropsten.",
  4: "rinkeby.",
  5: "goerli.",
  42: "kovan.",
  137: "polygonscan.com/",
  80001: "polygonscan.com/"
};

export function formatEtherscanLink(
  type,
  data
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  value,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);


export const injected = new InjectedConnector({
  supportedChainIds: [137]//[80001,137, 1, 56, 3, 42],
});

export const changeNetworkPolygon = async () => {
    const polygon = {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: "Polygon Mainnet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"]
      }
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...polygon
          }
        ]
      });
    } catch (err) {
      console.log(err);
    }
  };
 