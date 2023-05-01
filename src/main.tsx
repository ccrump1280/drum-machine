import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
import { switchTheme } from './components/switch.tsx'
import { sliderTheme } from './components/slider.tsx'

const theme = extendTheme({
  components: {
    Switch: switchTheme,
    Slider: sliderTheme
  }
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
