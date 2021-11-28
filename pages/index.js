import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {

    let heading_color = useColorModeValue('light.primary', 'dark.on_background')

    return (
        <Container maxW="container.xl" mt={12}>
            <Image
                borderRadius="full"
                boxSize="100px"
                src="/images/profile.jpg"
                alt="Profile image"
                mb={12}
            />
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="page-title" color={heading_color} size="4xl">
                        Hello.
                    </Heading>
                    <Heading as="h1" variant="page-title" color={heading_color} size="4xl" mb={6}>
                        My name is Dylan.
                    </Heading>
                    <p color={heading_color}>Curious Learner ( Developer / Data Scientist / Designer )</p>
                </Box>
            </Box>
            
        </Container>
    )
}

export default Page