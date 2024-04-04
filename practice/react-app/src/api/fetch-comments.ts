import axios from 'axios';
import { type Comment } from '../types/Comment';

export const fetchComments = async () => {
  try {
    const response = await axios.get<{ comments: Comment[] }>(
      'http://localhost:3000/api/data/comments?timeout=2000'
    );
    return response.data;
  } catch (error: unknown) {
    throw TypeError('Unexpected error type');
  }
};
