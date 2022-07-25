import { Location } from "../../../db/mongo/models/Location";

export const getLocations = async ({ page }: { page: number }) => {
  const limitOfDocuments = 20;
  const currentPage = page <= 0 ? 1 : page;
  let totalPages: number;

  const fields = [
    'id',
    'name',
    'type',
    'dimension',
    'residents',
    'created'
  ]

  const [totalDocuments, locationData] = await Promise.all([
    Location.count().exec(),
    Location.find()
      .select(fields.join(' '))
      .limit(limitOfDocuments)
      .skip(
        (currentPage - 1) * limitOfDocuments
      )
      .populate('residents', '_id name')
      .exec()
  ]);

  totalPages = Math.ceil(totalDocuments / limitOfDocuments);

  return {
    info: {
      next: ((currentPage * limitOfDocuments < totalDocuments) ? currentPage + 1 : currentPage),
      pages: totalPages,
      count: totalDocuments,
      prev: (currentPage === 1 ? currentPage : currentPage - 1)
    },
    results: locationData
  };
};

export const getLocationById = async ({ id }: { id: string }) => {
  const locationData = await Location.findById(id)
    .populate('residents', '_id name')
    .exec();
  return locationData;
}