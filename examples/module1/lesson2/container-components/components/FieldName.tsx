import { Label } from './Label';

export const FieldName = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Label>
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Label>
  );
};
