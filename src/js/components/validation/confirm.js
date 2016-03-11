export default (field, $form) => field.value === $form.find(`[name="${field.getAttribute('data-confirm')}"]`).val();
