// see https://chakra-ui.com/docs/theming/customize-theme

import colors from "./colors"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("light.background", "dark.background")(props)
        } 
    })
}

export default styles