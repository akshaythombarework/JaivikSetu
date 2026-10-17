/* ===================================================================
   JAIVIKSETU INTERACTIVE TOOLS SUITE
   - Compost Calculator (PRD §7.1)
   - Natural Pest Finder Matrix (PRD §7.2)
   - "Which Method Suits Me?" 5-Question Quiz (PRD §7.3)
   - Myth vs Fact Flip Cards (PRD §7.4)
   - Living Soil Interactive Cross-Section (PRD §6.2)
   - Awareness Feedback Form & Toast Notification (PRD §7.8)
   =================================================================== */

// ===================================================================
// 1. COMPOST CALCULATOR
// ===================================================================
const compostMethodsDB = {
  bokashi: {
    title: "Bokashi Anaerobic Fermentation",
    titleMr: "बोकाशी विरजण पद्धत (अतिजलद)",
    days: "14 – 18 Days",
    difficulty: "Easy · Compact",
    wasteType: "Kitchen & food scraps",
    summary: [
      "Layer kitchen scraps with Bokashi EM microbial bran inside an airtight bucket.",
      "Tightly press waste down to remove all oxygen pockets.",
      "Drain potent microbial liquid tea every 3–4 days for plant foliar nutrition.",
      "Buried in garden soil or container; ready as rich humus in about 14 days."
    ],
    summaryMr: [
      "स्वयंपाकघरातील कचरा बोकाशी ब्रान (जिवाणू विरजण) सोबत हवाबंद बादलीत भरा.",
      "कचरा घट्ट दाबून आतील हवा पूर्णपणे काढून टाका.",
      "दर ३-४ दिवसांनी खाली जमा होणारे पोषक द्रव (बोकाशी टी) झाडांसाठी काढून घ्या.",
      "१४ दिवसांत किण्वन पूर्ण झाल्यावर मातीत पुरून उत्कृष्ट खत मिळवा."
    ],
    guideUrl: "composting.html#bokashi"
  },
  kitchen: {
    title: "Aerobic Kitchen & Vegetable Waste Compost",
    titleMr: "घरगुती स्वयंपाकघर कचरा कंपोस्ट",
    days: "45 – 60 Days",
    difficulty: "Beginner Friendly",
    wasteType: "Vegetable peels & garden trimmings",
    summary: [
      "Chop vegetable scraps, fruit peels, and spent tea leaves into small 1-inch pieces.",
      "Maintain 1 part wet green waste to 2 parts dry brown leaves or shredded carton.",
      "Add a splash of sour buttermilk or curd water as an active bacterial inoculant.",
      "Turn the bin once weekly to aerate; turns into earthy crumbly compost in 45–60 days."
    ],
    summaryMr: [
      "भाजीपाल्याचे अवशेष, फळांच्या साली व चहा पावडर १ इंचाच्या तुकड्यांत कापा.",
      "१ भाग ओला कचरा आणि २ भाग सुका पालापाचोळा यांचे योग्य संतुलन ठेवा.",
      "जिवाणू वाढीसाठी थोडे आंबट ताक किंवा शेणपाणी शिंपडा.",
      "आठवड्यातून एकदा कचरा उलथापालथ करा; ४५-६० दिवसांत उत्तम खत तयार होते."
    ],
    guideUrl: "composting.html#kitchen"
  },
  vermicompost: {
    title: "Eisenia Fetida Vermicomposting",
    titleMr: "गांडूळ खत निर्मिती (व्हर्मीकंपोस्ट)",
    days: "40 – 45 Days",
    difficulty: "Medium · High Nutrition",
    wasteType: "Pre-decomposed dung & soft vegetable biomass",
    summary: [
      "Prepare a shaded, cool 3-ft wide bed with dry straw and coconut coir bedding.",
      "Add semi-decomposed cow dung slurry and soft pre-digested plant matter.",
      "Introduce Australian Red Earthworms (Eisenia fetida) and keep moisture at 60%.",
      "Harvest black granular worm castings and nutrient-dense Vermiwash in 40–45 days."
    ],
    summaryMr: [
      "सावलीच्या ठिकाणी ३ फूट रुंद वाफा तयार करून तळाशी वाळलेले गवत वा पाला टाका.",
      "अर्धवट कुजलेले शेण आणि बारीक केलेला काडीकचरा वाफ्यात भरा.",
      "आयसेनिया फेटिडा (Eisenia fetida) गांडूळ सोडा व ६०% ओलावा टिकवून ठेवा.",
      "४०-४५ दिवसांत काळ्या दाणेदार गांडूळ खताची व गांडूळ अर्काची (व्हर्मीवॉश) काढणी करा."
    ],
    guideUrl: "composting.html#vermicompost"
  },
  heap_pit: {
    title: "Indore Aerobic Heap / Pit Composting",
    titleMr: "इंदोर पद्धत (खड्डा व ढीग पद्धत)",
    days: "90 – 120 Days",
    difficulty: "Moderate · Bulk Biomass",
    wasteType: "Crop stalks, farm residues, mixed manure",
    summary: [
      "Mark an 8x4 ft shaded area on farm ground or excavate a 3-ft deep pit.",
      "Layer 6 inches dry stalks, 3 inches green biomass, and 2 inches cattle dung slurry.",
      "Insert aerating bamboo poles to supply continuous core oxygen.",
      "Turn the heap at 15, 30, and 60 days; yields high-carbon crumbly humus in 90–120 days."
    ],
    summaryMr: [
      "सावलीत ८ बाय ४ फुटांची जागा निवडा किंवा ३ फूट खोल खड्डा तयार करा.",
      "६ इंच वाळलेला काडीकचरा, ३ इंच हिरवे अवशेष व २ इंच शेणस्लरीचा थर द्या.",
      "ढीगाच्या मधोमध हवेसाठी बांबूचे छिद्र असलेले पाईप उभे करा.",
      "१५, ३० आणि ६० दिवसांनी ढीग पलटी करा; ९०-१२० दिवसांत सुपीक खत तयार होते."
    ],
    guideUrl: "composting.html#indore"
  },
  nadep: {
    title: "NADEP Brick Tank Composting",
    titleMr: "नाडेप (NADEP) टाकी पद्धत",
    days: "110 – 120 Days",
    difficulty: "Farm Scale · High Volume",
    wasteType: "Dry crop residues, agricultural dung & farm soil",
    summary: [
      "Construct a honeycomb brick tank (10x5x3 ft) with alternating air-ventilation bricks.",
      "Fill in standard NADEP formula: 1400 kg crop residue + 100 kg cow dung + 1750 kg fine soil.",
      "Dome the final top layer 1.5 ft above walls and seal thoroughly with a mud-dung plaster.",
      "Produces 2.5 to 3 tons of rich organic manure in 120 days with zero turning needed."
    ],
    summaryMr: [
      "१०x५x३ फूट आकाराची हवेसाठी भोके असणारी वीट टाकी बांधा (नाडेप टाकी).",
      "१४०० किलो काडीकचरा, १०० किलो शेण आणि १७५० किलो चाळलेली माती यांचे थर भरा.",
      "टाकीच्या वर १.५ फुटांचा घुमटाकार थर देऊन शेण-मातीच्या गिलाव्याने सील करा.",
      "उलथापालथ न करता १२० दिवसांत ३ टन पोषक सेंद्रिय खत तयार होते."
    ],
    guideUrl: "composting.html#nadep"
  }
};

