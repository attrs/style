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

const listener = (e) => {
  const trigger = e.target.closest('[data-toggle]');
  const toggleid = trigger && trigger.getAttribute('data-toggle');
  const togglegroup = trigger && trigger.getAttribute('data-toggle-group');
  const target = toggleid && closest(e.target, `[data-toggle-id="${toggleid}"]`);
  const display = target.getAttribute('data-toggle-display');
  // console.log('toggle click', trigger, toggleid, target);
  if (!target) return;

  // console.log('toggle display', target.style.display);
  if (target.style.display === 'none' || window.getComputedStyle(target).getPropertyValue('display') === 'none') {
    if (display) target.style.setProperty('display', display, 'important');
    else target.style.display = null;
  } else {
    target.style.display = 'none';
  }
};

module.exports = (element) => {
  // console.log('toggle', element);
  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};
