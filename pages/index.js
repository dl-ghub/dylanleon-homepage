import { Box, Container, Heading } from "@chakra-ui/react"

import Profile from "../components/pages/profile"
import Projects from "../components/pages/projects"

const Page = () => {
  return (
    <Box>
      <Container
        maxW="container.xl"
        mt={36}
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Profile />
        <Projects />
      </Container>
    </Box>
  )
}

export default Page
