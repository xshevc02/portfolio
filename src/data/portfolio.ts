export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
  details?: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  repositoryUrl?: string;
  caseStudy?: {
    facts: { label: string; value: string }[];
    coverImage?: { src: string; alt: string; caption: string };
    references?: { author: string; title: string; details: string; url: string }[];
    sections: {
      number: string;
      kicker: string;
      title: string;
      body: string[];
      bullets?: string[];
      images?: { label: string; caption: string; src?: string; alt?: string; compact?: boolean }[];
    }[];
  };
}

export interface Language {
  name: string;
  level: string;
}

export interface Hobby {
  title: string;
  description: string;
  image?: string;
  link?: { label: string; url: string };
}

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  introduction: string;
  heroImage?: string;
  profileImage?: string;
  about: string[];
  education: TimelineItem[];
  thesis: {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
  };
  experience: TimelineItem[];
  languages: Language[];
  skills: string[];
  tools: string[];
  hobbies: Hobby[];
  projects: Project[];
  githubUrl: string;
  linkedinUrl?: string;
  email?: string;
  cvDocumentUrl?: string;
}

// This is the single source of truth for the website and the printable CV.
// Replace the placeholder copy and add image paths after placing photos in public/images.
export const portfolio: PortfolioData = {
  name: 'Anna Shevchenko',
  initials: 'AS',
  role: 'UX designer shaping complex products into clear experiences.',
  introduction: 'I design where behavior meets beauty — using psychology to understand people, and code to bring ideas to life in complex, data-heavy products.',
  heroImage: 'images/profile/anna-main.png',
  about: [
    'I am a UX designer and frontend developer based in Brno, working at the intersection of research, product thinking, and technology.',
    'My background in both information technology and management helps me connect user needs with technical constraints and business objectives.',
  ],
  education: [
    {
      period: 'Graduated 2026',
      title: 'Bachelor’s in Information Technology',
      place: 'Brno University of Technology · VUT FIT',
      description: 'Bachelor thesis focused on improving the user-friendliness of a traffic-analysis application through UX/UI design and frontend development.',
    },
    {
      period: 'Graduated 2026',
      title: 'Bachelor’s in Management',
      place: 'Kyiv National University of Technologies and Design',
      description: 'Bachelor thesis explored modern employee motivation systems and their practical application.',
    },
  ],
  thesis: {
    title: 'User-friendliness of the Traffic Analysis App',
    description: 'A UX redesign of the Analyticity traffic-analysis platform, turning complex traffic data into clearer map-based and dashboard workflows. The project was evaluated with grade A and nominated for the Dean’s Award.',
    technologies: ['UX research', 'UI design', 'React', 'TypeScript'],
    url: 'projects/bachelor-thesis/',
  },
  experience: [
    {
      period: 'Nov 2024 — Present',
      title: 'User Experience Designer Intern',
      place: 'Thermo Fisher Scientific · Brno, Czechia',
      description: 'Contributing to complex, domain-specific scientific web applications as part of cross-functional product teams.',
      details: [
        'Ongoing collaboration on the web application interface, working closely with developers and product owners to refine features, improve usability, and identify interface issues and bugs.',
        'Designed UX solutions for new features by defining user flows, interaction models, and functional concepts aligned with product requirements and business objectives.',
        'Planning and conducting usability testing in cooperation with Product Owners, followed by analysis of findings and proposals for design improvements.',
        'Delivered high-fidelity prototypes and mockups across 6+ cross-functional teams, ensuring consistency through the corporate design system and iterative stakeholder feedback.',
      ],
    },
  ],
  languages: [
    { name: 'English', level: 'C1' },
    { name: 'Czech', level: 'B2' },
    { name: 'Ukrainian', level: 'Native' },
    { name: 'Russian', level: 'Native' },
  ],
  skills: [
    'UI/UX design',
    'Interaction design',
    'Prototyping',
    'User flows',
    'Usability testing',
    'Heuristic evaluation',
    'Service blueprints',
    'Analytics',
    'Iterative design',
    'AI-assisted prototyping',
  ],
  tools: [
    'Figma & FigJam',
    'Figma Make',
    'Miro & Sketch',
    'Jira',
    'Google Analytics',
    'React & TypeScript',
    'HTML & CSS',
    'Tailwind CSS',
    'Generative AI tools',
  ],
  hobbies: [
    {
      title: 'Travel',
      description: 'I love discovering new places, cultures, and everyday details beyond the usual tourist routes. Recent destinations include Rome, Batumi, Crete, Estonia, Riga, and Budapest.',
      image: 'images/hobbies/travel-collage.png',
    },
    {
      title: 'Books & movement',
      description: 'Away from the screen, I enjoy reading in different languages and practising yoga — two very different ways of slowing down and resetting.',
      link: {
        label: 'See what I’m reading on Goodreads',
        url: 'https://www.goodreads.com/user/show/194046726',
      },
    },
  ],
  projects: [
    {
      slug: 'wake-wine',
      title: 'Wake & Wine',
      type: 'UX/UI & full-stack case study',
      year: '2025',
      summary: 'A desktop web app for reflecting on alcohol and caffeine habits through quick logging, calendar patterns, spending, and statistics.',
      challenge: 'Most habit trackers either moralize consumption, focus only on abstinence, or make everyday logging too cumbersome to sustain.',
      approach: 'I combined user interviews and competitor research with a desktop-first information architecture, progressive drink entry, and full-stack implementation.',
      outcome: 'A neutral, approachable product that turns everyday drink records into understandable temporal, financial, alcohol, and caffeine insights.',
      tags: ['UX research', 'Figma', 'React', 'TypeScript', 'FastAPI'],
      caseStudy: {
        facts: [
          { label: 'My role', value: 'UX designer & full-stack developer' },
          { label: 'Duration', value: '3 months' },
          { label: 'Platform', value: 'Desktop web application' },
          { label: 'Tools', value: 'Figma, React, TypeScript & FastAPI' },
        ],
        coverImage: {
          src: 'images/wake-wine/drink-entry-complete.png',
          alt: 'Wake and Wine drink entry interface with glass-size cards, quantity controls, and a running total',
          caption: 'Wake & Wine makes daily tracking feel lightweight and human while keeping quantities and spending visible.',
        },
        sections: [
          {
            number: '01',
            kicker: 'Context',
            title: 'Awareness without judgment.',
            body: [
              'Wake & Wine is a desktop web application for people who want to understand their alcohol and caffeine habits without addiction framing, moralizing, or pressure to abstain. It supports quick daily logging of the drink, amount, and price, then turns those records into patterns people can reflect on.',
              'The intended audience includes students relying on coffee or energy drinks, office workers drinking several coffees a day, people who drink alcohol after work or on weekends, and budget-conscious users interested in how much their habits cost.',
            ],
            bullets: [
              'Log alcohol and caffeine quickly, including amount and price.',
              'See spending, caffeine intake, alcohol intake, and dominant drink types.',
              'Filter trends by time, drink type, alcohol content, and price.',
              'Support optional blood-alcohol estimates without making them the product focus.',
              'Use the larger desktop canvas for graphs, tables, and longer-term reflection.',
            ],
          },
          {
            number: '02',
            kicker: 'User research',
            title: 'Four routines, one need for clearer patterns.',
            body: [
              'I interviewed four people whose routines represented different relationships with alcohol and caffeine. Lukáš, a 24-year-old student, wanted weekly and semester-long trends and a clear view of cost. Klára, a 29-year-old hairdresser, cared about caffeine intake and its effect on sleep.',
              'Eva, a 33-year-old remote graphic designer, wanted to compare monthly spending and recognize stress-related patterns. Mirek, a 45-year-old driver, was especially interested in timing, estimated blood-alcohol level, and beer spending.',
              'Across the interviews, the strongest shared expectations were clarity, speed, and a neutral tone. This led to a desktop-first product centered on statistics, spending, filtering, fast logging, long-term trends, and comparisons between periods.',
            ],
          },
          {
            number: '03',
            kicker: 'Competitive analysis',
            title: 'Learning from trackers that make logging feel like work.',
            body: [
              'I reviewed three existing products to understand which patterns support reflection and which ones create friction. AlcoStat offered clear time filters, calendar icons, and custom drink templates, but its entry flow was complex and its financial feedback limited.',
              'Alcohol Drink Calendar combined a calendar with graphs, category statistics, spending, and realistic serving sizes. However, it required too many steps, used unclear glass-fill visuals, included distracting advertising, and rewarded drinking through counterproductive achievements.',
              'TRY DRY used positive motivation, wellbeing tracking, automatic alcohol and price values, and multiple calendar modes. Its abstinence-only framing, redundant shop-versus-bar choice, and overloaded interaction flow made it less suitable for a neutral everyday tracker.',
            ],
            images: [
              {
                label: 'AlcoStat',
                caption: 'Clear calendar and statistics, but a complex drink-entry flow and limited financial insight.',
                src: 'images/wake-wine/competitor-alcostat.png',
                alt: 'AlcoStat competitor screens with calendar and statistics',
              },
              {
                label: 'Alcohol Drink Calendar',
                caption: 'Strong category and spending views, weakened by excessive steps, advertising, and gamified drinking achievements.',
                src: 'images/wake-wine/competitor-alcohol-calendar.png',
                alt: 'Alcohol Drink Calendar competitor screens and achievement badges',
              },
              {
                label: 'TRY DRY',
                caption: 'A supportive visual style and wellbeing tracking, but an abstinence-first concept and crowded interface.',
                src: 'images/wake-wine/competitor-try-dry.png',
                alt: 'TRY DRY competitor screens with yellow calendar and tracking views',
              },
            ],
          },
          {
            number: '04',
            kicker: 'Product strategy',
            title: 'A calm structure for everyday reflection.',
            body: [
              'The research translated into four design principles: keep the tone neutral, make logging quick, reveal detail only when it becomes relevant, and keep patterns visible over time. The product does not diagnose or lecture; it gives people enough context to form their own conclusions.',
              'Calendar and Statistics became the two primary destinations. Both use the same Coffee and Alcohol filters, while a persistent Add drink action keeps the core task close at hand.',
            ],
            bullets: [
              'Neutral and nonjudgmental language throughout the experience.',
              'Desktop-first layouts for dense graphs, tables, and comparisons.',
              'Consistent filters across calendar and analytical views.',
              'Progressive disclosure to keep each logging step focused.',
            ],
          },
          {
            number: '05',
            kicker: 'Core experience',
            title: 'Calendar for patterns, statistics for meaning.',
            body: [
              'The monthly calendar acts as the product’s temporal anchor. Each record shows the drink name, volume, and type icon directly in the grid, making recurring routines and unusually busy days visible without opening every entry.',
              'Statistics aggregate records by week, month, or year and summarize total drinks, alcohol, caffeine, and spending. Separate spending, volume, alcohol, and caffeine views help users answer different questions without crowding everything into one chart.',
            ],
            images: [
              {
                label: 'Calendar overview',
                caption: 'A monthly overview makes drink types, quantities, and repeated patterns visible at a glance.',
                src: 'images/wake-wine/calendar.png',
                alt: 'Wake and Wine calendar showing coffee and alcohol records across a month',
              },
              {
                label: 'Statistics overview',
                caption: 'Time filters and focused analytical sections connect consumption with volume, caffeine, alcohol, and spending.',
                src: 'images/wake-wine/statistics.png',
                alt: 'Wake and Wine statistics dashboard with summary cards and charts',
              },
            ],
          },
          {
            number: '06',
            kicker: 'Interaction design',
            title: 'A drink-entry flow that reveals complexity gradually.',
            body: [
              'The first step asks users to choose a category—Beer, Wine, Spirits, Cocktails, or Shots—and then presents recognizable drink cards with a name, typical alcohol range, and image. The empty state uses a friendly character and the prompt “What are you drinking? Pick one to see the glasses!”',
              'Only after selecting a drink does the interface reveal glass sizes, custom amounts, price, and quantity. A running total and selected-drink cards keep the consequences of each choice visible before saving. The closing prompt—“Anything else, or is that enough for today?”—maintains the conversational tone without judging the answer.',
              'This progressive disclosure reduces both visual load and input errors: users make one understandable decision at a time while still retaining control over non-standard servings.',
            ],
            images: [
              {
                label: 'Step 1 · Choose a drink',
                caption: 'Category filters and visual drink cards narrow the choice before quantities and prices appear.',
                src: 'images/wake-wine/drink-selection.png',
                alt: 'Wake and Wine first drink-entry step with category tabs and an empty-state character',
              },
              {
                label: 'Step 2 · Add amount and price',
                caption: 'Serving cards, quantity controls, a running total, and selected-drink summaries keep the final step transparent.',
                src: 'images/wake-wine/drink-entry-complete.png',
                alt: 'Wake and Wine second drink-entry step with glass sizes, price, quantity, and total',
              },
            ],
          },
          {
            number: '07',
            kicker: 'Implementation',
            title: 'Designing and building the complete product.',
            body: [
              'I carried the concept from research and Figma into a working full-stack application. The frontend uses React and TypeScript with Vite, Tailwind CSS, and Axios. The backend is built with FastAPI on Python 3.12, SQLAlchemy 2 in asynchronous mode, Alembic, and Pydantic v2.',
              'SQLite supports local development, while PostgreSQL is used for production. Uvicorn serves the API. This architecture keeps the interface fast to iterate while giving drink records, filtering, and aggregation a maintainable data foundation.',
            ],
            bullets: [
              'Frontend: React, TypeScript, Vite, Tailwind CSS, and Axios.',
              'Backend: FastAPI, Python 3.12, SQLAlchemy 2 async, Alembic, and Pydantic v2.',
              'Data: SQLite for development and PostgreSQL for production.',
              'Serving: Uvicorn ASGI server.',
            ],
          },
        ],
      },
    },
    {
      slug: 'bachelor-thesis',
      title: 'Analyticity redesign',
      type: 'UX/UI case study',
      year: '2026',
      summary: 'A UX and frontend redesign that makes complex traffic data easier to understand and explore.',
      challenge: 'The existing traffic-analysis platform exposed powerful data, but complex map and dashboard workflows made core tasks difficult to navigate and understand.',
      approach: 'I redesigned user flows, filters, visualizations, and responsive interfaces, then implemented the solution using React and TypeScript.',
      outcome: 'The thesis was evaluated with grade A and nominated for the Dean’s Award.',
      tags: ['UX/UI design', 'React', 'TypeScript', 'Data visualization'],
      caseStudy: {
        facts: [
          { label: 'My role', value: 'UX research, UI/UX design, frontend development' },
          { label: 'Context', value: 'Bachelor thesis · VUT FIT' },
          { label: 'Scope', value: 'Map-based analytics and dashboards' },
          { label: 'Result', value: 'Grade A · Dean’s Award nomination' },
        ],
        coverImage: {
          src: 'images/thesis/final-solution-overview.png',
          alt: 'Final traffic analytics redesign showing the unified map and accidents dashboard side by side',
          caption: 'Final solution overview: a unified spatial map for exploration paired with a focused analytical dashboard for interpretation.',
        },
        references: [
          {
            author: 'M. Ondrušková',
            title: 'Analysis and Visualization of Brno Traffic Data',
            details: 'Brno, CZ, 2024 · Master’s thesis · Brno University of Technology, Faculty of Information Technology · Accessed 29 April 2026',
            url: 'https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=267517',
          },
          {
            author: 'V. Šimková',
            title: 'Analysis and Visualization of Traffic Accident Data',
            details: 'Brno, CZ, 2025 · Bachelor’s thesis · Brno University of Technology, Faculty of Information Technology · Accessed 29 April 2026',
            url: 'https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=280132',
          },
        ],
        sections: [
          {
            number: '01',
            kicker: 'Context',
            title: 'One product, two disconnected experiences.',
            body: [
              'The existing application visualized urban traffic data from several sources: Waze congestion and related events, police accident records, and NDIC road restrictions. Its two main parts had been developed separately around different datasets and analytical tasks.',
              'That history shaped the interface. Maps, dashboards, filters, terminology, and interaction patterns differed between sections, so the product felt like two partially connected applications rather than one analytical environment.',
            ],
            images: [
              {
                label: 'Original Traffic Jams dashboard',
                caption: 'Legacy Waze data-analysis dashboard designed by Ing. Magdaléna Ondrušková.',
                src: 'images/thesis/legacy-waze-dashboard.png',
                alt: 'Original Waze traffic jams dashboard with red charts and summary metrics',
              },
              {
                label: 'Original Accidents dashboard',
                caption: 'Legacy police-accident analysis dashboard designed by Bc. Šimková.',
                src: 'images/thesis/legacy-accidents-dashboard.png',
                alt: 'Original traffic accidents dashboard with charts for alcohol, causes, road conditions, and monthly accidents',
              },
              {
                label: 'Two legacy map experiences',
                caption: 'Two separately developed legacy map views: the Waze traffic interface by Ing. Magdaléna Ondrušková on the left and the police-accident interface by Bc. Veronika Šimková on the right.',
                src: 'images/thesis/legacy-map-comparison.png',
                alt: 'Comparison of two old traffic analysis map interfaces',
              },
            ],
          },
          {
            number: '02',
            kicker: 'Analysis',
            title: 'Finding the friction behind the interface.',
            body: [
              'I used Nielsen’s usability heuristics as a qualitative framework to inspect how the original product communicated state, supported navigation, prevented errors, and presented dense analytical information.',
              'The analysis produced eleven design requirements that became the decision framework for the redesign, from unifying the application to preserving usability on smaller screens.',
            ],
            bullets: [
              'Unify the two originally separated parts into one coherent analytical environment.',
              'Improve visibility of system status, loading, empty views, active filters, and unavailable controls.',
              'Use semantically clear labels, icons, and interactions that correspond with real-world concepts.',
              'Ensure internal consistency and follow established web and map-interface conventions.',
              'Improve navigation and the logical information flow between related views.',
              'Prevent invalid input states such as an end date preceding the start date.',
              'Keep active streets, time ranges, and analytical conditions visible instead of relying on user recall.',
              'Present charts and data-rich views in ways that reduce cognitive load and support interpretation.',
              'Apply aesthetic and minimalist design only where visual emphasis adds informational value.',
              'Use reusable components to support future pages, features, and city-specific adaptations.',
              'Preserve clarity and usability on smaller screens.',
            ],
            images: [
              {
                label: 'External consistency analysis',
                caption: 'Waze on the left and Google Maps on the right. The comparison highlights the familiar placement of search, navigation, layers, and map controls used as external-consistency benchmarks.',
                src: 'images/thesis/map-controls-analysis.png',
                alt: 'Waze and Google Maps comparison with important interface controls highlighted',
              },
            ],
          },
          {
            number: '03',
            kicker: 'Information architecture',
            title: 'Reframing the product around user tasks, not data sources.',
            body: [
              'The core structural decision was to replace separate map experiences with one shared map that acts as the central spatial overview. Users can combine traffic jams, accidents, hazards, and closures in the same geographical context.',
              'The analytical area was reorganized into thematic pages for accidents, congestion, hazards, and relationships between accidents and traffic jams. A high-level overview provides a starting point before users move into specialized analysis.',
            ],
            bullets: [
              'Persistent sidebar navigation connects the map, dashboard, help, and supporting pages.',
              'Street and date filters are shared between map and dashboard views.',
              'Applied filters stay visible and can be restored from URL parameters.',
              'Current data can be compared with the previous period or the same period last year.',
            ],
            images: [
              {
                label: 'Proposed information architecture',
                caption: 'The redesign unifies the application around a shared map and thematic analytical pages for traffic jams, accidents, accident impact, and hazards.',
                src: 'images/thesis/proposed-architecture.png',
                alt: 'Diagram of the proposed unified traffic analysis application architecture',
              },
              {
                label: 'Dashboard wireframe',
                caption: 'Early wireframe exploring unified navigation, shared filters, key indicators, and comparison with a reference period.',
                src: 'images/thesis/dashboard-wireframe.png',
                alt: 'Wireframe of the redesigned Traffic Jams analytical dashboard',
              },
            ],
          },
          {
            number: '04',
            kicker: 'Design solution',
            title: 'A map for exploration, dashboards for interpretation.',
            body: [
              'The redesigned map combines geographical exploration with direct analytical feedback. Users can search or select streets, toggle individual event layers, explore accident density through a heatmap, and inspect typical traffic patterns by weekday and hour.',
              'Street-based summary cards connect spatial selection with contextual values. The dashboards then support deeper interpretation through focused indicators, distributions, trends, critical streets, and accident-congestion relationships.',
            ],
            images: [
              {
                label: 'Implemented unified map',
                caption: 'The central map view combines street search, shared date filtering, traffic-jam lines, accident markers, hazards, road closures, and typical-traffic controls in one analytical context.',
                src: 'images/thesis/implemented-map.png',
                alt: 'Implemented unified traffic analytics map with event layers and shared filters',
              },
              {
                label: 'Accidents dashboard',
                caption: 'Implemented accident-analysis view with shared street and time filters, period comparison, summary indicators, distributions, causes, high-risk streets, and exportable charts.',
                src: 'images/thesis/accidents-dashboard.png',
                alt: 'Implemented accident analytics dashboard with indicators and charts',
              },
              {
                label: 'Visible event-layer controls',
                caption: 'Direct toggle buttons make available map layers and their active states easier to discover than the earlier dropdown interaction.',
                src: 'images/thesis/event-layer-toggles.png',
                alt: 'Map toolbar toggles for traffic jams, accidents, hazards, and road closures',
              },
              {
                label: 'Custom map markers',
                caption: 'I created this Figma marker system for accident, hazard, and road-closure events to give map layers a consistent and immediately recognizable visual language.',
                src: 'images/thesis/custom-map-markers.png',
                alt: 'Custom Figma map markers for accidents, hazards, and road closures',
              },
              {
                label: 'Street search and contextual summaries',
                caption: 'Selected streets become a shared analytical filter, while expandable cards connect the map selection with congestion and accident summaries.',
                src: 'images/thesis/street-search-summaries.png',
                alt: 'Street search with selected street, traffic jam values, and accident summaries',
              },
              {
                label: 'Typical traffic exploration',
                caption: 'The typical-traffic component lets users explore recurring congestion by weekday and hour while keeping the visualization directly on the map.',
                src: 'images/thesis/typical-traffic.png',
                alt: 'Typical traffic map visualization with weekday and hour controls',
              },
            ],
          },
          {
            number: '05',
            kicker: 'Implementation',
            title: 'Taking the redesign beyond the prototype.',
            body: [
              'I implemented the redesigned frontend in React and TypeScript. React Leaflet powers the interactive map, Recharts renders analytical visualizations, and shadcn/ui provides a consistent component foundation.',
              'The frontend also handles meaningful analytical work: filtering, grouping, aggregation, derived indicators, comparison datasets, and transformation of API records into chart-ready structures.',
            ],
            bullets: [
              'Shared application state keeps map layers, charts, streets, and date ranges synchronized.',
              'React Query connects filter changes to API requests and data refreshes.',
              'Charts can export data as CSV and visuals as PNG or SVG.',
              'Environment-based configuration allows the frontend to support multiple cities and backend deployments.',
            ],
            images: [
              {
                label: 'Frontend data flow',
                caption: 'React Query loads and caches traffic data from the existing REST API. Shared filters from React Context shape requests and transformations before aggregated results feed React Leaflet map layers and Recharts dashboards.',
                src: 'images/thesis/frontend-data-flow.png',
                alt: 'Frontend data-flow diagram connecting REST API, React Query, React Context, transformations, React Leaflet, and Recharts',
                compact: true,
              },
            ],
          },
          {
            number: '06',
            kicker: 'User testing',
            title: 'Turning observed confusion into interface changes.',
            body: [
              'Testing with different user groups focused on navigation, map interaction, filtering, chart interpretation, and control clarity. The findings were applied directly to the implemented product rather than left as recommendations.',
            ],
            bullets: [
              'A hidden event dropdown became visible map-toolbar toggle buttons.',
              'Active toggle states received stronger visual contrast.',
              'Chart tooltips gained explicit seconds and minutes units.',
              'Map controls wrap or move into a separate sheet on smaller screens.',
              'Inactive controls were simplified and meaningless comparison labels were hidden.',
              'The help page was expanded with a guide for first-time users.',
            ],
            images: [
              {
                label: 'Map controls after testing',
                caption: 'Before testing, layer toggle buttons occupied a second toolbar row above the map. The revised solution moves them into a dedicated sidebar, reducing visual crowding and preserving more space for map exploration.',
                src: 'images/thesis/testing-map-controls-iteration.png',
                alt: 'Before and after comparison showing map layer controls moved from a second toolbar row into a sidebar',
              },
            ],
          },
          {
            number: '07',
            kicker: 'Outcome',
            title: 'A coherent foundation for data-heavy analysis.',
            body: [
              'The result connects previously fragmented workflows through clearer navigation, consistent filtering, improved map controls, street-level summaries, dedicated analytical views, period comparison, export tools, and explicit loading and empty states.',
              'The project demonstrated that redesigning an analytical product is not only a visual exercise. The most important decisions concerned how data is grouped, how context moves between views, and how the interface avoids misleading interpretations when information is missing.',
            ],
            images: [
              {
                label: 'Final product',
                caption: 'The implemented solution connects spatial exploration and analytical interpretation through consistent navigation, shared filtering, and a unified visual system.',
                src: 'images/thesis/final-solution-overview.png',
                alt: 'Final traffic analytics map and accidents dashboard shown side by side',
              },
            ],
          },
        ],
      },
    },
  ],
  githubUrl: 'https://github.com/xshevc02',
  linkedinUrl: 'https://www.linkedin.com/in/shevchenko-anna-/',
  email: 'anna.shevchenko.20042015@gmail.com',
  cvDocumentUrl: 'https://docs.google.com/document/d/1WiEn4m7vF1AwVd9WYD8QIVhUFJTEkMI9Howa8WtqWp8/edit?usp=sharing',
};
