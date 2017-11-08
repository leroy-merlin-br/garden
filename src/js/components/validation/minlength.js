/**
 * Check if a field is valid based on the `data-minlength` attribute.
 */
export default (field) => field.value.length >= field.getAttribute('data-minlength')
