import { Character } from '../types/Character';

function CharacterList({
  characters,
  viewFn,
}: {
  characters: Character[];
  viewFn: (character: Character) => JSX.Element;
}) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <div key={character.id}>{viewFn(character)}</div>
      ))}
    </ol>
  );
}

export default CharacterList;
