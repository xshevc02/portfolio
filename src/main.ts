import './styles/global.css';
import './styles/components.css';
import { portfolio } from './data/portfolio';
import { renderPage } from './components/page';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root was not found.');
}

app.innerHTML = renderPage(portfolio);

const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const navigation = document.querySelector<HTMLElement>('[data-navigation]');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('site-nav--open', !isOpen);
});

navigation?.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).closest('a')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('site-nav--open');
  }
});

const year = document.querySelector<HTMLElement>('[data-current-year]');
if (year) year.textContent = String(new Date().getFullYear());

const copyEmailButton = document.querySelector<HTMLButtonElement>('[data-copy-email]');

copyEmailButton?.addEventListener('click', async () => {
  const email = copyEmailButton.dataset.email;
  const label = copyEmailButton.querySelector<HTMLElement>('[data-copy-label]');

  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.classList.add('copy-email--copied');
    if (label) label.textContent = 'Copied!';

    window.setTimeout(() => {
      copyEmailButton.classList.remove('copy-email--copied');
      if (label) label.textContent = 'Copy email';
    }, 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
