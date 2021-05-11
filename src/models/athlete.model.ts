import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IAthlete extends mongoose.Document {
  _id: string;
  firstName: string;
  lastName: string;
  classOf: string;
}

const AthleteSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  classOf: { type: String, required: true },
});

const Athlete = mongoose.model<IAthlete>('Athlete', AthleteSchema);

export { Athlete, IAthlete };
