import { Schema, model } from 'mongoose';

interface IExperience {
  name: string;
  company: string;
  startDate: number;
  endDate: number;
  description: number;
}

const ExperienceSchema = new Schema<IExperience>({
  name: { Type: String },
  company: { Type: String },
  startDate: { Type: String },
  endDate: { Type: Number },
  description: { Type: Number },
});

const ExperienceModel = model<IExperience>('Experience', ExperienceSchema);

export default ExperienceModel;
