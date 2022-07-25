import { gql } from "apollo-server-express";

export const characterQuerys = gql`
  type Query {
    characters(page: Int!): charactersResponseType
    character(id: String!): characterData
  }
`;
