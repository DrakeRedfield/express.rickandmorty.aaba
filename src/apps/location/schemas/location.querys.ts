import { gql } from "apollo-server-express";

export const locationQuerys = gql`
  type Query {
    locations(page: Int!): locationResponseType
    location(id: String!): locationData
  }
`;
