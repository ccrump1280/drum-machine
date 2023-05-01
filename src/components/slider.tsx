import { sliderAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(sliderAnatomy.keys)

const rectangle = definePartsStyle({
  thumb: {
    rounded: 'none',
    height: '25px',
    width: '10px',
    _focusVisible: {
        boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.6)'
    },
    _active: {
        boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.6)'
    }
  }
});

export const sliderTheme = defineMultiStyleConfig({
  variants: { rectangle },
})
