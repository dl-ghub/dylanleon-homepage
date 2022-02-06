import {
  Box,
  Container,
  Heading,
  Typography,
  useColorModeValue
} from "@chakra-ui/react"

import ContactForm from "../components/contactForm"
import Section from "../components/section"

const Posts = () => {
  let heading_color = useColorModeValue("light.primary", "dark.on_background")
  let subheading_color = useColorModeValue(
    "light.on_background",
    "dark.on_background"
  )
  return (
    <Section>
      <Box>
        <Container
          maxW="container.xl"
          mt={36}
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Heading as="h1" size="2xl" mb={4}>
            Slide into my DMs
          </Heading>
          <ContactForm />
        </Container>
      </Box>
    </Section>
  )
}

export default Posts
