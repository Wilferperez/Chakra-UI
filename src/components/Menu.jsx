import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Text, Button, Link as ChakraLink, Center, HStack } from '@chakra-ui/react'

export function Menu() {
  return (
    <nav>
      <Box w="100%" h="200px" bgGradient="linear(to-r, blue.200, green.400, blue.200)">
        <Center>
          <Text
            bgGradient="linear(to-l, white, white)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome to Chakra UI
          </Text>
        </Center>
        <Center>
          <HStack>
            <ChakraLink as={ReactRouterLink} to="/" colorScheme='teal'>
              <Button colorScheme='teal' variant='outline'>
                Home
              </Button>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/events">
              <Button colorScheme='teal' variant='outline'>
                Events
              </Button>
            </ChakraLink>
          </HStack>
        </Center>       
      </Box>
    </nav>
  );
}
