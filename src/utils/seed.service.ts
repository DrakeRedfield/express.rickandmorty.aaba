import dbService from '../db/db.service';

async function seedDB() {
  await dbService.seedDb.mongo();
}

seedDB();