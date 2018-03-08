/**
 * Changes the input field of the form
 *
 * @param  {input}   The new text of the input field
 *
 * @return {object}  An action object with a type of CHANGE_INPUT
 */
export function changeInput(input) {
  return {
    type: 'CHANGE_INPUT',
    input,
  };
}
