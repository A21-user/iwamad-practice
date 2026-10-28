
import { events } from "../data/events";
import EventCard from "../components/EventCard";

export default function EventsPage() {
  return (
    <section>
      <h1>Events</h1>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
