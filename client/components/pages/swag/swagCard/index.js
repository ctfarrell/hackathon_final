import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Link,
  } from '@chakra-ui/react';
  import { ArrowForwardIcon } from '@chakra-ui/icons';
  import { getGoogleMedia } from '../../../../utils';
  
  export default function SwagCard(swag) {
      //console.log(swag.swagItem)
      const thumbnail =  getGoogleMedia(swag?.swagItem?.attributes?.swagPng?.data?.attributes?.formats?.small?.url)
      //console.log(thumbnail)
    return (
      <Center mx={6} my={2} py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              background: `grey`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image mx={"auto"}
              rounded={'lg'}
              height={250}
              width={250}
              objectFit={'cover'}
              src={thumbnail}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading maxWidth = '100%' fontSize={'xl'} fontFamily={'body'} fontWeight={500} isTruncated>
              {swag.swagItem.attributes.swagName}
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} isTruncated>
              {swag.swagItem.attributes.swagType}
            </Text>
            <Link href={"swag/" + swag.swagItem.attributes.swagId} >
              <Button rightIcon={<ArrowForwardIcon />} m = {'auto'} colorScheme='pink' variant='solid'>
                  Customize
              </Button>
            </Link>
          </Stack>
        </Box>
      </Center>
    );
  }