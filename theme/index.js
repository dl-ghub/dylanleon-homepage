// see https://chakra-ui.com/docs/theming/customize-theme

import colors from './colors' // Color configs
import config from './config' // Style config overrides
import { extendTheme } from '@chakra-ui/react'
import fonts from './fonts' // Font overrides
import styles from './styles' // Global style overrides

const overrides = {
    config,
    fonts,
    colors,
    styles
}

export default extendTheme(overrides)