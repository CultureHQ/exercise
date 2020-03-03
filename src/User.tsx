import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Loader, Panel } from "@culturehq/components";

import * as API from "./api";
import EventLink from "./EventLink";
import useGet from "./useGet";

export const UserWithParam: React.FC<{ userId?: string }> = ({ userId }) => {
  const get = useGet<API.GetUser>(`/users/${userId}`);

  if (get.getting) {
    return <Loader loading />;
  }

  if (get.error && get.error.status === 404) {
    return <Redirect to="/404" />;
  }

  if (get.error) {
    throw get.error;
  }

  const { user } = get.got;

  return (
    <Panel>
      <Panel.Heading>
        {user.name}
      </Panel.Heading>
      <Panel.Body>
        <ul>
          {user.rsvps.map(rsvp => (
            <li key={rsvp.id}>
              <EventLink event={rsvp.event} /> - {rsvp.response_type}
            </li>
          ))}
        </ul>
      </Panel.Body>
    </Panel>
  );
};

const User: React.FC = () => {
  const { userId } = useParams();

  return <UserWithParam userId={userId} />;
};

export default User;
