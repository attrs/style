import debounce from 'debounce';
import dropdown from './dropdown';
import navigation from './navigation';
import tab from './tab';
import toggle from './toggle';
import activestate from './activestate';

export const blacklist = ['.x-noob'];
export const scan = () => {
  const blacklistselector = blacklist.join(',');
  const selectors = ['.x-dropdown:not(' + blacklistselector + ')', '.x-tab:not(' + blacklistselector + ')', '.x-navigation:not(' + blacklistselector + ')', '[data-toggle]'];

  document.body.querySelectorAll(selectors.join(',')).forEach((element) => {
    if (element._attrs_init === true) return;
    if (element.classList.contains('x-dropdown')) dropdown(element);
    if (element.classList.contains('x-tab')) tab(element);
    if (element.classList.contains('x-navigation')) navigation(element);
    if (element.getAttribute('data-toggle')) toggle(element);
    element._attrs_init = true;
  });
  activestate.scan();
};

export const start = () => {
  if (window._attrs_style_observer_) _attrs_style_observer_.disconnect();
  if (!window.MutationObserver) return console.warn('[@attrs/style] browser does not support "MutationObserver"');

  const observer = (window._attrs_style_observer_ = new MutationObserver(debounce(scan, 150)));

  const connect = () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    activestate.start();
  };

  if (document.body) connect();
  else window.addEventListener('DOMContentLoaded', connect);
};

export const stop = () => {
  if (window._attrs_style_observer_) _attrs_style_observer_.disconnect();
  activestate.stop();
};

start();
