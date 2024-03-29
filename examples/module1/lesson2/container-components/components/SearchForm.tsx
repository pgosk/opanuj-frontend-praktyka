import { FieldGender } from './FieldGender';
import { FieldName } from './FieldName';
import { FieldSort } from './FieldSort';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <FieldName value={name} onChange={setName} />
      <FieldGender value={gender} onChange={setGender} />
      <FieldSort value={sortOption} onChange={setSortOption} />
    </form>
  );
}

export default SearchForm;
