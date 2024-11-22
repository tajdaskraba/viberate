import { useQuery } from '@tanstack/react-query';
import { Artist } from '../types/artist';

export const useArtist = (artistUuid: string) => {
  return useQuery({
    queryKey: ['artist', artistUuid],
    queryFn: async () => {
      const response = await fetch(`https://mocky.viberate.com/api/v1/${artistUuid}`);
      if (!response.ok) {
        throw new Error('Failed to fetch artist details');
      }
      return response.json() as Promise<Artist>;
    },
    enabled: !!artistUuid,
  });
};