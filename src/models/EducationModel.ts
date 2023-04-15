import { Schema, model } from 'mongoose';

interface IEducation {
  certificate: string;
  school: string;
  startDate: number;
  endDate: number;
  description: string;
}

const EducationSchema = new Schema<IEducation>({
  certificate: { Type: String },
  school: { Type: String },
  startDate: { Type: String },
  endDate: { Type: Number },
  description: { Type: String },
});

const EducationModel = model<IEducation>('Education', EducationSchema);

export default EducationModel;