function calculateCompost(e) {
  if (e) e.preventDefault();

  const wasteAmount = parseFloat(document.getElementById('calc-waste-amount')?.value) || 2;
  const wasteType = document.getElementById('calc-waste-type')?.value || 'kitchen_only';
  const space = document.getElementById('calc-space')?.value || 'balcony';
  const time = document.getElementById('calc-time')?.value || 'medium';

  let selectedKey = 'kitchen';

  // Rule matrix per PRD §7.1
  if (wasteType === 'kitchen_only' && space === 'balcony' && time === 'fast') {
    selectedKey = 'bokashi';
  } else if (wasteType === 'kitchen_only' || space === 'balcony') {
    selectedKey = time === 'fast' ? 'bokashi' : 'kitchen';
  } else if ((wasteType === 'crop_dung' || wasteType === 'kitchen_garden') && (space === 'backyard' || space === 'farm') && time === 'medium') {
    selectedKey = 'vermicompost';
  } else if (wasteType === 'crop_dung' && space === 'farm' && (time === 'slow' || wasteAmount >= 15)) {
    selectedKey = 'nadep';
  } else {
    selectedKey = 'heap_pit';
  }

  const method = compostMethodsDB[selectedKey];
  const isMr = document.body.classList.contains('lang-mr');

  const titleEl = document.getElementById('calc-res-title');
  const daysEl = document.getElementById('calc-res-days');
  const diffEl = document.getElementById('calc-res-diff');
  const stepsListEl = document.getElementById('calc-res-steps');
  const linkEl = document.getElementById('calc-res-link');

  if (titleEl) titleEl.textContent = isMr ? method.titleMr : method.title;
  if (daysEl) daysEl.textContent = method.days;
  if (diffEl) diffEl.textContent = method.difficulty;
  
  if (stepsListEl) {
    const steps = isMr ? method.summaryMr : method.summary;
    stepsListEl.innerHTML = steps.map((s, idx) => `
      <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
        <span style="background: var(--green-600); color: #fff; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0; margin-top: 2px;">${idx + 1}</span>
        <span>${s}</span>
      </li>
    `).join('');
  }

  if (linkEl) {
    linkEl.href = method.guideUrl;
    linkEl.textContent = isMr ? "संपूर्ण मार्गदर्शक वाचा ➔" : "Read Full Preparation Guide ➔";
  }
}

