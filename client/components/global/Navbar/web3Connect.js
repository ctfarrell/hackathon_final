import {Box, Button, useToast} from '@chakra-ui/react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import Web3Modal from 'web3modal'
//import { WalletConnectProvider } from '@walletconnect/web3-provider'
import { ethers } from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { formatEtherscanLink, shortenHex, changeNetworkPolygon } from '../../../utils/blockUtils';
import { useMetaMaskOnboarding, useENSName } from "../../../utils/hooks";


const injected = new InjectedConnector({ supportedChainIds: [137,80001] })

const walletconnect = new WalletConnectConnector({rpc: {137: process.env.NEXT_PUBLIC_RPC_URL}})

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        rpc: {137: process.env.NEXT_PUBLIC_RPC_URL},
        //infuraId: "1c9d576c8114498094965e3d531a5624" // required
      }
    }
  };

export default function Web3Connect() {
    const { active, error, activate, chainId, account, setError } = useWeb3React();
    const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError
    async function connectWeb3() {
        if (typeof window === "undefined") {return console.log("window undefined")}
        try{
            await activate(injected, changeNetworkPolygon(), true)
            console.log("activated with", provider)
            /*
            if(error){
                console.log("unsupported chain")
                await changeNetworkPolygon
                await activate(injected, undefined, true)
                console.log("swapped network", provider)
            }
            */
        }catch(e) {console.log(e)}
    }

  return (
    <Box>
        {!active ? (<Button onClick={connectWeb3}>
            Connect
        </Button>):
        (<Button>
            {`${shortenHex(account, 4)}`}
        </Button>
        )}
    </Box>
  )
}
