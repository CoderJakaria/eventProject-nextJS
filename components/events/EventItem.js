import React from "react";
import Link from "next/link";
import styles from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/icons/date-icon";
import AddressIcon from "../icons/icons/address-icon";
import ArrowRightIcon from "../icons/icons/arrow-right-icon";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadable = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadable}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
