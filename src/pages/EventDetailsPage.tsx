
import { Link, useParams } from "react-router";
import { useState } from "react";
import { events } from "../data/events";
import EventSignupForm from "../components/EventSignupForm";

export default function EventDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const event = events.find((item) => item.id === eventId);
  const [seatsLeft, setSeatsLeft] = useState(event?.seats ?? 0);

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to Events</Link>
      </section>
    );
  }

  return (
    <article>
      <h1>{event.title}</h1>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Place:</strong> {event.place}
      </p>
      <p>
        <strong>Seats left:</strong> {seatsLeft}
      </p>

      <EventSignupForm
        seatsLeft={seatsLeft}
        onBooked={(tickets) => {
          setSeatsLeft((previous) => previous - tickets);
        }}
      />

      <p>
        <Link to="/events">Back to Events</Link>
      </p>
    </article>
  );
}
