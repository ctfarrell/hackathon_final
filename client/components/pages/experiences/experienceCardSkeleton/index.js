import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue, 
} from '@chakra-ui/react';

export default function ExperienceCardSkeleton(expData) {
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
         <SkeletonCircle size='10' />
        </Box>
        <SkeletonText mt='4' noOfLines={6} spacing='4' />
      </Box>
    </Center>
  );
}