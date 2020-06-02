import debounce from 'debounce';
import { dropdown } from './dropdown';

const blacklist = ['.x-noob'];
const scan = () => {
  document.body.querySelectorAll('.x-dropdown:not(' + blacklist.join(',') + ')').forEach((element) => {
    if (element.classList.contains('x-dropdown')) dropdown(element);
  });
};

let instance;
const start = () => {
  if (instance) instance.disconnect();
  if (!window.MutationObserver) return console.warn('[@attrs/style] browser does not support "MutationObserver"');
  instance = new MutationObserver(debounce(scan, 150));

  const connect = () => {
    instance.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  if (document.body) connect();
  else window.addEventListener('DOMContentLoaded', connect);
};

const stop = () => {
  if (instance) instance.disconnect();
};

export const observer = {
  blacklist,
  scan,
  start,
  stop
};
