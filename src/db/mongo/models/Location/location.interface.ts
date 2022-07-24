import { Document } from "mongoose";

export interface ILocation extends Document {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  created: Date;
}