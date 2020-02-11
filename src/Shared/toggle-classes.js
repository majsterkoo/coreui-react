export default function toggleClasses (toggleClass, classList, force, element_id = null) {
  const level = classList.indexOf(toggleClass);
  const removeClassList = classList.slice(0, level);

  //TODO element exists check?
  const document_element = (element_id === null) ? document.body : document.getElementById(element_id);

  removeClassList.map((className) => document_element.classList.remove(className))
  if (force === true) {
    document_element.classList.add(toggleClass);
  } else if (force === false) {
    document_element.classList.remove(toggleClass);
  } else {
    document_element.classList.toggle(toggleClass);
  }
  return document_element.classList.contains(toggleClass);
}
