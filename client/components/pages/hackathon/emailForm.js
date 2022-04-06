import { Form, Field, Formik} from "formik";
import { Box, Button, Input, Text, FormControl, FormLabel, FormErrorMessage, useToast } from "@chakra-ui/react";
import { getActiveSwags, createActiveSwag, updateActiveSwag } from "../../../utils";
import { v4 as uuidv4 } from 'uuid';
import react, { useState } from 'react'

export default function EmailForm(props) {
    const [buttonLoading, setButtonLoading] = useState(false);
    const toast = useToast()

    function validateEmail(value) {
      let error
      if (!value) {
        error = 'email is required'
        console.log("email required")
      }
      return error
    }
    // function validates that this email hasn't recieved a token yet and generates the tokenId that this user can claim.
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
            newTokenId: currentEmails.length + 20}
        }
    }

    async function assignSwag(data){
        const createdSwag = await createActiveSwag(data)
        console.log("created swag", createdSwag)
        return createdSwag
    }
    async function swagWrapper(email){
        const tokenResult = await createTokenId(email)
        console.log("token validation result", tokenResult)
        const createSwag = {data: {
            email: tokenResult.email, 
            tokenId: tokenResult.newTokenId, 
            emailSent: false, 
            tokenClaimed: false,
            slug: uuidv4() 
            }
        }
        const createdSwag =  await assignSwag(createSwag)
        try{        
            console.log("createdSwag", createdSwag)
            const frontendUrl = process.env.NEXT_PUBLIC_URL
            const siteUrl = `${frontendUrl}/hackathon/${createdSwag.swags.attributes.slug}`
            createdSwag.swags.attributes.url = siteUrl
            fetch('/api/hackathon-email', {method: 'post', body: JSON.stringify(createdSwag.swags.attributes)})
            const finalSwagData = await updateActiveSwag(createdSwag.swags.id, {data:{emailSent: true}})
            console.log("final swag data", finalSwagData)
            toast({
                position: 'top',
                title: 'Email Sent',
                description: `We sent a secure link for claiming your swag to ${createdSwag.swags.attributes.email}!`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            return tokenResult
        }catch(e){console.log("swag creation error", e)
        toast({
            position: 'top',
            title: 'Email Error',
            description: `We already assigned swag to this email. Please try another.`,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    return tokenResult}
    }
  
    return (
        <Box align = 'center' justify = 'center'>
            <Formik
                initialValues={{ token: 'hackathon_2022' }}
                onSubmit={(values, actions) => {
                    try{
                        setButtonLoading(true)
                        actions.setSubmitting(true)
                        swagWrapper(values.email)
                        actions.setSubmitting(false)
                        setButtonLoading(false)
                    }catch(e){console.log("email submission error", e)
                        actions.setSubmitting(false)
                        setButtonLoading(false)
                        }
            }}
            >
                {(props) => (
                <Form>
                    <Field name='email' validate={validateEmail}>
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <FormLabel textAlign = 'center' htmlFor='email'>Email</FormLabel>
                            <Input maxWidth = {'60'} {...field} id='email' placeholder='email' type='email' />
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            <Text fontSize="sm" mt={2}>We'll send a secure link to claim your swag!</Text>
                        </FormControl>
                    )}
                    </Field>
                    <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={buttonLoading}
                    type='submit'
                    >
                    Send
                    </Button>
                </Form>
                )}
            </Formik>
        </Box>
    )
  }

  export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }