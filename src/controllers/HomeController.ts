import { Request, Response } from 'express';
import SkillModel from '../models/SkillModel';
import ServiceModel from '../models/ServiceModel';
import ProfilerModel from '../models/ProfileModel';
import PortfolioModel from '../models/PortfolioModel';
import EducationModel from '../models/EducationModel';
import ExperienceModel from '../models/ExperienceModel';

class HomeController {
  async index(req: Request, res: Response) {
    const skills = await SkillModel.find({});
    const services = await ServiceModel.find({});
    const profiles = await ProfilerModel.find({});
    const profilers = await ProfilerModel.find({});
    const portfolios = await PortfolioModel.find({});
    const educations = await EducationModel.find({});
    const experiences = await ExperienceModel.find({});

    res.render('index', {
      profile: profiles[0],
      skills,
      services,
      profilers,
      portfolios,
      educations,
      experiences,
    });
  }
}

export default new HomeController();
