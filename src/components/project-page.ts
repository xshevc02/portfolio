import type { PortfolioData, Project } from '../data/portfolio';

const homeUrl = import.meta.env.BASE_URL;
const assetUrl = (path: string): string => `${homeUrl}${path.replace(/^\//, '')}`;

const detail = (label: string, text: string): string => `
  <section class="case-section"><p class="section-label">${label}</p><p>${text}</p></section>`;

const caseMedia = (label: string, caption: string, src?: string, alt?: string, compact = false): string => `
  <figure class="case-media${compact ? ' case-media--compact' : ''}">
    ${src
      ? `<a class="case-media__asset" href="${assetUrl(src)}" target="_blank" rel="noreferrer"><img src="${assetUrl(src)}" alt="${alt ?? label}" loading="lazy" /></a>`
      : `<div><span>${label}</span><small>Image placeholder</small></div>`}
    <figcaption>${caption}</figcaption>
  </figure>`;

const richCaseStudy = (project: Project): string => {
  const study = project.caseStudy;
  if (!study) return '';

  return `
    <dl class="case-facts">
      ${study.facts.map((fact) => `<div><dt>${fact.label}</dt><dd>${fact.value}</dd></div>`).join('')}
    </dl>

    ${study.references ? `
      <aside class="case-references">
        <p class="section-label">Source projects</p>
        <div>
          ${study.references.map((reference) => `
            <a href="${reference.url}" target="_blank" rel="noreferrer">
              <span>${reference.author}</span>
              <strong>${reference.title}</strong>
              <small>${reference.details} ↗</small>
            </a>`).join('')}
        </div>
      </aside>` : ''}

    <div class="case-lead-media">${study.coverImage
      ? caseMedia('Final solution', study.coverImage.caption, study.coverImage.src, study.coverImage.alt)
      : caseMedia('Hero visual', 'Add the strongest final product screenshot here.')}</div>

    <div class="case-story">
      ${study.sections.map((section) => `
        <section class="story-section">
          <header class="story-section__heading">
            <p class="section-label">${section.number} / ${section.kicker}</p>
            <h2>${section.title}</h2>
          </header>
          <div class="story-section__content">
            <div class="story-section__copy">${section.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
            ${section.bullets ? `<ul class="case-bullets">${section.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : ''}
          </div>
          ${section.images ? `<div class="case-media-grid case-media-grid--${section.images.length}">${section.images.map((image) => caseMedia(image.label, image.caption, image.src, image.alt, image.compact)).join('')}</div>` : ''}
        </section>`).join('')}
    </div>`;
};

export const renderProjectPage = (project: Project, data: PortfolioData): string => `
  <header class="detail-header">
    <a class="brand" href="${homeUrl}">${data.name}<span>.</span></a>
    <a href="${homeUrl}#work">← All projects</a>
  </header>
  <main class="case-study">
    <header class="case-hero">
      <p class="section-label">${project.type} / ${project.year}</p>
      <h1>${project.title}</h1>
      <p>${project.summary}</p>
      <ul class="tag-list">${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
    </header>

    ${project.caseStudy ? richCaseStudy(project) : `
      <div class="case-visual"><span>Project visual</span><small>Add screenshots or photography here</small></div>
      <div class="case-content">
        ${detail('01 / Challenge', project.challenge)}
        ${detail('02 / Approach', project.approach)}
        ${detail('03 / Outcome', project.outcome)}
      </div>`}

    ${project.repositoryUrl ? `<a class="case-link" href="${project.repositoryUrl}" target="_blank" rel="noreferrer">View repository ↗</a>` : ''}
    <nav class="case-footer"><a href="${homeUrl}#work">← Back to projects</a>${data.cvDocumentUrl ? `<a href="${data.cvDocumentUrl}" target="_blank" rel="noreferrer">CV →</a>` : ''}</nav>
  </main>`;
