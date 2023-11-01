import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Divider, Button, Grid, GridItem, Center } from '@chakra-ui/react'


export function EventCard(props) {
  // const { eventId } = useParams();
  // const [event, setEvent] = useState();
  console.log(props.event)
  const { id, name, poster, prices } = props.event;
  const navigate = useNavigate();
  const handleNavDetails = (id) => () => {
    navigate(`/events/${id}`);
  };
  return (
    <div>
      {/* <Center>
      <Grid templateColumns="repeat(3, 1fr)" gap="3">
        <GridItem>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
      </Center> */}
      <Center>
      <Card maxW='sm'>
            <CardBody>
              <Image
                 src={poster}
                 alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}
                <Button variant='ghost' colorScheme='blue' onClick={handleNavDetails(id)}>
                Details
                </Button>
                </Heading>
                {/* <Text>
                  This sofa is perfect for modern tropical spaces.
                </Text> */}
                {/* <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text> */}
              </Stack>
            </CardBody>
            {/* <Divider /> */}
            {/* <CardFooter>
              <ButtonGroup spacing='1'>
                <Button variant='solid' colorScheme='blue'>
                Details
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                Details
                </Button>
              </ButtonGroup>
            </CardFooter> */}
          </Card>
      {/* <p>{name}</p> */}
      {/* <img src={poster}></img> */}
      {/* <br/> */}
      {/* <button onClick={handleNavDetails(id)}>Details</button> */}
      </Center>
    </div>
  );
}
