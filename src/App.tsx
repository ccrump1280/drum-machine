import { useState, useEffect } from 'react'
import {
  Button, 
  Center, 
  Container, 
  FormLabel, 
  Icon,
  SimpleGrid,
  Slider, 
  SliderFilledTrack, 
  SliderThumb, 
  SliderTrack, 
  Switch, 
  Text
} from '@chakra-ui/react'

import { FaVolumeUp } from 'react-icons/fa'

import { Howl } from 'howler'

declare global {
  interface Window {
    Howler: any;
  }
}

function App() {

  const [display, setDisplay] = useState('Heater Kit');
  const [isAlternateKit, setIsAlternateKit] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (isAlternateKit) {
      setDisplay('Smooth Piano Kit')
    }else 
      setDisplay('Heater Kit')
  }, [isAlternateKit]);

  useEffect(() => {
    window.Howler.volume(volume);
  }, [volume]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isAlternateKit]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == 'q' || event.key == 'Q'){
      handleDrumPad('Heater_1', 'Chord_1')
    }else if (event.key == 'w' || event.key == 'W') {
      handleDrumPad('Heater_2', 'Chord_2')
    }else if (event.key == 'e' || event.key == 'E') {
      handleDrumPad('Heater_3', 'Chord_3')
    }else if (event.key == 'a' || event.key == 'A') {
      handleDrumPad('Heater_4', 'Shaker')
    }else if (event.key == 's' || event.key == 'S') {
      handleDrumPad('Clap', 'Dry_Open_HH')
    }else if (event.key == 'd' || event.key == 'D') {
      handleDrumPad('Open_HH', 'Closed_HH')
    }else if (event.key == 'z' || event.key == 'Z') {
      handleDrumPad('Kick_and_Hat', 'Punchy_Kick')
    }else if (event.key == 'x' || event.key == 'X') {
      handleDrumPad('Kick', 'Side_Stick')
    }else if (event.key == 'c' || event.key == 'C') {
      handleDrumPad('Dry_Closed_HH', 'Snare')
    }
  };

  const handleDrumPad = (sound1: string, sound2: string) => {
    if (isAlternateKit) {
      SOUNDS.play(sound2);
      setDisplay(sound2.replaceAll("_", " "));
    }else {
      SOUNDS.play(sound1);
      setDisplay(sound1.replaceAll("_", " "));
    }
  };

  return (
    <Center height='100vh' bg='#A2C2D8'>
      <Container id='drum-machine' bg='#6C7483' width='90%' maxW='450px' p='30px' borderRadius={8} border='3px solid black'>
        <Container id='top-content' textAlign='center'>
          <Center id='display' width='100%' h='40px' bg='#67C4C3' borderRadius={4} mb='15px' border='2px solid black'>
            <Text fontFamily='Verdana, Arial'>{display}</Text>
          </Center>
          <FormLabel htmlFor='bank' display='inline'>Bank</FormLabel>
          <Switch id='bank' variant='boxy' onChange={() => setIsAlternateKit(!isAlternateKit)} />
        </Container>

        <Container id='bottom-content' textAlign='center'>
          <Icon as={FaVolumeUp} mt={5} mb={2}/>
          <Slider
            defaultValue={50}
            variant='rectangle'
            colorScheme='green'
            onChange={(value) => setVolume(value / 100)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          { /* drum-pad class is for FCC testing purposes */ }
          <SimpleGrid columns={3} spacing={[2,5]} mt={5}>
            <Button className='drum-pad' onClick={() => handleDrumPad('Heater_1', 'Chord_1')}>Q</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Heater_2', 'Chord_2')}>W</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Heater_3', 'Chord_3')}>E</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Heater_4', 'Shaker')}>A</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Clap', 'Dry_Open_HH')}>S</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Open_HH', 'Closed_HH')}>D</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Kick_and_Hat', 'Punchy_Kick')}>Z</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Kick', 'Side_Stick')}>X</Button>
            <Button className='drum-pad' onClick={() => handleDrumPad('Dry_Closed_HH', 'Snare')}>C</Button>
          </SimpleGrid>

        </Container>
      </Container>
    </Center>
  )
}
export default App


const SOUNDS = new Howl({
  "src": [
    "./audio/sounds.mp3"
  ],
  "sprite": {
    "Closed_HH": [
      0,
      182.85714285714286
    ],
    "Snare": [
      2000,
      208.97959183673453
    ],
    "Chord_1": [
      4000,
      1488.9795918367347
    ],
    "Chord_2": [
      7000,
      1071.0204081632658
    ],
    "Chord_3": [
      10000,
      2586.122448979591
    ],
    "Clap": [
      14000,
      235.1020408163258
    ],
    "Dry_Closed_HH": [
      16000,
      78.36734693877645
    ],
    "Dry_Open_HH": [
      18000,
      313.4693877551023
    ],
    "Shaker": [
      20000,
      313.4693877551023
    ],
    "Heater_4": [
      22000,
      261.224489795918
    ],
    "Heater_1": [
      24000,
      548.571428571428
    ],
    "Heater_2": [
      26000,
      365.7142857142866
    ],
    "Heater_3": [
      28000,
      339.5918367346944
    ],
    "Kick": [
      30000,
      809.795918367346
    ],
    "Kick_and_Hat": [
      32000,
      417.9591836734673
    ],
    "Open_HH": [
      34000,
      496.32653061224374
    ],
    "Punchy_Kick": [
      36000,
      313.4693877550987
    ],
    "Side_Stick": [
      38000,
      208.9795918367372
    ]
  },
  "preload": true,
})


