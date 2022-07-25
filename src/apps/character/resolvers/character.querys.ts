import { getCharacters, getCharacterById } from '../services';

export const characterQuerysResolvers = {
  Query: {
    characters: (_parent: any, args: any, _context: any, _info: any) => {
      return getCharacters(args)
    },
    character: (_parent: any, args: any, _context: any, _info: any) => {
      return getCharacterById(args)
    },
  }
}