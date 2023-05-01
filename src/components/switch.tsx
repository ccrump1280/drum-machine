import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
    track: {
        bg: '#4DAF7C',
        _focusVisible: {
            outline: 'none',
            boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.6)'
        }
    }
})
const boxy = definePartsStyle({
  track: {
    borderRadius: 'sm',
    p: 1,
  }
})

export const switchTheme = defineMultiStyleConfig({ 
    baseStyle,
    variants: { boxy }
})