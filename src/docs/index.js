import '../';
import './style.css';
import router from '@attrs/router';
import SmoothCorners from '../worklets/smooth-corners.worklet.js';

window.CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && CSS.paintWorklet.addModule(SmoothCorners);

window.theme = (theme) => {
  const body = document.body;
  const contents = document.querySelector('#page');

  body.classList.remove('theme-dark', 'theme-light', 'theme-violet', 'theme-red');
  contents.classList.remove('theme-dark', 'theme-light', 'theme-violet', 'theme-red');

  if (theme === 'dark') {
    body.classList.add('theme-dark');
  } else if (theme === 'light') {
    body.classList.add('theme-light');
  } else if (theme === 'violet') {
    body.classList.add('theme-violet');
  } else if (theme === 'hybrid') {
    body.classList.add('theme-dark');
    contents.classList.add('theme-light');
  } else if (theme === 'red') {
    body.classList.add('theme-red');
  }
};

export default router()
  .set('view.target', '#page')
  .set('view.modal.options', {
    maxWidth: 800,
    top: 50,
    borderRadius: 3
  })
  .boot(async (req, res, next) => {
    await res.view(await import('./layout/dashboard.html')).render('body');
    await res.view(await import('./layout/navigation-top.html')).render('#navigation-top');
    await res.view(await import('./layout/navigation-side.html')).render('#navigation-side');

    next();

    try {
      const response = await fetch('https://api.github.com/repos/attrs/style');
      const result = await response.json();

      const githubStargazersElement = document.querySelector('#github_stargazers');
      if (result && githubStargazersElement) githubStargazersElement.innerHTML = `${result.stargazers_count}`;
    } catch (err) {
      console.warn(err);
    }
  })
  .get('/', 'base')
  .get('/base', 'base/typography')
  .get('/base/typography', async (req, res, next) => await res.view(await import('./base/typography.html')).render())
  .get('/component', 'component/button')
  .get('/component/button', async (req, res, next) => await res.view(await import('./component/button.html')).render())
  .get('/component/label', async (req, res, next) => await res.view(await import('./component/label.html')).render())
  .get('/component/table', async (req, res, next) => await res.view(await import('./component/table.html')).render())
  .get('/component/alert', async (req, res, next) => await res.view(await import('./component/alert.html')).render())
  .get('/component/form', async (req, res, next) => await res.view(await import('./component/form.html')).render())
  .get('/component/list', async (req, res, next) => await res.view(await import('./component/list.html')).render())
  .get('/component/card', async (req, res, next) => await res.view(await import('./component/card.html')).render())
  .get('/component/icon', async (req, res, next) => await res.view(await import('./component/icon.html')).render())
  .get('/component/tab', async (req, res, next) => await res.view(await import('./component/tab.html')).render())
  .get('/component/navbar', async (req, res, next) => await res.view(await import('./component/navbar.html')).render())
  .get('/component/pagination', async (req, res, next) => await res.view(await import('./component/pagination.html')).render())
  .get('/examples/list', async (req, res, next) => await res.view(await import('./examples/list.html')).render())
  .get('/examples/login', async (req, res, next) => await res.view(await import('./examples/login.html')).render())
  .get('/examples/modal', async (req, res, next) => await res.view(await import('./examples/modal.html')).modal({ center: true }))
  .get('/examples/modal-list', async (req, res, next) => await res.view(await import('./examples/list.html')).modal({ width: 1000 }))
  .get('/examples/modal-fullsize', async (req, res, next) => await res.view(await import('./base/typography.html')).modal({ fullscreen: true, background: 'var(--color-bg-base)', closebtn: true }))
  .on('error', (e) => {
    console.error(e.detail.error);
  })
  .on('notfound', (e) => {
    console.log('not found', e.detail.href);
  })
  .listen({
    mode: 'hashbang'
  });
