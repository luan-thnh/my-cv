import { Schema, model } from 'mongoose';

interface IService {
  name: string;
  description: string;
}

const ServiceSchema = new Schema<IService>({
  name: { Type: String },
  description: { Type: String },
});

const ServiceModel = model<IService>('Service', ServiceSchema);

export default ServiceModel;
