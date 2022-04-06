import { Button, Text, Box, Link} from '@chakra-ui/react'
export default function SwagClaimed(data) {
  return (
      <Box mt = {8} align="center" justify="center">
        <Text>This swag was sent to <Link 
                                    href = {`https://polygonscan.com/address/${data.data.swags[0].attributes.address}`} 
                                    isExternal
                                    color='teal'>
            {data.data.swags[0].attributes.address}</Link></Text>
        <Link href = {`https://polygonscan.com/tx/${data.data.swags[0].attributes.txHash}`} isExternal>
            <Button m={6} colorScheme = 'teal'>
                View Transaction
            </Button>
        </Link>
      </Box>
  )
}
