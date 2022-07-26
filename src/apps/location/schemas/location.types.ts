import { gql } from "apollo-server-express";

export const locationResponseType = gql`
  type locationData {
    id: String
    name: String
    type: String
    dimension: String
    residents: [baseJoin]
    created: String
  }

  type locationResponseType {
    info: paginationInfo
    results: [locationData]
  }
`;
