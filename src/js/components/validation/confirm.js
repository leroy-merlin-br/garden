/**
 * Check if form field is valid based on the `data-confirm` attribute.
 */
export default (field, form) => {
  const confirm = form.querySelector(`[name="${field.getAttribute('data-confirm')}"]`) || {}

  return field.value === confirm.value
}
