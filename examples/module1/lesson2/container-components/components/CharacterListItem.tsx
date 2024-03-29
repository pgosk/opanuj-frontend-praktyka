import { Character } from '../types/Character';

function CharacterListItem(character: Character) {
  return (
    <li className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  );
}

export default CharacterListItem;
