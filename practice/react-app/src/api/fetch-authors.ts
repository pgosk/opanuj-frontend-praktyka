import axios from 'axios';
import { type Author } from '../types/Authors';

export const fetchAuthors = async () => {
  try {
    const response = await axios.get<{ authors: Author[] }>(
      'http://localhost:3000/api/data/authors?timeout=5000'
    );
    return response.data;
  } catch (error: unknown) {
    throw TypeError('Unexpected error type');
  }
};
