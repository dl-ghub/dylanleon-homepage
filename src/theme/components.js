import { GlobalStyleProps, Styles } from "@chakra-ui/theme-tools"

import colors from "./colors"
import { mode } from "@chakra-ui/theme-tools"

const components = {
  Heading: {
    variants: {
      "page-title": {
        fontSize: 48
      },
      "page-subtitle": props => ({
        fontSize: 24,
        fontWeight: "regular",
        color: mode("gray.500", "dark.on-background")(props)
      })
    }
  }
}

export default components
