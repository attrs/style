import '../';
import './style.css';
import router from '@attrs/router';

export default router()
  .modal({
    width: 800
  })
  .set('view.target', '#page')
  .boot(async (req, res, next) => {
    await res.view(await import('./layout/dashboard.html')).render('body');
    await res.view(await import('./layout/perspectives.html')).render('#perspectives');
    await res.view(await import('./layout/navigation-top.html')).render('#navigation-top');
    await res.view(await import('./layout/navigation-side.html')).render('#navigation-side');
    next();
  })
  .get('/', async (req, res, next) => await res.view(await import('./view/index.html')).render())
  .get('/base/typo', async (req, res, next) => await res.view(await import('./base/typo.html')).render())
  .get('/component/button', async (req, res, next) => await res.view(await import('./component/button.html')).render())
  .get('/component/label', async (req, res, next) => await res.view(await import('./component/label.html')).render())
  .get('/component/table', async (req, res, next) => await res.view(await import('./component/table.html')).render())
  .get('/component/form', async (req, res, next) => await res.view(await import('./component/form.html')).render())
  .get('/component/list', async (req, res, next) => await res.view(await import('./component/list.html')).render())
  .get('/component/card', async (req, res, next) => await res.view(await import('./component/card.html')).render())
  .get('/component/tab', async (req, res, next) => await res.view(await import('./component/tab.html')).render())
  .get('/component/pagination', async (req, res, next) => await res.view(await import('./component/pagination.html')).render())
  .get('/view/login', async (req, res, next) => await res.view(await import('./view/login.html')).modal())
  .on('error', (e) => {
    console.error(e.detail.error);
  })
  .on('notfound', (e) => {
    console.log('not found', e.detail.href);
  })
  .listen();
