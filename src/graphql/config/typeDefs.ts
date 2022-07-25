import { gql } from "apollo-server-express";
import { characterSchemasList } from '../../apps/character/schemas';

export const typeDefs = [
  gql`
    type paginationInfo {
      next: Int
      pages: Int
      count: Int
      prev: Int
    }
  `,
  ...characterSchemasList
];