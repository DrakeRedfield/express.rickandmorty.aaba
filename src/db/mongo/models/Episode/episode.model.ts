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

EpisodeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
EpisodeSchema.set('toJSON', {
  virtuals: true
});

export const Episode = model<IEpisode>('Episode', EpisodeSchema);