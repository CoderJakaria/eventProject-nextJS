import React from "react";
import { getEventById } from "../../dummy_data";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const getSelectedItem = getEventById(eventId);
  console.log(getSelectedItem);

  if (!getSelectedItem) {
    return (
      <ErrorAlert>
        <p>No Event Found!</p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={getSelectedItem.title} />
      <EventLogistics
        date={getSelectedItem.date}
        address={getSelectedItem.location}
        image={getSelectedItem.image}
        imageAlt={getSelectedItem.title}
      />
      <EventContent>
        <p>{getSelectedItem.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
