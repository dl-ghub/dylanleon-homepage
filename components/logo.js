import { Text, useColorModeValue } from "@chakra-ui/react"

import Link from "next/link"
import styled from "@emotion/styled"

const LogoBox = styled.span`
  font-weight: 550;
  font-size: 36px;
  font-family: Inter;
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
          <Text>dl.</Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
