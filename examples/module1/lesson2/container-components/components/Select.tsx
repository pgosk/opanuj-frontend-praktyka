export const Select = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border h-7 mt-1"
    >
      {options.map(({ value, label }) => (
        <option value={value} key={label}>
          {label}
        </option>
      ))}
    </select>
  );
};
