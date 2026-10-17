/* ===================================================================
   JAIVIKSETU MAIN UI & NAVIGATION SCRIPT
   - Sticky Glass Navbar (PRD §4.5 & §5.2)
   - Mobile Dropdown Menu (Top navbar ONLY, NO SIDEBAR)
   - Animated Count-Up Numbers (Stats Ribbon §6.1 #1)
   - Interactive Organic Farming Tree (§6.1 #4 & §7.5)
   - Scroll-Reveal animations & Active Nav links
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.navbar-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // 1. STICKY NAVBAR SCROLL BEHAVIOR
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. MOBILE MENU DROPDOWN (TOP NAVBAR ONLY, NO SIDEBAR)
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });

    // Close when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
      });
    });
  }

  // 3. STATS COUNT-UP ANIMATION
  const statNumbers = document.querySelectorAll('.stat-number');
  let countUpDone = false;

  function countUp(el) {
    const target = el.getAttribute('data-count');
    if (!target) return;

    // Handle non-numeric prefixes like #1 or 6+
    if (target.startsWith('#')) {
      el.innerHTML = target;
      return;
    }

    const numMatch = target.match(/\d+/);
    if (!numMatch) return;

    const endNum = parseInt(numMatch[0], 10);
    const suffix = target.replace(numMatch[0], '');
    let startNum = 0;
    const duration = 1600;
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * endNum);

      el.innerHTML = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerHTML = target;
      }
    }

    requestAnimationFrame(update);
  }

  const statsSection = document.querySelector('.stats-ribbon');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countUpDone) {
          countUpDone = true;
          statNumbers.forEach(num => countUp(num));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

  // 4. ORGANIC FARMING TREE BRANCH DATA & MODAL
  const treeBranchData = {
    soil: {
      title: "Soil Building & Living Microbiome",
      titleMr: "मृदा संवर्धन व सजीव सूक्ष्मजीव",
      color: "var(--green-600)",
      leaves: [
        { name: "Indore & NADEP Composting", nameMr: "इंदोर व नाडेप कंपोस्ट पद्धत", desc: "Layered aerobic breakdown yielding high humus.", descMr: "हवेच्या साहाय्याने थर देऊन सेंद्रिय कर्बयुक्त खत निर्मिती.", link: "composting.html#indore" },
        { name: "Eisenia Vermicompost", nameMr: "गांडूळ खत निर्मिती", desc: "Digestive worm castings & nutrient Vermiwash.", descMr: "गांडूळ विष्ठा व पोषक व्हर्मीवॉश खताची निर्मिती.", link: "composting.html#vermicompost" },
        { name: "Green Manuring", nameMr: "हिरवळीचे खत (ताग / धैंचा)", desc: "Sunhemp & Dhaincha fixing 80kg biological N per hectare.", descMr: "जमिनीत गाडून प्रति हेक्टरी ८० किलो सेंद्रिय नत्र साठवणे.", link: "field-practices.html#green-manure" },
        { name: "Jeevamrut & Beejamrut", nameMr: "जीवामृत व बीजामृत", desc: "Cow-derived billions of aerobic soil microbes.", descMr: "देशी गायीच्या शेण-गोमूत्रातून अब्जावधी उपयुक्त जिवाणूंची वाढ.", link: "pesticides.html#jeevamrut" }
      ]
    },
    protection: {
      title: "Natural Crop Protection & Bio-Defenses",
      titleMr: "नैसर्गिक पीक संरक्षण व जैविक उपाय",
      color: "var(--terracotta)",
      leaves: [
        { name: "Neem Seed Kernel Extract (NSKE)", nameMr: "निंबोळी अर्क (NSKE)", desc: "Botanical insect growth regulator & antifeedant.", descMr: "किडींची वाढ रोखणारा व रस शोषण थांबवणारा कडू अर्क.", link: "pesticides.html#neem" },
        { name: "Dashaparni Ark", nameMr: "दशपर्णी अर्क (१० कडू पाने)", desc: "10-leaf fermented botanical repellent against sucking pests.", descMr: "रस शोषणाऱ्या किडी व अळ्यांवर १० औषधी पानांचा अर्क.", link: "pesticides.html#dashaparni" },
        { name: "Biological Trichoderma & Bt", nameMr: "जैविक ट्रायकोडर्मा व बीटी", desc: "Friendly fungal antagonists stopping root rot.", descMr: "मूळकूज व बुरशीजन्य रोग रोखणारे मित्र जिवाणू व बुरशी.", link: "pesticides.html#bio-agents" },
        { name: "Pheromone & Sticky Traps", nameMr: "कामगंध व चिकट सापळे", desc: "Eco-friendly monitoring preventing pest outbreak.", descMr: "किडींचे नियंत्रण करणारे बिनविषारी पिवळे व निळे सापळे.", link: "pesticides.html#traps" }
      ]
    },
    practices: {
      title: "Sustainable Field Practices & Water Care",
      titleMr: "शाश्वत शेती पद्धती व जल व्यवस्थापन",
      color: "var(--brown)",
      leaves: [
        { name: "Legume Crop Rotation", nameMr: "कडधान्यांची फेरपालट", desc: "Gram and pulses breaking pest cycles naturally.", descMr: "हरभरा व तूर यांसारख्या पिकांमुळे नत्र वाढते व कीडचक्र तुटते.", link: "field-practices.html#rotation" },
        { name: "Multispecies Intercropping", nameMr: "आंतरपीक व सापळा पिके", desc: "Marigold, maize, and coriander shielding main crops.", descMr: "झेंडू, मका व कोथिंबीर मुख्य पिकाचे किडींपासून रक्षण करतात.", link: "field-practices.html#intercropping" },
        { name: "Organic Biomass Mulching", nameMr: "सेंद्रिय आच्छादन (मल्चिंग)", desc: "Straw layers reducing soil evaporation by 60%.", descMr: "काडीकचऱ्याच्या थरामुळे पाण्याचे बाष्पीभवन ६०% घटते.", link: "field-practices.html#mulching" },
        { name: "Precision Drip Irrigation", nameMr: "ठिबक सिंचन पद्धत", desc: "Targeted root zone water minimizing weed pressure.", descMr: "थेट मुळांशी पाणी दिल्याने तण कमी होते व पाण्याची बचत होते.", link: "field-practices.html#drip" }
      ]
    },
    market: {
      title: "Certification, Standards & Fair Markets",
      titleMr: "प्रमाणीकरण, मानके व थेट बाजारपेठ",
      color: "var(--blue)",
      leaves: [
        { name: "PGS-India Group Certification", nameMr: "सहभागी हमी प्रणाली (PGS-India)", desc: "Zero-cost participatory certification for peer farmers.", descMr: "लहान शेतकऱ्यांसाठी मोफत गट प्रमाणीकरण प्रणाली.", link: "schemes.html#pgs" },
        { name: "NPOP Export Standards", nameMr: "NPOP राष्ट्रीय सेंद्रिय मानके", desc: "APEDA third-party certification for export premiums.", descMr: "आंतरराष्ट्रीय निर्यातीसाठी अपेडा मान्यताप्राप्त मानके.", link: "schemes.html#npop" },
        { name: "Jaivik Bharat Logo", nameMr: "जैविक भारत अधिकृत लोगो", desc: "FSSAI single organic food authenticity mark.", descMr: "FSSAI चे अस्सल सेंद्रिय उत्पादनांसाठीचे राष्ट्रीय मानचिन्ह.", link: "schemes.html#jaivik-bharat" },
        { name: "Farmer Producer Orgs (FPOs)", nameMr: "शेतकरी उत्पादक कंपन्या (FPO)", desc: "Collective grading and direct farmer-to-consumer sales.", descMr: "शेतकरी समूहाद्वारे थेट ग्राहकांना विक्री व चांगला नफा.", link: "campaign.html#fpo" }
      ]
    }
  };

  window.selectTreeBranch = function(branchKey) {
    const data = treeBranchData[branchKey];
    if (!data) return;

    // Update active button state
    document.querySelectorAll('.tree-branch-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-branch') === branchKey);
    });

    const isMr = document.body.classList.contains('lang-mr');
    const container = document.getElementById('tree-branch-display');
    if (!container) return;

    container.innerHTML = `
      <div style="background: var(--cream-pure); border: 2px solid rgba(107, 74, 42, 0.15); border-left: 6px solid ${data.color}; border-radius: var(--radius-lg); padding: 2rem; box-shadow: var(--shadow-sm); animation: slideUpFade 0.3s ease;">
        <h4 style="color: var(--green-900); font-size: 1.35rem; margin-bottom: 0.5rem;">${isMr ? data.titleMr : data.title}</h4>
        <p style="font-size: 0.95rem; color: var(--ink-muted); margin-bottom: 1.5rem;">${isMr ? "या स्तंभातील ४ प्रमुख तंत्रज्ञान घटक खालीलप्रमाणे आहेत:" : "Key leaves and actionable guides under this pillar:"}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          ${data.leaves.map(l => `
            <a href="${l.link}" style="background: var(--cream); padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(107, 74, 42, 0.12); text-decoration: none; transition: all var(--transition-fast); display: block;" onmouseover="this.style.transform='translateY(-2px)'; this.style.borderColor='var(--green-600)'" onmouseout="this.style.transform='none'; this.style.borderColor='rgba(107, 74, 42, 0.12)'">
              <strong style="color: var(--green-900); display: block; font-size: 0.95rem; margin-bottom: 0.25rem;">🌿 ${isMr ? l.nameMr : l.name}</strong>
              <span style="color: var(--ink-muted); font-size: 0.85rem; line-height: 1.4; display: block;">${isMr ? l.descMr : l.desc}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  };

  // Initialize first branch
  if (document.getElementById('tree-branch-display')) {
    selectTreeBranch('soil');
  }

  // Smooth scroll for hero scroll cue
  const scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight * 0.75,
        behavior: 'smooth'
      });
    });
  }
});
