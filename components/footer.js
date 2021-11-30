import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={12}>
      &copy; {new Date().getFullYear()} Dylan Leon. All rights reserved.
    </Box>
  )
}

export default Footer
