import { Label } from './Label';
import { Select } from './Select';

export const FieldGender = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Label>
      Gender
      <Select
        value={value}
        onChange={onChange}
        options={[
          { value: '', label: 'Any Gender' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
    </Label>
  );
};
