import { gql } from "apollo-server-express";

export const charactersResponseType = gql`
  type characterData {
    id: String
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: baseJoin
    location: baseJoin
    image: String
    episode: [baseJoin]
    created: String
  }

  type charactersResponseType {
    info: paginationInfo
    results: [characterData]
  }
`;
