import { model, Schema } from "mongoose";
import { ICharacter } from './character.interface';

const CharacterSchema = new Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  image: String,
  episode: [{
    type: Schema.Types.ObjectId,
    ref: 'Episode'
  }],
  created: {
    type: Date,
    default: Date.now
  },
});

CharacterSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
CharacterSchema.set('toJSON', {
  virtuals: true
});

export const Character = model<ICharacter>('Character', CharacterSchema);