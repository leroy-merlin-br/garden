/**
 * Check if a field of type checkbox or radio is checked.
 */
export default (field, form) => {
  if (field.type === 'checkbox') {
    return field.checked
  }

  if (field.type === 'radio') {
    const radio = form.querySelectorAll(`[name="${field.name}"]:checked`)

    return !!radio.length
  }

  return !!field.value.trim()
}
