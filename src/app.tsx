import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import * as API from "./api";
import useGet from "./useGet";

const EventList: React.FC = () => {
  const get = useGet<API.ListEvents>("/events");

  if (get.getting) {
    return <>getting</>;
  }

  if (get.error) {
    throw get.error;
  }

  return (
    <ul>
      {get.got.events.map(event => (
        <li key={event.id}>
          {event.name}
        </li>
      ))}
    </ul>
  );
};

const UserList: React.FC = () => {
  const get = useGet<API.ListUsers>("/users");

  if (get.getting) {
    return <>getting</>;
  }

  if (get.error) {
    throw get.error;
  }

  return (
    <ul>
      {get.got.users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

const App: React.FC = () => (
  <StrictMode>
    <h1>Exercise</h1>
    <UserList />
    <EventList />
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById("main"));
