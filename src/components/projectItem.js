import { Box, Heading, Image, Link, Text } from "@chakra-ui/react"

import { BsArrowUpRight } from "react-icons/bs"
import { Icon } from "@chakra-ui/react"
import NextLink from "next/link"

const ProjectItem = ({ id, name, description }) => {
  return (
    <Box
      w="100%"
      p={4}
      mt={16}
      transition=".5s"
      role="group"
      _hover={{
        borderColor: "green.500"
      }}
      display="flex"
      justifyContent="space-between"
    >
      <Box pr={12}>
        <Heading as="h3" size="m">
          0{id.toString()} / {name.toUpperCase()}
        </Heading>
        <Text mt={6} mb={6}>
          {description}
        </Text>
        <NextLink href="/projects/" passHref>
          <Link textDecoration="underline" fontWeight="bold">
            Read the article <Icon as={BsArrowUpRight} />
          </Link>
        </NextLink>
      </Box>
      <Image
        src="https://source.unsplash.com/random/800x600"
        maxW="65%"
        maxH={300}
        display={{ base: "none", lg: "block" }}
      />
    </Box>
  )
}

export default ProjectItem
