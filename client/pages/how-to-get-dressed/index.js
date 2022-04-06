import Layout from "../../components/layout"
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'

export default function HowToGetDressed(props) {
    return (
        <Layout>
            <Flex align="center" justify="center">
                <Box pt = {16} maxWidth = {{base:"90%", md: "50%"}}>
                    <Heading>How To Wear Your Swag</Heading>
                    <Text>Now that you have your swag, it's time to put it on!</Text>
                    <Text pt = {8} fontSize = 'lg'><Text as = 'b'>Step 1:</Text> Head to <Link href = "https://decentraland.org" color = 'teal' isExternal>Decentraland</Link> and click "Get Started"!</Text>
                    <Box maxWidth = {{base: '100%'}}>
                        <Image src = '/dcl1.png' layout="intrinsic" height = {486} width = {1015}></Image>
                    </Box>
                    <Text pt = {8} fontSize = 'lg'><Text as = 'b'>Step 2:</Text> Sign in with your wallet!</Text>
                    <Box maxWidth = {{base: '65%'}} mx='auto'>
                        <Image src = '/dcl2.png' layout="intrinsic" height = {2310} width = {1842}></Image>
                    </Box>
                    <Text maxWidth = {{base: '65%'}} mx='auto' noOfLines = '2' align = 'center' as = 'i' pt = {2} fontSize = 'sm'>Please sign in with the same address you used to claim your swag</Text>
                    <Text pt = {8} fontSize = 'lg'><Text as = 'b'>Step 3:</Text> Edit your Avatar!</Text>
                    <Text pt = {2}> Click the small picture in the top right.</Text>
                    <Box maxWidth = {{base: '100%'}} mx='auto'>
                        <Image src = '/dcl3.png' layout="intrinsic" height = {2475} width = {3740}></Image>
                    </Box>
                    <Text pt = {8} fontSize = 'lg'><Text as = 'b'>Step 4:</Text> Put on your Swag!</Text>
                    <Text pt = {2} pl = {4}>1. Select your Backpack</Text>
                    <Text pt = {2} pl = {4}>2. Select your Collectibles</Text>
                    <Text py = {2} pl = {4}>3. Select your Swag</Text>
                    <Box maxWidth = {{base: '100%'}} mx='auto'>
                        <Image src = '/dcl4.png' layout="intrinsic" height = {1585} width = {4404}></Image>
                    </Box>
                    <Text pt = {8} fontSize = 'lg'><Text as = 'b'>Step 5:</Text> You're Done!</Text>
                    <Box maxWidth = {{base: '60%'}} mx='auto'>
                        <Image src = '/dcl5.png' layout="intrinsic" height = {2475} width = {1420}></Image>
                    </Box>
                    <Text pt = {20} maxWidth = {{base: '65%'}} mx='auto' noOfLines = '2' align = 'center'>Now head on over to get some more <Link href = {`${process.env.NEXT_PUBLIC_URL}/swag`} color = 'teal'>swag</Link>!</Text>
                </Box>
            </Flex>
        </Layout>
      )
    }

    export async function getStaticProps(context) {
        return {
          props: {}, // will be passed to the page component as props
        }
      }