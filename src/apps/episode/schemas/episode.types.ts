import { gql } from "apollo-server-express";

export const episodesResponseType = gql`
  type episodeData {
    id: String
    name: String
    air_date: String
    episode: String
    characters: [baseJoin]
    created: String
  }

  type episodesResponseType {
    info: paginationInfo
    results: [episodeData]
  }
`;
