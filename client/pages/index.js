import {Box, Button, Center, Link, Popover, PopoverTrigger} from '@chakra-ui/react'
import ErrorPage from "next/error";
import Layout from "../components/layout";

export default function Home({ global, pageData, preview }) {
  return (

    <Layout global={global} pageData={pageData} type="pages" preview={preview}>
        <Center>
            <Box p={'20'}>
                <Button m={'4'} colorScheme = 'blue'>
                    <Link href='/experiences'>
                    Explore Experiences
                    </Link>
                </Button>
                <Button m={'4'} colorScheme = 'pink'>
                    <Link href='/swag'>
                        Shop Swag
                    </Link>
                </Button>
            </Box>  
        </Center>
  </Layout>

  )
}
