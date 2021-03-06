import { Box, Container } from "@chakra-ui/react"

import Footer from "../components/footer"
import Head from "next/head"
import Navbar from "../components/navbar"

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dylan Leon - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
