import minimatch from 'minimatch';

const wrap = (type) => {
  const ofn = history[type];
  return function (state, title, href) {
    const result = ofn.apply(this, arguments);

    findandfire({
      type: type.toLowerCase(),
      state,
      href
    });
    return result;
  };
};

const setParentActiveAndExpand = (el) => {
  if (el.classList.contains('x-navitem')) {
    el.classList.add('x-navitem-expand');
  }
  if (el && el.classList && el.classList.contains('x-navigation')) return;
  setParentActiveAndExpand(el.parentNode);
};

const findandfire = (detail) => {
  const chref = detail.href;
  const nodes = document.querySelectorAll('[data-active-state]');
  if (!nodes) return;

  nodes.forEach((node) => {
    const paths = (node.getAttribute('data-active-state') || '').split(',');
    if (!paths || !paths.length) return;

    if (paths.find((p) => p.trim() && minimatch(chref, p.trim()))) {
      if (node.classList.contains('x-navitem')) {
        node.classList.add('active');
        setParentActiveAndExpand(node);
      } else {
        node.classList.add('active');
      }
    } else {
      node.classList.remove('active');
    }
  });
};

const popstatelistener = (e) => {
  findandfire({
    type: 'popstate',
    state: history.state,
    href: location.pathname
  });
};

const opushstate = history.pushState;
const oreplacestate = history.replaceState;

export default {
  start() {
    history.pushState = wrap('pushState');
    history.replaceState = wrap('replaceState');

    window.addEventListener('popstate', popstatelistener);

    findandfire({
      type: 'init',
      state: history.state,
      href: location.pathname
    });
  },
  scan() {
    findandfire({
      type: 'init',
      state: history.state,
      href: location.pathname
    });
  },
  stop() {
    history.pushState = opushstate;
    history.replaceState = oreplacestate;
    window.removeEventListener('popstate', popstatelistener);
  }
};
