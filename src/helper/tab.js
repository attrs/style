const findRelatedTabContentsItem = (el, tabid) => {
  if (!el) return null;
  const item = el.querySelector('.x-tab-contents *[data-tab="' + tabid + '"]');
  if (item) return item;
  return findRelatedTabContentsItem(el.parentNode, tabid);
};

const selectTab = (tabitem) => {
  const tab = tabitem.closest('.x-tab');
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

const listener = (e) => {
  selectTab(e.target.closest('.x-tab-item'));
};

export const tab = (element) => {
  const activetab = element.querySelector('.x-tab-item.active') || element.querySelector('.x-tab-item:first-child');
  selectTab(activetab);

  element.removeEventListener('click', listener);
  element.addEventListener('click', listener);
};
