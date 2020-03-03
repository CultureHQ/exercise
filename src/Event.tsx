import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Loader, Panel } from "@culturehq/components";

import * as API from "./api";
import UserLink from "./UserLink";
import useGet from "./useGet";

export const EventWithParam: React.FC<{ eventId?: string }> = ({ eventId }) => {
  const get = useGet<API.GetEvent>(`/events/${eventId}`);

  if (get.getting) {
    return <Loader loading />;
  }

  if (get.error && get.error.status === 404) {
    return <Redirect to="/404" />;
  }

  if (get.error) {
    throw get.error;
  }

  const { event } = get.got;

  return (
    <Panel>
      <Panel.Heading>
        {event.name}
      </Panel.Heading>
      <Panel.Body>
        <ul>
          {event.rsvps.map(rsvp => (
            <li key={rsvp.id}>
              <UserLink user={rsvp.user} /> - {rsvp.response_type}
            </li>
          ))}
        </ul>
      </Panel.Body>
    </Panel>
  );
};

const Event: React.FC = () => {
  const { eventId } = useParams();

  return <EventWithParam eventId={eventId} />;
};

export default Event;
