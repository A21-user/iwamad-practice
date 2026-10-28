
import { Link } from "react-router";
import type { CampusEvent } from "../data/events";

type EventCardProps = {
  event: CampusEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="event-card">
      <h2>{event.title}</h2>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Place:</strong> {event.place}
      </p>
      <p>
        <strong>Seats:</strong> {event.seats}
      </p>
      <Link to={`/events/${event.id}`}>Details</Link>
    </article>
  );
}
