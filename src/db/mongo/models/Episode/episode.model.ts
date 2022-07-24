import { model, Schema } from "mongoose";
import { IEpisode } from './episode.interface';

const EpisodeSchema = new Schema({
  name: String,
  air_date: String,
  episode: String,
  characters: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  created: Date
});

export const Episode = model<IEpisode>('Episode', EpisodeSchema);