export type User = {
  id: number;
  active: boolean;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: number;
  host: User;
  name: string;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
};

export type Rsvp = {
  id: number;
  event: Event;
  user: User;
  response_type: "invited" | "declined" | "interested" | "accepted";
  created_at: string;
  updated_at: string;
};

export type ListUsers = {
  users: User[];
};

export type ListEvents = {
  events: Event[];
};
