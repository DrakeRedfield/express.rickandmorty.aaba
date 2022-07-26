import { gql } from "apollo-server-express";
import { characterSchemasList } from '../../apps/character/schemas';
import { episodeSchemasList } from "../../apps/episode/schemas";
import { locationSchemasList } from '../../apps/location/schemas/index';

export const typeDefs = [
  gql`
    type paginationInfo {
      next: Int
      pages: Int
      count: Int
      prev: Int
    }

    type baseJoin {
      id: String
      name: String
    }
  `,
  ...characterSchemasList,
  ...episodeSchemasList,
  ...locationSchemasList
];