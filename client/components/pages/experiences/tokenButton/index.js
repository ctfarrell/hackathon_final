
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { injected, changeNetworkPolygon } from '../../../../utils/blockUtils';
import { Button, HStack, Link } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import ethers from 'ethers'
import { nftAbi, nftContract } from '../../../../utils/blockUtils';
import MintButton from '../mintButton';

export default function TokenButton(content) {
    console.log(content)
    const { active, error, activate, chainId, account, setError } = useWeb3React();


    if (!active) { console.log("active wallet"); return <Button onClick={()=>activate(injected, changeNetworkPolygon(), true)}>Connect Wallet</Button>}
    if (active &content?.content?.content?.attributes?.isMintable) return (<MintButton content = {content}/>)
    if (active & content?.content?.content?.attributes?.isOnOpenSea) return (
        <HStack align = 'center' justify = 'center' w='100%'>
            <Link href = {content?.content?.content?.attributes?.openSeaUrl} isExternal>
                <Button rightIcon={<ExternalLinkIcon />} mt = {4} colorScheme = 'teal'>
                    Open Sea
                </Button>
            </Link>
            <Link href = {content?.content?.content?.attributes?.destinationUrl || "/experiences"}>
              <Button rightIcon={<ArrowForwardIcon />} mt = {4} colorScheme = 'pink' onClick={console.log("heading to experience")} isExternal>
                  Explore
              </Button>
            </Link>
        </HStack>
        )
}
