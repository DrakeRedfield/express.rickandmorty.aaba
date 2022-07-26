import { characterQuerysResolvers } from "../../apps/character/resolvers";
import { episodeQuerysResolvers } from "../../apps/episode/resolvers";
import { locationQuerysResolvers } from "../../apps/location/resolvers";

export const resolvers = {
  Query: {
    ...characterQuerysResolvers.Query,
    ...episodeQuerysResolvers.Query,
    ...locationQuerysResolvers.Query
  }
};