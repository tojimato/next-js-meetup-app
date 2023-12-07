import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  console.log(eventId);
  
  if (!event) {
    return <ErrorAlert> No event found!</ErrorAlert>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date}  image={event.image} imageAlt={event.title} address={event.location} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
