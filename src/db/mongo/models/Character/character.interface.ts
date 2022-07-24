import { Document } from "mongoose";

export interface ICharacter extends Document {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: string[];
  created: Date;
}