import {
  MESSAGE_ERROR,
  MESSAGE_ERROR_EMPTY,
  MESSAGE_ERROR_INVALID_TYPE,
  MESSAGE_SUCCESS,
} from './messages';
import { NUMBER_VALIDATORS, isEmpty, isInteger } from './rules';

export function validator(value: string, validators: typeof NUMBER_VALIDATORS) {
  if (isEmpty(value)) {
    return MESSAGE_ERROR_EMPTY;
  }

  if (!isInteger(value)) {
    return MESSAGE_ERROR_INVALID_TYPE;
  }

  const numberValidation = validators.every((validatorFn) => {
    return validatorFn(+value);
  });

  if (!numberValidation) {
    return MESSAGE_ERROR;
  }

  return MESSAGE_SUCCESS;
}
