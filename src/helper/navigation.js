const setParentActive = (el) => {
  el.classList.add('active');
  if (el && el.classList && el.classList.contains('x-navigation')) return;
  // setParentActive(el.parentNode);
};

const listener = (e) => {
  const navigation = e.target.closest('.x-navigation');
  const navitem = e.target.closest('.x-navitem');
  const group = navigation.getAttribute('data-navigation-group');

  if (!navigation || !navitem) return;

  group && document.querySelectorAll(`.x-navigation[data-navigation-group="${group}"] .x-navitem.active`).forEach((n) => n.classList.remove('active'));

  if (navitem.querySelector('ul')) {
    if (navitem.classList.contains('x-navitem-expand')) navitem.classList.remove('x-navitem-expand');
    else navitem.classList.add('x-navitem-expand');
  }

  navigation.querySelectorAll('.x-navitem.active').forEach((node) => node.classList.remove('active'));
  setParentActive(navitem);
};

export default (element) => {
  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};
