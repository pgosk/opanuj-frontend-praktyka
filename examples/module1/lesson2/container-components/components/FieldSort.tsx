import { Label } from './Label';
import { Select } from './Select';

export const FieldSort = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Label>
      Sort by
      <Select
        value={value}
        onChange={onChange}
        options={[
          { value: '', label: 'Initial' },
          { value: 'name', label: 'Name' },
          { value: 'created', label: 'Created Date' },
        ]}
      />
    </Label>
  );
};
