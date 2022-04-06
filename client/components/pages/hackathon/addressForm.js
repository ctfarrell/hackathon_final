import { Form, Field, Formik, setFieldValue} from "formik";
import { Box, Text, Button, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, useToast } from "@chakra-ui/react";
import { updateActiveSwag } from "../../../utils";
import { shortenHex } from "../../../utils/blockUtils";
import { v4 as uuidv4 } from 'uuid';
import { useWeb3React } from "@web3-react/core";
import Image from 'next/image'
import react, { useRef, useState } from 'react'
import { CopyIcon, CheckIcon, WarningTwoIcon } from "@chakra-ui/icons";

export default function AddressForm(data) {
    const toast = useToast()
    const [copying, setCopying] = useState(false)
    const { active, account } = useWeb3React()
    const [txLoad, setTxLoad] = useState(false)
    //const [submitting, setSubmitting] = useState(false)
    //const [_address,setAddress] = useState(address)

    function validateAddress(value) {
      let error
      if (!value) {
        error = 'address is required'
      }
      if (!/^0x[a-fA-F0-9]{40}$/i.test(value)) {
          error = 'address must be valid Polygon address'
      }
      return error
    }
    async function copy() {
        setCopying(true)
        navigator.clipboard.writeText(account).then(function() {
            setTimeout(()=>{setCopying(false)},1000)            
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
            setCopying(false)
          });
        

    }

    // function validates that this email hasn't recieved a token yet and generates the tokenId that this user can claim.
    /*
    async function createTokenId(email){
        const swags = await getActiveSwags()
        console.log("swags", swags)
        const currentEmails = swags.swags.map((swag) => swag.attributes.email)
        if(currentEmails.includes(email)){
            return {error: "Swag was previously claimed for this email address",
        email: email
            }
        }
        else{
            return {error: "valid email",
            email: email,
            newTokenId: currentEmails.length + 1}
        }
    }
    */

    async function formWrapper(_address, _swagData){
        try{
            setTxLoad(true)
            console.log({_address},{_swagData})
            // transfer the token
            const updatedAddressResponse = await updateActiveSwag(_swagData.id, {data:{address: _address}})
            console.log(updatedAddressResponse)
            const transferData = { data: {
                address: _address,
                tokenId: _swagData.attributes.tokenId
            }}
            const tx = await fetch('/api/transfer', {method: 'post', body: JSON.stringify(transferData)})
            console.log("have the tx response")
            const parsedTx = await tx.json()
            console.log({transferData},{parsedTx})
            const updatedSwagData = await updateActiveSwag(_swagData.id, {data:{tokenClaimed: true, address: parsedTx.tx.to, txHash: parsedTx.tx.hash}})
            console.log({updatedSwagData})
            fetch('/api/sent-swag-email', {method: 'post', body: JSON.stringify(updatedSwagData.swags.attributes)})
            toast({
                position: 'top',
                title: 'Congrats!',
                description: `We'll send a confirmation link to ${updatedSwagData.swags.attributes.email} after the transaction is confirmed!`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              setTxLoad(false)
        }catch(e){
            console.log("addressFormWrapper error", e)
            toast({
                position: 'top',
                title: 'Congrats!',
                description: `We'll send a confirmation link after the transaction is confirmed!`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              setTxLoad(false)
        }

    }
  
    return (
        <Box minWidth = {{base: '70%', md: '100%'}}>
            <Formik
            initialValues={{ token: 'hackathon_2022', email: "test"}}
            onSubmit={(values, actions) => {
                actions.setSubmitting(true)
                formWrapper(values.address, data.data.swags[0])
                actions.setSubmitting(false)
            }}
            >
            {(props) => (
            <Form>
                <Field name='address' validate={validateAddress}>
                {({ field, form }) => (
                    <FormControl isInvalid={form.errors.address && form.touched.address}>
                    <FormLabel htmlFor='address'>Ethereum Address for your Swag!</FormLabel>
                    <Input fontSize = 'sm' width = {{base: '100%', md: '25rem'}} {...field} id='address' placeholder='address' isTruncated />
                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                    </FormControl>
                )}
                </Field>
                <Button
                mt={4}
                colorScheme='teal'
                isLoading={txLoad}
                type='submit'
                >
                Claim Swag
                </Button>

                {active? (<Box mt = {4}>
                        <Text>Copy Current Address:</Text>
                        <Button
                        mt = {2}
                        fontSize = 'sm'
                        onClick = {copy} 
                        rightIcon={<CopyIcon/>} 
                        isLoading = {copying}
                        colorScheme='gray' 
                        variant='outline'
                        loadingText = "copied"
                        spinner={<CheckIcon color = 'green'/>}
                        spinnerPlacement = 'end'
                        isTruncated
                        >{shortenHex(account)}</Button>
                        </Box>
                        ) : null}
            </Form>
            )}
            </Formik> 
        </Box>
    )
  }