// ===================================================================
// 2. PEST FINDER INTERACTIVE MATRIX (PRD §7.2)
// ===================================================================
const pestData = {
  aphids: {
    name: "Aphids (मावा / लाही)",
    nameMr: "मावा / लाही (Aphids)",
    desc: "Soft-bodied sap-sucking pests clustering under tender shoots and leaves, excreting sticky honeydew.",
    descMr: "कोवळ्या पानांच्या व फांद्यांच्या खाली राहून रस शोषून घेणारे कीटक. हे चिकट मधासारखा डिंक पानांवर सोडतात, ज्यामुळे काळी बुरशी येते.",
    neem: true,
    dashaparni: true,
    garlicChilli: true,
    bioAgents: false,
    traps: true,
    trapDetail: "Yellow Sticky Traps (10 per acre) at crop canopy level.",
    trapDetailMr: "पिकाच्या उंचीवर एकरी १० पिवळे चिकट सापळे लावा.",
    recipeAdvice: "Spray 5% Neem Seed Kernel Extract (NSKE) or Dashaparni Ark (200ml in 10L water). Repeat after 5 days.",
    recipeAdviceMr: "५% निंबोळी अर्क (NSKE) किंवा दशपर्णी अर्क (२०० मिली प्रति १० लिटर पाणी) फवारा. ५ दिवसांनी पुन्हा फवारणी करा.",
    caution: "Spray in the late evening to avoid scorching leaves and to protect honeybees.",
    cautionMr: "पिकांची पाने करपू नयेत व मधमाशांना इजा होऊ नये म्हणून नेहमी संध्याकाळी ४ नंतरच फवारणी करावी."
  },
  whitefly: {
    name: "Whitefly (पांढरी माशी)",
    nameMr: "पांढरी माशी (Whitefly)",
    desc: "Tiny white winged insects transmitting leaf curl viruses on cotton, tomato, and chilli.",
    descMr: "कापूस, टोमॅटो आणि मिरचीवरील चुरडा-मुरडा (लीफ कर्ल व्हायरस) पसरवणारे लहान पांढरे उडणारे कीटक.",
    neem: true,
    dashaparni: false,
    garlicChilli: true,
    bioAgents: false,
    traps: true,
    trapDetail: "Yellow Sticky Traps placed 1 foot above crop foliage.",
    trapDetailMr: "पिकांच्या पानांपेक्षा १ फूट वर पिवळे चिकट सापळे लावा.",
    recipeAdvice: "Garlic-Chilli-Ginger extract (crush 500g garlic, 250g green chilli in 10L water with 20g organic soap).",
    recipeAdviceMr: "लसूण-मिरची-आले काढा (५०० ग्रॅम लसूण, २५० ग्रॅम तिखट हिरवी मिरची १० लिटर पाण्यात २० ग्रॅम साबणासह).",
    caution: "Ensure thorough coverage under the lower surface of leaves where adults roost.",
    cautionMr: "पांढरी माशी पानांच्या मागील बाजूस असते, त्यामुळे पानांच्या खालच्या बाजूला व्यवस्थित फवारणी करा."
  },
  caterpillar: {
    name: "Caterpillars & Borers (अळी व फळ पोखरणाऱ्या अळ्या)",
    nameMr: "अळी व फळ पोखरणाऱ्या अळ्या (Caterpillars)",
    desc: "Voracious chewers boring into pods, fruits, and apical buds (Helicoverpa, Spodoptera).",
    descMr: "शेंगा, फळे व कोंब पोखरणाऱ्या हानीकारक अळ्या (घाटे अळी, लष्करी अळी, पाने खाणारी अळी).",
    neem: true,
    dashaparni: true,
    garlicChilli: false,
    bioAgents: true,
    traps: true,
    trapDetail: "Pheromone Traps (5 per acre) + Bird Perches (15 per acre).",
    trapDetailMr: "एकरी ५ कामगंध सापळे (फेरोमोन ट्रॅप) + एकरी १५ पक्षी थांबे (T-आकाराचे).",
    recipeAdvice: "Release Trichogramma egg parasitoids (50,000/acre) + spray Bacillus thuringiensis (Bt) or Dashaparni Ark.",
    recipeAdviceMr: "ट्रायकोग्रामा मित्रकीटक अंडी (५०,००० प्रति एकर) सोडा + बॅसिलस थुरिनजिएन्सिस (Bt) किंवा दशपर्णी अर्क फवारा.",
    caution: "Apply biological agents during egg hatching or early 1st instar larvae stage for maximum impact.",
    cautionMr: "अंडी उबण्याच्या वेळी किंवा अळ्या लहान असतानाच जैविक औषधांची फवारणी करावी."
  },
  mites: {
    name: "Mites (लाल कोळी / माइट्स)",
    nameMr: "लाल कोळी / माइट्स (Mites)",
    desc: "Microscopic arachnids spinning fine webs under leaves causing downward curling and bronze mottling.",
    descMr: "पानांखाली बारीक जाळे विणणारे सूक्ष्म कीटक; यामुळे पाने खाली वळतात आणि तांबूस-तपकिरी रंगाची होतात.",
    neem: true,
    dashaparni: false,
    garlicChilli: true,
    bioAgents: false,
    traps: false,
    trapDetail: "Sticky traps are ineffective against microscopic non-flying mites.",
    trapDetailMr: "चिकट सापळे उडू न शकणाऱ्या सूक्ष्म कोळ्यांवर लागू पडत नाहीत.",
    recipeAdvice: "Neem oil (5ml/L with 1ml natural soap) combined with garlic spray. Wet underside of leaves thoroughly.",
    recipeAdviceMr: "निंबोळी तेल (५ मिली प्रति लिटर + १ मिली सेंद्रिय साबण) किंवा लसूण अर्क. पानांचा मागचा भाग पूर्ण ओला करा.",
    caution: "Avoid drought stress in plants; maintain adequate soil moisture via organic mulching.",
    cautionMr: "पिकाला पाण्याचा ताण पडू देऊ नका; सेंद्रिय आच्छादनाने (मल्चिंग) मातीत ओलावा टिकवून ठेवा."
  },
  fungal_rot: {
    name: "Fungal Rot & Blight (बुरशीजन्य करपा व मूळकूज)",
    nameMr: "बुरशीजन्य करपा व मूळकूज (Fungal Rot)",
    desc: "Wilting, root rot, powdery mildew, and leaf spots caused by fungal pathogens in damp conditions.",
    descMr: "दमट हवामानात होणारा पानांवरील करपा, भुरी, तांबेरा आणि मुळांची सड.",
    neem: false,
    dashaparni: false,
    garlicChilli: false,
    bioAgents: true,
    traps: false,
    trapDetail: "Traps do not catch microscopic fungal spores.",
    trapDetailMr: "सापळे हवेतील सूक्ष्म बुरशीच्या बीजाणूवर काम करत नाहीत.",
    recipeAdvice: "Seed & soil application of Trichoderma viride (1kg in 100kg farm compost) + sour buttermilk spray (5%).",
    recipeAdviceMr: "ट्रायकोडर्मा व्हिरिडी (१ किलो १०० किलो शेणखतात मिसळून जमिनीत देणे) + आंबट ताकाची फवारणी (५%).",
    caution: "Never mix Trichoderma bio-fungicide with copper-based or synthetic chemical fungicides.",
    cautionMr: "ट्रायकोडर्मा हे जिवंत बुरशीनाशक असल्याने रासायनिक किंवा तांबायुक्त बुरशीनाशकांसोबत कधीही मिसळू नका."
  }
};

