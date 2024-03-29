import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacters } from '../hooks/useCharacters';
import { useSortedCharacters } from '../hooks/useSortedCharacters';
import CharacterListItem from '../components/CharacterListItem';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = useCharacters({ name, gender });
  const [sortOption, setSortOption] = useState('');

  const sortedCharacters = useSortedCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle>Wyszukiwarka postaci Rick and Morty</SearchTitle>
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList
        characters={sortedCharacters}
        viewFn={(character) => <CharacterListItem {...character} />}
      />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
