/**
 *
 * @param {*} enteredValue new selected option value
 * @param {*} id select input value
 */
export function triggerOnChangeSelectedValueInput(enteredValue, id) {
  const selectedValueInput = document.getElementById(id)
  selectedValueInput.value = enteredValue

  const selectedValueInputEvent = new Event('change', { bubbles: true })

  const tracker = selectedValueInput._valueTracker
  if (tracker) {
    tracker.setValue('fake value')
  }

  selectedValueInput.dispatchEvent(selectedValueInputEvent)
}
