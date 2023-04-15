import { Schema, model } from 'mongoose';

interface IPortfolio {
  imageURL: string;
  imageLgURL: string;
  title: string;
  type: string;
  website: string;
  description: string;
  index: number;
}

const PortfolioSchema = new Schema<IPortfolio>({
  imageURL: { Type: String },
  imageLgURL: { Type: String },
  title: { Type: String },
  type: { Type: String },
  website: { Type: String },
  description: { Type: String },
  index: { Type: Number },
});

const PortfolioModel = model<IPortfolio>('Portfolio', PortfolioSchema);

export default PortfolioModel;
