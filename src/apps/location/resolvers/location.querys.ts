import { getLocations, getLocationById } from '../services';

export const locationQuerysResolvers = {
  Query: {
    locations: (_parent: any, args: any, _context: any, _info: any) => {
      return getLocations(args)
    },
    location: (_parent: any, args: any, _context: any, _info: any) => {
      return getLocationById(args)
    },
  }
}