function selectPest(pestKey) {
  const pest = pestData[pestKey];
  if (!pest) return;

  const isMr = document.body.classList.contains('lang-mr');

  // Update pills
  document.querySelectorAll('.pest-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-pest') === pestKey);
  });

  // Update table indicators
  const rowNeem = document.getElementById('pest-cell-neem');
  const rowDasha = document.getElementById('pest-cell-dasha');
  const rowGarlic = document.getElementById('pest-cell-garlic');
  const rowBio = document.getElementById('pest-cell-bio');
  const rowTrap = document.getElementById('pest-cell-trap');

  if (rowNeem) rowNeem.innerHTML = pest.neem ? '<span class="dot-effective" title="Highly Effective"></span>' : '<span class="dot-ineffective" title="Not Applicable"></span>';
  if (rowDasha) rowDasha.innerHTML = pest.dashaparni ? '<span class="dot-effective" title="Highly Effective"></span>' : '<span class="dot-ineffective" title="Not Applicable"></span>';
  if (rowGarlic) rowGarlic.innerHTML = pest.garlicChilli ? '<span class="dot-effective" title="Highly Effective"></span>' : '<span class="dot-ineffective" title="Not Applicable"></span>';
  if (rowBio) rowBio.innerHTML = pest.bioAgents ? '<span class="dot-effective" title="Highly Effective"></span>' : '<span class="dot-ineffective" title="Not Applicable"></span>';
  if (rowTrap) rowTrap.innerHTML = pest.traps ? '<span class="dot-effective" title="Highly Effective"></span>' : '<span class="dot-ineffective" title="Not Applicable"></span>';

  // Update details panel
  const nameEl = document.getElementById('pest-detail-name');
  const descEl = document.getElementById('pest-detail-desc');
  const recEl = document.getElementById('pest-detail-recipe');
  const trapEl = document.getElementById('pest-detail-trap');
  const cautionEl = document.getElementById('pest-detail-caution');

  if (nameEl) nameEl.textContent = isMr ? (pest.nameMr || pest.name) : pest.name;
  if (descEl) descEl.textContent = isMr ? (pest.descMr || pest.desc) : pest.desc;
  if (recEl) recEl.textContent = isMr ? (pest.recipeAdviceMr || pest.recipeAdvice) : pest.recipeAdvice;
  if (trapEl) trapEl.textContent = isMr ? (pest.trapDetailMr || pest.trapDetail) : pest.trapDetail;
  if (cautionEl) cautionEl.textContent = isMr ? (pest.cautionMr || pest.caution) : pest.caution;
}

// ===================================================================
// 3. "WHICH METHOD SUITS ME?" 5-QUESTION QUIZ (PRD §7.3)
// ===================================================================
const quizQuestions = [
  {
    q: "1. What size of space do you currently have available for organic farming/composting?",
    qMr: "१. तुमच्याकडे सेंद्रिय खतनिर्मिती किंवा शेतीसाठी किती जागा उपलब्ध आहे?",
    options: [
      { text: "Balcony / apartment terrace (Under 100 sq ft)", textMr: "फ्लॅटची बाल्कनी किंवा टेरेस (१०० चौ. फुटांपेक्षा कमी)", tag: "bokashi_kitchen" },
      { text: "Backyard or small residential plot (100 – 1,000 sq ft)", textMr: "घरामागील परसबाग किंवा लहान मोकळी जागा", tag: "vermi_kitchen" },
      { text: "Smallholder farm (1 to 5 Acres)", textMr: "लहान शेती (१ ते ५ एकर शेतजमीन)", tag: "farm_indore" },
      { text: "Medium to large farm (Over 5 Acres)", textMr: "मोठी शेती (५ एकरांपेक्षा जास्त शेतजमीन)", tag: "farm_nadep" }
    ]
  },
  {
    q: "2. What is the primary organic biomass or waste you generate daily?",
    qMr: "२. तुमच्याकडे दररोज कोणत्या प्रकारचा सेंद्रिय कचरा उपलब्ध होतो?",
    options: [
      { text: "Kitchen vegetable peels, fruit rinds & coffee grounds", textMr: "भाजीपाल्याची साले, फळे व चहा पावडर", tag: "bokashi_kitchen" },
      { text: "Lawn clippings, garden leaves & vegetable waste", textMr: "बागेतील सुका पालापाचोळा व काडीकचरा", tag: "vermi_kitchen" },
      { text: "Crop residues (cotton stalks, wheat straw, sugarcane trash)", textMr: "पिकांचे अवशेष (कापूस पराटी, गव्हाचे काड, पाचट)", tag: "farm_indore" },
      { text: "Abundant cattle cow dung, urine & farm residues", textMr: "मुबलक गोठा खत, शेण, गोमूत्र व काडीकचरा", tag: "farm_nadep" }
    ]
  },
  {
    q: "3. How quickly do you need your organic compost or output to be ready?",
    qMr: "३. तुम्हाला सेंद्रिय खत किती दिवसांत तयार हवे आहे?",
    options: [
      { text: "Ultra fast: within 2 to 3 weeks", textMr: "अतिशय जलद: २ ते ३ आठवड्यांत", tag: "bokashi_kitchen" },
      { text: "Moderate: about 4 to 6 weeks", textMr: "मध्यम: ४ ते ६ आठवड्यांत", tag: "vermi_kitchen" },
      { text: "Seasonal: 3 to 4 months is ideal for planting cycles", textMr: "हंगामी: ३ ते ४ महिने (पुढील हंगामासाठी)", tag: "farm_indore" },
      { text: "Bulk reserve: 4 months for massive annual soil carbon", textMr: "एकदम मोठा साठा: ४ महिन्यांत २-३ टन खत", tag: "farm_nadep" }
    ]
  },
  {
    q: "4. How much physical effort or turning are you able to provide?",
    qMr: "४. तुम्ही खताच्या देखभालीसाठी किती श्रम देऊ शकता?",
    options: [
      { text: "Minimal effort: airtight seal and no turning", textMr: "किमान श्रम: हवाबंद डब्यात, कोणतीही उलथापालथ नको", tag: "bokashi_kitchen" },
      { text: "Light weekly turning and watering", textMr: "हलकी आठवडी उलथापालथ व पाणी देणे", tag: "vermi_kitchen" },
      { text: "Medium physical turning every 15–30 days", textMr: "दर १५-३० दिवसांनी ढीग पलटी करणे शक्य आहे", tag: "farm_indore" },
      { text: "One-time intensive loading, then zero maintenance", textMr: "फक्त एकदाच टाकी भरणे, त्यानंतर कोणतीही उलथापालथ नको", tag: "farm_nadep" }
    ]
  },
  {
    q: "5. What is your ultimate priority or goal?",
    qMr: "५. तुमचे मुख्य उद्दिष्ट काय आहे?",
    options: [
      { text: "Zero-waste home living and organic balcony pots", textMr: "घरातील कचरा शून्य करणे व कुंडीतील झाडांना खत देणे", tag: "bokashi_kitchen" },
      { text: "Superior organic liquid fertilizer (Vermiwash) & worm compost", textMr: "उत्कृष्ट दर्जाचे गांडूळ खत व गांडूळ अर्क मिळवणे", tag: "vermi_kitchen" },
      { text: "Cutting synthetic chemical costs on fields naturally", textMr: "शेतीतील रासायनिक खतांचा खर्च कमी करून जमीन सुपीक करणे", tag: "farm_indore" },
      { text: "Complete organic certification & high-volume soil carbon building", textMr: "पूर्ण सेंद्रिय प्रमाणीकरण व जमिनीचा पोत कायमस्वरूपी सुधारणे", tag: "farm_nadep" }
    ]
  }
];

