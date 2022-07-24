import type { Model } from "mongoose";
import { mongoService } from "../../config";
import * as fs from 'fs';

export class Seeder<T> {
  constructor(
    private readonly model: Model<T>
  ) { }

  cleanModelData() {
    this.model.remove({})
  }

  async populateDb(data: any[]) {
    mongoService.connect();

    const populatedData = await this.model.insertMany(data)

    mongoService.disconnect();
    return populatedData;
  }
}