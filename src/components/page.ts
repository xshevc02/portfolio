import type { Hobby, PortfolioData, Project, TimelineItem } from '../data/portfolio';

const arrowIcon = `<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 14 14 4M6 4h8v8" /></svg>`;
const siteUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\.\/?/, '').replace(/^\//, '')}`;

const imageOrPlaceholder = (src: string | undefined, label: string): string =>
  src
    ? `<img src="${src}" alt="${label}" loading="lazy" />`
    : `<div class="photo-placeholder"><span>Photo</span><small>Add image</small></div>`;

const timelineItem = (item: TimelineItem): string => `
  <article class="timeline-item">
    <p class="timeline-item__period">${item.period}</p>
    <div><h3>${item.title}</h3><p class="timeline-item__place">${item.place}</p></div>
    <div class="timeline-item__details">
      <p class="timeline-item__description">${item.description}</p>
      ${item.details ? `<ul>${item.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>` : ''}
    </div>
  </article>`;

const projectCard = (project: Project, index: number): string => `
  <a class="project-card reveal" href="${siteUrl(`projects/${project.slug}/`)}" style="--delay: ${index * 80}ms" aria-label="View ${project.title} case study">
    <div class="project-card__topline">
      <span class="project-card__number">0${index + 1}</span>
      <span>${project.type} · ${project.year}</span>
    </div>
    <h3>${project.title}${arrowIcon}</h3>
    <p>${project.summary}</p>
    <ul class="tag-list" aria-label="Technologies">
      ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
    </ul>
  </a>`;

const hobbyCard = (hobby: Hobby): string => `
  <article class="hobby-card">
    <div class="hobby-card__image${hobby.image ? ' hobby-card__image--filled' : ''}">${imageOrPlaceholder(hobby.image, hobby.title)}</div>
    <h3>${hobby.title}</h3>
    <p>${hobby.description}</p>
    ${hobby.link ? `<a class="hobby-card__link" href="${hobby.link.url}" target="_blank" rel="noreferrer">${hobby.link.label} ${arrowIcon}</a>` : ''}
  </article>`;

export const renderPage = (data: PortfolioData): string => `
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <a class="brand" href="#top" aria-label="Back to top">${data.name}<span>.</span></a>
    <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false" data-menu-button><span></span><span></span></button>
    <nav class="site-nav" aria-label="Main navigation" data-navigation>
      <a href="#education">About</a>
      <a href="#experience">Experience</a>
      <a href="#work">Projects</a>
      <a href="#beyond">Life</a>
      <a href="#contact">Contact</a>
      <a class="nav-cv" href="${data.cvDocumentUrl}" target="_blank" rel="noreferrer">CV ${arrowIcon}</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="hero__grid">
        <div class="hero__content">
          <h1>Hi, I’m ${data.name}.</h1>
          <p class="hero__role"><em>${data.role}</em></p>
          <div class="hero__footer">
            <p>${data.introduction}</p>
            <a class="circle-link" href="#about" aria-label="Discover my story"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m0 0 6-6m-6 6-6-6" /></svg></a>
          </div>
        </div>
        <div class="hero__portrait">${imageOrPlaceholder(data.heroImage, `Portrait of ${data.name}`)}</div>
      </div>
    </section>

    <section class="section about" id="about">
      <p class="section-label">01 / About me</p>
      <div class="about-profile">
        <div class="about-profile__photo">${imageOrPlaceholder(data.profileImage, `Portrait of ${data.name}`)}</div>
        <div>
          <h2>A little context<br />behind the work.</h2>
          <div class="about__copy">${data.about.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
        </div>
      </div>

      <div class="subsection education" id="education">
        <h2 class="subsection-title">Education</h2>
        <div class="timeline">${data.education.map(timelineItem).join('')}</div>
      </div>

      <a class="thesis-card" href="${siteUrl(data.thesis.url ?? 'projects/bachelor-thesis/')}" aria-label="View ${data.thesis.title} case study">
        <p class="section-label">Bachelor thesis</p>
        <h3>${data.thesis.title}</h3>
        <p>${data.thesis.description}</p>
        <ul class="tag-list">${data.thesis.technologies.map((item) => `<li>${item}</li>`).join('')}</ul>
        <span class="thesis-card__link">View case study ${arrowIcon}</span>
      </a>
    </section>

    <section class="section experience" id="experience">
      <div class="section-heading"><p class="section-label">02 / Experience</p><h2>Things I’ve learned<br />by doing.</h2></div>
      <div class="timeline timeline--light">${data.experience.map(timelineItem).join('')}</div>

      <div class="capabilities-grid">
        <article><p class="section-label">Languages</p><ul>${data.languages.map((language) => `<li><span>${language.name}</span><small>${language.level}</small></li>`).join('')}</ul></article>
        <article><p class="section-label">Skills</p><ul>${data.skills.map((skill) => `<li><span>${skill}</span></li>`).join('')}</ul></article>
        <article><p class="section-label">Tools</p><ul>${data.tools.map((tool) => `<li><span>${tool}</span></li>`).join('')}</ul></article>
      </div>
    </section>

    <section class="section work" id="work">
      <div class="section-heading"><p class="section-label">03 / Selected projects</p><h2>Ideas turned into<br />working things.</h2></div>
      <div class="project-grid">${data.projects.map(projectCard).join('')}</div>
    </section>

    <section class="section beyond" id="beyond">
      <div class="section-heading"><p class="section-label">04 / Beyond work</p><h2>The things that keep<br />me curious.</h2></div>
      <div class="hobby-grid">${data.hobbies.map(hobbyCard).join('')}</div>
    </section>

    <section class="contact" id="contact">
      <p class="section-label">05 / Contact</p>
      <h2>Have an idea?<br /><em>Let’s make it real.</em></h2>
      <div class="contact__links">
        <a href="${data.githubUrl}" target="_blank" rel="noreferrer">GitHub ${arrowIcon}</a>
        <a href="${data.cvDocumentUrl}" target="_blank" rel="noreferrer">CV ${arrowIcon}</a>
        ${data.email ? `<button class="copy-email" type="button" data-copy-email data-email="${data.email}" aria-label="Copy ${data.email} to clipboard"><span data-copy-label>Copy email</span><strong>${data.email}</strong></button>` : ''}
      </div>
    </section>
  </main>

  <footer class="site-footer"><p>© <span data-current-year></span> ${data.name}</p><a href="#top">Back to top ↑</a></footer>`;
