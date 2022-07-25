import { gql } from "apollo-server-express";
import { characterSchemasList } from '../../apps/character/schemas';
import { episodeSchemasList } from "../../apps/episode/schemas";

export const typeDefs = [
  gql`
    type paginationInfo {
      next: Int
      pages: Int
      count: Int
      prev: Int
    }
  `,
  ...characterSchemasList,
  ...episodeSchemasList
];