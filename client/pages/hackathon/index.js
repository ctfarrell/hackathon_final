import { useState } from "react";
import { useQuery } from "react-query";
import { getData, getRestaurants, getStrapiURL } from "../../utils";
import Layout from "../../components/layout";
import { getSwags, initialData } from "../../utils";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import SwagCard from "../../components/pages/swag/swagCard";
import EmailForm from "../../components/pages/hackathon/emailForm";
import Image from "next/dist/client/image";


export default function index() {
const { data, isLoading, error, status } = useQuery(['swags'],
    getSwags
    );

  return (
    <Layout>
        <Flex align="center" justify="center">
            <Box pt = {8} mx = 'auto' maxWidth = {{base: '50%', md: '20%'}}>
                <Image src = '/shirt_thumbnail.png' fill = 'intrinsic' height = '1769' width = '1883'/>
                <EmailForm/>
                <Text pt = {6} textAlign = 'center'>Check out the <Link href = '/hackathon/dash' color = 'teal' isExternal>Hackathon Dashboard</Link>!</Text>
            </Box>
        </Flex>
    </Layout>
  )
}