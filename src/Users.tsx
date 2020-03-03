import React from "react";
import { Loader, Panel } from "@culturehq/components";

import * as API from "./api";
import useGet from "./useGet";

const Users: React.FC = () => {
  const get = useGet<API.ListUsers>("/users");

  if (get.getting) {
    return <Loader loading />;
  }

  if (get.error) {
    throw get.error;
  }

  return (
    <Panel>
      <Panel.Heading>
        Users
      </Panel.Heading>
      <Panel.Body>
        <ul>
          {get.got.users.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </Panel.Body>
    </Panel>
  );
};

export default Users;
