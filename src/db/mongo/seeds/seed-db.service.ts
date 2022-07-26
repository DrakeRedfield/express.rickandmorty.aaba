import { mongoService } from '../config';
import { Seeder } from '../utils';
import { Location } from "../models/Location";
import { Character } from "../models/Character";
import { Episode } from '../models/Episode';
import { Model } from 'mongoose';
import { characterData } from './characters.seed';
import { locationData } from './locations.seed';
import { episodeData } from './episodes.seed';

const seeds: { [key: string]: any[] } = {
  character: characterData,
  location: locationData,
  episode: episodeData
}

const populateModelDocument = async <T>(model: Model<T>, seedName: any) => {
  console.log('Populing ', seedName);
  const modelSeeder = new Seeder<T>(model);
  const documentData = seeds[seedName] || [];
  await modelSeeder.cleanModelData();
  return modelSeeder.populateDb(documentData);
}

export default async () => {
  const mongodbService = mongoService;
  await mongodbService.connect();

  await Promise.all([
    populateModelDocument(Episode, 'episode'),
    populateModelDocument(Character, 'character'),
    populateModelDocument(Location, 'location'),
  ]);

  mongodbService.disconnect();
};