import { Character } from "../../../db/mongo/models/Character";

export const getCharacters = async ({ page }: { page: number }) => {
  const limitOfDocuments = 20;
  const currentPage = page <= 0 ? 1 : page;
  let totalPages: number;

  const fields = [
    'id',
    'name',
    'status',
    'species',
    'type',
    'gender',
    'origin',
    'location',
    'image',
    'episode',
    'created'
  ]

  const [totalDocuments, charactersData] = await Promise.all([
    Character.count().exec(),
    Character.find()
      .select(fields.join(' '))
      .limit(limitOfDocuments)
      .skip(
        (currentPage - 1) * limitOfDocuments
      )
      .populate('origin', '_id name')
      .populate('location', '_id name')
      .populate('episode', '_id name')
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
    results: charactersData
  };
};

export const getCharacterById = async ({ id }: { id: string }) => {
  const characterData = await Character.findById(id)
    .populate('origin', '_id name')
    .populate('location', '_id name')
    .populate('episode', '_id name')
    .exec();
  return characterData;
}