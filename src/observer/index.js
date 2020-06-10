import debounce from 'debounce';
import { dropdown } from './dropdown';
import { navigation } from './navigation';
import { tab } from './tab';

const blacklist = ['.x-noob'];
const scan = () => {
  const blacklistselector = blacklist.join(',');
  const selectors = ['.x-dropdown:not(' + blacklistselector + ')', '.x-tab:not(' + blacklistselector + ')', '.x-navigation:not(' + blacklistselector + ')'];

  document.body.querySelectorAll(selectors.join(',')).forEach((element) => {
    if (element.classList.contains('x-dropdown')) dropdown(element);
    if (element.classList.contains('x-tab')) tab(element);
    if (element.classList.contains('x-navigation')) navigation(element);
  });
};

const start = () => {
  if (window._attrs_style_observer_) _attrs_style_observer_.disconnect();
  if (!window.MutationObserver) return console.warn('[@attrs/style] browser does not support "MutationObserver"');

  const observer = (window._attrs_style_observer_ = new MutationObserver(debounce(scan, 150)));

  const connect = () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  if (document.body) connect();
  else window.addEventListener('DOMContentLoaded', connect);
};

const stop = () => {
  if (window._attrs_style_observer_) _attrs_style_observer_.disconnect();
};

export const observer = {
  blacklist,
  scan,
  start,
  stop
};
