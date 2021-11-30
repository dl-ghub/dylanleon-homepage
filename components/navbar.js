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
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={useColorModeValue("light.primary", "")}
        _target={_target}
        {...props}
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
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#light.surface", "dark.surface")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
      boxShadow={useColorModeValue("2xl", "")}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.2xl"
        wrap="wrap"
        align="center"
        justify="space-between"
        paddingLeft={{ xl: 12, md: 0 }}
        paddingRight={{ xl: 6, md: 6 }}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"normal"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="#" path={path}>
            Works
          </LinkItem>
          <LinkItem href="#" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            _target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dl-ghub"
            path={path}
            pl={2}
            isExternal={true}
          >
            <IoLogoGithub />
          </LinkItem>
          <LinkItem
            _target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dylanrleon/"
            path={path}
            pl={2}
            isExternal={true}
          >
            <IoLogoLinkedin />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
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
                <MenuItem as={Link} href="https://github.com/dl-ghub">
                  GitHub
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://www.linkedin.com/in/dylanrleon/"
                >
                  LinkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
