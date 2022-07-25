import { gql } from "apollo-server-express";

export const charactersResponseType = gql`
  type characterData {
    id: String
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: locationData
    location: locationData
    image: String
    episode: [episodeData]
    created: String
  }

  type charactersResponseType {
    info: paginationInfo
    results: [characterData]
  }
`;
