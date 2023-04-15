import { Schema, model } from 'mongoose';

interface IProfile {
  address: string;
  email: string;
  job: string;
  name: string;
  age: string;
  birthDate: string;
  phone: string;
  facebook: string;
  github: string;
  avatar: string;
  description: string;
  profile: string;
}

const ProfileSchema = new Schema<IProfile>({
  address: { Type: String },
  email: { Type: String },
  job: { Type: String },
  name: { Type: String },
  age: { Type: String },
  birthDate: { Type: String },
  phone: { Type: String },
  facebook: { Type: String },
  github: { Type: String },
  avatar: { Type: String },
  description: { Type: String },
  profile: { Type: String },
});

const ProfileModel = model<IProfile>('Profile', ProfileSchema);

export default ProfileModel;
