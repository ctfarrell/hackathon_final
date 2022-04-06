import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { getGoogleMedia } from '../../../../utils';
  import TokenButton from '../tokenButton';
  import { useWeb3React } from '@web3-react/core';
  
  export default function ExperienceDetails(content) {
    const { active, error, activate, chainId, account, setError } = useWeb3React();
    const thumbnail =  getGoogleMedia(content?.content?.attributes?.headerImage?.data?.attributes?.formats?.small?.url)
    //console.log("img url: ", thumbnail)
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={thumbnail}
              fit={'cover'}
              align={'center'}
              w={{ base: '100%'}}
              h={{ base: '100%'}}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {content?.content?.attributes?.Name}
              </Heading>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {content?.content?.attributes?.description ? content?.content?.attributes?.description : "This experience needs a description"}
                </Text>
              </VStack>
            </Stack>
              <TokenButton content = {content}/>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <Text>{active? "Claim a Token to Enter the Experience" : "connect your wallet to enter the experience"}</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }