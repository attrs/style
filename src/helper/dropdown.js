let opened;

const listener = (e) => {
  const dropdown = e.target.closest('.x-dropdown');

  if (!dropdown) {
    // dropdown.removeEventListener('click', listener);
    return;
  }

  if (dropdown.classList.contains('x-dropdown-open')) {
    dropdown.classList.remove('x-dropdown-open');
    opened = null;
  } else {
    dropdown.classList.add('x-dropdown-open');
    if (opened) opened.classList.remove('x-dropdown-open');
    opened = dropdown;
  }
};

document.addEventListener('click', (e) => {
  if (!opened) return;
  if (opened.contains(e.target)) return;
  opened.classList.remove('x-dropdown-open');
  opened = null;
});

export const dropdown = (element) => {
  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};
