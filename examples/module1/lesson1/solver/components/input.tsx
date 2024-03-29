export const NumberInput = ({
  value,
  onInputChange,
}: {
  value: number;
  onInputChange: (value: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(parseFloat(e.target.value));
  };

  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={handleChange}
    />
  );
};
