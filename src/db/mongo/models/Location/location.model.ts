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

export const Location = model('Location', locationSchema);