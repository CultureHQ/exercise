import React from "react";
import { Loader } from "@culturehq/components";

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
    <>
      <h1>Users</h1>
      <ul>
        {get.got.users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
