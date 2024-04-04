import axios from 'axios';
import { type Article } from '../types/Article';

export const fetchArticles = async () => {
  try {
    const response = await axios.get<{ articles: Article[] }>(
      'http://localhost:3000/api/data/articles?timeout=3000'
    );
    return response.data;
  } catch (error: unknown) {
    throw TypeError('Unexpected error type');
  }
};
