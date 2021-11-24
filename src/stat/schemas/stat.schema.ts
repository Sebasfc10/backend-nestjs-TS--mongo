/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const StatSchema = new Schema({
  hp: Number,
  atk: Number,
  def: Number,
  atks: Number,
  defs: Number,
  vel: Number,
  pre: Number,
  eva: Number,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});
