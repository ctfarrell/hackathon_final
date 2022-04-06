import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon, Search2Icon } from '@chakra-ui/icons';
import { getGoogleMedia } from '../../../../utils';

export default function ExperienceCard(expData) {
    const thumbnail =  getGoogleMedia(expData?.expData?.attributes?.headerImage?.data?.attributes?.formats?.small?.url)
    console.log(expData)
  return (
    <Center py={6}>
      <Box
        maxW={'550px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image mx={"auto"}
              height={'100%'}
              width={'100%'}
              objectFit={'cover'}
              src={thumbnail}
            />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {expData.expData.attributes.isTokenGated? "REQUIRES NFT" : "FREE FOR A LIMITED TIME"}          
            </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {expData.expData.attributes.Name}
          </Heading>
          <Text color={'gray.500'}>
            {expData.expData.attributes.description}
          </Text>
        </Stack>
        {expData.expData.attributes.isTokenGated? (
        <Link href = {`/experiences/${expData.expData.attributes.slug}`}>
          <Button rightIcon={<Search2Icon />} mt = {4} colorScheme = 'pink' onClick={console.log("checking token ownership", expData.expData)}>
              Check Access
          </Button>
        </Link>) : (
        <Link href = {expData.expData.attributes.destinationUrl}>
          <Button rightIcon={<ArrowForwardIcon />} mt = {4} colorScheme = 'pink' onClick={console.log("heading to experience", expData.expData)}>
              Explore
          </Button>
        </Link>)}
      </Box>
    </Center>
  );
}