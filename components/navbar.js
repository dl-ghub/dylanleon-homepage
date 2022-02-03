import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorModeValue
} from "@chakra-ui/react"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

import { HamburgerIcon } from "@chakra-ui/icons"
import Logo from "./logo"
import NextLink from "next/link"
import ThemeToggleButton from "./theme-toggle-button"

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _target={_target}
        {...props}
        fontSize={20}
        pb={2}
        fontWeight={500}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      as="nav"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
      pt={16}
      mb={-32}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
        paddingLeft={{ xl: 4, md: 4 }}
        paddingRight={{ xl: 6, md: 6 }}
      >
        <Flex pt={2} mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"normal"}>
            <Logo />
          </Heading>
        </Flex>
        <Spacer />
        <Flex align="center">
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            mr={8}
          >
            <LinkItem href="#" path={path}>
              Works
            </LinkItem>
            <LinkItem href="#" path={path}>
              Posts
            </LinkItem>
          </Stack>

          <Box flex={1} align="center">
            <ThemeToggleButton />

            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="#" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  <NextLink href="#" passHref>
                    <MenuItem as={Link}>Posts</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
