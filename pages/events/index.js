import router, { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventsSearch from '../../components/events/event-search';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data';

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <Fragment>
        <EventsSearch onSearch={findEventHandler} />
        <EventList items={events} />
      </Fragment>
    </div>
  );
}
