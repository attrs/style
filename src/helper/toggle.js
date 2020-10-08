const closest = (element, selector) => {
  if (typeof element === 'string') {
    selector = element;
    element = document._currentScript || document.currentScript;
  }

  let found,
    parent = element.parentNode,
    fn = selector;

  fn = (current) => {
    return current.querySelector(selector);
  };

  do {
    found = fn(parent);
    if (found) return found;
  } while ((parent = parent.parentNode));

  return null;
};

export const toggle = (element) => {
  const toggleid = element.getAttribute('data-toggle');
  const listener = (e) => {
    const target = closest(e.target, `[data-toggle-id="${toggleid}"]`);
    if (!target) return;

    if (!target.style.display) {
      target.style.display = 'none';
    } else {
      target.style.display = null;
    }
  };

  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};
