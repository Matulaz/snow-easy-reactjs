import React from 'react';
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';
// import { Logo } from './Logo';
import Nav from './components/Nav/Nav'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
    </ChakraProvider>
  );
}

export default App;
