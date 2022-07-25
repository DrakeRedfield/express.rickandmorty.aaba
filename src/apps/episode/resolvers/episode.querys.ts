import { getEpisodes, getEpisodeById } from '../services';

export const episodeQuerysResolvers = {
  Query: {
    episodes: (_parent: any, args: any, _context: any, _info: any) => {
      return getEpisodes(args)
    },
    episode: (_parent: any, args: any, _context: any, _info: any) => {
      return getEpisodeById(args)
    },
  }
}