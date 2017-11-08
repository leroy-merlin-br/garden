/**
 * Check if a field of type checkbox or radio is checked.
 */
export default (field, $form) => {
  if (field.type === 'checkbox') {
    return field.checked
  }

  if (field.type === 'radio') {
    return $form.find(`[name="${field.name}"]:checked`).length
  }

  return !!field.value.trim()
}
