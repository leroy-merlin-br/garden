/**
 * Check if form field is valid based on the `data-confirm` attribute.
 */
export default (field, $form) => field.value === $form.find(`[name="${field.getAttribute('data-confirm')}"]`).val()
