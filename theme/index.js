// see https://chakra-ui.com/docs/theming/customize-theme

import colors from "./colors" // Color configs
import components from "./components" // Component overrides
import config from "./config" // Style config overrides
import { extendTheme } from "@chakra-ui/react"
import fonts from "./fonts" // Font overrides
import styles from "./styles" // Global style overrides

const overrides = {
  config,
  fonts,
  colors,
  components,
  styles
}

export default extendTheme(overrides)
