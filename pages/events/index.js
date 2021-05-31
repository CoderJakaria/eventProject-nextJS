import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy_data";
import { useRouter } from "next/router";

const AllEventPage = () => {
  const router = useRouter();
  const items = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={items} />
    </>
  );
};

export default AllEventPage;
