import React from 'react';
import {
  OperationFn,
  add,
  substr,
  multiply,
  divide,
  Result,
} from './functions';
import { Button } from './components/button';
import { NumberInput } from './components/input';

const App = () => {
  const [firstValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  const [{ result, error }, setResult] = React.useState<Result>({ result: 0 });

  const calculate = (operation: OperationFn) => {
    setResult(operation(firstValue, secondValue));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput value={firstValue} onInputChange={setFirstValue} />
        <NumberInput value={secondValue} onInputChange={setSecondValue} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button action={() => calculate(add)}>+</Button>
        <Button action={() => calculate(substr)}>-</Button>
        <Button action={() => calculate(multiply)}>*</Button>
        <Button action={() => calculate(divide)}>/</Button>
      </div>
      <div>Result: {error || result}</div>
    </div>
  );
};

export default App;
