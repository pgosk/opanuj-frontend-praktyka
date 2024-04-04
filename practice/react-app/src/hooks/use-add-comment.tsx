import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { type Comment } from '../types/Comment';

export const useAddComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['comments'],
    mutationFn: async (comment: { comment: string; rating: string }) => {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/data/comments?timeout=2000',
          comment
        );

        return response.data;
      } catch (error) {
        throw Error('Cannot add comment');
      }
    },
    retry: 2,
    onMutate: async (comment) => {
      await queryClient.cancelQueries({ queryKey: ['comments'] });

      const newComment: Comment = {
        id: new Date().getTime(),
        text: comment.comment,
        author: 'John Doe',
        rating: parseInt(comment.rating, 10),
      };

      queryClient.setQueryData<{ comments: Comment[] }>(
        ['comments'],
        (prev) => {
          return prev
            ? { comments: [...prev.comments, newComment] }
            : { comments: [newComment] };
        }
      );

      return { newComment };
    },
    onError: (error, comment, context) => {
      console.warn(error, comment);
      queryClient.setQueryData<{ comments: Comment[] }>(
        ['comments'],
        (prev) => {
          return prev
            ? {
                comments: [
                  ...prev.comments.filter(
                    (comment) => comment.id !== context?.newComment.id
                  ),
                ],
              }
            : prev;
        }
      );
    },
    onSuccess: () => {
      queryClient.setQueryData<{ comments: Comment[] }>(
        ['comments'],
        (prev) => prev
      );
    },
  });

  return mutation;
};
