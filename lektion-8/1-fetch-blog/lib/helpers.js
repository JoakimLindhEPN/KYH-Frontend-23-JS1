export const createCustomElement = (type, classList, text) => {
  const el = document.createElement(type)
  if(classList && classList.length > 0) {
    el.className = classList
  }
  if(text) {
    el.textContent = text
  }
  return el
}