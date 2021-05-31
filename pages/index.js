import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy_data";

const HomePage = () => {
  const featuredEvent = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvent} />
    </div>
  );
};

export default HomePage;
