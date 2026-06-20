import './styles/global.css';
import './styles/components.css';
import { portfolio } from './data/portfolio';
import { renderProjectPage } from './components/project-page';

const app = document.querySelector<HTMLElement>('[data-project-app]');
const slug = app?.dataset.project;
const project = portfolio.projects.find((item) => item.slug === slug);

if (!app || !project) throw new Error(`Project “${slug ?? ''}” was not found.`);

document.title = `${project.title} | ${portfolio.name}`;
app.innerHTML = renderProjectPage(project, portfolio);
