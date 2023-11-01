import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Divider, Button, Grid, GridItem, Center } from '@chakra-ui/react'

export function EventDetailPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getEventById(eventId).then((loadedEvent) => setEvent(loadedEvent));
  }, [eventId]);

  const handleBuyTickets = (priceId) => () => {
    navigate(`/events/${event.id}/tickets/${priceId}`);
  };

  if (!event) {
    return "loading...";
  }

  return (
    <main>
      <Center>
        <Card maxW='lg'>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{event.name}</Heading>
              <Text>{event.description}</Text>
              <Image
                src={event.poster}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Text color='blue.600' fontSize='2xl'>
                {event.prices.map((price) => (
                  <div key={price.id}>
                    {"$"}{price.price} -{" "}
                    <button onClick={handleBuyTickets(price.id)}>Buy Tickets</button>
                  </div>
                ))}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </main>
  );
}
