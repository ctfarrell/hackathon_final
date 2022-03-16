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

export default function ExperienceCard(expData) {
    const url_starter = "http://localhost:1337"
    const thumbnail =  url_starter +  expData?.expData?.attributes?.headerImage?.data?.attributes?.formats?.small?.url 
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
            FREE for a limited time
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {expData.expData.attributes.Name}
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Button mt = {4} colorScheme = 'pink'>
            <Link href = {expData.expData.attributes.destinationUrl}>
            Explore
            </Link>
        </Button>
      </Box>
    </Center>
  );
}