import { Image, Box, Center } from '@chakra-ui/react'

export function HomePage() {
  return <main>
    <Center>
      <Box boxSize='sm'>
        <Image src='src/assets/ada.jpeg' alt='Dan Abramov' />
        <Image src='src/assets/coomeva.png' alt='Dan Abramov' />
      </Box>
    </Center>

  </main>;
}
