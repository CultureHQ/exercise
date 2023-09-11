/* eslint-disable camelcase */

export type User = {
  id: number;
  active: boolean;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: number;
  name: string;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
};

export type Rsvp = {
  id: number;
  response_type: "invited" | "declined" | "interested" | "accepted";
  created_at: string;
  updated_at: string;
};

export type GetEvent = {
  event: Event & {
    rsvps: (Rsvp & { user: User })[];
  };
};

export type GetUser = {
  user: User & {
    rsvps: (Rsvp & { event: Event })[];
  };
};

export type ListUsers = {
  users: User[];
};

export type ListEvents = {
  events: (Event & { host: User })[];
};
