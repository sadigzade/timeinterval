export enum Status {
  LOADING = "loading",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export type Date = {
  id: string;
  name?: string;
  startInterval: number;
  endInterval: number;
  events: Event[];
};

export type Event = {
  id: string;
  year: number;
  text: string;
};
