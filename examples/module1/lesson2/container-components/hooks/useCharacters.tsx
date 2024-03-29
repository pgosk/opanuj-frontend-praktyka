import React from 'react';
import { Character } from '../types/Character';

export const useCharacters = ({
  name,
  gender,
}: {
  name: string;
  gender: string;
}) => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    if (name || gender) {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
      )
        .then((response) => response.json())
        .then((data) => setCharacters(data.results || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name, gender]);

  return characters;
};
