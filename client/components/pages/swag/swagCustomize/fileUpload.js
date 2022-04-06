import { Box, Heading, Input, InputLeftElement, InputGroup, Icon } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";

export default function FileUpload() {
  return (
    <Box align = 'center' justify = 'center'>                
        <Heading fontSize="lg">Upload a Logo</Heading>
        <InputGroup marginTop = {5}>
            <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiFile} />}
            />
            <input type='file' style={{ display: 'none' }}></input>
            <Input
            placeholder={"Your logo..."}
            onClick={console.log("thanks for the input")}
            />
      </InputGroup>
    </Box>
  );
}

