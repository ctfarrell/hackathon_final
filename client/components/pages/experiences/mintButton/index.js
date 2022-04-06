import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { injected, changeNetworkPolygon } from '../../../../utils/blockUtils';
import { Button, HStack, Link, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ArrowForwardIcon, ExternalLinkIcon, UnlockIcon, Search2Icon } from '@chakra-ui/icons';
import { ethers } from 'ethers'
import { nftAbi, nftContract } from '../../../../utils/blockUtils';


export default function MintButton(content) {
    console.log(content)
    const toast = useToast()
    const { active, error, activate, chainId, library, account, setError } = useWeb3React();
    const [minting, updateMinting] = useState(false)
    //const [checking, updateChecking] = useState(false)
    const [tokenOwnership, setTokenOwnership] = useState(false)
    const tokenContract = new ethers.Contract(content?.content?.content?.content?.attributes?.contractAddress || nftContract, nftAbi, library.getSigner())
    async function checkTokenOwnership(){
        try{
            const tokenCount = await tokenContract.balanceOf(account)
            console.log(tokenCount._hex)
            if(tokenCount._hex=="0x00"){
                toast({
                    position: 'top',
                    title: 'No Entry Tokens',
                    description: `Sorry, this Wallet Address doesn't own any Entry Tokens. Please Mint a token below.`,
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                  })
                setTokenOwnership(false)}
            else{
                toast({
                    position: 'top',
                    title: 'Ownership Confirmed',
                    description: `You have been confirmed as a Token Owner. Welcome to the experience.`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                  setTokenOwnership(true)}
        }catch(e){console.log("balanceOf Error", e)
        setTokenOwnership(false)}
    }

    async function mintToken(){
        try{
            updateMinting(true)
            const tx = await tokenContract.safeMint(account)
            toast({
                position: 'top',
                title: 'Transaction Pending',
                description: `Thanks for minting a token, please wait while the transaction is confirmed.`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            const ctx = await tx.wait()
            console.log("tx", ctx)
            updateMinting(false)
        }catch(e){
            console.log(e)
            updateMinting(false)
            toast({
                position: 'top',
                title: 'Transaction Error',
                description: `Sorry, we had an issue with minting the token. Please check Metamask.`,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
 
    } 

   return (
        <HStack align = 'center' justify = 'center' w='100%'>
            {tokenOwnership? (
                <Link href = {content?.content?.content?.content?.attributes?.destinationUrl || "/experiences"}>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme = 'pink' onClick={console.log("heading to experience")} isExternal>
                        Explore
                    </Button>
                </Link>
            ):(<>
                <Button onClick={mintToken} rightIcon={<UnlockIcon />}  colorScheme = 'pink' isLoading = {minting}>
                    Mint Entry Token
                </Button>
                <Button onClick = {checkTokenOwnership} rightIcon={<Search2Icon />}  colorScheme = 'teal'>
                    Check Ownership
                </Button>
            </>)}
        </HStack>
        )
}