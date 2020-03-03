import React from "react";
import { Link } from "react-router-dom";
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
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </Panel.Body>
    </Panel>
  );
};

export default Users;
