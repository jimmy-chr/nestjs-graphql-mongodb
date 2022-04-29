import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cats.schema';
// import { CatInput } from './inputs/cats.input';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
  /*
  async create(createCat: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(createCat);
    return createdCat.save();
  }
*/
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
