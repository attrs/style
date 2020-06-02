import '../';
import './style.css';
import router from '@attrs/router';

export default router()
  .set('view.target', '#page')
  .boot(async (req, res, next) => {
    await res.view(await import('./layout/dashboard.html')).render('body');
    await res.view(await import('./layout/perspectives.html')).render('#perspectives');
    await res.view(await import('./layout/navigation-top.html')).render('#navigation-top');
    await res.view(await import('./layout/navigation-side.html')).render('#navigation-side');
    next();
  })
  .get('/', async (req, res, next) => await res.view(await import('./examples/list.html')).render())
  .get('/base/typography', async (req, res, next) => await res.view(await import('./base/typography.html')).render())
  .get('/component/button', async (req, res, next) => await res.view(await import('./component/button.html')).render())
  .get('/component/label', async (req, res, next) => await res.view(await import('./component/label.html')).render())
  .get('/component/table', async (req, res, next) => await res.view(await import('./component/table.html')).render())
  .get('/component/form', async (req, res, next) => await res.view(await import('./component/form.html')).render())
  .get('/component/list', async (req, res, next) => await res.view(await import('./component/list.html')).render())
  .get('/component/card', async (req, res, next) => await res.view(await import('./component/card.html')).render())
  .get('/component/icon', async (req, res, next) => await res.view(await import('./component/icon.html')).render())
  .get('/component/tab', async (req, res, next) => await res.view(await import('./component/tab.html')).render())
  .get('/component/pagination', async (req, res, next) => await res.view(await import('./component/pagination.html')).render())
  .get('/examples/list', async (req, res, next) => await res.view(await import('./examples/list.html')).render())
  .get('/examples/login', async (req, res, next) => await res.view(await import('./examples/login.html')).render())
  .get('/examples/modal', async (req, res, next) => await res.view(await import('./examples/login.html')).modal())
  .on('error', (e) => {
    console.error(e.detail.error);
  })
  .on('notfound', (e) => {
    console.log('not found', e.detail.href);
  })
  .listen();
