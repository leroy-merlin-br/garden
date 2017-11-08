/**
 * Check if a field is valid based on the `maxlength` attribute.
 */
export default (field) => field.value.length <= field.getAttribute('maxlength')
