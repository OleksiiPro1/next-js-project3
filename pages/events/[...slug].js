import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  // console.log(filterData);

  if (!filterData) {
    return <h2 className="center">Loading...</h2>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <h2> Invalid Filter </h2>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <h2>No Events found!</h2>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
