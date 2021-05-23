import mongoose from 'mongoose';

const { Schema } = mongoose;

interface ISeason extends mongoose.Document {
  _id: string;
  year: number;
  record: {
    wins: number;
    losses: number;
    ties: number;
  };
  teamAward: string;
  coachesAward: string;
  roster: Array<string>;
  captians: Array<string>;
  calOpen: string;
  calRegularSeason: string;
  notes: string;
  imageIDs: Array<string>;
  races: Array<unknown>;
}

const SeasonSchema = new Schema({
  year: { type: Number, required: true },
  coach: { type: String, required: true },
  record: {
    wins: { type: Number, required: true },
    losses: { type: Number, required: true },
    ties: { type: Number, required: true },
  },
  teamAward: { type: String, required: false },
  coachesAward: { type: String, required: false },
  roster: { type: Array, required: false },
  captians: { type: Array, required: false },
  leagueMeet: { type: String, required: false },
  regularSeason: { type: String, required: false },
  notes: { type: String, required: false },
  imageIDs: { type: Array, required: false },
  races: { type: Array, default: [], required: false },
});

const Season = mongoose.model<ISeason>('Season', SeasonSchema);

export { Season, ISeason };
