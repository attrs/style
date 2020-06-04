const setParentActive = (el) => {
  el.classList.add('active');
  if (el && el.classList && el.classList.contains('x-navigation')) return;
  setParentActive(el.parentNode);
};

const listener = (e) => {
  const navigation = e.target.closest('.x-navigation');
  const navitem = e.target.closest('.x-navitem');
  if (!navigation || !navitem) return;

  if (navitem.querySelector('ul')) {
    if (navitem.classList.contains('x-navitem-expand')) navitem.classList.remove('x-navitem-expand');
    else navitem.classList.add('x-navitem-expand');
  }

  navigation.querySelectorAll('.x-navitem.active').forEach((node) => node.classList.remove('active'));
  setParentActive(navitem);
};

export const navigation = (element) => {
  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};
