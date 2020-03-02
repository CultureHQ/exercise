import React from "react";
import { Loader } from "@culturehq/components";

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
    <>
      <h1>Events</h1>
      <ul>
        {get.got.events.map(event => (
          <li key={event.id}>
            {event.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
