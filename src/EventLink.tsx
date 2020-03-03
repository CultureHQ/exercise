import React from "react";
import { Link } from "react-router-dom";

import * as API from "./api";

type EventLinkProps = {
  event: API.Event;
};

const EventLink: React.FC<EventLinkProps> = ({ event }) => (
  <Link to={`/events/${event.id}`}>
    {event.name}
  </Link>
);

export default EventLink;
