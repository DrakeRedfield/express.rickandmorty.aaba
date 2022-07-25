import { Episode } from "../../../db/mongo/models/Episode";

export const getEpisodes = async ({ page }: { page: number }) => {
  const limitOfDocuments = 20;
  const currentPage = page <= 0 ? 1 : page;
  let totalPages: number;

  const fields = [
    'id',
    'name',
    'air_date',
    'episode',
    'characters',
    'created'
  ]

  const [totalDocuments, episodesData] = await Promise.all([
    Episode.count().exec(),
    Episode.find()
      .select(fields.join(' '))
      .limit(limitOfDocuments)
      .skip(
        (currentPage - 1) * limitOfDocuments
      )
      .populate('characters', '_id name')
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
    results: episodesData
  };
};

export const getEpisodeById = async ({ id }: { id: string }) => {
  const episodeData = await Episode.findById(id)
    .populate('characters', '_id name')
    .populate('episode', '_id name')
    .exec();
  return episodeData;
}