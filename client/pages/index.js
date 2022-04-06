import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Link,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import Layout from '../components/layout';
  
  export default function Home({ global, pageData, preview }) {
    return (
    <Layout global={global} pageData={pageData} type="pages" preview={preview}>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pb={{ base: 20, md: 28 }}
          pt={{ base: 8, md: 20}}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 3, md: 4 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              textAlign = 'center'
              fontSize={{ base: '5xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                TEAM<br/>INTRINSIC  
            </Text>
            </Heading>
            <Text text align = 'center' color={'gray.500'}>
                Team Intrinsic is turning the Metaverse Hype into Reality!
            </Text>
            <Stack
              align = 'center'
              spacing={{ base: 1, sm: 2 }}
              direction={{ base: 'column', sm: 'row' }}>
                <Link href='/experiences'>
                    <Button rightIcon = {<Search2Icon/>} mx={4} colorScheme = 'blue' size = 'lg'>
                        Explore Experiences
                    </Button>
                </Link>
                <Link href='/swag'>
                        <Button rightIcon = {<StarIcon/>} mx={4} colorScheme = 'pink' size = 'lg'>
                            Shop Swag
                        </Button>
                </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'/intrinsic-home.png'}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      </Layout>
    );
  }
  
  const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
      'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  });
  