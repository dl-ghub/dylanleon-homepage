import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react"

import Section from "./section"

const Profile = () => {
  let heading_color = useColorModeValue("light.primary", "dark.on_background")
  let subheading_color = useColorModeValue(
    "light.on_background",
    "dark.on_background"
  )
  return (
    <Container
      maxW="container.xl"
      mt={12}
      alignItems="center"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Section>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box flexGrow={1}>
              <Heading as="h1" variant="page-title">
                Hello, I'm
              </Heading>
              <Heading as="h1" variant="page-title" mb={6}>
                Dylan Leon.
              </Heading>
              <p color={heading_color}>
                Curious Learner ( Developer / Data Scientist / Designer )
              </p>
            </Box>
          </Box>
          <Heading
            display={{ base: "none", lg: "inline-block" }}
            mt={10}
            maxW="50%"
            as="h2"
            variant="page-subtitle"
            mr={12}
            textColor={subheading_color}
          >
            A recent university graduate, interested in applications of data
            science and machine learning for finance and economics.
          </Heading>
        </Box>
      </Section>
    </Container>
  )
}

export default Profile
