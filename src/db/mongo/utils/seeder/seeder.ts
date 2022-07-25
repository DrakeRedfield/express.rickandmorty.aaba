import type { Model } from "mongoose";
import { mongoService } from "../../config";
import * as fs from 'fs';

export class Seeder<T> {
  constructor(
    private readonly model: Model<T>
  ) { }

  async cleanModelData() {
    return this.model.deleteMany({}).exec();
  }

  async populateDb(data: any[]) {
    const populatedData = await this.model.insertMany(data);
    return populatedData;
  }
}