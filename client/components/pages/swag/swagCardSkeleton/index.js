import {
    Box,
    Center,
    useColorModeValue,
    Stack,
    SkeletonCircle,
    SkeletonText
  } from '@chakra-ui/react';

  
  export default function SwagCardSkeleton() {
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
            <SkeletonCircle size='10' />
          </Box>
          <Stack pt={10} align={'center'}>
            <SkeletonText mt='4' noOfLines={3} spacing='4' />
          </Stack>
        </Box>
      </Center>
    );
  }