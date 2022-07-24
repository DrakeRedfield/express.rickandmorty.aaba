import { mongoService } from './mongo/config';
import seedDbMongoService from './mongo/seeds/seed-db.service';

export default {
  services: {
    mongo: mongoService,
  },
  seedDb: {
    mongo: seedDbMongoService
  }
}