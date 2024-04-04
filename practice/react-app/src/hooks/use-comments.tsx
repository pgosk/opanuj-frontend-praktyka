import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '../api/fetch-comments';

export const useComments = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
  });
};
