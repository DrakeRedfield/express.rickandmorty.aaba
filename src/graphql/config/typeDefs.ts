import { gql } from "apollo-server-express";
import { characterTypeDefList } from '../../apps/character/typeDefs/index';

export const typeDefs = [
  gql`
    type paginationInfo {
      next: Int
      pages: Int
      count: Int
      prev: Int
    }
  `,
  ...characterTypeDefList
];