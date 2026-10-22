/* ===================================================================
   JAIVIKSETU ACTIVITIES & GALLERY INTERACTIVE CONTROLLER
   - Gallery Rendering from gallery.json (with inline fallback for file:// protocol)
   - Filter Chips with animated filtering & URL hash sync
   - Fullscreen Accessible Lightbox (Keyboard, Touch Swipe, Double-tap Zoom)
   - Timeline scroll progress & stats count-up
   - Bilingual reactive updates (EN / MR)
   =================================================================== */

(function () {
  'use strict';

  // Master gallery items data
  const FALLBACK_GALLERY_DATA = [
    {
      id: "img-01",
      activity: "research-awareness",
      type: "illustration",
      src: "assets/images/activities/research-awareness/display/01-research-illustration-1.webp",
      fallbackSrc: "assets/images/activities/research-awareness/display/01-research-illustration-1.png",
      thumb: "assets/images/activities/research-awareness/thumb/01-research-illustration-1.webp",
      fallbackThumb: "assets/images/activities/research-awareness/thumb/01-research-illustration-1.png",
      original: "assets/images/activities/research-awareness/original/01-research-illustration-1.png",
      alt: "Illustration diagram showing core research topics including composting, soil health, and pest management",
      caption: "Illustration: Key research topics in organic farming and ecological balance",
      width: 1600,
      height: 1000,
      thumbWidth: 600,
      thumbHeight: 375,
      order: 1
    },
    {
      id: "img-02",
      activity: "field-visit-hanumanwadi",
      type: "photo",
      src: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-1.webp",
      fallbackSrc: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-1.jpg",
      thumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-1.webp",
      fallbackThumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-1.jpg",
      original: "assets/images/activities/field-visit-hanumanwadi/original/02-field-visit-1.jpg",
      alt: "Team members in discussion with a local farmer standing in an agricultural field",
      caption: "Team interaction with local farmer in soybean field at Hanumanwadi",
      width: 1200,
      height: 1600,
      thumbWidth: 450,
      thumbHeight: 600,
      order: 2
    },
    {
      id: "img-03",
      activity: "field-visit-hanumanwadi",
      type: "photo",
      src: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-2.webp",
      fallbackSrc: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-2.jpg",
      thumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-2.webp",
      fallbackThumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-2.jpg",
      original: "assets/images/activities/field-visit-hanumanwadi/original/02-field-visit-2.jpg",
      alt: "Discussion with a farmer regarding crop health and farm inputs at Hanumanwadi",
      caption: "Observing crop health and discussing natural farming methods",
      width: 1600,
      height: 1200,
      thumbWidth: 600,
      thumbHeight: 450,
      order: 3
    },
    {
      id: "img-04",
      activity: "field-visit-hanumanwadi",
      type: "photo",
      src: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-3.webp",
      fallbackSrc: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-3.jpg",
      thumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-3.webp",
      fallbackThumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-3.jpg",
      original: "assets/images/activities/field-visit-hanumanwadi/original/02-field-visit-3.jpg",
      alt: "Local farmers standing together in a green crop field at Hanumanwadi",
      caption: "Local farmers at the Hanumanwadi agricultural field site",
      width: 1200,
      height: 1600,
      thumbWidth: 450,
      thumbHeight: 600,
      order: 4
    },
    {
      id: "img-05",
      activity: "field-visit-hanumanwadi",
      type: "photo",
      src: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-4.webp",
      fallbackSrc: "assets/images/activities/field-visit-hanumanwadi/display/02-field-visit-4.jpg",
      thumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-4.webp",
      fallbackThumb: "assets/images/activities/field-visit-hanumanwadi/thumb/02-field-visit-4.jpg",
      original: "assets/images/activities/field-visit-hanumanwadi/original/02-field-visit-4.jpg",
      alt: "Healthy crop canopy of soybean and legume plants in the field",
      caption: "Soybean and legume crop canopy observed during the field visit",
      width: 1600,
      height: 1200,
      thumbWidth: 600,
      thumbHeight: 450,
      order: 5
    },
    {
      id: "img-06",
      activity: "farmer-interview-vidhate",
      type: "photo",
      src: "assets/images/activities/farmer-interview-vidhate/display/03-vidhate-farm-1.webp",
      fallbackSrc: "assets/images/activities/farmer-interview-vidhate/display/03-vidhate-farm-1.jpg",
      thumb: "assets/images/activities/farmer-interview-vidhate/thumb/03-vidhate-farm-1.webp",
      fallbackThumb: "assets/images/activities/farmer-interview-vidhate/thumb/03-vidhate-farm-1.jpg",
      original: "assets/images/activities/farmer-interview-vidhate/original/03-vidhate-farm-1.jpg",
      alt: "Farmer explaining biological inputs and fermentation drum setup at the farm",
      caption: "Discussion on organic input preparation drums at Vidhate Natural Farm",
      width: 1154,
      height: 1363,
      thumbWidth: 508,
      thumbHeight: 600,
      order: 6
    },
    {
      id: "img-07",
      activity: "farmer-interview-vidhate",
      type: "photo",
      src: "assets/images/activities/farmer-interview-vidhate/display/03-vidhate-farm-2.webp",
      fallbackSrc: "assets/images/activities/farmer-interview-vidhate/display/03-vidhate-farm-2.jpg",
      thumb: "assets/images/activities/farmer-interview-vidhate/thumb/03-vidhate-farm-2.webp",
      fallbackThumb: "assets/images/activities/farmer-interview-vidhate/thumb/03-vidhate-farm-2.jpg",
      original: "assets/images/activities/farmer-interview-vidhate/original/03-vidhate-farm-2.jpg",
      alt: "Farmer holding a fresh bottle gourd cultivated through natural methods",
      caption: "Traditional vegetable cultivation and bottle gourd vine at the farm",
      width: 1600,
      height: 902,
      thumbWidth: 600,
      thumbHeight: 338,
      order: 7
    },
    {
      id: "img-08",
      activity: "farmer-interview-vidhate",
      type: "photo",
      src: "assets/images/activities/farmer-interview-vidhate/display/03-vidhate-farm-3.webp",
      fallbackSrc: "assets/images/activities/farmer-interview-vidhate/display/03-vidhate-farm-3.jpg",
      thumb: "assets/images/activities/farmer-interview-vidhate/thumb/03-vidhate-farm-3.webp",
      fallbackThumb: "assets/images/activities/farmer-interview-vidhate/thumb/03-vidhate-farm-3.jpg",
      original: "assets/images/activities/farmer-interview-vidhate/original/03-vidhate-farm-3.jpg",
      alt: "Exterior view of Vidhate Natural Farm outlet surrounded by diverse trees and plants",
      caption: "Entrance and farm-fresh organic produce center at Vidhate Natural Farm",
      width: 1448,
      height: 1086,
      thumbWidth: 600,
      thumbHeight: 450,
      order: 8
    },
    {
      id: "img-09",
      activity: "farmer-survey-lalgun",
      type: "chart",
      src: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-1.webp",
      fallbackSrc: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-1.png",
      thumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-1.webp",
      fallbackThumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-1.png",
      original: "assets/images/activities/farmer-survey-lalgun/original/04-survey-chart-1.png",
      alt: "Bar chart showing 86.7 percent of surveyed farmers are aware of organic farming",
      caption: "Chart: Awareness of organic farming among surveyed farmers in Lalgun",
      width: 1600,
      height: 881,
      thumbWidth: 600,
      thumbHeight: 330,
      order: 9
    },
    {
      id: "img-10",
      activity: "farmer-survey-lalgun",
      type: "chart",
      src: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-2.webp",
      fallbackSrc: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-2.png",
      thumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-2.webp",
      fallbackThumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-2.png",
      original: "assets/images/activities/farmer-survey-lalgun/original/04-survey-chart-2.png",
      alt: "Bar chart comparing current adoption, trial history, and practical knowledge among farmers",
      caption: "Chart: Adoption rates, past trials and practical knowledge levels",
      width: 1600,
      height: 880,
      thumbWidth: 600,
      thumbHeight: 330,
      order: 10
    },
    {
      id: "img-11",
      activity: "farmer-survey-lalgun",
      type: "chart",
      src: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-4.webp",
      fallbackSrc: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-4.png",
      thumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-4.webp",
      fallbackThumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-4.png",
      original: "assets/images/activities/farmer-survey-lalgun/original/04-survey-chart-4.png",
      alt: "Bar chart identifying labour, cost, and knowledge as key adoption barriers",
      caption: "Chart: Major barriers to adoption reported by surveyed farmers",
      width: 1600,
      height: 880,
      thumbWidth: 600,
      thumbHeight: 330,
      order: 11
    },
    {
      id: "img-12",
      activity: "farmer-survey-lalgun",
      type: "chart",
      src: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-5.webp",
      fallbackSrc: "assets/images/activities/farmer-survey-lalgun/display/04-survey-chart-5.png",
      thumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-5.webp",
      fallbackThumb: "assets/images/activities/farmer-survey-lalgun/thumb/04-survey-chart-5.png",
      original: "assets/images/activities/farmer-survey-lalgun/original/04-survey-chart-5.png",
      alt: "Bar chart showing high willingness of 86.7 percent to adopt organic practices",
      caption: "Chart: Farmers awareness compared with willingness to adopt",
      width: 1600,
      height: 881,
      thumbWidth: 600,
      thumbHeight: 330,
      order: 12
    },
    {
      id: "img-13",
      activity: "digital-initiative-jaiviksetu",
      type: "screenshot",
      src: "assets/images/activities/digital-initiative-jaiviksetu/display/05-jaiviksetu-home.webp",
      fallbackSrc: "assets/images/activities/digital-initiative-jaiviksetu/display/05-jaiviksetu-home.png",
      thumb: "assets/images/activities/digital-initiative-jaiviksetu/thumb/05-jaiviksetu-home.webp",
      fallbackThumb: "assets/images/activities/digital-initiative-jaiviksetu/thumb/05-jaiviksetu-home.png",
      original: "assets/images/activities/digital-initiative-jaiviksetu/original/05-jaiviksetu-home.png",
      alt: "Desktop screenshot of JaivikSetu homepage featuring the organic farming tree",
      caption: "JaivikSetu platform homepage with interactive Knowledge Tree",
      width: 1600,
      height: 733,
      thumbWidth: 600,
      thumbHeight: 275,
      order: 13
    },
    {
      id: "img-14",
      activity: "digital-initiative-jaiviksetu",
      type: "screenshot",
      src: "assets/images/activities/digital-initiative-jaiviksetu/display/05-jaiviksetu-composting.webp",
      fallbackSrc: "assets/images/activities/digital-initiative-jaiviksetu/display/05-jaiviksetu-composting.png",
      thumb: "assets/images/activities/digital-initiative-jaiviksetu/thumb/05-jaiviksetu-composting.webp",
      fallbackThumb: "assets/images/activities/digital-initiative-jaiviksetu/thumb/05-jaiviksetu-composting.png",
      original: "assets/images/activities/digital-initiative-jaiviksetu/original/05-jaiviksetu-composting.png",
      alt: "Desktop screenshot of composting section detailing NADEP and vermicomposting",
      caption: "Detailed composting guides and aeration specifications on JaivikSetu",
      width: 1600,
      height: 733,
      thumbWidth: 600,
      thumbHeight: 275,
      order: 14
    },
    {
      id: "img-15",
      activity: "digital-initiative-jaiviksetu",
      type: "screenshot",
      src: "assets/images/activities/digital-initiative-jaiviksetu/display/05-jaiviksetu-marathi.webp",
      fallbackSrc: "assets/images/activities/digital-initiative-jaiviksetu/display/05-jaiviksetu-marathi.png",
      thumb: "assets/images/activities/digital-initiative-jaiviksetu/thumb/05-jaiviksetu-marathi.webp",
      fallbackThumb: "assets/images/activities/digital-initiative-jaiviksetu/thumb/05-jaiviksetu-marathi.png",
      original: "assets/images/activities/digital-initiative-jaiviksetu/original/05-jaiviksetu-marathi.png",
      alt: "Screenshot of Marathi language toggle and localized content on JaivikSetu",
      caption: "Bilingual interface in Marathi supporting regional language accessibility",
      width: 1325,
      height: 865,
      thumbWidth: 600,
      thumbHeight: 392,
      order: 15
    },
    {
      id: "img-16",
      activity: "article-writing",
      type: "illustration",
      src: "assets/images/activities/article-writing/display/06-article-title-card.webp",
      fallbackSrc: "assets/images/activities/article-writing/display/06-article-title-card.png",
      thumb: "assets/images/activities/article-writing/thumb/06-article-title-card.webp",
      fallbackThumb: "assets/images/activities/article-writing/thumb/06-article-title-card.png",
      original: "assets/images/activities/article-writing/original/06-article-title-card.png",
      alt: "Graphic showing the title of our Marathi article on practical guidance for organic farming",
      caption: "Illustration: Marathi article title card with English translation",
      width: 1600,
      height: 1000,
      thumbWidth: 600,
      thumbHeight: 375,
      order: 16
    },
    {
      id: "img-17",
      activity: "awareness-poster",
      type: "document",
      src: "assets/images/activities/awareness-poster/display/07-poster-1.webp",
      fallbackSrc: "assets/images/activities/awareness-poster/display/07-poster-1.jpg",
      thumb: "assets/images/activities/awareness-poster/thumb/07-poster-1.webp",
      fallbackThumb: "assets/images/activities/awareness-poster/thumb/07-poster-1.jpg",
      original: "assets/images/activities/awareness-poster/original/07-poster-1.jpg",
      alt: "Infographic poster summarizing research, composting methods, and natural protection",
      caption: "Comprehensive organic farming awareness poster prepared for display",
      width: 1492,
      height: 1054,
      thumbWidth: 600,
      thumbHeight: 424,
      order: 17
    },
    {
      id: "img-18",
      activity: "newspaper-analysis",
      type: "document",
      src: "assets/images/activities/newspaper-analysis/display/08-newspaper-1.webp",
      fallbackSrc: "assets/images/activities/newspaper-analysis/display/08-newspaper-1.jpg",
      thumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-1.webp",
      fallbackThumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-1.jpg",
      original: "assets/images/activities/newspaper-analysis/original/08-newspaper-1.jpg",
      alt: "Hindi newspaper clipping highlighting farmer workshop and organic training need",
      caption: "News clipping: Organic farming has become the need of the hour",
      width: 939,
      height: 1523,
      thumbWidth: 370,
      thumbHeight: 600,
      order: 18
    },
    {
      id: "img-19",
      activity: "newspaper-analysis",
      type: "document",
      src: "assets/images/activities/newspaper-analysis/display/08-newspaper-2.webp",
      fallbackSrc: "assets/images/activities/newspaper-analysis/display/08-newspaper-2.jpg",
      thumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-2.webp",
      fallbackThumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-2.jpg",
      original: "assets/images/activities/newspaper-analysis/original/08-newspaper-2.jpg",
      alt: "Hindi newspaper article covering district-level organic production exhibition",
      caption: "News clipping: Organic farming as a present necessity and market opportunity",
      width: 500,
      height: 657,
      thumbWidth: 457,
      thumbHeight: 600,
      order: 19
    },
    {
      id: "img-20",
      activity: "newspaper-analysis",
      type: "document",
      src: "assets/images/activities/newspaper-analysis/display/08-newspaper-3.webp",
      fallbackSrc: "assets/images/activities/newspaper-analysis/display/08-newspaper-3.jpg",
      thumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-3.webp",
      fallbackThumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-3.jpg",
      original: "assets/images/activities/newspaper-analysis/original/08-newspaper-3.jpg",
      alt: "English newspaper report on national mission for natural farming and soil health",
      caption: "News clipping: National vision for natural farming and soil restoration",
      width: 701,
      height: 1024,
      thumbWidth: 411,
      thumbHeight: 600,
      order: 20
    },
    {
      id: "img-21",
      activity: "newspaper-analysis",
      type: "document",
      src: "assets/images/activities/newspaper-analysis/display/08-newspaper-4.webp",
      fallbackSrc: "assets/images/activities/newspaper-analysis/display/08-newspaper-4.jpg",
      thumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-4.webp",
      fallbackThumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-4.jpg",
      original: "assets/images/activities/newspaper-analysis/original/08-newspaper-4.jpg",
      alt: "English newspaper feature on farmer success with indigenous seed conservation",
      caption: "News clipping: Success story of native paddy and traditional seed revival",
      width: 553,
      height: 1141,
      thumbWidth: 291,
      thumbHeight: 600,
      order: 21
    },
    {
      id: "img-22",
      activity: "newspaper-analysis",
      type: "document",
      src: "assets/images/activities/newspaper-analysis/display/08-newspaper-5.webp",
      fallbackSrc: "assets/images/activities/newspaper-analysis/display/08-newspaper-5.jpg",
      thumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-5.webp",
      fallbackThumb: "assets/images/activities/newspaper-analysis/thumb/08-newspaper-5.jpg",
      original: "assets/images/activities/newspaper-analysis/original/08-newspaper-5.jpg",
      alt: "Hindi newspaper coverage of successful organic fruit farming and bio-manure",
      caption: "News clipping: Organic pomegranate cultivation generating sustainable returns",
      width: 803,
      height: 772,
      thumbWidth: 600,
      thumbHeight: 577,
      order: 22
    }
  ];

  let galleryItems = FALLBACK_GALLERY_DATA;
  let currentFilteredList = galleryItems;
  let currentLightboxIndex = 0;
  let activeFilter = 'all';

  // Activity labels map
  const ACTIVITY_NAMES = {
    'research-awareness': 'Research & Awareness',
    'field-visit-hanumanwadi': 'Field Visit – Hanumanwadi',
    'farmer-interview-vidhate': 'Farm Interview – Vidhate Farm',
    'farmer-survey-lalgun': 'Farmer Survey – Lalgun',
    'digital-initiative-jaiviksetu': 'Digital Initiative – JaivikSetu',
    'article-writing': 'Article Writing',
    'awareness-poster': 'Awareness Poster',
    'newspaper-analysis': 'Newspaper Analysis'
  };

  const TYPE_BADGE_LABELS = {
    'illustration': 'Illustration',
    'chart': 'Chart',
    'screenshot': 'Screenshot',
    'document': 'Document'
  };

  // 1. Initialise Gallery
  function initGallery() {
    // Attempt fetch from gallery.json, fall back to inline
    if (window.location.protocol.startsWith('http')) {
      fetch('assets/data/gallery.json')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            galleryItems = data;
          }
          applyFilterFromHash();
        })
        .catch(() => {
          applyFilterFromHash();
        });
    } else {
      applyFilterFromHash();
    }

    setupFilterEvents();
    setupLightbox();
    setupTimelineScroll();
    setupHashListener();
  }

  // 2. Render Grid
  function renderGallery(items) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--cream-card); border-radius: var(--radius-md);">
          <p style="font-size: 1.1rem; color: var(--ink-muted); margin: 0;">Photos coming soon for this category.</p>
        </div>
      `;
      return;
    }

    items.forEach((item, index) => {
      const tile = document.createElement('div');
      tile.className = `gallery-tile type-${item.type}`;
      tile.setAttribute('role', 'button');
      tile.setAttribute('tabindex', '0');
      tile.setAttribute('aria-label', `${item.caption}. Click to open full view.`);
      tile.dataset.index = index;

      // Aspect ratio class for masonry look
      let aspectClass = '';
      if (item.height > item.width * 1.2) {
        aspectClass = 'aspect-tall';
      } else if (item.width > item.height * 1.3) {
        aspectClass = 'aspect-wide';
      }

      // Type badge (NO badge for real photos)
      let badgeHtml = '';
      if (item.type !== 'photo') {
        const badgeLabel = TYPE_BADGE_LABELS[item.type] || item.type;
        badgeHtml = `<span class="image-type-badge badge-${item.type}">${badgeLabel}</span>`;
      }

      const activityName = ACTIVITY_NAMES[item.activity] || item.activity;

      tile.innerHTML = `
        <div class="gallery-tile-img-wrap ${aspectClass}">
          ${badgeHtml}
          <picture>
            <source srcset="${item.thumb}" type="image/webp">
            <img src="${item.fallbackThumb || item.thumb}" alt="${item.alt}" loading="lazy" decoding="async" width="${item.thumbWidth || 600}" height="${item.thumbHeight || 450}">
          </picture>
        </div>
        <div class="gallery-tile-caption-bar">
          <p class="gallery-tile-text">${item.caption}</p>
          <span class="gallery-tile-tag">${activityName}</span>
        </div>
      `;

      // Event listeners to open lightbox
      tile.addEventListener('click', () => openLightbox(index));
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      grid.appendChild(tile);
    });
  }

  // 3. Filter Chips
  function setupFilterEvents() {
    const filterBtns = document.querySelectorAll('.filter-chip');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filterVal = btn.dataset.filter;
        setFilter(filterVal);
      });
    });
  }

  function setFilter(filterVal) {
    activeFilter = filterVal || 'all';

    // Update active button state
    document.querySelectorAll('.filter-chip').forEach(btn => {
      if (btn.dataset.filter === activeFilter) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    if (activeFilter === 'all') {
      currentFilteredList = galleryItems;
    } else {
      currentFilteredList = galleryItems.filter(item => item.activity === activeFilter);
    }

    renderGallery(currentFilteredList);
  }

  // 4. URL Hash Filter Support
  function setupHashListener() {
    window.addEventListener('hashchange', applyFilterFromHash);
  }

  function applyFilterFromHash() {
    const hash = window.location.hash;
    if (hash.includes('filter=')) {
      const match = hash.match(/filter=([a-z0-9-]+)/);
      if (match && match[1]) {
        setFilter(match[1]);
        const gallerySec = document.getElementById('gallery');
        if (gallerySec) {
          gallerySec.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    setFilter('all');
  }

  // 5. Lightbox Controller
  let lightboxEl, lbImg, lbCaption, lbCounter, lbTag, lbBadge, lbOpenOrig, prevFocusedEl;
  let touchStartX = 0;
  let touchEndX = 0;

  function setupLightbox() {
    lightboxEl = document.getElementById('lightbox-viewer');
    if (!lightboxEl) return;

    lbImg = document.getElementById('lb-image');
    lbCaption = document.getElementById('lb-caption');
    lbCounter = document.getElementById('lb-counter');
    lbTag = document.getElementById('lb-tag');
    lbBadge = document.getElementById('lb-badge');
    lbOpenOrig = document.getElementById('lb-open-orig');

    // Close button & backdrop click
    const closeBtn = document.getElementById('lb-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightboxEl.addEventListener('click', (e) => {
      if (e.target === lightboxEl || e.target.classList.contains('lightbox-dialog')) {
        closeLightbox();
      }
    });

    // Prev / Next buttons
    const prevBtn = document.getElementById('lb-prev-btn');
    const nextBtn = document.getElementById('lb-next-btn');

    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);

    // Keyboard navigation & Focus trapping
    window.addEventListener('keydown', (e) => {
      if (!lightboxEl.classList.contains('is-active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'Tab') {
        trapFocus(e);
      }
    });

    // Touch Swipe Support
    lightboxEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    // Double-tap zoom on mobile
    let lastTap = 0;
    if (lbImg) {
      lbImg.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 350 && tapLength > 0) {
          e.preventDefault();
          lbImg.classList.toggle('is-zoomed');
          if (lbImg.classList.contains('is-zoomed')) {
            lbImg.style.transform = 'scale(1.7)';
            lbImg.style.cursor = 'zoom-out';
          } else {
            lbImg.style.transform = '';
            lbImg.style.cursor = 'zoom-in';
          }
        }
        lastTap = currentTime;
      });
    }
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        showPrevImage();
      } else {
        showNextImage();
      }
    }
  }

  function trapFocus(e) {
    const focusable = lightboxEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }

  function openLightbox(index) {
    if (!lightboxEl || currentFilteredList.length === 0) return;

    prevFocusedEl = document.activeElement;
    currentLightboxIndex = index;
    updateLightboxContent();

    lightboxEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const closeBtn = document.getElementById('lb-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('is-active');
    document.body.style.overflow = '';

    if (lbImg) {
      lbImg.style.transform = '';
      lbImg.classList.remove('is-zoomed');
    }

    if (prevFocusedEl) {
      prevFocusedEl.focus();
    }
  }

  function showPrevImage() {
    if (currentFilteredList.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
    updateLightboxContent();
  }

  function showNextImage() {
    if (currentFilteredList.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredList.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = currentFilteredList[currentLightboxIndex];
    if (!item) return;

    if (lbImg) {
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      lbImg.style.transform = '';
      lbImg.classList.remove('is-zoomed');
    }

    if (lbCaption) lbCaption.textContent = item.caption;
    if (lbCounter) lbCounter.textContent = `${currentLightboxIndex + 1} / ${currentFilteredList.length}`;
    if (lbTag) lbTag.textContent = ACTIVITY_NAMES[item.activity] || item.activity;

    if (lbBadge) {
      if (item.type !== 'photo') {
        lbBadge.style.display = 'inline-block';
        lbBadge.className = `image-type-badge badge-${item.type}`;
        lbBadge.textContent = TYPE_BADGE_LABELS[item.type] || item.type;
      } else {
        lbBadge.style.display = 'none';
      }
    }

    if (lbOpenOrig) {
      lbOpenOrig.href = item.original || item.src;
    }

    // Preload next image in memory
    const nextIndex = (currentLightboxIndex + 1) % currentFilteredList.length;
    const nextItem = currentFilteredList[nextIndex];
    if (nextItem && nextItem.src) {
      const preloadImg = new Image();
      preloadImg.src = nextItem.src;
    }
  }

  // 6. Timeline Scroll Progress
  function setupTimelineScroll() {
    const track = document.querySelector('.timeline-container');
    const progLine = document.querySelector('.timeline-progress-line');
    if (!track || !progLine) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    function updateProgress() {
      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
        const scrolled = (windowHeight * 0.7 - rect.top) / totalHeight;
        const pct = Math.min(Math.max(scrolled * 100, 0), 100);
        progLine.style.height = pct + '%';
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // Expose lightbox trigger for activity cards thumbnails
  window.openActivityLightboxByImageId = function (imgId) {
    const idx = galleryItems.findIndex(it => it.id === imgId);
    if (idx !== -1) {
      currentFilteredList = galleryItems;
      openLightbox(idx);
    }
  };

  // Run on DOM load
  document.addEventListener('DOMContentLoaded', initGallery);
})();