let currentQuizStep = 0;
let quizScores = {
  bokashi_kitchen: 0,
  vermi_kitchen: 0,
  farm_indore: 0,
  farm_nadep: 0
};

function renderQuizStep() {
  const container = document.getElementById('quiz-step-container');
  if (!container) return;

  const isMr = document.body.classList.contains('lang-mr');

  if (currentQuizStep >= quizQuestions.length) {
    // Show results
    showQuizResults(container, isMr);
    return;
  }

  const q = quizQuestions[currentQuizStep];
  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.85rem; font-weight: 700; color: var(--green-700);">
        <span>QUESTION ${currentQuizStep + 1} OF ${quizQuestions.length}</span>
        <span>${Math.round(((currentQuizStep) / quizQuestions.length) * 100)}% COMPLETE</span>
      </div>
      <div style="width: 100%; height: 8px; background: rgba(107, 74, 42, 0.15); border-radius: 99px; overflow: hidden;">
        <div style="width: ${((currentQuizStep) / quizQuestions.length) * 100}%; height: 100%; background: var(--saffron); transition: width 0.3s ease;"></div>
      </div>
    </div>
    <h3 style="margin-bottom: 1.5rem; color: var(--green-900); font-size: 1.25rem;">${isMr ? q.qMr : q.q}</h3>
    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      ${q.options.map((opt, i) => `
        <button type="button" class="quiz-opt-btn" onclick="answerQuiz('${opt.tag}')" style="
          text-align: left;
          padding: 1rem 1.25rem;
          background: var(--cream-pure);
          border: 2px solid rgba(107, 74, 42, 0.18);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 1rem;
          color: var(--ink);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        ">
          <span style="width: 28px; height: 28px; border-radius: 50%; background: var(--mehendi-light); color: var(--green-900); font-weight: 700; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">${String.fromCharCode(65 + i)}</span>
          <span>${isMr ? opt.textMr : opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;
}

function answerQuiz(tag) {
  if (quizScores[tag] !== undefined) {
    quizScores[tag] += 1;
  }
  currentQuizStep++;
  renderQuizStep();
}

function showQuizResults(container, isMr) {
  // Sort scores
  const sorted = Object.entries(quizScores).sort((a, b) => b[1] - a[1]);
  const winnerTag = sorted[0][0];
  const runnerUpTag = sorted[1][0];

  const resultsMeta = {
    bokashi_kitchen: {
      name: "Bokashi Anaerobic Fermentation & Kitchen Composting",
      nameMr: "बोकाशी फर्मेंटेशन व किचन कंपोस्टिंग",
      desc: "Perfect for apartments, balconies, and urban home gardeners with limited space. Fast, odor-free, and rich in beneficial probiotics.",
      descMr: "मर्यादित जागा असलेल्या फ्लॅट्स आणि टेरेस बागेसाठी सर्वोत्तम. कोणतीही दुर्गंधी नाही आणि झाडांसाठी अत्यंत पोषक.",
      link: "composting.html#bokashi"
    },
    vermi_kitchen: {
      name: "Eisenia Fetida Vermicomposting",
      nameMr: "गांडूळ खत निर्मिती (व्हर्मीकंपोस्टिंग)",
      desc: "The gold standard for small backyards and permaculture plots. Produces black vermicompost plus concentrated Vermiwash tonic.",
      descMr: "परसबाग व छोट्या शेतीसाठी आदर्श. झाडांच्या वाढीसाठी काळे सोने मानले जाणारे गांडूळ खत व गांडूळ अर्क मिळतो.",
      link: "composting.html#vermicompost"
    },
    farm_indore: {
      name: "Indore Aerobic Heap Method with Legume Rotation",
      nameMr: "इंदोर एरोबिक ढीग पद्धत व कडधान्य फेरपालट",
      desc: "Ideal for 1-5 acre smallholder farms. Recycles mixed straw, crop stalks, and animal manure into crumbly humus within 90 days.",
      descMr: "१ ते ५ एकर शेतीसाठी अत्यंत उपयुक्त. पिकांचे अवशेष, काडीकचरा व शेण यांपासून ९० दिवसांत उत्कृष्ट सेंद्रिय खत तयार होते.",
      link: "composting.html#indore"
    },
    farm_nadep: {
      name: "NADEP Brick Tank Composting with Jeevamrut",
      nameMr: "नाडेप (NADEP) टाकी पद्धत व जीवामृत",
      desc: "Engineered for medium to large farms. Produces 2.5–3 tons of rich organic manure per cycle with one-time filling and zero turning.",
      descMr: "मध्यम व मोठ्या शेतीसाठी अत्यंत फायदेशीर. एकदाच भरून कोणतीही उलथापालथ न करता ३ टन सुपीक सेंद्रिय खत मिळते.",
      link: "composting.html#nadep"
    }
  };

  const winner = resultsMeta[winnerTag];
  const runnerUp = resultsMeta[runnerUpTag];

  container.innerHTML = `
    <div style="background: var(--green-100); border: 2px solid var(--green-600); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 1.5rem;">
      <span style="background: var(--green-600); color: #fff; padding: 0.25rem 0.85rem; border-radius: 99px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${isMr ? "तुमच्यासाठी सर्वोत्तम शिफारस" : "BEST MATCH FOR YOU"}</span>
      <h3 style="color: var(--green-900); margin: 0.75rem 0 0.5rem 0; font-size: 1.5rem;">${isMr ? winner.nameMr : winner.name}</h3>
      <p style="color: var(--ink-muted); margin-bottom: 1.25rem;">${isMr ? winner.descMr : winner.desc}</p>
      <a href="${winner.link}" class="btn btn-secondary" style="padding: 0.65rem 1.4rem; font-size: 0.95rem;">${isMr ? "मार्गदर्शक पहा ➔" : "View Step-by-Step Guide ➔"}</a>
    </div>

    <div style="background: var(--cream-pure); border: 1.5px solid rgba(107, 74, 42, 0.2); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
      <span style="color: var(--saffron); font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">${isMr ? "पर्यायी दुसरी पद्धत" : "RUNNER-UP ALTERNATIVE"}</span>
      <h4 style="color: var(--ink); margin: 0.35rem 0;">${isMr ? runnerUp.nameMr : runnerUp.name}</h4>
      <p style="font-size: 0.95rem; color: var(--ink-muted); margin-bottom: 0.75rem;">${isMr ? runnerUp.descMr : runnerUp.desc}</p>
      <a href="${runnerUp.link}" style="font-weight: 700; font-size: 0.9rem; color: var(--green-600);">${isMr ? "तपशील वाचा ➔" : "Learn more ➔"}</a>
    </div>

    <button type="button" class="btn btn-outline-dark" onclick="resetQuiz()" style="width: 100%; justify-content: center;">
      ${isMr ? "पुन्हा चाचणी द्या ↺" : "Retake Quiz ↺"}
    </button>
  `;
}

function resetQuiz() {
  currentQuizStep = 0;
  quizScores = { bokashi_kitchen: 0, vermi_kitchen: 0, farm_indore: 0, farm_nadep: 0 };
  renderQuizStep();
}

// ===================================================================
// 4. MYTH VS FACT 3D FLIP CARDS (PRD §7.4)
// ===================================================================
function initFlipCards() {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
}

// ===================================================================
// 5. LIVING SOIL CROSS SECTION (PRD §6.2)
// ===================================================================
const soilLayersInfo = {
  humus: {
    title: "Humus & Decomposed Biomass (0 – 2 inches)",
    titleMr: "ह्युमस व सेंद्रिय थर (० ते २ इंच)",
    desc: "The topmost organic cushion created by decayed leaves, compost, and earthworm castings. Contains high biological moisture, stores active carbon, and acts as a climate sponge against rainfall erosion.",
    descMr: "पाचोळा, कंपोस्ट आणि गांडूळ खतापासून तयार झालेला सर्वात वरचा सेंद्रिय थर. यात भरपूर ओलावा व सेंद्रिय कर्ब असतो, ज्यामुळे पावसाच्या पाण्याने मातीची धूप होत नाही.",
    biology: "Fungi mycelium, aerobic microbes, protozoa, and micro-arthropods.",
    biologyMr: "उपयुक्त बुरशी, सूक्ष्म जिवाणू, प्रोटोझोआ आणि मित्रकीटक.",
    role: "Absorbs 90% of rainwater impact and prevents hardpan soil compaction.",
    roleMr: "पावसाचा थेट आघात ९०% शोषून घेतो आणि जमिनीला टणक होण्यापासून वाचवतो."
  },
  topsoil: {
    title: "Living Topsoil & Rhizosphere (2 – 10 inches)",
    titleMr: "सजीव माती व मुळांचा परिसर (२ ते १० इंच)",
    desc: "The powerhouse zone where active crop roots forage. Chemical overuse destroys mycorrhizal networks here; organic methods restore pH to 6.5–7.5 and unlock bound phosphorus.",
    descMr: "पिकांच्या मुळांचा सक्रिय परिसर. रासायनिक खतांमुळे येथील जिवाणू नष्ट होतात; सेंद्रिय पद्धतीमुळे मातीचा सामू (pH) ६.५ ते ७.५ राहून जमिनीतील फॉस्फरस मुळांना सहज उपलब्ध होतो.",
    biology: "Earthworms (Eisenia/Pheretima), Nitrogen-fixing Azotobacter, Rhizobium.",
    biologyMr: "स्थानिक गांडूळे, नत्र स्थिर करणारे अझोटोबॅक्टर आणि रायझोबियम जिवाणू.",
    role: "Facilitates nutrient exchange directly with root hairs via soil biology.",
    roleMr: "पिकांच्या मुळांना अन्नद्रव्ये शोषून घेण्यासाठी थेट मदत करतो."
  },
  subsoil: {
    title: "Subsoil Mineral Layer (10 – 30 inches)",
    titleMr: "उपमृदा खनिज थर (१० ते ३० इंच)",
    desc: "Clay, silt, and deep mineral salts. Deep taproot crops (like pigeon pea/tur) channel into this layer to recycle buried micronutrients and recharge groundwater capillaries.",
    descMr: "चिकणमाती, गाळ आणि नैसर्गिक खनिजे असलेला मधला थर. तूर व कापूस यांसारख्या खोल मुळांच्या पिकांची मुळे येथून पाण्याचा साठा व सूक्ष्म अन्नद्रव्ये उचलतात.",
    biology: "Anaerobic and deep micro-aerophilic bacteria.",
    biologyMr: "खोल थरातील सूक्ष्म जिवाणू.",
    role: "Anchors root systems and buffers mineral moisture reservoirs during dry spells.",
    roleMr: "मुळांना आधार देतो आणि दुष्काळात पाण्याचा साठा राखून ठेवतो."
  },
  bedrock: {
    title: "Weathered Parent Bedrock (Below 30 inches)",
    titleMr: "मूळ खडक थर (३० इंचांखाली)",
    desc: "Ancient basalt, granite, or sedimentary foundation breaking down over centuries through organic microbial acids released by pioneer tree roots.",
    descMr: "जमिनीखालील मूळ बेसाल्ट वा काळा खडक. शतकानुशतके झाडांच्या मुळांमधून निघणाऱ्या नैसर्गिक आम्लांमुळे त्याचे बारीक मातीत रूपांतर होते.",
    biology: "Mineralizing lithotrophic microbes.",
    biologyMr: "खडक झिजवणारे सूक्ष्म जिवाणू.",
    role: "Original parent source of macro and micro soil elements.",
    roleMr: "मातीमधील सर्व मुख्य व सूक्ष्म अन्नद्रव्यांचा मूळ नैसर्गिक स्रोत."
  }
};

function selectSoilLayer(layerKey) {
  const info = soilLayersInfo[layerKey];
  if (!info) return;

  const isMr = document.body.classList.contains('lang-mr');

  // Update active slice styling
  document.querySelectorAll('.soil-layer-slice').forEach(s => {
    s.classList.toggle('active', s.getAttribute('data-layer') === layerKey);
  });

  const titleEl = document.getElementById('soil-detail-title');
  const descEl = document.getElementById('soil-detail-desc');
  const bioEl = document.getElementById('soil-detail-bio');
  const roleEl = document.getElementById('soil-detail-role');

  if (titleEl) titleEl.textContent = isMr ? info.titleMr : info.title;
  if (descEl) descEl.textContent = isMr ? (info.descMr || info.desc) : info.desc;
  if (bioEl) bioEl.textContent = isMr ? (info.biologyMr || info.biology) : info.biology;
  if (roleEl) roleEl.textContent = isMr ? (info.roleMr || info.role) : info.role;
}

// ===================================================================
// 6. TOAST NOTIFICATIONS & FEEDBACK FORM
// ===================================================================
function showToast(message, duration = 4000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="font-size: 1.4rem;">🌱</span>
    <div>
      <strong style="display: block; font-size: 0.95rem;">JaivikSetu Notification</strong>
      <span style="font-size: 0.85rem; opacity: 0.9;">${message}</span>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

function handleFeedbackSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('fb-name')?.value || 'Friend';
  const role = document.getElementById('fb-role')?.value || 'Visitor';
  const message = document.getElementById('fb-message')?.value || '';

  const isMr = document.body.classList.contains('lang-mr');
  const successMsg = isMr 
    ? `धन्यवाद ${name}! आपला अभिप्राय यशस्वीरीत्या नोंदवला गेला आहे.`
    : `Thank you ${name}! Your valuable feedback has been submitted successfully.`;

  showToast(successMsg);

  // Reset form
  e.target.reset();
}

// ===================================================================
// 7. DOWNLOAD GUIDE MODAL CONTROLLER
// ===================================================================
function openDownloadModal(guideType = 'compost') {
  const modal = document.getElementById('download-modal');
  if (!modal) return;

  const isMr = document.body.classList.contains('lang-mr');
  const titleEl = document.getElementById('modal-guide-title');
  const contentEl = document.getElementById('modal-guide-content');

  const guides = {
    compost: {
      title: isMr ? "जैविकसेतू एक-पानी कंपोस्ट खत माहिती पत्रक" : "JaivikSetu One-Page Compost Cheat-Sheet",
      body: isMr ? `
        <div style="line-height: 1.6; font-size: 0.95rem;">
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">आवश्यक कंपोस्ट प्रमाण (C:N गुणोत्तर):</h4>
          <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
            <li><strong>सेंद्रिय कर्ब (सुका पालापाचोळा):</strong> २ भाग वाळलेली पाने, नारळाच्या शेंड्या, काडीकचरा वा भुसा.</li>
            <li><strong>नायट्रोजन (ओला कचरा):</strong> १ भाग ओला स्वयंपाकघरातील कचरा, हिरवे तण, शेण वा चहा पावडर.</li>
            <li><strong>ओलावा तपासणी:</strong> मूठ घट्ट दाबल्यावर पाण्याचा थेंब टपकायला नको पण ओलसर वाटले पाहिजे (५०-६०% ओलावा).</li>
            <li><strong>जिवाणू विरजण:</strong> ५०० मिली ताजे आंबट ताक किंवा शेणपाणी शिंपडा.</li>
          </ul>
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">अडचणींवर सोपे उपाय:</h4>
          <ul style="padding-left: 1.25rem;">
            <li><strong>अमोनियासारखी दुर्गंधी:</strong> ओला कचरा जास्त झाला आहे—सुका पालापाचोळा मिसळा आणि ढीग हलवून मोकळा करा.</li>
            <li><strong>ढीग थंड पडणे किंवा कुजणे मंदावणे:</strong> ओलावा कमी किंवा हवा नाही—हळुवार पाणी शिंपडा आणि आठवड्यातून एकदा उलथापालथ करा.</li>
            <li><strong>माशा किंवा किडे:</strong> ओला कचरा नेहमी २ इंच माती किंवा सुक्या पानांच्या थराने झाकून ठेवा.</li>
          </ul>
        </div>
      ` : `
        <div style="line-height: 1.6; font-size: 0.95rem;">
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">Essential Composting Ratios:</h4>
          <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
            <li><strong>Carbon (Browns):</strong> 2 parts dry leaves, coconut husk, crop stalks, shredded paper.</li>
            <li><strong>Nitrogen (Greens):</strong> 1 part fresh kitchen vegetable peels, cow dung, tea waste.</li>
            <li><strong>Moisture Check:</strong> Squeeze a handful—it should feel like a damp sponge with zero dripping.</li>
            <li><strong>Starter Inoculant:</strong> 500ml fresh sour buttermilk or cow dung slurry.</li>
          </ul>
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">Troubleshooting Quick Guide:</h4>
          <ul style="padding-left: 1.25rem;">
            <li><strong>Smells like ammonia:</strong> Too much nitrogen—add dry brown leaves and turn heap.</li>
            <li><strong>Cold / slow decay:</strong> Too dry or needs air—sprinkle moisture and turn weekly.</li>
            <li><strong>Pests / fruit flies:</strong> Always cover fresh wet food scraps with 2 inches of soil or dry leaves.</li>
          </ul>
        </div>
      `
    },
    pesticide: {
      title: isMr ? "जैविकसेतू नैसर्गिक कीटकनाशक पॉकेट कार्ड" : "JaivikSetu Natural Pesticides Pocket Card",
      body: isMr ? `
        <div style="line-height: 1.6; font-size: 0.95rem;">
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">१. निंबोळी अर्क (NSKE ५%):</h4>
          <p>५० ग्रॅम निंबोळी पावडर १ लिटर पाण्यात रात्रभर भिजवा. कापडाने गाळून १ मिली खादी साबणाचे पाणी मिसळा. अळी, मावा आणि पांढऱ्या माशीवर रामबाण उपाय.</p>
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">२. दशपर्णी अर्क (१० कडू पानांचा काढा):</h4>
          <p>कडुनिंब, करंज, सीताफळ, एरंड, धोत्रा, पपई, झेंडू, पेरू, निर्गुडी आणि घाणेरी या १० पानांचा काढा शेण व गोमूत्रात ३० दिवस आंबवून तयार करा. १० लिटर पाण्यात २००-२५० मिली मिसळून फवारा.</p>
          <p style="background: var(--terracotta-light); color: var(--terracotta-dark); padding: 0.75rem; border-radius: 8px; font-weight: 600; margin-top: 1rem;">
            ⚠️ महत्त्वाचा नियम: उपयुक्त मधमाश्या आणि मित्रकीटकांचे रक्षण करण्यासाठी नेहमी संध्याकाळी ४:३० नंतरच फवारणी करा!
          </p>
        </div>
      ` : `
        <div style="line-height: 1.6; font-size: 0.95rem;">
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">1. Neem Seed Kernel Extract (NSKE 5%):</h4>
          <p>Crush 50g neem seed kernels into fine powder. Soak in 1L water overnight. Filter through muslin cloth and add 1ml soap. Repels caterpillars, aphids, and whiteflies.</p>
          <h4 style="color: var(--green-900); margin-bottom: 0.5rem;">2. Dashaparni Ark (10-Leaf Wonder):</h4>
          <p>Ferment leaves of Neem, Karanj, Custard Apple, Castor, Datura, Papaya, Marigold, Guava, Nirgundi, and Lantana with cow dung and cow urine for 30 days. Dilute 200ml per 10L water.</p>
          <p style="background: var(--terracotta-light); color: var(--terracotta-dark); padding: 0.75rem; border-radius: 8px; font-weight: 600; margin-top: 1rem;">
            ⚠️ Golden Rule: Always spray in late evening (after 4:30 PM) to protect honeybees and pollinators!
          </p>
        </div>
      `
    },
    schemes: {
      title: isMr ? "जैविकसेतू शासकीय योजना व प्रमाणीकरण सारांश" : "JaivikSetu Government Schemes & Certification Summary",
      body: isMr ? `
        <div style="line-height: 1.6; font-size: 0.95rem;">
          <h4 style="color: var(--blue-dark); margin-bottom: 0.5rem;">१. परंपरागत कृषी विकास योजना (PKVY):</h4>
          <p>सेंद्रिय शेतकरी गटांना खते तयार करणे, पॅकिंग व मूल्यवर्धनासाठी ३ वर्षांसाठी प्रति हेक्टरी ₹५०,००० चे अनुदान दिले जाते.</p>
          <h4 style="color: var(--blue-dark); margin-bottom: 0.5rem;">२. सहभागी हमी प्रणाली (PGS-India):</h4>
          <p>लहान आणि सीमांत शेतकरी समूहांसाठी शून्य शुल्काची मोफत तपासणी प्रणाली. देशांतर्गत विक्रीसाठी अधिकृत हिरवे PGS मानचिन्ह मिळते.</p>
          <h4 style="color: var(--blue-dark); margin-bottom: 0.5rem;">३. जैविक भारत राष्ट्रीय मानचिन्ह:</h4>
          <p>FSSAI द्वारे प्रमाणित अधिकृत सेंद्रिय अन्न उत्पादनांवर ग्राहकांच्या विश्वासासाठी दिलेला लोगो.</p>
        </div>
      ` : `
        <div style="line-height: 1.6; font-size: 0.95rem;">
          <h4 style="color: var(--blue-dark); margin-bottom: 0.5rem;">1. PKVY (Paramparagat Krishi Vikas Yojana):</h4>
          <p>Financial assistance of ₹50,000 per hectare for 3 years for cluster organic farming, input generation, and value addition.</p>
          <h4 style="color: var(--blue-dark); margin-bottom: 0.5rem;">2. PGS-India (Participatory Guarantee System):</h4>
          <p>Zero-fee peer-certification for smallholder farmer groups. Access domestic Indian organic markets with the Green PGS logo.</p>
          <h4 style="color: var(--blue-dark); margin-bottom: 0.5rem;">3. Jaivik Bharat Trust Logo:</h4>
          <p>Unified certification mark by FSSAI for authentic organic food products across India.</p>
        </div>
      `
    }
  };

  const selected = guides[guideType] || guides.compost;
  if (titleEl) titleEl.textContent = selected.title;
  if (contentEl) contentEl.innerHTML = selected.body;

  modal.classList.add('is-open');
}

function closeDownloadModal() {
  const modal = document.getElementById('download-modal');
  if (modal) modal.classList.remove('is-open');
}

// Initialise everything on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  calculateCompost();
  selectPest('aphids');
  renderQuizStep();
  initFlipCards();
  selectSoilLayer('humus');

  // Form submit listeners
  const fbForm = document.getElementById('feedback-form');
  if (fbForm) fbForm.addEventListener('submit', handleFeedbackSubmit);

  const calcForm = document.getElementById('compost-calc-form');
  if (calcForm) calcForm.addEventListener('change', calculateCompost);
});
