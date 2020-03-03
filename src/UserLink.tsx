import React from "react";
import { Link } from "react-router-dom";

import * as API from "./api";

type UserLinkProps = {
  user: API.User;
};

const UserLink: React.FC<UserLinkProps> = ({ user }) => (
  <Link to={`/users/${user.id}`}>
    {user.name}
  </Link>
);

export default UserLink;
