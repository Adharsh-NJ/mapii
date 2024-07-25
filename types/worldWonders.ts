import type { ILocation } from "./common";

export interface Wonder {
  name: string;
  location: ILocation;
  imgs: string[];
  marker: ILocation;
  desc: string
}