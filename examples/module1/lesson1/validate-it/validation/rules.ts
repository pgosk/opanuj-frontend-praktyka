type ValidatorStringMethod = (input: string) => boolean;
type ValidatorIntegerMethod = (input: number) => boolean;

export const isEmpty: ValidatorStringMethod = (value) => value === '';

export const isInteger: ValidatorStringMethod = (value) =>
  Number.isInteger(Number(value));

export const isLessThan =
  (boundary: number): ValidatorIntegerMethod =>
  (value) =>
    value < boundary;

export const isGreaterThan =
  (boundary: number): ValidatorIntegerMethod =>
  (value) =>
    value > boundary;

export const isEven: ValidatorIntegerMethod = (value) => value % 2 === 0;

export const NUMBER_VALIDATORS: ValidatorIntegerMethod[] = [
  isEven,
  isLessThan(100),
  isGreaterThan(0),
];
