const findRelatedTabContentsItem = (el, tabid) => {
  const item = el.querySelector('.x-tab-contents *[data-tab="' + tabid + '"]');
  if (item) return item;
  return findRelatedTabContentsItem(el.parentNode, tabid);
};

const listener = (e) => {
  const tab = e.target.closest('.x-tab');
  const tabitem = e.target.closest('.x-tab-item');
  if (!tab || !tabitem) return;

  tab.querySelectorAll('.x-tab-item').forEach((node) => node.classList.remove('active'));
  tabitem.classList.add('active');

  const tabid = tabitem.getAttribute('data-tab');
  if (!tabid) return;
  const tabcontentsitem = findRelatedTabContentsItem(tab, tabid);
  if (!tabcontentsitem) return;

  const tabcontents = tabcontentsitem.closest('.x-tab-contents');
  tabcontents.querySelectorAll('*[data-tab]').forEach((node) => node.classList.remove('active'));
  tabcontentsitem.classList.add('active');
};

export const tab = (element) => {
  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};