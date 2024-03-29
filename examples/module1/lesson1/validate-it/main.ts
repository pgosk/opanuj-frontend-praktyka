import { NUMBER_VALIDATORS } from './validation/rules';
import { validator } from './validation/validator';

function main() {
  const input = document.querySelector('input');
  const btnValidate = document.querySelector('#btn-validate');
  const btnClear = document.querySelector('#btn-clear');
  const result = document.querySelector('#result');

  if (input === null) {
    throw ReferenceError('Missing DOM elements: input');
  }

  if (result === null) {
    throw ReferenceError('Missing DOM elements: result');
  }

  if (btnValidate === null) {
    throw ReferenceError('Missing DOM elements: validate button');
  }

  btnValidate.addEventListener('click', () => {
    const validationResult = validator(input.value, NUMBER_VALIDATORS);

    result.innerHTML = validationResult;
  });

  if (btnClear === null) {
    throw ReferenceError('Missing DOM elements: clear button');
  }

  btnClear.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
