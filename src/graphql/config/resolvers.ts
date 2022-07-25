import { characterQuerysResolvers } from "../../apps/character/resolvers";
import { episodeQuerysResolvers } from "../../apps/episode/resolvers";

export const resolvers = {
  ...characterQuerysResolvers,
  ...episodeQuerysResolvers
};