import { model, Schema } from "mongoose";

const locationSchema = new Schema({
  name: String,
  type: String,
  dimension: String,
  residents: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  created: Date
});

locationSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
locationSchema.set('toJSON', {
  virtuals: true
});

export const Location = model('Location', locationSchema);