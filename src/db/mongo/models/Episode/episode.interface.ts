import { Document } from "mongoose";

export interface IEpisode extends Document {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  created: Date;
}