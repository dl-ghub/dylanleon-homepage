import { Text, useColorModeValue } from "@chakra-ui/react"

import Link from "next/link"
import styled from "@emotion/styled"

const LogoBox = styled.span`
  font-weight: regular;
  font-size: 16px;
  font-family: Be Vietnam;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  margin-left: 8px;
  margin-bottom: 10px;
`
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text>Dylan Leon</Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
