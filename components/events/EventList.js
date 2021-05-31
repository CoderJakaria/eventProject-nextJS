import React from "react";
import EventItem from "./EventItem";
import styles from "./EventLIst.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items?.map(item => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          date={item.date}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
