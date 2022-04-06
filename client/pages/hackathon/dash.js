import {Link, Box, Flex, Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, 
    Tabs, TabList, TabPanels, Tab, TabPanel, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, } from '@chakra-ui/react'
import {CheckIcon, CloseIcon, NotAllowedIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { getActiveSwags } from "../../utils"
import { shortenHex } from '../../utils/blockUtils'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function Dash(props) {
    console.log("props", props)
  return (
      <Layout>
          <Heading py = {6} mx = 'auto' textAlign = 'center' fontSize = '4xl'>Hackathon T-Shirts Dashboard</Heading>
          <Flex flexDirection = {{base: 'column', md: 'row'}} mx = 'auto' maxWidth = {{base: '75%', md: '80%'}}>
          <ClaimedTokens data = {props.data}/>
          <OptionsBox/>
          </Flex>
          <SwagTable data = {props.data}/>       
      </Layout>
  )
}

function ClaimedTokens(data){
    return(
        <Box align = 'center' justify = 'center' mx = 'auto' my = 'auto' minWidth = {{base: '75%', md: '50%'}} maxWidth = {{base: '75%', md: '50%'}}>
            <Stat mt = {6}>
                <StatLabel fontSize = '2xl'>Tokens Claimed</StatLabel>
                <StatNumber fontSize = '4xl'>{`${data.data.swags.filter((e)=>e.attributes.emailSent).length} / 1000`}</StatNumber>
                <StatHelpText fontSize = 'xl'>{`${(data.data.swags.filter((e)=>e.attributes.emailSent).length * 100 / 1000).toFixed(2)} %`}</StatHelpText>
            </Stat>
            <Stat mt = {6}>
                <StatLabel fontSize = '2xl'>Tokens Sent</StatLabel>
                <StatNumber fontSize = '4xl'>{`${data.data.swags.filter((e)=>e.attributes.tokenClaimed).length} / 1000`}</StatNumber>
                <StatHelpText fontSize = 'xl'>{`${(data.data.swags.filter((e)=>e.attributes.tokenClaimed).length * 100 / 1000).toFixed(2)} %`}</StatHelpText>
            </Stat>
        </Box>
    )
}


function OptionsBox(){
    return(
        <Box mx = 'auto' px = {10} width = {{base: '100%', md: '50%'}} maxHeight = {{base: '50%', md: '10%'}} >
            <Tabs mx = 'auto' maxWidth = {{base: '100%', md: '50%' }}>
                <TabList>
                    <Tab>Thumbnail</Tab>
                    <Tab>QR Code</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box py = {8} mx = 'auto'>
                            <Image src = '/shirt_thumbnail.png' fill = 'intrinsic' height = '1769' width = '1883'/>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box py = {6} mx = 'auto'>
                            <Image src = '/hackathon_qrcode.png' fill = 'intrinsic' height = '3000' width = '3000'/>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}


function SwagTable(data) {
    const tableData = data.data.swags
    var sortedTableData = tableData.sort(function(a, b){return(new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt))});
    return (
        <>
            <Heading py = {6} mx = 'auto' textAlign = 'center' fontSize = '2xl'>Nfty Hackathon Table</Heading>
            <TableContainer mx = 'auto' maxWidth = {{base: '95%', md: '90%'}}>
                <Table variant='simple'>
                    <TableCaption>Hackathon T-Shirt Results</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Token ID</Th>
                        <Th>Email</Th>
                        <Th>Address</Th>
                        <Th>Transaction</Th>
                        <Th>Email Sent</Th>
                        <Th>Token Claimed</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {sortedTableData.map((tableRowData)=>{
                        return(
                        <Tr key = {tableRowData.id}>
                            <Td fontSize = 'sm'>
                                <Link href = {`https://polygonscan.com/token/0x21edb2f1bfef829ff04b08638a28cbf7671d401f?a=${tableRowData.attributes.tokenId}`}>
                                    {tableRowData.attributes.tokenId || ""}
                                    {tableRowData.attributes.tokenId === null? null : <ExternalLinkIcon ml = {2} color = 'teal'/>}
                                </Link>
                            </Td>
                            <Td fontSize = 'sm' isTruncated>{tableRowData.attributes.email}</Td>
                            <Td fontSize = 'sm'>
                                <Link href = {`https://polygonscan.com/address/${tableRowData.attributes.address}`} color = 'teal' isExternal>
                                    {shortenHex(tableRowData.attributes.address) || ""}
                                    {tableRowData.attributes.address === null? null : <ExternalLinkIcon ml = {2} color = 'teal'/>}
                                </Link>
                            </Td>
                            <Td fontSize = 'sm'>
                                <Link href = {`https://polygonscan.com/tx/${tableRowData.attributes.txHash}`} color = 'teal' isExternal>
                                    {shortenHex(tableRowData.attributes.txHash) || ""}
                                    {tableRowData.attributes.txHash === null? null : <ExternalLinkIcon ml = {2} color = 'teal'/>}
                                </Link>
                            </Td>                        <Td fontSize = 'sm'>{tableRowData.attributes.emailSent? <CheckIcon color = 'green'/> : <NotAllowedIcon color = 'red'/> }</Td>
                            <Td fontSize = 'sm'>{tableRowData.attributes.tokenClaimed? <CheckIcon color = 'green'/> : <NotAllowedIcon color = 'red'/> }</Td>
                        </Tr>
                        )
                    })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
export async function getServerSideProps () {
    const data = await getActiveSwags()
    return {
      props: { data
        }
      }
    }
  