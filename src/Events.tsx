import React from "react";
import { Link } from "react-router-dom";
import { Loader, Panel } from "@culturehq/components";

import * as API from "./api";
import useGet from "./useGet";

const Events: React.FC = () => {
  const get = useGet<API.ListEvents>("/events");

  if (get.getting) {
    return <Loader loading />;
  }

  if (get.error) {
    throw get.error;
  }

  return (
    <Panel>
      <Panel.Heading>
        Events
      </Panel.Heading>
      <Panel.Body>
        <ul>
          {get.got.events.map(event => (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.name}</Link>
            </li>
          ))}
        </ul>
      </Panel.Body>
    </Panel>
  );
};

export default Events;
