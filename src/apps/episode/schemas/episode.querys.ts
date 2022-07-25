import { gql } from "apollo-server-express";

export const episodeQuerys = gql`
  type Query {
    episodes(page: Int!): episodesResponseType
    episode(id: String!): episodeData
  }
`;
