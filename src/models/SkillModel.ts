import { Schema, model } from 'mongoose';

interface ISkill {
  name: string;
  percent: string;
}

const SkillSchema = new Schema<ISkill>({
  name: { Type: String },
  percent: { Type: String },
});

const SkillModel = model<ISkill>('Skill', SkillSchema);

export default SkillModel;
