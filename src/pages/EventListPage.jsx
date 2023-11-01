import { useEffect, useState } from "react";
import { getEvents } from "./../services/eventsService";
import { EventCard } from "./../components/EventCard";

export function EventListPage() {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const handleGetEvents = async () => {
    //   try {
    //     const response = await getEvents();
    //     console.log(response)
    //     setEvents(response)
    //     // return response
    //   } catch (error) {
    //     console.error(`Error loading events data: ${error}`)
    //   }
    // }

    // handleGetEvents()
    getEvents()
    .then(res => {
      setState(res)
      setLoading(false)
    })
    .catch(err => {
      setHasError(true)
      setLoading(false)
    });
  }, []);

  return (
    <div>
      
      {loading ? <div>Loading...</div> : hasError ? <div>Error occured...</div> : (
        <ul className='todo-list'>
        {state.map(evt => (
            <li 
                key={evt.id}
            >
                {/* <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    onToggleCompletedTask={onToggleCompletedTask}
                    onRemovedTask={onRemovedTask}
                /> */}
              <EventCard key={evt.id} event={evt} />
              
            </li>
        ))}
    </ul>
        // {console.log('events', evt)}
        // <div key={evt.id}>
        // Event: {evt.name}
        // <br/>
        // Poster:
        // <img src={evt.poster}></img>
        // </div>
        )}
    </div>
  )
}
