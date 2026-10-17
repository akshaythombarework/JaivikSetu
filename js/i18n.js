/* ===================================================================
   JAIVIKSETU COMPREHENSIVE BILINGUAL ENGINE (EN / मराठी)
   Full platform localization across all pages:
   - index.html (Home)
   - learn.html (Fundamental Knowledge & Living Soil)
   - composting.html (6 Master Composting Guides)
   - pesticides.html (Botanical Pesticides & Formulations)
   - field-practices.html (Sustainable Agroecological Practices)
   - schemes.html (Government Schemes & Certifications)
   - tools.html (Interactive Decision Aids)
   - campaign.html (Ground Action & Volunteer Drive)
   - about.html (Vision, Personas & Authoritative References)
   =================================================================== */

const translations = {
  en: {
    // Brand & Top Navigation
    brand_sub: "Organic Farming Awareness Hub",
    tagline: "Bridging India to organic farming",
    nav_home: "Home",
    nav_learn: "Learn",
    nav_compost: "Composting",
    nav_pesticides: "Pesticides",
    nav_field: "Field Practices",
    nav_schemes: "Schemes",
    nav_tools: "Tools",
    nav_campaign: "Campaign",
    nav_about: "About",
    lang_btn: "मराठी",

    // Common Buttons & Tags
    btn_learn_more: "Learn More ➔",
    btn_read_more: "Read Full Guide ➔",
    btn_view_details: "View Details ➔",
    btn_print_pdf: "🖨️ Print / Save as PDF",
    btn_done: "Done",
    btn_submit: "Submit",
    btn_back: "Back",
    btn_explore: "Explore ➔",

    // Hero Section (Home)
    hero_eyebrow: "JaivikSetu · Organic Farming Awareness Hub",
    hero_h1_prefix: "Grow Healthy. Grow ",
    hero_h1_accent: "Organic.",
    hero_sub: "Bridging India's awareness and adoption gap in organic farming, with simple guides, tools and schemes.",
    hero_cta_learn: "Start Learning",
    hero_cta_calc: "Try Compost Calculator",
    hero_scroll: "SCROLL TO EXPLORE",

    // Stats Ribbon
    stat_1_num: "#1",
    stat_1_lbl: "Most organic producers in the world (India)",
    stat_2_num: "2016",
    stat_2_lbl: "Sikkim became world's 1st 100% organic state",
    stat_3_num: "6+",
    stat_3_lbl: "Proven composting methods with step guides",
    stat_4_num: "10+",
    stat_4_lbl: "Natural pesticide recipes & biological traps",

    // Problem Section (Home)
    problem_eyebrow: "The Chemical Dilemma",
    problem_title: "Breaking the Vicious Chemical Cycle",
    problem_desc: "Chemical inputs give temporary yield boosts but degrade long-term soil microbiome. Over time, more chemicals are required for less output.",
    cycle_node_1: "1. Synthetic Chemical Overdose",
    cycle_node_2: "2. Soil Carbon & Microbes Die",
    cycle_node_3: "3. Natural Immunity & Yield Falls",
    cycle_node_4: "4. Heavier Toxic Dose Demanded",
    cycle_center: "DEGRADATION LOOP",
    cause_1_title: "Low Practical Training",
    cause_1_desc: "Farmers want to shift but lack step-by-step training on natural preparation.",
    cause_2_title: "Fear of Yield Drop (Transition Years)",
    cause_2_desc: "2–3 transition years require patience as soil biological activity regenerates.",
    cause_3_title: "Certification & Market Confusion",
    cause_3_desc: "Misunderstanding differences between 'natural' and 'certified organic' crops.",

    // Principles (Home)
    principles_eyebrow: "Core Philosophy",
    principles_title: "The 4 Principles of Organic Farming (IFOAM)",
    principles_sub: "Organic agriculture is a holistic production system sustaining the health of soils, ecosystems, and people through natural biological cycles.",
    principle_health_title: "Health",
    principle_health_desc: "Sustaining and enhancing the health of soil, plant, animal, human, and planet as one indivisible whole.",
    principle_ecology_title: "Ecology",
    principle_ecology_desc: "Based on living ecological systems and cycles, working with them, emulating them, and helping sustain them.",
    principle_fairness_title: "Fairness",
    principle_fairness_desc: "Building relationships that ensure fairness regarding the common environment and life opportunities.",
    principle_care_title: "Care",
    principle_care_desc: "Managed in a precautionary and responsible manner to protect the health of current and future generations.",

    // Tree Component (Home)
    tree_eyebrow: "Interactive Knowledge Map",
    tree_title: "The Organic Farming Tree",
    tree_desc: "Click any branch below to explore the core pillars of sustainable organic agriculture.",
    tree_b1_title: "1. Soil Building",
    tree_b1_desc: "Composting, green manures, biochar, vermicompost, and microbial Jeevamrut boosters.",
    tree_b2_title: "2. Crop Protection",
    tree_b2_desc: "Neem decoctions, Dashaparni Ark, trap crops, sticky traps, and beneficial bio-agents.",
    tree_b3_title: "3. Field Practices",
    tree_b3_desc: "Legume crop rotation, intercropping, organic mulching, and micro-drip water efficiency.",
    tree_b4_title: "4. Certification & Market",
    tree_b4_desc: "Participatory Guarantee System (PGS-India), NPOP standards, and Jaivik Bharat trust mark.",

    // Quick Tools Strip (Home)
    tools_eyebrow: "Interactive Decision Aids",
    tools_title: "Smart Organic Farming Tools",
    tools_sub: "Instant digital calculators and diagnostic tools designed for farmers and gardeners.",
    tool_calc_title: "Compost Calculator",
    tool_calc_desc: "Calculate waste ratio, preparation method, and days to harvest based on your space.",
    tool_calc_btn: "Launch Calculator ➔",
    tool_pest_title: "Natural Pest Finder",
    tool_pest_desc: "Identify insect attacks and get matching organic botanical concoctions and biological traps.",
    tool_pest_btn: "Find Remedies ➔",
    tool_quiz_title: "Which Method Suits Me?",
    tool_quiz_desc: "Answer 5 quick questions on space, waste, and time to discover your ideal strategy.",
    tool_quiz_btn: "Start 5-Q Quiz ➔",
    tool_myth_title: "Myth vs Fact Cards",
    tool_myth_desc: "Flip through common misconceptions about organic farming yield, cost, and soil preparation.",
    tool_myth_btn: "Explore 8 Flip Cards ➔",

    // Benefits vs Challenges (Home)
    scale_eyebrow: "Objective Reality",
    scale_title: "Benefits vs. Challenges: The Honest Balance",
    scale_desc: "We present organic farming with scientific integrity—acknowledging practical difficulties while showing the immense long-term ecological gain.",
    scale_ben_heading: "Long-Term Benefits",
    scale_ben_1: "<strong>Zero Toxic Chemical Residues:</strong> Safer nutrient-dense food for families and farm workers.",
    scale_ben_2: "<strong>Soil Carbon & Water Retention:</strong> Soil holds up to 20% more moisture, reducing drought vulnerability.",
    scale_ben_3: "<strong>Low Input Expenditure:</strong> Up to 70% cost savings by producing on-farm organic inputs.",
    scale_ben_4: "<strong>Market Price Premium:</strong> Certified crops command 20–40% premium in domestic & export markets.",
    scale_chal_heading: "Transition Challenges",
    scale_chal_1: "<strong>Yield Dip in Years 1–3:</strong> Temporary output drop while soil microbiome and organic matter rebuild.",
    scale_chal_2: "<strong>Higher Manual Labour:</strong> Weeding, compost layering, and botanical boiling require active farm work.",
    scale_chal_3: "<strong>Certification Paperwork:</strong> Peer group documentation and soil testing inspections demand record-keeping.",
    scale_chal_4: "<strong>Market Linkage Gaps:</strong> Direct farm-to-consumer supply chains require collective FPO clusters.",

    // Government Schemes Strip (Home)
    schemes_strip_eyebrow: "Government Backing",
    schemes_strip_title: "National Missions & Certification Standards",
    schemes_strip_desc: "Key financial subsidies, cluster farming schemes, and certification portals supported by the Government of India.",
    scheme_pkvy_badge: "FINANCIAL ASSISTANCE",
    scheme_pkvy_desc: "Paramparagat Krishi Vikas Yojana provides ₹50,000/ha for 3 years to cluster farmers adopting organic inputs and packaging.",
    scheme_nmnf_badge: "NATURAL FARMING",
    scheme_nmnf_desc: "National Mission on Natural Farming promotes chemical-free cow-based natural inputs and bio-input resource centers.",
    scheme_pgs_badge: "FREE CERTIFICATION",
    scheme_pgs_desc: "Participatory Guarantee System enables smallholder farmer peer-review certification with zero third-party audit fees.",
    scheme_jb_badge: "NATIONAL LOGO",
    scheme_jb_desc: "The official FSSAI unified logo certifying authentic organic food across Indian retail shelves and export borders.",
    scheme_view_btn: "View Details ➔",

    // Campaign Roadmap Strip (Home)
    campaign_strip_eyebrow: "Our Ground Action",
    campaign_strip_title: "JaivikSetu Awareness Campaign Roadmap",
    campaign_strip_desc: "Taking organic agricultural knowledge directly to Indian villages, schools, and farmer clusters.",
    camp_phase_1: "Village Live Workshops",
    camp_phase_1_desc: "Hands-on community composting demos and live preparation of Dashaparni Ark with local farmer groups.",
    camp_phase_2: "Regional Pamphlets",
    camp_phase_2_desc: "Distribution of simple illustrated Marathi and Hindi guides across weekly village agricultural haats.",
    camp_phase_3: "School & College Drives",
    camp_phase_3_desc: "Inspiring youth and agriculture students with kitchen composting and balcony permaculture gardens.",
    camp_phase_4: "FPO & QR Recipe Links",
    camp_phase_4_desc: "Connecting organic producer groups with QR-coded harvest packets verifying organic methods.",
    camp_cta_btn: "Join the Campaign & Download Materials ➔",

    // Footer
    footer_tagline: "Bridging Indian farmers, students, and home gardeners to sustainable organic agriculture.",
    footer_nav_title: "Quick Navigation",
    footer_guides_title: "Practical Guides",
    footer_downloads_title: "Printable PDFs",
    footer_disclaimer_title: "Educational Disclaimer",
    footer_disclaimer: "JaivikSetu is a dedicated educational and awareness portal. Farmers are advised to consult local Krishi Vigyan Kendras (KVK) or State Agriculture Officers for location-specific dosage and scheme filings.",
    footer_rights: "© 2026 JaivikSetu. All rights reserved. Open-access awareness initiative for Indian Agriculture.",
    footer_made_with: "Made with 💚 for Indian Farmers",

    // Common PDF links
    pdf_compost: "📄 Compost Cheat-Sheet",
    pdf_pesticide: "📄 Pesticide Recipes Card",
    pdf_schemes: "📄 Scheme Application Guide",

    // ===================================================================
    // LEARN PAGE STRINGS
    // ===================================================================
    learn_eyebrow: "Fundamental Knowledge",
    learn_title: "What is Organic Farming?",
    learn_sub: "A production system that sustains the health of soils, ecosystems, and people. It relies on ecological processes, biodiversity, and cycles adapted to local conditions, rather than synthetic inputs with adverse effects.",
    learn_facts_eyebrow: "National Context",
    learn_facts_title: "6 Verified Facts on Organic Farming in India",
    learn_facts_sub: "Key data verified through APEDA, National Programme for Organic Production (NPOP), and Ministry of Agriculture.",
    fact_1_title: "1. World's #1 in Organic Farmers",
    fact_1_desc: "India is home to the largest number of certified organic producers globally, with over 4.4 million farmers registered under PGS-India and NPOP certification systems.",
    fact_2_title: "2. Sikkim: World's 1st 100% Organic State",
    fact_2_desc: "In 2016, Sikkim became the first state in the world to successfully convert 100% of its farmland (over 76,000 hectares) to certified chemical-free organic farming, winning the UN Future Policy Gold Award.",
    fact_3_title: "3. Dual Certification Architecture",
    fact_3_desc: "India established NPOP (2001) under the Ministry of Commerce for international export equivalence, and PGS-India (2011) under the Ministry of Agriculture for affordable peer certification for local farmers.",
    fact_4_title: "4. Leading Organic States",
    fact_4_desc: "Madhya Pradesh, Maharashtra, Rajasthan, and Gujarat represent over 60% of India's total certified organic cultivable area, led by soybean, cotton, pulses, and wheat production.",
    fact_5_title: "5. Major Global Export Commodities",
    fact_5_desc: "India exports organic certified products to the USA, EU, Canada, and Great Britain. Leading exports include organic oilseeds (sesame and soybean meal), tea, medicinal herbs, spices, and basmati rice.",
    fact_6_title: "6. Immense Expansion Frontier",
    fact_6_desc: "While India leads in farmer count, organic farming covers approximately 3–4% of India's net sown area, presenting a massive growth horizon under the National Mission on Natural Farming.",
    
    // Comparison Table
    compare_eyebrow: "Scientific Comparison",
    compare_title: "Organic vs. Chemical Agriculture",
    compare_sub: "Evaluating agricultural methodology across ecological health, farmer safety, input economics, and soil resilience.",
    th_param: "Assessment Parameter",
    th_organic: "🌱 Certified Organic Agriculture",
    th_chemical: "⚠️ Conventional Chemical Farming",
    comp_row_1_p: "Soil Microbiome",
    comp_row_1_org: "Rich in mycorrhizal fungi, earthworms, and billions of beneficial aerobic bacteria per gram.",
    comp_row_1_chem: "Severely depleted; high salt indexes destroy earthworms and beneficial bacteria colonies.",
    comp_row_2_p: "Food Safety & Residues",
    comp_row_2_org: "Zero synthetic neurotoxins, organophosphates, or synthetic hormone residues.",
    comp_row_2_chem: "Frequent detection of pesticide residues exceeding Maximum Residue Limits (MRL).",
    comp_row_3_p: "Water Infiltration & Resilience",
    comp_row_3_org: "High organic carbon sponge absorbs 20% more rainwater, drastically reducing irrigation needs.",
    comp_row_3_chem: "Compacted hardpan soil leads to high surface run-off, topsoil erosion, and drought vulnerability.",
    comp_row_4_p: "Input Costs & Debt Risk",
    comp_row_4_org: "60–70% lower recurring costs by formulating farm-made compost, Jeevamrut, and botanical extracts.",
    comp_row_4_chem: "High recurring financial burden purchasing synthetic NPK bags, hybrid seeds, and branded sprays.",
    comp_row_5_p: "Long-term Yield Trend",
    comp_row_5_org: "Initial 2–3 year stabilization dip, followed by stable, drought-resilient yields and price premiums.",
    comp_row_5_chem: "Initial fast burst followed by diminishing returns requiring escalating chemical dosages.",

    // Living Soil Section
    soil_eyebrow: "Interactive Soil Biology",
    soil_title: "The Living Soil Cross-Section",
    soil_sub: "Click any soil horizon layer below to examine its microbial ecology, carbon content, and biological role in plant nutrition.",
    soil_layer_o: "🍂 Layer O: Humus & Organic Biomass (0 – 2\")",
    soil_layer_a: "🌱 Layer A: Living Topsoil & Rhizosphere (2 – 10\")",
    soil_layer_b: "🧱 Layer B: Subsoil Minerals (10 – 30\")",
    soil_layer_c: "🪨 Layer C: Parent Bedrock (Below 30\")",
    soil_horizon_badge: "ACTIVE SOIL HORIZON",
    soil_bio_lbl: "Microbial Life & Inhabitants:",
    soil_role_lbl: "Ecological Role:",
    soil_protect_btn: "How to Protect this Layer ➔",

    // Degradation & Testing
    deg_eyebrow: "Warning Signs",
    deg_title: "Chemical Degradation: Acidity, Salinity & Hardpan",
    deg_sub: "Decades of continuous urea, DAP, and chemical pesticide applications trigger catastrophic physiological changes in farm soils:",
    deg_1_title: "Soil Acidification & Burn:",
    deg_1_desc: "Excess synthetic ammonium fertilizers release hydrogen ions, dropping soil pH below 5.5 and locking vital phosphorus away from crops.",
    deg_2_title: "Salinity Crusts:",
    deg_2_desc: "Unabsorbed chemical salts crystallize on the surface, drawing moisture out of plant roots via reverse osmosis.",
    deg_3_title: "Impermeable Hardpan:",
    deg_3_desc: "Without organic matter and earthworms, subsoil aggregates fuse into a dense concrete-like layer that blocks deep root penetration.",
    test_title: "Simple Farm Soil Testing Tips",
    test_sub: "Before starting organic transition, evaluate your field's baseline biological indicators:",
    test_1_title: "1. pH Indicator Test:",
    test_1_desc: "Ideal organic soil ranges from 6.5 to 7.5. Acidic soils benefit from wood ash and lime; saline soils require green manuring with Dhaincha.",
    test_2_title: "2. Soil Organic Carbon (SOC):",
    test_2_desc: "Healthy organic soil should have > 0.8% organic carbon. Most chemically exhausted Indian soils test at only 0.2–0.4%.",
    test_3_title: "3. Earthworm Census:",
    test_3_desc: "Dig a 1 cubic foot hole. Counting 5–10 active earthworms confirms a vibrant, recovering living soil.",
    test_cta: "Start Rebuilding Soil with Compost ➔",

    // ===================================================================
    // COMPOSTING PAGE STRINGS
    // ===================================================================
    compost_eyebrow: "Soil Building Systems",
    compost_title: "Organic Composting Master Guides",
    compost_sub: "Transform crop residues, farm dung, and kitchen biomass into rich black gold humus. Step-by-step instructions with preparation timelines, aeration rules, and troubleshooting fixes.",
    compost_cta_calc: "Try the Compost Calculator ➔",
    tab_indore: "1. Heap/Pit (Indore)",
    tab_nadep: "2. NADEP Brick Tank",
    tab_vermi: "3. Vermicompost",
    tab_kitchen: "4. Kitchen & Balcony",
    tab_bokashi: "5. Bokashi & Green Manure",
    badge_farm_scale: "FARM & LARGE GARDEN SCALE",
    badge_nadep_scale: "COMMUNITY & HIGH VOLUME FARM SCALE",
    badge_vermi_scale: "NUTRIENT-DENSE VERMICAST & VERMIWASH",
    badge_kitchen_scale: "APARTMENTS & URBAN GARDENS",
    badge_time_harvest: "TIME TO HARVEST",
    method_steps_title: "The 4 Essential Steps:",

    // Indore
    method_1_title: "1. Indore Aerobic Heap / Pit Method",
    method_1_sub: "Developed by Sir Albert Howard and Yashwant D. Wad at the Institute of Plant Industry, Indore.",
    method_1_time: "90 – 120 Days",
    indore_s1_title: "Site & Foundation",
    indore_s1_desc: "Mark an 8×4 ft shaded, elevated ground or excavate a 3-ft deep pit sheltered from torrential monsoon downpours.",
    indore_s2_title: "Layered Filling",
    indore_s2_desc: "Layer 6 inches dry stalks/leaves (browns), 3 inches fresh green waste, and 2 inches cattle dung slurry with fine garden soil.",
    indore_s3_title: "Moisture & Aeration",
    indore_s3_desc: "Keep pile damp (50–60% moisture like a wrung-out sponge). Insert vertical bamboo poles with drilled holes for core airflow.",
    indore_s4_title: "Systematic Turning",
    indore_s4_desc: "Turn the pile thoroughly at Day 15, Day 30, and Day 60 to ensure uniform thermophilic breakdown. Harvest rich crumbly humus.",
    indore_dos_title: "✅ Best Practices (Do's)",
    indore_dos_1: "Chop thick crop stalks (cotton/maize) into 2-inch pieces before loading.",
    indore_dos_2: "Keep the heap dome-shaped to shed excessive seasonal rain.",
    indore_dos_3: "Add old ripe compost or forest soil as a microbial inoculum.",
    indore_donts_title: "❌ Avoid (Don'ts)",
    indore_donts_1: "Do not add plastic, pesticide-sprayed foliage, or sick diseased plants.",
    indore_donts_2: "Never allow the heap to dry out completely or become waterlogged.",

    // NADEP
    method_2_title: "2. NADEP Brick Tank Composting",
    method_2_sub: "Pioneered by Gandhian agriculturist Narayan Deorao Pandharipande (Kaka) in Maharashtra.",
    method_2_time: "110 – 120 Days",
    nadep_s1_title: "Tank Construction",
    nadep_s1_desc: "Build a 10×5×3 ft brick tank leaving 7-inch honeycomb rectangular air ventilation slots across every alternate course.",
    nadep_s2_title: "Four-Layer Sandwich",
    nadep_s2_desc: "Layer 1: 6 inches dry biomass (100kg). Layer 2: Cow dung slurry (4kg in 125L water). Layer 3: Fine farm soil (60kg). Repeat until filled.",
    nadep_s3_title: "Mud Plaster Seal",
    nadep_s3_desc: "Seal the top with a 3-inch dome of cow dung and clay plaster to retain heat and prevent pest infestation.",
    nadep_s4_title: "Curing & Harvest",
    nadep_s4_desc: "Allow internal microbial combustion for 110–120 days. Produces over 2.5 tonnes of nutrient-rich friable black humus.",
    nadep_dos_title: "✅ NADEP Advantages",
    nadep_dos_1: "Requires very little cow dung (only 1 part dung to 8 parts biomass and soil).",
    nadep_dos_2: "Zero turning required throughout the 120-day curing cycle.",
    nadep_donts_title: "❌ Important Caution",
    nadep_donts_1: "Ensure side honeycomb holes are never blocked with mud or plaster.",

    // Vermicompost
    method_3_title: "3. Eisenia Fetida Vermicomposting",
    method_3_sub: "Harnessing epigeic earthworms to convert pre-decomposed farm waste into granular organic gold.",
    method_3_time: "40 – 45 Days",
    vermi_s1_title: "Bed Preparation",
    vermi_s1_desc: "Construct a 10×3×2 ft shaded masonry or HDPE plastic bed. Lay coconut husk and dry straw base for drainage.",
    vermi_s2_title: "Pre-Decomposition",
    vermi_s2_desc: "Pre-ferment cow dung and crop biomass for 15 days until internal heat dissipates before adding earthworms.",
    vermi_s3_title: "Worm Inoculation",
    vermi_s3_desc: "Introduce 1,000–1,500 Eisenia fetida (Red Wigglers) per meter of bed. Maintain 60–70% moisture and shaded cover.",
    vermi_s4_title: "Castings & Vermiwash",
    vermi_s4_desc: "Collect granular tea-ground castings every 40 days. Harvest Vermiwash from drainage outlet for foliar spray.",
    vermi_dos_title: "✅ Worm Care Tips",
    vermi_dos_1: "Sprinkle water gently every morning using a watering can or micro-sprinkler.",
    vermi_dos_2: "Cover beds with jute gunny bags to maintain pitch-black feeding environment.",
    vermi_donts_title: "❌ Fatal to Earthworms",
    vermi_donts_1: "Never add citrus rinds (lemons/oranges), chili, garlic, onions, or fresh uncooled dung.",
    vermi_donts_2: "Protect beds from ants, frogs, rodents, and direct afternoon sunlight.",

    // Kitchen & Balcony
    method_4_title: "4. Aerobic Kitchen Pot & Balcony Composting",
    method_4_sub: "Zero-odor indoor and terrace system tailored for apartments and urban families.",
    method_4_time: "45 – 60 Days",
    kitchen_s1_title: "3-Tier Terracotta Pots",
    kitchen_s1_desc: "Use three stacked porous clay pots (Khamba) with drainage holes allowing air exchange and moisture balance.",
    kitchen_s2_title: "Chop & Layer",
    kitchen_s2_desc: "Chop vegetable peels into 1-inch bits. For every 1 cup of wet scraps, add 2 cups of dry coco-peat or crushed leaves.",
    kitchen_s3_title: "Microbial Kickstart",
    kitchen_s3_desc: "Add a spoonful of sour curd water, buttermilk, or old compost once a week to seed beneficial lactic acid bacteria.",
    kitchen_s4_title: "Harvest for Pots",
    kitchen_s4_desc: "When top pot fills, rotate to bottom. After 45–60 days, dark, fragrant compost is ready for potted plants.",

    // Bokashi & Biochar
    method_5_title: "5. Bokashi Anaerobic Fermentation",
    method_5_sub: "Japanese EM (Effective Microorganisms) fermentation method for compact spaces.",
    method_5_time: "14 – 18 Days",
    bokashi_s1_title: "Airtight Bucket & Bran",
    bokashi_s1_desc: "Layer food waste with Bokashi EM bran in an airtight bucket with a bottom tap.",
    bokashi_s2_title: "Tap Liquid Gold",
    bokashi_s2_desc: "Drain microbial liquid tea every 3 days; dilute 1:100 with water for foliar plant nutrition.",
    bokashi_s3_title: "Bury & Break Down",
    bokashi_s3_desc: "Once bucket is full, let ferment 14 days, then bury in garden soil or potting mix to rapidly convert to humus.",
    bokashi_s4_title: "All Food Scraps",
    bokashi_s4_desc: "Can safely process small dairy, cooked grains, and bread scraps that traditional compost bins reject.",
    bokashi_eyebrow: "Modern & Biological Solutions",
    bokashi_section_title: "Bokashi, Green Manure & Biochar",
    bokashi_section_sub: "Accelerated anaerobic fermentation, legume cover cropping, and permanent soil carbon anchors.",
    bokashi_card_desc: "Japanese anaerobic pickling method. Food waste (including cooked food) is layered with Effective Microorganisms (EM) bran in an airtight bucket. Produces potent liquid foliar tea in days and pickles waste for rapid soil burial.",
    bokashi_card_adv: "Key Advantage: Can ferment all cooked foods without attracting flies.",
    green_manure_title: "Green Manuring (~45 Days)",
    green_manure_desc: "Fast-growing legumes like Dhaincha (Sesbania) or Sunhemp sown at onset of monsoons and ploughed back into soil at flowering stage (40–45 days). Fixes up to 80–100 kg atmospheric nitrogen per hectare naturally.",
    green_manure_adv: "Key Advantage: Drastically reduces reliance on purchased nitrogen inputs.",
    biochar_title: "Biochar Carbon Anchor",
    biochar_desc: "Porous carbon created via low-oxygen pyrolysis of agricultural crop stalks. When inoculated with Jeevamrut or compost tea, biochar provides permanent microscopic microbial condominiums that stay in soil for centuries.",
    biochar_adv: "Key Advantage: Boosts soil water retention and prevents nutrient leaching.",

    method_6_title: "6. Biochar & Green Manuring",
    method_6_sub: "Permanent soil carbon sequestering and biological nitrogen fixing cover crops.",
    method_6_time: "45 – 50 Days (Crops)",
    biochar_s1_title: "Biochar Inoculation",
    biochar_s1_desc: "Pyrolyze dry crop residues in low-oxygen kilns. Activate charcoal porous pores in cow urine/compost tea before applying.",
    biochar_s2_title: "Green Manuring",
    biochar_s2_desc: "Sow Sunhemp (ताग) or Dhaincha (धैंचा). Invert into soil with rotavator at 45 days during flowering to fix 80kg N/ha.",

    // Charts & Tables
    chart_eyebrow: "Speed Comparison",
    chart_title: "Compost Maturation Timeline by Method",
    chart_sub: "Comparing preparation duration from raw biomass substrate to finished sifted compost.",
    chart_lbl_bokashi: "Bokashi",
    chart_lbl_vermi: "Vermicompost",
    chart_lbl_kitchen: "Kitchen Waste",
    chart_lbl_indore: "Heap / Pit (Indore)",
    chart_lbl_nadep: "NADEP Tank",
    chart_lbl_biochar: "Biochar Inoculation",
    chart_days_14: "14 Days",
    chart_days_42: "42 Days",
    chart_days_52: "52 Days",
    chart_days_105: "105 Days",
    chart_days_120: "120 Days",

    cn_eyebrow: "Biological Balancing",
    cn_title: "The Carbon-to-Nitrogen (C:N) Ratio Guide",
    cn_sub: "Balancing 'Browns' (Energy & Carbon) and 'Greens' (Protein & Nitrogen) for rapid aerobic decay.",
    cn_th_type: "Substrate Category",
    cn_th_ratio: "Average C:N Ratio",
    cn_th_role: "Biological Function",
    cn_th_examples: "Common Farm & Kitchen Examples",
    cn_brown_title: "🟤 Browns (Carbon Rich)",
    cn_green_title: "🟢 Greens (Nitrogen Rich)",
    cn_rule_summary: "🎯 Golden Rule: Maintain an overall pile ratio of 2 parts Brown to 1 part Green by volume for sweet-smelling, rapid breakdown.",

    trouble_eyebrow: "Practical Diagnostics",
    trouble_title: "Compost Troubleshooting: Problem ➜ Fix",
    trouble_sub: "Quick scientific remedies for common composting hurdles.",
    th_symptom: "Observed Problem / Symptom",
    th_cause: "Underlying Biological Cause",
    th_fix: "Corrective Action / Practical Solution",
    trouble_1_title: "Foul / Rotten Egg Smell",
    trouble_1_cause: "Cause: Anaerobic conditions or excess wet greens.",
    trouble_1_fix: "<strong>Fix:</strong> Immediately add dry crushed brown leaves, straw, or sawdust and thoroughly turn the pile to introduce oxygen.",
    trouble_2_title: "Dry & Cold Center",
    trouble_2_cause: "Cause: Inadequate moisture or insufficient nitrogen.",
    trouble_2_fix: "<strong>Fix:</strong> Sprinkle water or cow dung slurry evenly while turning so moisture reaches 50–60%. Cover pile to conserve heat.",
    trouble_3_title: "Flies or Maggots",
    trouble_3_cause: "Cause: Exposed food scraps on top of pile.",
    trouble_3_fix: "<strong>Fix:</strong> Always bury fresh wet scraps deep inside the center and cap the top with 2–3 inches of dry soil or brown leaves.",
    trouble_4_title: "Slow Decay / No Breakdown",
    trouble_4_cause: "Cause: Waste particles too large or lack of microbial starter.",
    trouble_4_fix: "<strong>Fix:</strong> Chop stalks into 1–2 inch pieces. Add 500ml sour buttermilk or 2 kg fresh cow dung slurry to inoculate bacteria.",
    compost_cta_box_title: "Not sure which method fits your land & waste?",
    compost_cta_box_sub: "Our interactive Compost Calculator gives you tailored recommendations in seconds.",
    compost_cta_box_btn: "Launch Compost Calculator ➔",

    // ===================================================================
    // PESTICIDES PAGE STRINGS
    // ===================================================================
    pest_eyebrow: "Natural Crop Protection",
    pest_title: "Botanical Pesticides & Biological Defenses",
    pest_sub: "Control destructive sap-suckers and caterpillars without toxic chemical residues. Explore farm-crafted herbal concoctions, predatory bio-agents, and physical traps.",
    pest_matrix_eyebrow: "Interactive Diagnosis",
    pest_matrix_title: "Natural Pest Finder & Match Matrix",
    pest_matrix_sub: "Select the targeted pest on your crops to examine verified organic botanical remedies and effectiveness indicators.",
    pest_th_selected: "Selected Pest",
    pest_th_neem: "Neem Extract",
    pest_th_dasha: "Dashaparni Ark",
    pest_th_garlic: "Garlic-Chilli",
    pest_th_bio: "Bio-Agents (Bt/Trichoderma)",
    pest_th_trap: "Physical Traps",
    pest_lbl_rec: "Recommended Botanical Recipe:",
    pest_lbl_mode: "Mode of Action:",
    pest_lbl_alt: "Eco-Friendly Alternatives:",
    pest_legend: "● High Effectiveness &nbsp; ○ Supplementary",
    rec_meta_broad: "BROAD SPECTRUM",
    rec_meta_igr: "REPELLENT & IGR",
    rec_meta_10leaves: "10 MEDICINAL LEAVES",
    rec_meta_fermented: "FERMENTED POTENT",
    rec_meta_irritant: "CONTACT IRRITANT",
    rec_meta_mites: "MITES & THRIPS",
    rec_meta_microbial: "MICROBIAL INOCULANT",
    rec_meta_cow: "COW-BASED",
    rec_meta_antagonists: "LIVING ANTAGONISTS",
    rec_meta_biopest: "BIO-PESTICIDES",
    rec_meta_nonchemical: "NON-CHEMICAL CONTROL",
    rec_meta_trapping: "TRAPPING",
    rec_eyebrow: "Authentic Formulations",
    rec_title: "6 Botanical & Biological Recipe Cards",
    rec_sub: "Time-tested natural crop formulations with ingredient lists, preparation steps, and application dosages.",

    // Recipes
    rec_1_title: "1. Neem Seed Kernel Extract (NSKE 5%)",
    rec_1_desc: "The premier botanical antifeedant, insect growth regulator, and oviposition deterrent containing pure Azadirachtin.",
    rec_1_ing: "<strong>Ingredients:</strong> 5 kg dry neem seed kernels, 100L clean water, 200g natural khadi soap (emulsifier).",
    rec_1_prep: "<strong>Preparation:</strong> Pound neem kernels into fine powder. Soak in 10L water overnight in muslin cloth bag. Squeeze extract into 100L water with dissolved soap.",
    rec_1_target: "<strong>Target Pests:</strong> Helicoverpa caterpillars, aphids, whiteflies, leaf miners, and thrips.",
    rec_1_dose: "Dose: Spray 500ml NSKE per 10L knapsack sprayer in late evening.",

    rec_2_title: "2. Dashaparni Ark (10-Leaf Decoction)",
    rec_2_desc: "Potent Ayurvedic fermented pest repellent combining 10 bitter and medicinal leaves with indigenous cow urine.",
    rec_2_ing: "<strong>Ingredients:</strong> Leaves of Neem, Karanj, Custard apple, Castor, Datura, Papaya, Marigold, Guava, Nirgundi, and Lantana (2 kg each) + 5 kg cow dung + 10L indigenous cow urine + 200L water.",
    rec_2_prep: "<strong>Preparation:</strong> Crush leaves, place in plastic drum with cow dung and urine. Ferment for 30–40 days in shade, stirring clockwise twice daily. Filter through fine muslin cloth.",
    rec_2_target: "<strong>Target Pests:</strong> Stem borers, leaf folders, sucking pests, and early instar caterpillars.",
    rec_2_dose: "Dose: 200–250ml per 10L water. Shelf life up to 6 months in shade.",

    rec_3_title: "3. Garlic-Chilli-Ginger Extract",
    rec_3_desc: "Intense pungent contact spray using allicin and capsaicin to repel stubborn sucking insects and mites.",
    rec_3_ing: "<strong>Ingredients:</strong> 500g garlic cloves, 500g spicy green chillies, 250g fresh ginger, 50g mild soap, 10L water.",
    rec_3_prep: "<strong>Preparation:</strong> Grind garlic and chillies separately into fine paste. Soak overnight in water. Boil gently for 15 minutes, cool, strain through muslin cloth, and add soap sticker.",
    rec_3_target: "<strong>Target Pests:</strong> Red spider mites, yellow thrips, whiteflies, and aphids on cotton & vegetables.",
    rec_3_dose: "Dose: Dilute 500ml stock extract in 15L water. Wet underside of leaves.",

    rec_4_title: "4. Jeevamrut, Beejamrut & Panchagavya",
    rec_4_desc: "Fermented indigenous cow-derived microbial tonics that multiply billions of aerobic microbes per milliliter.",
    rec_4_ing: "<strong>Jeevamrut:</strong> 10 kg desi cow dung + 10L cow urine + 2 kg jaggery + 2 kg pulse flour (besan) + handful of virgin forest soil in 200L water. Ferment 5–7 days.",
    rec_4_prep: "<strong>Beejamrut:</strong> Seed treatment concoction protecting young germinating seeds against soil-borne wilt and damping off.",
    rec_4_target: "<strong>Panchagavya:</strong> 5 sacred bovine products (milk, curd, ghee, dung, urine) + banana + jaggery for plant growth vigor.",
    rec_4_dose: "Dose: 200L Jeevamrut per acre via drip or flood irrigation twice a month.",

    rec_5_title: "5. Beneficial Bio-Agents (Trichoderma & Bt)",
    rec_5_desc: "Harnessing natural microbial predators and fungi antagonists to target stubborn pests and soil pathogens.",
    rec_5_ing: "<strong>Trichoderma viride / harzianum:</strong> Fungal biocontrol agent suppressing Fusarium wilt and root rot.",
    rec_5_prep: "<strong>Bacillus thuringiensis (Bt):</strong> Bacterial bio-insecticide specifically targeting Lepidoptera caterpillars.",
    rec_5_target: "<strong>Beauveria bassiana:</strong> Entomopathogenic white muscardine fungus infecting stem borers.",
    rec_5_dose: "Dose: 5g/liter water or mix 1 kg Trichoderma with 100 kg farmyard manure before sowing.",

    rec_6_title: "6. Physical & Biological Traps",
    rec_6_desc: "Non-chemical insect monitoring and mass trapping strategies to keep pest population below Economic Threshold Level (ETL).",
    rec_6_ing: "<strong>Pheromone Traps:</strong> Sex-attractant lures (Helilure, Spodolure) targeting male moths (5–8 traps/acre).",
    rec_6_prep: "<strong>Yellow & Blue Sticky Traps:</strong> Colored sheets coated with castor oil catching whiteflies, aphids & thrips (10–12 traps/acre).",
    rec_6_target: "<strong>Bird Perches:</strong> 'T' shaped wooden sticks in field inviting insectivorous birds to hunt caterpillars naturally.",
    rec_6_dose: "Setup: Install at canopy level before peak flowering stage.",

    safety_eyebrow: "Application Rules",
    safety_title: "Golden Rules for Organic Spraying",
    safety_sub: "Botanical extracts are potent biological remedies. Adhere strictly to these 4 field protocols for maximum pest mortality and pollinator safety.",
    safety_1: "<strong>1. Spray in the Late Evening:</strong> Always spray after 4:30 PM. Bright midday sunlight degrades botanical compounds and scorches leaf tissues.",
    safety_2: "<strong>2. Protect Beneficial Pollinators:</strong> Never spray open flowering blossoms during morning foraging hours to protect honeybees and butterflies.",
    safety_3: "<strong>3. Filter Thoroughly:</strong> Strain all fermented decoctions through double muslin cloth to prevent nozzle choking in knapsack sprayers.",
    safety_4: "<strong>4. Pre-Test on Single Plant:</strong> Before full-field spraying, test diluted concoction on 2–3 plants and inspect after 24 hours for leaf phytotoxicity.",

    // ===================================================================
    // FIELD PRACTICES PAGE STRINGS
    // ===================================================================
    fp_eyebrow: "Agroecological Management",
    fp_title: "Sustainable Field Practices",
    fp_sub: "Biological systems replace chemical interventions through smart crop geometry, organic soil blankets, pulse nitrogen fixation, and precision water drops.",
    
    fp_1_eyebrow: "PRACTICE 01",
    fp_1_title: "Legume Crop Rotation & Soil Nitrogen",
    fp_1_desc: "Monoculture depletes specific soil nutrient horizons and creates rampant pest reservoirs. Rotating heavy feeders (cotton, maize, wheat) with symbiotic nitrogen-fixing legumes (chickpea, pigeon pea, green gram, cowpea) breaks pest lifecycles and deposits up to 50–70 kg atmospheric nitrogen per hectare into the soil without a single bag of synthetic urea.",
    fp_1_chip_1: "🌿 Breaks Pest Cycles",
    fp_1_chip_2: "🌱 Biological Nitrogen Fixation",
    fp_1_chip_3: "💰 Eliminates Urea Purchase",
    fp_1_chip_4: "📉 Improves Soil Aggregates",
    fp_1_seq_title: "Recommended Rotation Sequence:",
    fp_1_seq_1: "<strong>Kharif Season:</strong> Cotton / Soybean intercropped with Pigeon Pea (Tur).",
    fp_1_seq_2: "<strong>Rabi Season:</strong> Chickpea (Chana) or Wheat with Mustard borders.",
    fp_1_seq_3: "<strong>Summer Fallow:</strong> Fast 45-day Green Manure (Dhaincha / Sunhemp).",

    fp_2_eyebrow: "PRACTICE 02",
    fp_2_title: "Multispecies Intercropping & Trap Crops",
    fp_2_desc: "Planting complementary companion species simultaneously in alternating field rows maximizes solar harvest and provides biological pest barriers. Tall crops like maize or sorghum act as windbreaks and physical barricades against flying aphids, while fragrant marigolds release root exudates that paralyze harmful parasitic nematodes.",
    fp_2_chip_1: "🌻 Natural Trap Cropping",
    fp_2_chip_2: "☀️ 100% Sunlight Capture",
    fp_2_chip_3: "🐝 Attracts Beneficial Pollinators",
    fp_2_chip_4: "🛡️ Biological Insurance Against Crop Failure",
    fp_2_combo_title: "Proven Companion Combinations:",
    fp_2_combo_1: "<strong>Cotton + Cowpea (4:1):</strong> Cowpea attracts ladybird beetles that eat cotton bollworms.",
    fp_2_combo_2: "<strong>Tomato + African Marigold (8:1):</strong> Marigold acts as decoy for fruit borers.",
    fp_2_combo_3: "<strong>Maize + Cowpea + Pumpkin:</strong> The ancient 'Three Sisters' synergy.",

    fp_3_eyebrow: "PRACTICE 03",
    fp_3_title: "Organic Mulching (Soil Living Blanket)",
    fp_3_desc: "Bare soil is an open wound. Covering farm beds with a 3–4 inch protective blanket of dried crop straw, sugarcane trash, or dry tree leaves keeps soil temperature 5°C cooler in summer heat, reduces soil water evaporation by over 60%, and completely smothers weed seeds by blocking sunlight.",
    fp_3_chip_1: "💧 60% Water Conservation",
    fp_3_chip_2: "🚫 Complete Weed Suppression",
    fp_3_chip_3: "🌡️ Prevents Soil Heat Stress",
    fp_3_chip_4: "🪱 Earthworm Highway Habitat",
    fp_3_rule_title: "Mulching Golden Rules:",
    fp_3_rule_1: "Keep mulch 2 inches away from plant stems to avoid stem rot.",
    fp_3_rule_2: "Spray Jeevamrut over dry mulch to speed up decomposition into humus.",
    fp_3_rule_3: "Use on-farm crop stalks rather than burning fields (anti-stubble burning).",

    fp_4_eyebrow: "PRACTICE 04",
    fp_4_title: "Precision Micro-Drip Irrigation & Water Care",
    fp_4_desc: "Flood irrigation washes away valuable topsoil, wastes 60% of water, and creates anaerobic root rot. Gravity-fed or solar drip systems deliver measured water droplets directly to crop root zones alongside liquid Jeevamrut injections, conserving water while keeping inter-row weeds thirsty.",
    fp_4_chip_1: "🚰 50% Water Savings",
    fp_4_chip_2: "🧪 Direct Liquid Jeevamrut Feeding",
    fp_4_chip_3: "🚫 Reduces Weed Germination",
    fp_4_chip_4: "☀️ Low Energy Solar Compatible",
    fp_4_water_title: "Water Management Metrics:",
    fp_4_water_1: "Organic soils with > 1% carbon hold 150,000 liters extra water per hectare.",
    fp_4_water_2: "Drip fertigation with Jeevamrut reduces application labor by 80%.",
    fp_4_water_3: "Flushing drip lines with dilute bio-enzymes prevents chemical salt scale buildup.",

    fp_5_eyebrow: "PRACTICE 05",
    fp_5_title: "Heirloom Desi Seeds & Beejamrut Inoculation",
    fp_5_desc: "Hybrid seeds are bred for synthetic chemical responsiveness and cannot be safely re-sown. Traditional heirloom open-pollinated desi seeds possess centuries of acclimatization against local droughts, pest outbreaks, and heat spells. Coating seeds with cow-dung Beejamrut before sowing inoculates the seedling with protective beneficial endophytes.",
    fp_5_chip_1: "🌰 100% Seed Sovereignty",
    fp_5_chip_2: "🛡️ Natural Climate Hardiness",
    fp_5_chip_3: "🦠 Beejamrut Biological Shield",
    fp_5_chip_4: "🌾 Rich Indigenous Nutrition & Taste",
    fp_5_recipe_title: "Beejamrut Seed Treatment:",
    fp_5_recipe_desc: "Mix 5 kg cow dung, 5L cow urine, 50g virgin forest lime, and handful of virgin soil in 20L water. Smear gently onto seeds with bare hands. Dry in shade for 2 hours before sowing.",

    // ===================================================================
    // SCHEMES & CERTIFICATION PAGE STRINGS
    // ===================================================================
    sch_eyebrow: "Institutional Support & Standards",
    sch_title: "Government Schemes & Organic Certification",
    sch_sub: "Demystifying national subsidies, zero-cost peer certification for small farmers, export standards, and authentic organic labelling standards in India.",
    sch_pillars_eyebrow: "The 4 Central Pillars",
    sch_pillars_title: "Key National Programmes & Certifications",
    sch_pillars_sub: "Government of India initiatives supporting organic transitions from soil preparation to retail branding.",
    
    sch_p1_badge: "MINISTRY OF AGRICULTURE",
    sch_p1_title: "1. PKVY (Paramparagat Krishi Vikas Yojana)",
    sch_p1_desc: "Flagship cluster approach program promoting chemical-free organic farming across 20-hectare village blocks.",
    sch_p1_fin: "<strong>Financial Incentive:</strong> ₹50,000 per hectare over 3 years. Of this, ₹31,000 (62%) is transferred via Direct Benefit Transfer (DBT) directly into farmer bank accounts for on-farm organic inputs, bio-fertilizers, and botanical extracts.",
    sch_p1_val: "<strong>Value Addition & Marketing:</strong> ₹8,800/ha provided for post-harvest handling, cluster grading, organic packaging, and local organic haat transportation.",
    sch_p1_portal: "Official Portal: pgsindia-ncof.gov.in ↗",

    sch_p2_badge: "CHEMICAL-FREE CROPPING",
    sch_p2_title: "2. NMNF (National Mission on Natural Farming)",
    sch_p2_desc: "Standalone mission focusing on on-farm cow-based natural inputs (Jeevamrut, Beejamrut, Ghanjeevamrut) along the Ganga corridor and pan-India.",
    sch_p2_brc: "<strong>Bio-Input Resource Centers (BRCs):</strong> Establishment of 15,000 community resource centers across gram panchayats providing ready-made natural sprays and master trainer farmer demonstrations.",
    sch_p2_kcc: "<strong>Kisan Call Centers & KVKs:</strong> Direct farmer training via Krishi Vigyan Kendras with zero synthetic fertilizers allowed within 5km river corridors.",
    sch_p2_portal: "Official Portal: naturalfarming.dac.gov.in ↗",

    sch_p3_badge: "PEER CERTIFICATION",
    sch_p3_title: "3. PGS-India (Participatory Guarantee System)",
    sch_p3_desc: "Locally focused, grassroots quality assurance system. Certifies producers based on active peer-review by neighbouring farmers with zero exorbitant auditing fees.",
    sch_p3_small: "<strong>Smallholder Friendly:</strong> Solves the barrier of expensive private third-party certification. Minimum 5 farmers form a local group with shared mutual inspection visits.",
    sch_p3_logo: "<strong>Green vs Organic Logo:</strong> 'PGS-India Green' granted during transition years 1–3; 'PGS-India Organic' granted on full 3-year chemical-free completion.",
    sch_p3_portal: "Official Portal: pgsindia-ncof.gov.in ↗",

    sch_p4_badge: "EXPORT EQUIVALENCE & RETAIL",
    sch_p4_title: "4. NPOP & Jaivik Bharat Certification",
    sch_p4_desc: "Statutory standards governing commercial packaged organic goods across retail shelves and international export borders.",
    sch_p4_export: "<strong>NPOP (APEDA):</strong> Required for international export to USA, EU, and Switzerland. Audited by accredited third-party certification bodies (e.g. Aditi Organic, OneCert).",
    sch_p4_fssai: "<strong>Jaivik Bharat Mark:</strong> Mandatory unified logo issued by FSSAI for all organic food sold in India. Look for the green circle sprout on food packaging.",
    sch_p4_portal: "Official Portal: jaivikbharat.fssai.gov.in ↗",

    roadmap_eyebrow: "Step-by-Step Pathway",
    roadmap_title: "5-Step PGS-India Certification Roadmap",
    roadmap_sub: "Follow this clear roadmap to enroll your farm cluster and achieve official certified organic status.",
    step_1_title: "1. Form a Peer Group",
    step_1_desc: "Gather at least 5 local farmers in your village committed to chemical-free farming.",
    step_2_title: "2. Register on PGS Portal",
    step_2_desc: "Register your Local Group (LG) on the official pgsindia-ncof.gov.in portal or through local KVK.",
    step_3_title: "3. Peer Inspection & Diary",
    step_3_desc: "Maintain farm activity diaries and conduct mutual peer farm inspection rounds.",
    step_4_title: "4. Conversion Years (Green)",
    step_4_desc: "Receive 'PGS-Green' certificate during the 2–3 year soil detoxification and stabilization period.",
    step_5_title: "5. Certified Organic Status",
    step_5_desc: "After 36 continuous months of verified organic inputs, receive full 'PGS-Organic' certificate.",
    
    docs_eyebrow: "Documentation Ready",
    docs_title: "Required Documents for Application",
    docs_sub: "Keep these documents ready for registration under PKVY or PGS-India clusters:",
    doc_1: "Aadhaar Card of all participating farmers.",
    doc_2: "7/12 Land Record extracts or Patta copy.",
    doc_3: "Active Bank Account linked with Aadhaar for DBT incentive transfers.",
    doc_4: "Baseline Soil Health Card (SHC) issued by local agriculture department.",
    sch_download_btn: "📄 Download One-Page Schemes Guide (PDF)",

    // ===================================================================
    // CAMPAIGN & MOVEMENT PAGE STRINGS
    // ===================================================================
    camp_eyebrow: "Movement & Outreach",
    camp_title: "JaivikSetu Awareness Campaign",
    camp_sub: "Empowering Indian grassroots farming communities with live composting demonstrations, local language pamphlets, youth college drives, and transparent market linkages.",
    camp_road_eyebrow: "Action Roadmap",
    camp_road_title: "The 4 Pillars of Grassroots Action",
    camp_road_sub: "Our four-stage strategic rollout bridging technical research to practical rural implementation.",
    
    stage_1_badge: "STAGE 1",
    stage_1_title: "Village Live Workshops",
    stage_1_desc: "Organizing live community demonstrations where farmers collaboratively construct NADEP brick tanks and ferment fresh Dashaparni Ark on village common land.",
    stage_1_target: "Target: 250+ Village Panchayats",

    stage_2_badge: "STAGE 2",
    stage_2_title: "Regional Language Pamphlets",
    stage_2_desc: "Printing and circulating illustrated, clear Marathi and Hindi recipe cards and scheme application forms across weekly rural agricultural haats and mandis.",
    stage_2_target: "Target: 50,000+ Printed Pocket Guides",

    stage_3_badge: "STAGE 3",
    stage_3_title: "School & College Drives",
    stage_3_desc: "Setting up balcony kitchen waste composting systems and biological soil labs in schools and agricultural colleges to cultivate the next generation of agroecologists.",
    stage_3_target: "Target: 100+ Youth Green Clubs",

    stage_4_badge: "STAGE 4",
    stage_4_title: "FPO Links & QR Recipes",
    stage_4_desc: "Assisting Farmer Producer Organizations with QR-tagged packaging that links consumers directly to the farmer's verified organic preparation logs and PGS certificates.",
    stage_4_target: "Target: 30+ Organic Clusters",

    gallery_eyebrow: "Field Highlights",
    gallery_title: "Awareness Campaign Field Gallery",
    gallery_sub: "Scenes from live community workshops, composting demos, and agricultural exhibitions across Maharashtra and Central India.",
    gal_1_title: "Live NADEP Construction Demo",
    gal_1_desc: "Hands-on brick tank construction workshop with progressive farmer groups in Nashik.",
    gal_2_title: "Dashaparni Ark Boiling Session",
    gal_2_desc: "Identifying local medicinal wild herbs and preparing botanical bio-repellents in Satara.",
    gal_3_title: "College Permaculture Initiative",
    gal_3_desc: "Training agriculture students on balcony vermicomposting and living soil cross-sections in Pune.",
    gal_4_title: "FPO Farmer Haat & Direct Sales",
    gal_4_desc: "Connecting certified PGS farmers directly with urban consumer buying clubs in Mumbai.",

    dl_eyebrow: "Print & Share",
    dl_title: "Printable Educational Resources (PDF Hub)",
    dl_sub: "Download, print, and distribute these single-page illustrated PDF summaries in your village, classroom, or housing society.",
    dl_1_title: "1-Page Compost Master Cheat-Sheet",
    dl_1_desc: "Quick ratios, moisture tests, and odor fixes for kitchen, vermi, and farm heaps.",
    dl_2_title: "Natural Pesticide Recipes Pocket Card",
    dl_2_desc: "Neem, Dashaparni, Garlic-Chilli ingredient lists, spray schedules, and safety rules.",
    dl_3_title: "Government Schemes Summary & Checklist",
    dl_3_desc: "PKVY ₹50,000/ha subsidy overview, PGS 5-step roadmap, and required documents checklist.",
    dl_btn: "View & Print PDF 🖨️",

    join_eyebrow: "Get Involved",
    join_title: "Join as a Village or College Ambassador",
    join_sub: "Whether you are a practicing farmer, student, or community organizer, help us take organic knowledge to the next village.",
    form_name_lbl: "Your Full Name *",
    form_name_ph: "e.g. Ramesh Patil",
    form_phone_lbl: "Mobile Number (WhatsApp) *",
    form_phone_ph: "e.g. 9876543210",
    form_state_lbl: "State & District *",
    form_state_ph: "e.g. Maharashtra, Nashik",
    form_role_lbl: "Your Role / Profile *",
    form_role_opt1: "Practicing Farmer / Grower",
    form_role_opt2: "Agriculture Student / Researcher",
    form_role_opt3: "NGO / Community Organizer",
    form_submit_btn: "Join the JaivikSetu Network ➔",

    // Campaign Feedback Form (PRD §7.8)
    fb_eyebrow: "Community Feedback",
    fb_title: "Share Your Voice & Request Workshops",
    fb_sub: "Are you a farmer, home gardener, or NGO volunteer? Let us know how JaivikSetu can support your organic journey.",
    fb_name_lbl: "Full Name (Optional):",
    fb_role_lbl: "Your Primary Role / Interest:",
    fb_role_opt1: "Small / Marginal Farmer",
    fb_role_opt2: "Urban Home / Balcony Gardener",
    fb_role_opt3: "Student / Agricultural Researcher",
    fb_role_opt4: "NGO Volunteer / Community Organizer",
    fb_role_opt5: "Farmer Producer Organization (FPO) Member",
    fb_rating_lbl: "Platform Experience Rating:",
    fb_rating_opt5: "⭐⭐⭐⭐⭐ 5 - Outstanding & Highly Practical",
    fb_rating_opt4: "⭐⭐⭐⭐ 4 - Very Informative",
    fb_rating_opt3: "⭐⭐⭐ 3 - Good / Useful",
    fb_rating_opt2: "⭐⭐ 2 - Needs More Local Language Content",
    fb_msg_lbl: "Your Message, Question, or Workshop Request:",
    fb_btn: "🌱 Submit Community Feedback",

    // ===================================================================
    // ABOUT PAGE STRINGS
    // ===================================================================
    abt_eyebrow: "Our Purpose",
    abt_title: "About JaivikSetu",
    abt_sub: "\"Jaivik\" = Organic. \"Setu\" = Bridge. Building an accessible, credible digital bridge between traditional agricultural wisdom and modern ecological science.",
    vision_eyebrow: "Foundational Vision",
    vision_title: "Bridging India to Chemical-Free Abundance",
    vision_p1: "India is home to the world's largest concentration of organic producers, yet millions of small and marginal farmers remain trapped in cycles of chemical debt, depleted soil biology, and confusing certification bureaucracy.",
    vision_p2: "<strong>JaivikSetu</strong> was created as an open-access public awareness hub. We strip away academic jargon and expensive commercial sales pitches, offering farmers and citizens transparent recipes, diagnostic calculators, and official scheme navigation.",
    pillars_title: "Core Pillars of JaivikSetu:",
    pillar_1: "<strong>100% Non-Commercial:</strong> Zero proprietary input sales, zero affiliate commissions, and zero sponsored biases.",
    pillar_2: "<strong>Farmer-Centric Simplicity:</strong> Short, actionable sentences with regional language translations (English & Marathi).",
    pillar_3: "<strong>Rigorous Scientific Honesty:</strong> Transparently explaining the 2–3 transition years rather than promising unrealistic overnight miracles.",
    pillar_4: "<strong>Government Alignment:</strong> Direct links and assistance with official portals (PKVY, NMNF, PGS-India, FSSAI).",
    
    persona_eyebrow: "Tailored Guidance",
    persona_title: "How to Use JaivikSetu",
    persona_sub: "Find the most relevant pathways depending on your scale and experience level.",
    per_farmer_title: "For Small / Marginal Farmers",
    per_farmer_desc: "Start with the <strong>Compost Calculator</strong>, explore low-cost <strong>Dashaparni Ark recipes</strong>, and check your eligibility for <strong>₹50,000/ha PKVY subsidies</strong>.",
    per_farmer_btn: "Farmer Pathway ➔",
    per_gardener_title: "For Urban Home Gardeners",
    per_gardener_desc: "Learn <strong>odorless kitchen pot composting</strong> and <strong>Bokashi fermentation</strong> to recycle food scraps and feed balcony containers sustainably.",
    per_gardener_btn: "Home Gardener Guide ➔",
    per_student_title: "For Students & Researchers",
    per_student_desc: "Study the <strong>Living Soil cross-section</strong>, IFOAM principles, national statistics, and accredited NPOP/APEDA standards.",
    per_student_btn: "Academic Curriculum ➔",
    per_volunteer_title: "For Volunteers & NGOs",
    per_volunteer_desc: "Download <strong>printable one-page PDFs</strong>, organize village live workshops, and assist local farmer peer groups with PGS-India portal filings.",
    per_volunteer_btn: "Outreach Materials ➔",

    ref_eyebrow: "Academic Integrity",
    ref_title: "References & Authoritative Sources",
    ref_sub: "JaivikSetu content is cross-verified against peer-reviewed agricultural science and official statutory publications.",
    ref_1: "<strong>ICAR (Indian Council of Agricultural Research):</strong> Package of Practices for Organic Farming in Important Crops, National Institute of Organic Farming (NIOF).",
    ref_2: "<strong>APEDA (Agricultural & Processed Food Products Export Development Authority):</strong> National Programme for Organic Production (NPOP) Standards and Trade Statistics (2024–2025).",
    ref_3: "<strong>Ministry of Agriculture & Farmers Welfare, Government of India:</strong> Paramparagat Krishi Vikas Yojana (PKVY) & National Mission on Natural Farming (NMNF) Operational Guidelines.",
    ref_4: "<strong>IFOAM – Organics International:</strong> The Four Principles of Organic Agriculture: Health, Ecology, Fairness, and Care.",
    ref_5: "<strong>FSSAI (Food Safety and Standards Authority of India):</strong> Food Safety and Standards (Organic Foods) Regulations and Jaivik Bharat Certification Manual.",
    ref_6: "<strong>FiBL (Research Institute of Organic Agriculture) & IFOAM:</strong> 'The World of Organic Agriculture: Statistics & Emerging Trends'.",
    ref_7: "<strong>Pandharipande, N.D. (Kaka):</strong> Original Engineering Specifications of the NADEP Composting Tank Method, Prayog Parivar, Maharashtra.",

    // 404 Not Found Page
    notfound_eyebrow: "Error 404",
    notfound_title: "Page Not Found",
    notfound_sub: "Looks like this seed hasn't sprouted yet or this path has been harvested. Let's get you back on fertile ground.",
    notfound_btn_home: "Back to Home ➔",
    notfound_btn_tools: "Explore Smart Tools ➔",
    notfound_quick_title: "Helpful Shortcuts"
  },

  mr: {
    // Brand & Top Navigation
    brand_sub: "सेंद्रिय शेती जनजागृती केंद्र",
    tagline: "भारताला सेंद्रिय शेतीकडे नेणारा सेतू",
    nav_home: "मुख्यपृष्ठ",
    nav_learn: "माहिती",
    nav_compost: "खत पद्धती",
    nav_pesticides: "कीटकनाशके",
    nav_field: "शेती पद्धती",
    nav_schemes: "योजना",
    nav_tools: "साधने",
    nav_campaign: "मोहीम",
    nav_about: "परिचय",
    lang_btn: "English",

    // Common Buttons & Tags
    btn_learn_more: "अधिक जाणून घ्या ➔",
    btn_read_more: "संपूर्ण मार्गदर्शक वाचा ➔",
    btn_view_details: "तपशील पहा ➔",
    btn_print_pdf: "🖨️ प्रिंट करा / PDF सेव्ह करा",
    btn_done: "पूर्ण झाले",
    btn_submit: "सबमिट करा",
    btn_back: "मागे जा",
    btn_explore: "पहा ➔",

    // Hero Section (Home)
    hero_eyebrow: "जैविकसेतू · सेंद्रिय शेती जनजागृती केंद्र",
    hero_h1_prefix: "आरोग्यदायी जगा. ",
    hero_h1_accent: "सेंद्रिय पिकवा.",
    hero_sub: "सुलभ मार्गदर्शक, साधने आणि शासकीय योजनांद्वारे सेंद्रिय शेतीची जनजागृती व अवलंब वाढवणारा विश्वासाचा पूल.",
    hero_cta_learn: "शिकण्यास सुरुवात करा",
    hero_cta_calc: "खत कॅल्क्युलेटर वापरा",
    hero_scroll: "खाली स्क्रोल करा",

    // Stats Ribbon
    stat_1_num: "#१",
    stat_1_lbl: "जगातील सर्वाधिक सेंद्रिय शेतकरी (भारत)",
    stat_2_num: "२०१६",
    stat_2_lbl: "सिक्कीम हे जगातील पहिले १००% सेंद्रिय राज्य",
    stat_3_num: "६+",
    stat_3_lbl: "खत निर्मितीच्या सोप्या पद्धती व कृती",
    stat_4_num: "१०+",
    stat_4_lbl: "नैसर्गिक कीटकनाशक व जैविक सापळे",

    // Problem Section (Home)
    problem_eyebrow: "रासायनिक चक्रव्यूह",
    problem_title: "रासायनिक खतांच्या दुष्टचक्रातून मुक्ती",
    problem_desc: "रासायनिक घटकांमुळे तात्पुरते उत्पादन वाढते पण जमिनीतील सूक्ष्मजीव मरतात. परिणामी पुढच्या पिकासाठी अजून जास्त रसायने लागतात.",
    cycle_node_1: "१. रासायनिक खते व कीटकनाशकांचा मारा",
    cycle_node_2: "२. मातीतील सेंद्रिय कर्ब व सूक्ष्मजीव घटतात",
    cycle_node_3: "३. जमिनीची प्रतिकारशक्ती व पीक घटते",
    cycle_node_4: "४. शेतकरी अधिक महागड्या औषधांचा वापर करतो",
    cycle_center: "विनाशाचे दुष्टचक्र",
    cause_1_title: "प्रायोगिक मार्गदर्शनाचा अभाव",
    cause_1_desc: "शेतकऱ्यांना सेंद्रिय शेती करायची आहे पण नैसर्गिक अर्क तयार करण्याचे योग्य प्रशिक्षण हवे आहे.",
    cause_2_title: "सुरुवातीच्या उत्पादनातील घटीची भीती",
    cause_2_desc: "२–३ वर्षांच्या संक्रमण काळात मातीचा सेंद्रिय पोत पुन्हा जिवंत होतो.",
    cause_3_title: "प्रमाणीकरण व बाजारपेठेतील गोंधळ",
    cause_3_desc: "'नैसर्गिक' आणि 'प्रमाणित सेंद्रिय' यांतील फरक समजून घेणे आवश्यक आहे.",

    // Principles (Home)
    principles_eyebrow: "मूळ विचारसरणी",
    principles_title: "सेंद्रिय शेतीची ४ मूलभूत तत्त्वे (IFOAM)",
    principles_sub: "सेंद्रिय शेती ही माती, परिसंस्था आणि मानवाचे आरोग्य नैसर्गिक जैविक चक्रांद्वारे अबाधित ठेवणारी एक समग्र उत्पादन प्रणाली आहे.",
    principle_health_title: "आरोग्य",
    principle_health_desc: "माती, वनस्पती, प्राणी, मानव आणि पृथ्वी या सर्वांचे आरोग्य एकसंध ठेवणे.",
    principle_ecology_title: "पर्यावरण",
    principle_ecology_desc: "जिवंत पर्यावरणीय परिसंस्थेवर आधारित काम करणे व निसर्गाशी सुसंगत राहणे.",
    principle_fairness_title: "न्याय्यता",
    principle_fairness_desc: "पर्यावरण व जीवनसंधीच्या बाबतीत शेतकरी आणि ग्राहकांना न्याय्य वागणूक मिळणे.",
    principle_care_title: "काळजी",
    principle_care_desc: "भावी पिढ्यांचे आरोग्य व पर्यावरण सुरक्षित ठेवण्यासाठी जबाबदारीने शेती करणे.",

    // Tree Component (Home)
    tree_eyebrow: "परस्परसंवादी ज्ञानवृक्ष",
    tree_title: "सेंद्रिय शेतीचा ज्ञानवृक्ष",
    tree_desc: "शाश्वत सेंद्रिय शेतीचे चार मुख्य स्तंभ जाणून घेण्यासाठी खालील फांद्यांवर क्लिक करा.",
    tree_b1_title: "१. मृदा संवर्धन व पोषण",
    tree_b1_desc: "कंपोस्ट, हिरवळीचे खत, बायोचार, गांडूळ खत आणि जीवामृत.",
    tree_b2_title: "२. नैसर्गिक पीक संरक्षण",
    tree_b2_desc: "निंबोळी अर्क, दशपर्णी अर्क, कामगंध सापळे व मित्रकीटकांचे संवर्धन.",
    tree_b3_title: "३. शेतीतील पूरक पद्धती",
    tree_b3_desc: "कडधान्यांची फेरपालट, आंतरपीक पद्धती, सेंद्रिय आच्छादन आणि ठिबक सिंचन.",
    tree_b4_title: "४. प्रमाणीकरण व बाजारपेठ",
    tree_b4_desc: "सहभागी हमी प्रणाली (PGS-India), NPOP मानके आणि जैविक भारत मानचिन्ह.",

    // Quick Tools Strip (Home)
    tools_eyebrow: "डिजिटल मार्गदर्शक साधने",
    tools_title: "स्मार्ट सेंद्रिय शेती साधने",
    tools_sub: "शेतकरी आणि बागायतदारांसाठी जलद डिजिटल कॅल्क्युलेटर आणि निदान साधने.",
    tool_calc_title: "कंपोस्ट खत कॅल्क्युलेटर",
    tool_calc_desc: "तुमच्याकडील कचरा, उपलब्ध जागा व वेळेनुसार योग्य खत निर्मिती पद्धत निवडा.",
    tool_calc_btn: "कॅल्क्युलेटर वापरा ➔",
    tool_pest_title: "कीटक व उपाय शोधक",
    tool_pest_desc: "पिकांवरील किडी ओळखा आणि त्यावर प्रभावी नैसर्गिक काढे व जैविक उपाय शोधा.",
    tool_pest_btn: "उपाय शोधा ➔",
    tool_quiz_title: "माझ्यासाठी कोणती पद्धत योग्य?",
    tool_quiz_desc: "तुमच्या जागेनुसार योग्य सेंद्रिय पद्धती जाणून घेण्यासाठी ५ सोप्या प्रश्नांची उत्तरे द्या.",
    tool_quiz_btn: "चाचणी सुरू करा ➔",
    tool_myth_title: "गैरसमज आणि वास्तव (फ्लिप कार्ड्स)",
    tool_myth_desc: "सेंद्रिय शेतीविषयीचे गैरसमज दूर करा आणि वैज्ञानिक सत्य जाणून घ्या.",
    tool_myth_btn: "८ कार्ड्स पहा ➔",

    // Benefits vs Challenges (Home)
    scale_eyebrow: "खरी परिस्थिती",
    scale_title: "फायदे आणि आव्हाने: वस्तुनिष्ठ समतोल",
    scale_desc: "आम्ही सेंद्रिय शेती वैज्ञानिक पारदर्शकतेने मांडतो—सुरुवातीच्या अडचणींचा आदर करत दीर्घकालीन प्रचंड पर्यावरणीय लाभ दाखवतो.",
    scale_ben_heading: "दीर्घकालीन फायदे",
    scale_ben_1: "<strong>विषमुक्त अन्नधान्य:</strong> कुटुंब आणि शेतमजुरांसाठी सुरक्षित, पोषणयुक्त आणि चवदार उत्पादन.",
    scale_ben_2: "<strong>सेंद्रिय कर्ब व पाणी साठा:</strong> मातीमध्ये २०% जास्त पाणी धरून ठेवण्याची क्षमता, दुष्काळाला तोंड देण्याची ताकद.",
    scale_ben_3: "<strong>खर्चात मोठी बचत:</strong> घरगुती सेंद्रिय निविष्ठांमुळे शेती खर्चात ६० ते ७०% पर्यंत बचत.",
    scale_ben_4: "<strong>बाजारात चांगला दर:</strong> प्रमाणित सेंद्रिय शेतमालाला स्थानिक व आंतरराष्ट्रीय बाजारात २०-४०% जादा भाव.",
    scale_chal_heading: "संक्रमण काळातील आव्हाने",
    scale_chal_1: "<strong>पहिली २-३ वर्षे उत्पादनात घट:</strong> रासायनिक जमीन पूर्ववत जिवंत होईपर्यंत सुरुवातीला उत्पादन थोडे घटू शकते.",
    scale_chal_2: "<strong>अधिक शारीरिक श्रम:</strong> खत भरणे, तण काढणे आणि काढे तयार करण्यासाठी शेतात स्वतः काम करावे लागते.",
    scale_chal_3: "<strong>नोंदवही व प्रमाणीकरण:</strong> पीक डायरी लिहिणे, गट तपासणी आणि माती परीक्षण अहवाल जतन करणे आवश्यक असते.",
    scale_chal_4: "<strong>थेट बाजारपेठेचा अभाव:</strong> ग्राहकांपर्यंत थेट पोहोचण्यासाठी शेतकरी उत्पादक कंपन्यांची (FPO) गरज भासते.",

    // Government Schemes Strip (Home)
    schemes_strip_eyebrow: "शासकीय पाठबळ",
    schemes_strip_title: "राष्ट्रीय अभियान आणि प्रमाणीकरण मानके",
    schemes_strip_desc: "भारत सरकारतर्फे सेंद्रिय शेतीसाठी देण्यात येणारे अनुदान, गट पद्धती आणि अधिकृत प्रमाणीकरण प्रणाली.",
    scheme_pkvy_badge: "आर्थिक अनुदान",
    scheme_pkvy_desc: "परंपरागत कृषी विकास योजनेअंतर्गत (PKVY) शेतकरी गटांना खते व पॅकिंगसाठी प्रति हेक्टरी ₹५०,००० चे ३ वर्षांचे अर्थसहाय्य.",
    scheme_nmnf_badge: "नैसर्गिक शेती अभियान",
    scheme_nmnf_desc: "राष्ट्रीय नैसर्गिक शेती अभियान (NMNF) द्वारे देशी गायींवर आधारित जीवामृत, बीजामृत व जैविक निविष्ठा केंद्रांची निर्मिती.",
    scheme_pgs_badge: "मोफत प्रमाणीकरण",
    scheme_pgs_desc: "सहभागी हमी प्रणाली (PGS-India) द्वारे लहान शेतकऱ्यांना कोणत्याही खाजगी शुल्काशिवाय शेतकरी समूहाकडून मोफत प्रमाणपत्र.",
    scheme_jb_badge: "राष्ट्रीय मानचिन्ह",
    scheme_jb_desc: "FSSAI द्वारे प्रमाणित अस्सल सेंद्रिय अन्नासाठी देशभरात अधिकृत असलेले 'जैविक भारत' राष्ट्रीय मानचिन्ह.",
    scheme_view_btn: "तपशील पहा ➔",

    // Campaign Roadmap Strip (Home)
    campaign_strip_eyebrow: "प्रत्यक्ष कृती",
    campaign_strip_title: "जनजागृती मोहीम कृती आराखडा",
    campaign_strip_desc: "सेंद्रिय शेतीचे शास्त्रीय ज्ञान थेट भारतीय गावे, शाळा आणि शेतकरी गटांपर्यंत पोहोचवणे.",
    camp_phase_1: "गावनिहाय प्रत्यक्ष कार्यशाळा",
    camp_phase_1_desc: "शेतकऱ्यांसोबत मिळून गावातच नाडेप टाकी बांधणे व दशपर्णी अर्क तयार करण्याचे प्रत्यक्ष प्रात्यक्षिक.",
    camp_phase_2: "स्थानिक भाषेतील मार्गदर्शक पत्रके",
    camp_phase_2_desc: "ग्रामीण आठवडे बाजारात व कृषी प्रदर्शनात सोप्या मराठी-हिंदी कृतीपत्रिकांचे मोफत वाटप.",
    camp_phase_3: "शाळा व महाविद्यालयांमध्ये जागृती",
    camp_phase_3_desc: "विद्यार्थ्यांना व तरुणांना परसबाग कंपोस्टिंग आणि जैविक शेतीचे महत्त्व शिकवणे.",
    camp_phase_4: "FPO समूह व QR कोडिंग",
    camp_phase_4_desc: "शेतकरी उत्पादक कंपन्यांना सेंद्रिय शेतमालाची गुणवत्ता सिद्ध करणाऱ्या QR कोड तंत्रज्ञानाची जोड देणे.",
    camp_cta_btn: "मोहिमेत सहभागी व्हा आणि साहित्य डाउनलोड करा ➔",

    // Footer
    footer_tagline: "भारतीय शेतकरी, विद्यार्थी व गृहबागायतदारांना शाश्वत सेंद्रिय शेतीशी जोडणारा डिजिटल सेतू.",
    footer_nav_title: "महत्त्वाचे दुवे",
    footer_guides_title: "मार्गदर्शक माहिती",
    footer_downloads_title: "मुद्रणयोग्य मार्गदर्शक",
    footer_disclaimer_title: "शैक्षणिक सूचना",
    footer_disclaimer: "जैविकसेतू हे एक समर्पित शैक्षणिक व्यासपीठ आहे. औषधांच्या अचूक प्रमाणासाठी व शासकीय अनुदानासाठी स्थानिक कृषी विज्ञान केंद्र (KVK) अथवा कृषी अधिकाऱ्यांशी संपर्क साधावा.",
    footer_rights: "© २०२६ जैविकसेतू. सर्व हक्क राखीव. भारतीय कृषी समृद्धीसाठी खुला जनजागृती उपक्रम.",
    footer_made_with: "भारतीय शेतकरी बांधवांसाठी समर्पित 💚",

    // Common PDF links
    pdf_compost: "📄 कंपोस्ट खत माहिती पत्रक",
    pdf_pesticide: "📄 कीटकनाशक कृती पत्रिका",
    pdf_schemes: "📄 शासकीय योजना मार्गदर्शक",

    // ===================================================================
    // LEARN PAGE STRINGS
    // ===================================================================
    learn_eyebrow: "मूलभूत ज्ञान",
    learn_title: "सेंद्रिय शेती म्हणजे काय?",
    learn_sub: "माती, परिसंस्था आणि मानवाचे आरोग्य जपणारी उत्पादन प्रणाली. ही कृत्रिम रासायनिक घटकांवर अवलंबून न राहता नैसर्गिक प्रक्रिया, जैवविविधता आणि स्थानिक चक्रांवर आधारलेली असते.",
    learn_facts_eyebrow: "राष्ट्रीय संदर्भ",
    learn_facts_title: "भारतातील सेंद्रिय शेतीची ६ प्रमाणित तथ्ये",
    learn_facts_sub: "अपेडा (APEDA), राष्ट्रीय सेंद्रिय उत्पादन कार्यक्रम (NPOP) आणि कृषी मंत्रालयाद्वारे प्रमाणित आकडेवारी.",
    fact_1_title: "१. जगात सर्वाधिक सेंद्रिय शेतकरी भारतात",
    fact_1_desc: "जगात सर्वाधिक प्रमाणित सेंद्रिय शेतकरी भारतात असून, PGS-India आणि NPOP अंतर्गत ४४ लाखांहून अधिक शेतकरी नोंदणीकृत आहेत.",
    fact_2_title: "२. सिक्कीम: जगातील पहिले १००% सेंद्रिय राज्य",
    fact_2_desc: "२०१६ मध्ये सिक्कीमने आपली संपूर्ण ७६,००० हेक्टर शेतजमीन पूर्णपणे रासायनिक मुक्त सेंद्रिय बनवून संयुक्त राष्ट्रांचा (UN) मानाचा सुवर्ण पुरस्कार पटकावला.",
    fact_3_title: "३. दुहेरी प्रमाणीकरण व्यवस्था",
    fact_3_desc: "भारताने आंतरराष्ट्रीय निर्यातीसाठी वाणिज्य मंत्रालयांतर्गत NPOP (२००१) आणि स्थानिक लहान शेतकऱ्यांसाठी कृषी मंत्रालयांतर्गत PGS-India (२०११) सुरू केले.",
    fact_4_title: "४. आघाडीची सेंद्रिय राज्ये",
    fact_4_desc: "मध्य प्रदेश, महाराष्ट्र, राजस्थान आणि गुजरात ही राज्ये देशातील एकूण सेंद्रिय क्षेत्रापैकी ६०% हून अधिक वाटा व्यापतात; यामध्ये सोयाबीन, कापूस, डाळी व गहू आघाडीवर आहेत.",
    fact_5_title: "५. प्रमुख जागतिक निर्यात उत्पादने",
    fact_5_desc: "भारत अमेरिका, युरोप, कॅनडा आणि ब्रिटनला सेंद्रिय शेतमाल निर्यात करतो. यामध्ये सेंद्रिय तेलबिया (तीळ व सोयाबीन), चहा, औषधी वनस्पती, मसाले आणि बासमती तांदूळ आघाडीवर आहेत.",
    fact_6_title: "६. विस्ताराची अथांग क्षमता",
    fact_6_desc: "शेतकरी संख्येत भारत जगात अव्वल असला तरी एकूण पेरणी क्षेत्रापैकी केवळ ३ ते ४% क्षेत्र सेंद्रिय आहे. राष्ट्रीय नैसर्गिक शेती अभियानांतर्गत प्रचंड वाढीची संधी उपलब्ध आहे.",

    // Comparison Table
    compare_eyebrow: "वैज्ञानिक तुलना",
    compare_title: "सेंद्रिय शेती विरुद्ध रासायनिक शेती",
    compare_sub: "पर्यावरणीय आरोग्य, शेतकरी सुरक्षा, उत्पादन खर्च आणि जमिनीचा पोत या निकषांवर तुलनात्मक मूल्यांकन.",
    th_param: "तुलनेचा निकष",
    th_organic: "🌱 प्रमाणित सेंद्रिय शेती",
    th_chemical: "⚠️ पारंपरिक रासायनिक शेती",
    comp_row_1_p: "मातीतील सूक्ष्मजीव संपदा",
    comp_row_1_org: "मायकोरायझा बुरशी, गांडूळे आणि प्रति ग्रॅम कोट्यवधी उपयुक्त जिवाणूंची समृद्धी.",
    comp_row_1_chem: "अत्यंत क्षीण; रासायनिक खतांच्या क्षारांमुळे गांडूळे व उपयुक्त जिवाणूंचा नाश होतो.",
    comp_row_2_p: "अन्नाची गुणवत्ता व रासायनिक अंश",
    comp_row_2_org: "विषारी रसायने, न्यूरोटॉक्सिन वा कृत्रिम संप्रेरकांचा लवलेशही नसलेले पोषणयुक्त अन्न.",
    comp_row_2_chem: "कीटकनाशकांचे घातक अंश (MRL मर्यादेपेक्षा जास्त) अन्नात आढळण्याची वारंवार शक्यता.",
    comp_row_3_p: "पाणी मुरण्याची क्षमता व प्रतिकार",
    comp_row_3_org: "सेंद्रिय कर्बामुळे माती २०% जास्त पाणी धरून ठेवते, दुष्काळातही पीक तग धरते.",
    comp_row_3_chem: "जमिनीवर कडक थर तयार होतो, पाणी वाहून जाते आणि जमिनीची धूप होते.",
    comp_row_4_p: "उत्पादन खर्च व कर्जाचा धोका",
    comp_row_4_org: "घरच्या घरी तयार केलेले खत, जीवामृत व अर्कांमुळे शेती खर्चात ६०-७०% बचत.",
    comp_row_4_chem: "महागडी रासायनिक खते, संकरित बियाणे व विषारी औषधांमुळे कर्जाचा डोंगर वाढतो.",
    comp_row_5_p: "दीर्घकालीन उत्पादनाचा कल",
    comp_row_5_org: "सुरुवातीला २-३ वर्षे किंचित घट, नंतर कायमस्वरूपी स्थिर उत्पादन व जादा बाजारभाव.",
    comp_row_5_chem: "सुरुवातीला भरपूर उत्पादन, पण काही वर्षांत जमिनीचा कस जाऊन उत्पादन वेगाने घटते.",

    // Living Soil Section
    soil_eyebrow: "परस्परसंवादी मृदा विज्ञान",
    soil_title: "सजीव मातीचा उभा छेद (क्रॉस-सेक्शन)",
    soil_sub: "मातीतील जैविक सूक्ष्मजीव, सेंद्रिय कर्ब आणि अन्नद्रव्यांमधील कार्य समजून घेण्यासाठी खालील थरांवर क्लिक करा.",
    soil_layer_o: "🍂 थर ओ (O): सेंद्रिय आच्छादन व कुजलेला थर (० ते २ इंच)",
    soil_layer_a: "🌱 थर ए (A): सजीव वरची माती व मुळांचा परिसर (२ ते १० इंच)",
    soil_layer_b: "🧱 थर बी (B): उपमाती व खनिजांचा थर (१० ते ३० इंच)",
    soil_layer_c: "🪨 थर सी (C): मूळ खडकाचा पाया (३० इंचाखालील)",
    soil_horizon_badge: "सक्रिय मृदा थर",
    soil_bio_lbl: "सूक्ष्मजीव व सजीव संपदा:",
    soil_role_lbl: "पर्यावरणीय व कृषी कार्य:",
    soil_protect_btn: "हा थर कसा सुरक्षित ठेवावा ➔",

    // Degradation & Testing
    deg_eyebrow: "धोक्याची घंटा",
    deg_title: "रासायनिक दुष्परिणाम: जमिनीची आम्लता, क्षारता आणि कडक थर",
    deg_sub: "युरिया, डीएपी आणि घातक कीटकनाशकांच्या अतिवापरामुळे शेतजमिनीमध्ये झालेले घातक बदल:",
    deg_1_title: "मातीचे आम्लीकरण व पोषण जळणे:",
    deg_1_desc: "रासायनिक नत्राच्या अतिवापरामुळे मातीचा सामू (pH) ५.५ च्या खाली जातो आणि पिकांना स्फुरद मिळणे बंद होते.",
    deg_2_title: "क्षारांचा पांढरा थर:",
    deg_2_desc: "न शोषलेले रासायनिक क्षार पृष्ठभागावर जमा होऊन उलट परासरणाने मुळांमधील ओलावा शोषून घेतात.",
    deg_3_title: "अभिसरणास अटकाव करणारा कडक थर (हार्डपॅन):",
    deg_3_desc: "सेंद्रिय कर्ब व गांडूळे नसल्यामुळे माती सिमेंटसारखी कडक बनते व मुळे खोलवर जाऊ शकत नाहीत.",
    test_title: "शेतातील माती तपासणीच्या सोप्या टिप्स",
    test_sub: "सेंद्रिय शेती सुरू करण्यापूर्वी आपल्या शेतातील प्राथमिक जैविक निकष तपासा:",
    test_1_title: "१. सामू (pH) निर्देशांक चाचणी:",
    test_1_desc: "उत्तम सेंद्रिय मातीचा सामू ६.५ ते ७.५ दरम्यान असावा. आम्लधर्मी मातीत लाकडाची राख व चुना, तर क्षारयुक्त मातीत धैंचा गाडावा.",
    test_2_title: "२. सेंद्रिय कर्ब (SOC):",
    test_2_desc: "सुपीक जमिनीत सेंद्रिय कर्ब ०.८% हून अधिक असावा. सध्या रासायनिक जमिनींमध्ये तो केवळ ०.२ ते ०.४% उरला आहे.",
    test_3_title: "३. गांडूळ गणना:",
    test_3_desc: "१ घनफूट माती उकरून पाहा. त्यात ५ ते १० जिवंत गांडूळे आढळल्यास तुमची माती पुनरुज्जीवित होत असल्याचे स्पष्ट होते.",
    test_cta: "कंपोस्ट खताने माती पुनरुज्जीवित करा ➔",

    // ===================================================================
    // COMPOSTING PAGE STRINGS
    // ===================================================================
    compost_eyebrow: "मृदा पोषण प्रणाली",
    compost_title: "सेंद्रिय कंपोस्ट खत निर्मिती मार्गदर्शक",
    compost_sub: "पिकांचे अवशेष, शेण आणि स्वयंपाकघरातील कचऱ्याचे रूपांतर काळेशार कसदार सेंद्रिय खतात करा. अचूक कालावधी, हवेचे नियोजन आणि अडचणींवरील उपायांसह.",
    compost_cta_calc: "खत कॅल्क्युलेटर वापरा ➔",
    tab_indore: "१. इंदोर ढीग/खड्डा पद्धत",
    tab_nadep: "२. नाडेप टाकी पद्धत",
    tab_vermi: "३. गांडूळ खत (व्हर्मीकंपोस्ट)",
    tab_kitchen: "४. परसबाग व कुंडी पद्धत",
    tab_bokashi: "५. बोकाशी व हिरवळीचे खत",
    badge_farm_scale: "शेती व मोठ्या बागेसाठी उपयुक्त",
    badge_nadep_scale: "सामुदायिक व मोठ्या प्रमाणावर शेतीसाठी",
    badge_vermi_scale: "पोषक घटकांनी समृद्ध गांडूळ खत व व्हर्मीवॉश",
    badge_kitchen_scale: "फ्लॅट व शहरी घरांच्या बागेसाठी",
    badge_time_harvest: "खत तयार होण्याचा कालावधी",
    method_steps_title: "४ आवश्यक पायऱ्या:",

    // Indore
    method_1_title: "१. इंदोर हवेशीर ढीग व खड्डा पद्धत",
    method_1_sub: "सर अल्बर्ट हॉवर्ड आणि यशवंत द. वाड यांनी इंदोर येथील इन्स्टिट्यूट ऑफ प्लांट इंडस्ट्रीमध्ये विकसित केलेली पद्धत.",
    method_1_time: "९० ते १२० दिवस",
    indore_s1_title: "जागा व पाया",
    indore_s1_desc: "८ बाय ४ फुटांची सावली असलेली उंच जागा निवडा किंवा पावसाचे पाणी साचणार नाही असा ३ फूट खोल खड्डा खणा.",
    indore_s2_title: "थरांचे भरण",
    indore_s2_desc: "६ इंच वाळलेला काडीकचरा (तपकिरी), ३ इंच हिरवा कचरा आणि २ इंच शेणस्लरी व मातीचा थर एकावर एक द्या.",
    indore_s3_title: "ओलावा आणि हवा खेळती ठेवणे",
    indore_s3_desc: "५०-६०% ओलावा (स्पंज पिळल्यासारखा) ठेवा. ढीगाच्या मध्यभागी हवेसाठी छिद्रे असलेले बांबूचे पाईप उभे करा.",
    indore_s4_title: "नियमित उलथापालथ",
    indore_s4_desc: "१५, ३० आणि ६० दिवसांनी ढीग पूर्णपणे उलथापालथ करा, ज्यामुळे उष्णता समान राहून उत्कृष्ट खत तयार होते.",
    indore_dos_title: "✅ काय करावे (Do's)",
    indore_dos_1: "कापूस पराटी वा मक्याचे जाड काड २ इंचांचे बारीक तुकडे करून टाका.",
    indore_dos_2: "पावसाचे जादा पाणी वाहून जाण्यासाठी ढीगाचा माथा घुमटाकार ठेवा.",
    indore_dos_3: "जिवाणू वाढीसाठी थोडे जुने कंपोस्ट खत किंवा शेतातील माती मिसळा.",
    indore_donts_title: "❌ काय टाळावे (Don'ts)",
    indore_donts_1: "प्लॅस्टिक, रासायनिक फवारणी झालेला कचरा किंवा रोगट पाने टाकू नका.",
    indore_donts_2: "ढीग पूर्ण सुकू देऊ नका किंवा त्यात अति पाणी साचू देऊ नका.",

    // NADEP
    method_2_title: "२. नाडेप (NADEP) विटांच्या टाकीची पद्धत",
    method_2_sub: "महाराष्ट्रातील गांधीवादी कृषितज्ज्ञ नारायण देवराव पांढरीपांडे (काका) यांनी विकसित केलेली अत्यंत लोकप्रिय पद्धत.",
    method_2_time: "११० ते १२० दिवस",
    nadep_s1_title: "टाकी बांधकाम",
    nadep_s1_desc: "१०×५×३ फूट आकाराची विटांची टाकी बांधा आणि प्रत्येक दुसऱ्या थरावर हवेसाठी ७ इंचांची जाळीदार छिद्रे ठेवा.",
    nadep_s2_title: "४ थरांची रचना",
    nadep_s2_desc: "थर १: ६ इंच सुका कचरा (१०० किलो). थर २: शेणस्लरी (४ किलो शेण १२५ लिटर पाण्यात). थर ३: चाळलेली माती (६० किलो). टाकी भरेपर्यंत हे थर द्या.",
    nadep_s3_title: "माती-शेणाचा लेप",
    nadep_s3_desc: "टाकी भरल्यावर वरून ३ इंच शेण-मातीचा लेप देऊन हवाबंद करा, जेणेकरून उष्णता टिकून राहील.",
    nadep_s4_title: "खत काढणी",
    nadep_s4_desc: "११० ते १२० दिवसांनंतर जिवाणू प्रक्रियेतून सुमारे २.५ टन कसदार, काळेभोर सेंद्रिय खत तयार होते.",
    nadep_dos_title: "✅ नाडेप पद्धतीचे फायदे",
    nadep_dos_1: "अतिशय कमी शेण लागते (१ भाग शेणासाठी ८ भाग कचरा व माती).",
    nadep_dos_2: "१२० दिवसांत ढीग एकदाही पलटी करावा लागत नाही.",
    nadep_donts_title: "❌ महत्त्वाची काळजी",
    nadep_donts_1: "टाकीच्या बाजूची हवेची छिद्रे मातीने कधीही बंद होणार नाहीत याची दक्षता घ्या.",

    // Vermicompost
    method_3_title: "३. आयसेनिया फेटिडा गांडूळ खत निर्मिती",
    method_3_sub: "सेंद्रिय कचऱ्याचे रूपांतर उत्कृष्ट दाणेदार खतात करण्यासाठी उपयुक्त गांडूळांचा वापर.",
    method_3_time: "४० ते ४५ दिवस",
    vermi_s1_title: "वाफा तयार करणे",
    vermi_s1_desc: "१०×३×२ फूट आकाराचा सावलीत वाफा बांधा. तळाशी पाण्याचा निचरा होण्यासाठी नारळाच्या शेंड्या व वाळलेले गवत पसरा.",
    vermi_s2_title: "कचरा अर्धवट कुजवणे",
    vermi_s2_desc: "कचरा आणि शेण गांडूळांना देण्यापूर्वी १५ दिवस बाहेर कुजवा, जेणेकरून त्यातील उष्णता बाहेर पडेल.",
    vermi_s3_title: "गांडूळ सोडणे",
    vermi_s3_desc: "प्रति मीटर जागेत १,००० ते १,५०० 'आयसेनिया फेटिडा' (Eisenia fetida) गांडूळे सोडा. ६०-७०% ओलावा टिकवून ठेवा.",
    vermi_s4_title: "खत व व्हर्मीवॉश काढणी",
    vermi_s4_desc: "दर ४० दिवसांनी चहाच्या पावडरीसारख्या वरच्या थराची काढणी करा. निचरा होणारे व्हर्मीवॉश फवारणीसाठी वापरा.",
    vermi_dos_title: "✅ गांडूळांची काळजी",
    vermi_dos_1: "झारीने किंवा स्प्रिंकलरने दररोज सकाळी थोडे पाणी शिंपडा.",
    vermi_dos_2: "अंधार राहण्यासाठी वाफ्यावर ओल्या बारदानाची (गोणपाटाची) घडी पसरा.",
    vermi_donts_title: "❌ गांडूळांसाठी घातक गोष्टी",
    vermi_donts_1: "लिंबू, संत्री, तिखट मिरची, लसूण, कांदा किंवा गरम शेण कधीही टाकू नका.",
    vermi_donts_2: "मुंग्या, बेडूक, उंदीर आणि दुपारच्या कडक उन्हापासून वाफ्याचे रक्षण करा.",

    // Kitchen & Balcony
    method_4_title: "४. परसबाग व स्वयंपाकघर कचरा कंपोस्ट",
    method_4_sub: "दुर्गंधीमुक्त आणि बाल्कनीसाठी आदर्श असलेली घरगुती पद्धत.",
    method_4_time: "४५ ते ६० दिवस",
    kitchen_s1_title: "३ मातीची मडकी (खांबा)",
    kitchen_s1_desc: "एकमेकांवर बसणारी तीन मातीची मडकी वापरा, ज्यांना हवा खेळती राहण्यासाठी छोटी छिद्रे असतात.",
    kitchen_s2_title: "कापणे आणि थर देणे",
    kitchen_s2_desc: "भाजीपाल्याची साले बारीक चिरा. १ वाटी ओल्या कचऱ्यामागे २ वाट्या कोकोपीट किंवा सुका पालापाचोळा टाका.",
    kitchen_s3_title: "जिवाणू विरजण",
    kitchen_s3_desc: "आठवड्यातून एकदा १ चमचा आंबट ताक किंवा जुने कंपोस्ट पाणी शिंपडा, जेणेकरून दुर्गंधी येत नाही.",
    kitchen_s4_title: "कुंड्यांसाठी खत",
    kitchen_s4_desc: "वरचे मडके भरल्यावर खाली करा. ४५-६० दिवसांत कुंड्यांमधील झाडांसाठी उत्कृष्ट खत तयार होते.",

    // Bokashi & Biochar
    method_5_title: "५. बोकाशी हवाबंद किण्वन पद्धत",
    method_5_sub: "जपानी EM सूक्ष्मजीव तंत्रज्ञानावर आधारित अतिजलद विरजण पद्धत.",
    method_5_time: "१४ ते १८ दिवस",
    bokashi_s1_title: "हवाबंद बादली व ब्रान",
    bokashi_s1_desc: "ओला कचरा बोकाशी ब्रान (जिवाणू विरजण) सोबत हवाबंद बादलीत दाबून भरा.",
    bokashi_s2_title: "बोकाशी लिक्विड टी",
    bokashi_s2_desc: "दर ३ दिवसांनी तळाशी जमा होणारे पोषक द्रव काढून घ्या; १:१०० प्रमाणात पाण्यात मिसळून झाडांना फवारा.",
    bokashi_s3_title: "मातीत पुरणे",
    bokashi_s3_desc: "बादली भरल्यावर १४ दिवस बंद ठेवा, त्यानंतर बागेच्या मातीत पुरल्यास काही दिवसांत उत्कृष्ट खत बनते.",
    bokashi_s4_title: "सर्व प्रकारचा कचरा",
    bokashi_s4_desc: "या पद्धतीत दुग्धजन्य पदार्थ व उरलेले शिजवलेले अन्नही सहज कुजवले जाऊ शकते.",
    bokashi_eyebrow: "आधुनिक व जैविक उपाय",
    bokashi_section_title: "बोकाशी, हिरवळीचे खत व बायोचार",
    bokashi_section_sub: "जलद विनॉक्सी किण्वन, द्विदल पिकांचे आच्छादन आणि जमिनीतील कायमस्वरूपी सेंद्रिय कर्ब साठा.",
    bokashi_card_desc: "जपानी विनॉक्सी आंबवण्याची पद्धत. हवेचा संपर्क नसलेल्या बादलीत अन्न आणि ईएम भुसा मिसळला जातो. यामुळे पानांसाठी उत्तम सेंद्रिय अर्क मिळतो आणि कचरा जमिनीत मिसळण्यासाठी तयार होतो.",
    bokashi_card_adv: "मुख्य फायदा: शिजवलेले अन्न माशा न होता सुरक्षितपणे आंबवले जाऊ शकते.",
    green_manure_title: "हिरवळीचे खत (~४५ दिवस)",
    green_manure_desc: "पावसाळ्याच्या सुरुवातीला ताग किंवा धैंचा सारखी द्विदल पिके घेतली जातात आणि फुलोऱ्यावर आल्यावर (४०-४५ दिवस) जमिनीत गाडली जातात. यामुळे हेक्टरी ८०-१०० किलो नत्र नैसर्गिकरीत्या स्थिर होते.",
    green_manure_adv: "मुख्य फायदा: बाजारातील रासायनिक युरियावरील अवलंबित्व मोठ्या प्रमाणात कमी होते.",
    biochar_title: "बायोचार (जमिनीतील कर्ब साठा)",
    biochar_desc: "पिकांचे अवशेष कमी ऑक्सिजनमध्ये जाळून तयार केलेला सच्छिद्र कोळसा. जीवामृतात भिजवून वापरल्यास सूक्ष्मजीवांसाठी कायमचे घर तयार होते जे शतकानुशतके जमिनीत टिकते.",
    biochar_adv: "मुख्य फायदा: जमिनीची पाणी धरून ठेवण्याची क्षमता वाढवतो व खते वाहून जाण्यापासून वाचवतो.",

    method_6_title: "६. बायोचार आणि हिरवळीचे खत",
    method_6_sub: "जमिनीत कायमस्वरूपी सेंद्रिय कर्ब साठवणे व नैसर्गिक नत्र स्थिरीकरण.",
    method_6_time: "४५ ते ५० दिवस",
    biochar_s1_title: "बायोचार सक्रिय करणे",
    biochar_s1_desc: "काडीकचरा नियंत्रित जाळून कोळसा बनवा. शेणखत व गोमूत्रात भिजवून तो शेतात पसरा.",
    biochar_s2_title: "हिरवळीचे खत गाडणे",
    biochar_s2_desc: "ताग किंवा धैंचा पेरून फुलोऱ्यावर असताना (४५ व्या दिवशी) रोटाव्हेटरने जमिनीत गाडा. प्रति हेक्टरी ८० किलो नत्र मिळते.",

    // Charts & Tables
    chart_eyebrow: "वेगाची तुलना",
    chart_title: "पद्धतीनुसार खत तयार होण्याचा कालावधी",
    chart_sub: "कचऱ्यापासून ते वापरायोग्य चाळलेल्या खतापर्यंत लागणारा वेळ.",
    chart_lbl_bokashi: "बोकाशी",
    chart_lbl_vermi: "गांडूळ खत",
    chart_lbl_kitchen: "घरगुती कचरा",
    chart_lbl_indore: "इंदोर ढीग/खड्डा",
    chart_lbl_nadep: "नाडेप टाकी",
    chart_lbl_biochar: "बायोचार सक्रिय करणे",
    chart_days_14: "१४ दिवस",
    chart_days_42: "४२ दिवस",
    chart_days_52: "५२ दिवस",
    chart_days_105: "१०५ दिवस",
    chart_days_120: "१२० दिवस",

    cn_eyebrow: "जैविक संतुलन",
    cn_title: "सेंद्रिय कर्ब व नत्र (C:N) गुणोत्तर मार्गदर्शक",
    cn_sub: "जलद विघटनासाठी सुका कचरा (तपकिरी/कर्ब) आणि ओला कचरा (हिरवा/नत्र) यांचे योग्य संतुलन.",
    cn_th_type: "कचऱ्याचा प्रकार",
    cn_th_ratio: "सरासरी C:N गुणोत्तर",
    cn_th_role: "जैविक कार्य",
    cn_th_examples: "शेत व घरातील सामान्य उदाहरणे",
    cn_brown_title: "🟤 तपकिरी (सेंद्रिय कर्बयुक्त कचरा)",
    cn_green_title: "🟢 हिरवा (नायट्रोजनयुक्त कचरा)",
    cn_rule_summary: "🎯 सुवर्ण नियम: खताचा गोड सुवास व जलद विघटनासाठी नेहमी २ भाग सुका कचरा : १ भाग ओला कचरा हे प्रमाण ठेवा.",

    trouble_eyebrow: "अडचणींवर मात",
    trouble_title: "कंपोस्ट खतामधील सामान्य समस्या व सोपे उपाय",
    trouble_sub: "दुर्गंधी, ओलावा, कीटक व उष्णता यांमधील असंतुलनाचे काही सेकंदांत निदान करा.",
    th_symptom: "दिसणारी समस्या / लक्षण",
    th_cause: "त्यामागील जैविक कारण",
    th_fix: "करावयाची सुधारणा / सोपा उपाय",
    trouble_1_title: "कुजक्या अंड्यासारखी किंवा घाण दुर्गंधी",
    trouble_1_cause: "कारण: ऑक्सिजनचा अभाव (हवा न खेळणे) किंवा जास्त ओला कचरा.",
    trouble_1_fix: "<strong>उपाय:</strong> त्वरित सुका पालापाचोळा, भुसा किंवा पेंढा मिसळा आणि ढीग चांगला उलथापालथ करून हवा खेळती करा.",
    trouble_2_title: "ढीग कोरडा व आतून थंड पडणे",
    trouble_2_cause: "कारण: पाण्याचा किंवा हिरव्या नत्रयुक्त कचऱ्याचा अभाव.",
    trouble_2_fix: "<strong>उपाय:</strong> उलथापालथ करताना ताजे शेणपाणी शिंपडून ओलावा ५०-६०% वर आणा. उष्णता टिकवण्यासाठी ढीग झाकून ठेवा.",
    trouble_3_title: "माशा किंवा अळ्यांचा प्रादुर्भाव",
    trouble_3_cause: "कारण: ओला खरकट अन्नकचरा ढिगाच्या वर उघडा राहणे.",
    trouble_3_fix: "<strong>उपाय:</strong> ओला कचरा नेहमी ढिगाच्या मध्यभागी पुरा आणि वर २-३ इंच सुक्या पानांचा किंवा मातीचा थर द्या.",
    trouble_4_title: "कचरा हळूहळू कुजणे किंवा कुजण्याची क्रिया ठप्प होणे",
    trouble_4_cause: "कारण: कचऱ्याचे तुकडे फार मोठे असणे किंवा जिवाणू संवर्धकाची कमतरता.",
    trouble_4_fix: "<strong>उपाय:</strong> कचरा १-२ इंच बारीक करा. जिवाणू वाढवण्यासाठी ५०० मिली आंबट ताक किंवा २ किलो शेण कालवून टाका.",
    compost_cta_box_title: "तुमच्या शेतीसाठी व कचऱ्यासाठी कोणती पद्धत योग्य आहे?",
    compost_cta_box_sub: "आमचे सेंद्रिय खत कॅल्क्युलेटर काही सेकंदांत तुमच्या गरजेनुसार अचूक मार्गदर्शन देते.",
    compost_cta_box_btn: "खत कॅल्क्युलेटर सुरू करा ➔",

    // ===================================================================
    // PESTICIDES PAGE STRINGS
    // ===================================================================
    pest_eyebrow: "नैसर्गिक पीक संरक्षण",
    pest_title: "वनस्पतीजन्य कीटकनाशके व जैविक संरक्षण",
    pest_sub: "विषारी रासायनिक औषधांशिवाय रस शोषणाऱ्या किडी आणि अळ्यांचे नियंत्रण. शेतातच बनवता येणारे कडू काढे, मित्र जिवाणू आणि बिनविषारी सापळे.",
    pest_matrix_eyebrow: "परस्परसंवादी निदान",
    pest_matrix_title: "नैसर्गिक कीटक व उपाय शोधक",
    pest_matrix_sub: "तुमच्या पिकावरील कीड निवडा आणि त्यावर प्रभावी ठरणारे सेंद्रिय काढे व परिणामकारकता तपासा.",
    pest_th_selected: "निवडलेली कीड",
    pest_th_neem: "निंबोळी अर्क",
    pest_th_dasha: "दशपर्णी अर्क",
    pest_th_garlic: "मिरची-लसूण काढा",
    pest_th_bio: "जैविक घटक (Bt/ट्रायकोडर्मा)",
    pest_th_trap: "सापळे व प्रकाश सापळे",
    pest_lbl_rec: "शिफारस केलेले सेंद्रिय औषध:",
    pest_lbl_mode: "कार्य करण्याची पद्धत:",
    pest_lbl_alt: "पर्यायी जैविक उपाय:",
    pest_legend: "● उच्च परिणामकारकता &nbsp; ○ पूरक उपाय",
    rec_meta_broad: "सर्वसमावेशक कीटकनाशक",
    rec_meta_igr: "कीड प्रतिबंधक व वाढ रोखणारे",
    rec_meta_10leaves: "१० कडू व औषधी पाने",
    rec_meta_fermented: "आंबवलेला प्रभावी काढा",
    rec_meta_irritant: "स्पर्शजन्य कीडनाशक",
    rec_meta_mites: "माइट्स व फुलकिडे नाशक",
    rec_meta_microbial: "जिवाणू संवर्धक",
    rec_meta_cow: "देशी गाय आधारित",
    rec_meta_antagonists: "मित्र जिवाणू व बुरशी",
    rec_meta_biopest: "जैविक कीडनाशके",
    rec_meta_nonchemical: "रासायनिक औषधांशिवाय नियंत्रण",
    rec_meta_trapping: "सापळा तंत्रज्ञान",
    rec_eyebrow: "अस्सल सेंद्रिय कृती",
    rec_title: "६ वनस्पतीजन्य व जैविक कीटकनाशक कृती पत्रिका",
    rec_sub: "साहित्याची यादी, कृती पायऱ्या आणि योग्य फवारणी प्रमाणासह पारंपरिक सिद्ध काढे.",

    // Recipes
    rec_1_title: "१. निंबोळी अर्क (NSKE ५%)",
    rec_1_desc: "अझाडिराक्टिनयुक्त अत्यंत प्रभावी कीटकनाशक, जे किडींची भूक मंदावते व त्यांची अंडी घालण्याची क्षमता नष्ट करते.",
    rec_1_ing: "<strong>साहित्य:</strong> ५ किलो वाळलेल्या निंबोळ्यांची पावडर, १०० लिटर स्वच्छ पाणी, २०० ग्रॅम खादी साबण.",
    rec_1_prep: "<strong>कृती:</strong> निंबोळी पावडर कापडी पुरचुंडीत बांधून १० लिटर पाण्यात रात्रभर भिजवा. सकाळी पिळून १०० लिटर पाण्यात साबणाच्या द्रावणासह मिसळा.",
    rec_1_target: "<strong>नियंत्रण:</strong> बोंड अळी, मावा, पांढरी माशी, नागअळी आणि फुलकिडे (थ्रिप्स).",
    rec_1_dose: "प्रमाण: १० लिटरच्या पंपासाठी ५०० मिली निंबोळी अर्क संध्याकाळी फवारावा.",

    rec_2_title: "२. दशपर्णी अर्क (१० कडू पानांचा काढा)",
    rec_2_desc: "देशी गायीचे गोमूत्र व शेणात १० कडू वनस्पतींची पाने आंबवून तयार केलेला अतिशय तीक्ष्ण कीटकनाशक अर्क.",
    rec_2_ing: "<strong>साहित्य:</strong> कडुनिंब, करंज, सीताफळ, एरंड, धोत्रा, पपई, झेंडू, पेरू, निर्गुडी व घाणेरीची पाने (प्रत्येकी २ किलो) + ५ किलो शेण + १० लिटर गोमूत्र + २०० लिटर पाणी.",
    rec_2_prep: "<strong>कृती:</strong> पाने ठेचून प्लास्टिक ड्रममध्ये शेण व गोमूत्रासह भरा. सावलीत ३० ते ४० दिवस ठेवा व दररोज काठीने ढवळा. नंतर कापडाने गाळून घ्या.",
    rec_2_target: "<strong>नियंत्रण:</strong> खोडकिडा, पाने गुंडाळणारी अळी, फळपोखरणाऱ्या अळ्या आणि सर्व रस शोषक किडी.",
    rec_2_dose: "प्रमाण: १० लिटर पाण्यात २०० ते २५० मिली. सावलीत ६ महिने टिकतो.",

    rec_3_title: "३. लसूण-मिरची-आले तीक्ष्ण अर्क",
    rec_3_desc: "ॲलिसिन व कॅप्सॅइसिन घटकांमुळे लाल कोळी व थ्रिप्स यांसारख्या चिवट किडींचा तात्काळ बंदोबस्त करणारा काढा.",
    rec_3_ing: "<strong>साहित्य:</strong> ५०० ग्रॅम लसूण, ५०० ग्रॅम अति तिखट हिरवी मिरची, २५० ग्रॅम आले, ५० ग्रॅम साबण, १० लिटर पाणी.",
    rec_3_prep: "<strong>कृती:</strong> लसूण, मिरची व आले स्वतंत्र बारीक वाटा. रात्रभर पाण्यात भिजवा. सकाळी १५ मिनिटे मंद आचेवर उकळा, थंड करून कापडाने गाळा.",
    rec_3_target: "<strong>नियंत्रण:</strong> लाल कोळी (माइट्स), पिवळे थ्रिप्स, पांढरी माशी आणि भाजीपाल्यावरील मावा.",
    rec_3_dose: "प्रमाण: १५ लिटरच्या पंपात ५०० मिली अर्क मिसळून पानांच्या खालच्या बाजूवर फवारा.",

    rec_4_title: "४. जीवामृत, बीजामृत आणि पंचगव्य",
    rec_4_desc: "देशी गायीच्या घटकांपासून तयार केलेले सूक्ष्मजीवांचे टॉनिक, जे प्रति मिलीलिटर कोट्यवधी उपयुक्त जिवाणू पुरवते.",
    rec_4_ing: "<strong>जीवामृत:</strong> १० किलो देशी गाईचे शेण + १० लिटर गोमूत्र + २ किलो गूळ + २ किलो डाळीचे पीठ (बेसन) + मूठभर शेतातील बांधाची माती २०० लिटर पाण्यात ५-७ दिवस आंबवा.",
    rec_4_prep: "<strong>बीजामृत:</strong> पेरणीपूर्वी बियाण्यांवर बीजप्रक्रिया करण्यासाठी; रोपांना बुरशी व मर रोगापासून वाचवते.",
    rec_4_target: "<strong>पंचगव्य:</strong> गायीचे दूध, दही, तूप, शेण व गोमूत्र + केळी + गूळ यांचे वनस्पती वाढवर्धक टॉनिक.",
    rec_4_dose: "प्रमाण: प्रति एकरी २०० लिटर जीवामृत ठिबक किंवा पाटपाण्याने दर १५ दिवसांनी द्या.",

    rec_5_title: "५. मित्र जैविक घटक (ट्रायकोडर्मा व बीटी)",
    rec_5_desc: "जमिनीतील घातक बुरशी आणि अळ्यांना नैसर्गिकरीत्या नष्ट करणारे जिवंत मित्र जिवाणू व बुरशी.",
    rec_5_ing: "<strong>ट्रायकोडर्मा व्हिरिडी:</strong> जमिनीतील मूळकूज व मर रोगाला प्रतिबंध करणारी मित्र बुरशी.",
    rec_5_prep: "<strong>बॅसिलस थुरिन्जिएन्सिस (Bt):</strong> अळ्यांच्या पोटात जाऊन त्यांना मारणारा जैविक जिवाणू.",
    rec_5_target: "<strong>ब्युव्हेरिया बॅसियाना:</strong> खोडकिडा व अळ्यांवर पांढरी बुरशी वाढवून त्यांना मारणारा घटक.",
    rec_5_dose: "प्रमाण: प्रति लिटर ५ ग्रॅम किंवा पेरणीपूर्वी १ किलो ट्रायकोडर्मा १०० किलो शेणखतात मिसळून द्या.",

    rec_6_title: "६. भौतिक व जैविक सापळे",
    rec_6_desc: "विनाऔषध किडींचे निरीक्षण व मोठ्या प्रमाणावर नियंत्रण करणारे पर्यावरणपूरक सापळे.",
    rec_6_ing: "<strong>कामगंध (फेरोमोन) सापळे:</strong> नर पतंगांना आकर्षित करून अळ्यांची पैदास रोखतात (प्रति एकरी ५-८ सापळे).",
    rec_6_prep: "<strong>पिवळे व निळे चिकट सापळे:</strong> पांढरी माशी व थ्रिप्स यांना आकर्षित करणारे चिकट बोर्ड (प्रति एकरी १०-१२).",
    rec_6_target: "<strong>पक्षी थांबे (T-आकार):</strong> शेतात बसून किडे टिपण्यासाठी पक्ष्यांना लाकडी थांबे तयार करणे.",
    rec_6_dose: "नियोजन: पीक फुलोऱ्यात येण्यापूर्वीच शेतात बसवावेत.",

    safety_eyebrow: "फवारणीचे नियम",
    safety_title: "सेंद्रिय फवारणीचे ४ सुवर्ण नियम",
    safety_sub: "नैसर्गिक काढे अत्यंत प्रभावी असतात. किडींचा समूळ नायनाट होण्यासाठी आणि मित्रकीटकांच्या संरक्षणासाठी हे ४ नियम पाळा.",
    safety_1: "<strong>१. नेहमी संध्याकाळी फवारणी करा:</strong> दुपारी ४:३० नंतरच फवारणी करावी. कडक उन्हात औषधाची ताकद कमी होते आणि पिकांची पाने करपतात.",
    safety_2: "<strong>२. मित्र कीटकांचे रक्षण:</strong> फुलोऱ्याच्या काळात सकाळी फवारणी करू नका, जेणेकरून मधमाश्या आणि फुलपाखरांना इजा होणार नाही.",
    safety_3: "<strong>३. औषध दोनदा गाळून घ्या:</strong> फवारणी पंपाचे नोझल चोक होऊ नये म्हणून सर्व काढे दुहेरी सुती कापडाने स्वच्छ गाळून घ्या.",
    safety_4: "<strong>४. प्रथम २ झाडांवर चाचणी घ्या:</strong> संपूर्ण शेतावर फवारण्यापूर्वी २ झाडांवर फवारून २४ तास निरीक्षण करा.",

    // ===================================================================
    // FIELD PRACTICES PAGE STRINGS
    // ===================================================================
    fp_eyebrow: "शाश्वत शेती व्यवस्थापन",
    fp_title: "शेतीतील शाश्वत व पूरक पद्धती",
    fp_sub: "हुशार पीक रचना, सेंद्रिय आच्छादन, कडधान्यांची फेरपालट आणि सूक्ष्म ठिबक सिंचनाद्वारे रसायनांशिवाय भरघोस उत्पादन.",

    fp_1_eyebrow: "पद्धती ०१",
    fp_1_title: "कडधान्यांची फेरपालट व सेंद्रिय नत्र संवर्धन",
    fp_1_desc: "एकाच पिकाची लागवड केल्याने मातीतील विशिष्ट अन्नद्रव्ये संपतात आणि किडींचा प्रादुर्भाव वाढतो. जास्त अन्न घेणाऱ्या पिकांनंतर (कापूस, मका, गहू) हवेतील नत्र जमिनीत साठवणारी कडधान्ये (हरभरा, तूर, मूग, चवळी) घेतल्यास किडींचे चक्र तुटते आणि युरियाशिवाय जमिनीला प्रति हेक्टरी ५० ते ७० किलो नैसर्गिक नत्र मिळते.",
    fp_1_chip_1: "🌿 कीडचक्र नष्ट करते",
    fp_1_chip_2: "🌱 हवेतील नत्र जमिनीत साठवते",
    fp_1_chip_3: "💰 युरियाच्या खर्चात १००% बचत",
    fp_1_chip_4: "📉 मातीचा पोत सुधारते",
    fp_1_seq_title: "शिफारस केलेले फेरपालट चक्र:",
    fp_1_seq_1: "<strong>खरीप हंगाम:</strong> कापूस / सोयाबीन सोबत तूर आंतरपीक.",
    fp_1_seq_2: "<strong>रब्बी हंगाम:</strong> हरभरा (चना) किंवा मोहरीच्या पट्ट्यांसह गहू.",
    fp_1_seq_3: "<strong>उन्हाळी हंगाम:</strong> ताग किंवा धैंचा (हिरवळीचे खत) जमिनीत गाडणे.",

    fp_2_eyebrow: "पद्धती ०२",
    fp_2_title: "आंतरपीक पद्धत व सापळा पिके",
    fp_2_desc: "शेतात एकाच वेळी मुख्य पिकासोबत पूरक पिकांची लागवड केल्याने सूर्यप्रकाशाचा पूर्ण वापर होतो आणि किडींना नैसर्गिक अडथळा निर्माण होतो. मका वा ज्वारीसारखी उंच पिके वाऱ्याला अडवून मावा किडींना रोखतात, तर झेंडूच्या मुळांमधून निघणारा रस जमिनीतील हानिकारक सूत्रकृमींना (नेमॅटोड्स) नष्ट करतो.",
    fp_2_chip_1: "🌻 नैसर्गिक सापळा पिके",
    fp_2_chip_2: "☀️ सूर्यप्रकाशाचा १००% वापर",
    fp_2_chip_3: "🐝 मित्र कीटकांचे आकर्षण",
    fp_2_chip_4: "🛡️ पीक बुडण्यापासून संरक्षण",
    fp_2_combo_title: "यशस्वी आंतरपीक जोड्या:",
    fp_2_combo_1: "<strong>कापूस + चवळी (४:१):</strong> चवळीवर ढालकिडे वाढतात जे बोंडअळीला खाऊन टाकतात.",
    fp_2_combo_2: "<strong>टोमॅटो + आफ्रिकन झेंडू (८:१):</strong> झेंडू फळ पोखरणाऱ्या अळ्यांना स्वतःकडे आकर्षित करतो.",
    fp_2_combo_3: "<strong>मका + चवळी + भोपळा:</strong> प्राचीन 'थ्री सिस्टर्स' नैसर्गिक सहजीवन पद्धत.",

    fp_3_eyebrow: "पद्धती ०३",
    fp_3_title: "सेंद्रिय आच्छादन (मल्चिंग - मातीचे संरक्षक कवच)",
    fp_3_desc: "उघडी जमीन ही जखमेसारखी असते. शेतातील वाफ्यांवर ३ ते ४ इंचांचा सुक्या गवताचा, उसाच्या पाचटाचा वा पानांचा थर दिल्यास उन्हाळ्यात जमिनीचे तापमान ५ अंशांनी कमी राहते, पाण्याचे बाष्पीभवन ६०% घटते आणि सूर्यप्रकाश न मिळाल्यामुळे तण उगवतच नाही.",
    fp_3_chip_1: "💧 ६०% पाण्याची बचत",
    fp_3_chip_2: "🚫 तणाचा समूळ बंदोबस्त",
    fp_3_chip_3: "🌡️ जमिनीतील ओलावा व थंडावा",
    fp_3_chip_4: "🪱 गांडूळांसाठी उत्तम अधिवास",
    fp_3_rule_title: "आच्छादनाचे सुवर्ण नियम:",
    fp_3_rule_1: "झाडाच्या खोडाला बुरशी लागू नये म्हणून आच्छादन खोडापासून २ इंच दूर ठेवा.",
    fp_3_rule_2: "आच्छादनावर जीवामृत शिंपडल्यास ते वेगाने कुजून माती सुपीक बनते.",
    fp_3_rule_3: "शेतातील काडीकचरा जाळण्याऐवजी त्याचा आच्छादनासाठी वापर करा.",

    fp_4_eyebrow: "पद्धती ०४",
    fp_4_title: "अचूक ठिबक सिंचन व जल व्यवस्थापन",
    fp_4_desc: "मोकाट पाण्यामुळे (फ्लड इरिगेशन) वरची सुपीक माती वाहून जाते, ६०% पाणी वाया जाते आणि मुळे सडतात. ठिबक सिंचनाद्वारे मोजके पाणी थेट झाडांच्या मुळांशी पोहोचते आणि त्यासोबत जीवामृतही देता येते, ज्यामुळे तण वाढत नाही व पाण्याची प्रचंड बचत होते.",
    fp_4_chip_1: "🚰 ५०% पाण्याची बचत",
    fp_4_chip_2: "🧪 जीवामृताचे थेट मुळांशी वहन",
    fp_4_chip_3: "🚫 तणाची वाढ रोखणे",
    fp_4_chip_4: "☀️ सौर ऊर्जेवर चालण्यास सक्षम",
    fp_4_water_title: "जल व्यवस्थापन आकडेवारी:",
    fp_4_water_1: "१% पेक्षा जास्त सेंद्रिय कर्ब असलेली जमीन प्रति हेक्टरी १.५ लाख लिटर अतिरिक्त पाणी धरून ठेवते.",
    fp_4_water_2: "ठिबकमधून जीवामृत दिल्यास शेतातील श्रम ८०% वाचतात.",
    fp_4_water_3: "ठिबकच्या नळ्यांमध्ये क्षार साचू नये म्हणून बायो-एंझाइम्सचे पाणी सोडावे.",

    fp_5_eyebrow: "पद्धती ०५",
    fp_5_title: "देशी पारंपरिक बियाणे आणि बीजामृत संस्कार",
    fp_5_desc: "संकरित बियाण्यांना रासायनिक खतांची सवय असते आणि ती पुढच्या वर्षासाठी पुन्हा वापरता येत नाहीत. पारंपरिक देशी बियाण्यांमध्ये स्थानिक हवामान, दुष्काळ व किडींना तोंड देण्याची उपजत ताकद असते. पेरणीपूर्वी देशी गायीच्या शेण-गोमूत्राच्या बीजामृताने संस्कार केल्यास उगवण क्षमता वाढते व मूळकूज टळते.",
    fp_5_chip_1: "🌰 १००% बियाणे स्वावलंबन",
    fp_5_chip_2: "🛡️ हवामान बदलास सक्षम",
    fp_5_chip_3: "🦠 बीजामृताचे जैविक सुरक्षा कवच",
    fp_5_chip_4: "🌾 अस्सल गावरान चव व पोषण",
    fp_5_recipe_title: "बीजामृत बीजप्रक्रिया पद्धत:",
    fp_5_recipe_desc: "५ किलो देशी गाईचे शेण + ५ लिटर गोमूत्र + ५० ग्रॅम चुना + मूठभर शेतातील माती २० लिटर पाण्यात मिसळा. बियाण्यांना हलक्या हाताने चोळा आणि २ तास सावलीत वाळवून पेरणी करा.",

    // ===================================================================
    // SCHEMES & CERTIFICATION PAGE STRINGS
    // ===================================================================
    sch_eyebrow: "शासकीय पाठबळ व मानके",
    sch_title: "शासकीय योजना व सेंद्रिय प्रमाणीकरण",
    sch_sub: "राष्ट्रीय कृषी अनुदान, लहान शेतकऱ्यांसाठी मोफत गट प्रमाणीकरण, निर्यात मानके आणि 'जैविक भारत' अधिकृत मानचिन्हाची संपूर्ण माहिती.",
    sch_pillars_eyebrow: "४ मुख्य स्तंभ",
    sch_pillars_title: "प्रमुख राष्ट्रीय अभियान आणि प्रमाणीकरण",
    sch_pillars_sub: "माती सुधारणेपासून ते शेतमाल विक्रीपर्यंत भारत सरकारचे थेट सहकार्य आणि योजना.",

    sch_p1_badge: "कृषी मंत्रालय",
    sch_p1_title: "१. परंपरागत कृषी विकास योजना (PKVY)",
    sch_p1_desc: "२० हेक्टरच्या शेतकरी गटांमार्फत सेंद्रिय शेतीला चालना देणारी केंद्र सरकारची प्रमुख योजना.",
    sch_p1_fin: "<strong>आर्थिक अनुदान:</strong> ३ वर्षांसाठी प्रति हेक्टरी ₹५०,००० चे सहाय्य. यातील ₹३१,००० (६२%) रक्कम खते, बियाणे व जैविक अर्कांसाठी थेट शेतकऱ्यांच्या बँक खात्यात (DBT) जमा होते.",
    sch_p1_val: "<strong>मूल्यवर्धन व पॅकिंग:</strong> शेतमालाचे ग्रेडिंग, सेंद्रिय पॅकिंग व वाहतुकीसाठी प्रति हेक्टरी ₹८,८०० ची तरतूद.",
    sch_p1_portal: "अधिकृत पोर्टल: pgsindia-ncof.gov.in ↗",

    sch_p2_badge: "रसायनमुक्त शेती",
    sch_p2_title: "२. राष्ट्रीय नैसर्गिक शेती अभियान (NMNF)",
    sch_p2_desc: "देशी गायींवर आधारित नैसर्गिक शेती (जीवामृत, बीजामृत, घनजीवामृत) देशभरात आणि गंगा नदी पट्ट्यात राबवणारे स्वतंत्र अभियान.",
    sch_p2_brc: "<strong>जैविक निविष्ठा केंद्र (BRC):</strong> ग्रामपंचायतींमध्ये १५,००० सामुदायिक केंद्रे स्थापन करून तयार नैसर्गिक अर्क व शेतकरी प्रशिक्षणाची सोय.",
    sch_p2_kcc: "<strong>कृषी विज्ञान केंद्र (KVK):</strong> नद्यांच्या ५ किमी पट्ट्यात रसायनांना पूर्ण बंदी आणि शेतकऱ्यांना थेट प्रात्यक्षिक प्रशिक्षण.",
    sch_p2_portal: "अधिकृत पोर्टल: naturalfarming.dac.gov.in ↗",

    sch_p3_badge: "गट प्रमाणीकरण",
    sch_p3_title: "३. सहभागी हमी प्रणाली (PGS-India)",
    sch_p3_desc: "शेतकऱ्यांनी एकमेकांच्या शेतांची पाहणी करून परस्परांना दिलेले कायदेशीर सेंद्रिय प्रमाणपत्र; कोणतीही खाजगी ऑडिट फी नाही.",
    sch_p3_small: "<strong>लहान शेतकऱ्यांसाठी वरदान:</strong> महागड्या खाजगी प्रमाणपत्राची गरज नाही. किमान ५ शेतकरी एकत्र येऊन स्थानिक गट स्थापन करू शकतात.",
    sch_p3_logo: "<strong>हिरवे विरुद्ध सेंद्रिय चिन्ह:</strong> पहिल्या १-३ वर्षांत 'PGS-Green' तर ३ वर्षे पूर्ण झाल्यावर 'PGS-Organic' चे अधिकृत मानचिन्ह मिळते.",
    sch_p3_portal: "अधिकृत पोर्टल: pgsindia-ncof.gov.in ↗",

    sch_p4_badge: "निर्यात व किरकोळ बाजारपेठ",
    sch_p4_title: "४. NPOP आणि जैविक भारत प्रमाणीकरण",
    sch_p4_desc: "देशांतर्गत बाजारपेठ आणि आंतरराष्ट्रीय निर्यातीसाठी असलेले अधिकृत वैधानिक मानके.",
    sch_p4_export: "<strong>NPOP (अपेडा):</strong> अमेरिका, युरोप आणि स्वित्झर्लंडमध्ये निर्यातीसाठी अनिवार्य असलेले तृतीय-पक्ष मान्यताप्राप्त प्रमाणपत्र.",
    sch_p4_fssai: "<strong>जैविक भारत मानचिन्ह:</strong> FSSAI द्वारे भारतातील अस्सल सेंद्रिय अन्नपदार्थांसाठी दिलेला हिरवा लोगो. पॅकेटवर हा लोगो अवश्य पहा.",
    sch_p4_portal: "अधिकृत पोर्टल: jaivikbharat.fssai.gov.in ↗",

    roadmap_eyebrow: "टप्प्याटप्प्याने कृती",
    roadmap_title: "PGS-India प्रमाणीकरणाचा ५-टप्पीय मार्गदर्शक",
    roadmap_sub: "आपल्या शेतकरी गटाची नोंदणी करून अधिकृत सेंद्रिय प्रमाणपत्र मिळवण्यासाठी या ५ पायऱ्या पूर्ण करा.",
    step_1_title: "१. शेतकरी गट स्थापन करा",
    step_1_desc: "गावातील किमान ५ समविचारी शेतकरी एकत्र या जे सेंद्रिय शेती करण्यास तयार आहेत.",
    step_2_title: "२. पोर्टलवर नोंदणी करा",
    step_2_desc: "pgsindia-ncof.gov.in पोर्टलवर किंवा जवळच्या कृषी विज्ञान केंद्रात गटाची नोंदणी करा.",
    step_3_title: "३. नोंदवही व परस्पर तपासणी",
    step_3_desc: "शेतातील कामांची दैनंदिनी ठेवा आणि गटातील सदस्यांनी एकमेकांच्या शेतांची प्रत्यक्ष पाहणी करा.",
    step_4_title: "४. संक्रमण काळ (हिरवे प्रमाणपत्र)",
    step_4_desc: "जमीन रसायनमुक्त होण्याच्या २-३ वर्षांच्या काळात 'PGS-Green' प्रमाणपत्र प्राप्त करा.",
    step_5_title: "५. पूर्ण सेंद्रिय प्रमाणपत्र",
    step_5_desc: "३ वर्षे पूर्ण झाल्यानंतर अधिकृत 'PGS-Organic' प्रमाणपत्र आणि उत्पादनांवर मानचिन्ह वापरण्याचा अधिकार मिळतो.",

    docs_eyebrow: "कागदपत्रे तयार ठेवा",
    docs_title: "अर्जासाठी आवश्यक कागदपत्रे",
    docs_sub: "PKVY किंवा PGS नोंदणीसाठी ही कागदपत्रे सोबत ठेवा:",
    doc_1: "गटातील सर्व शेतकरी सदस्यांचे आधार कार्ड.",
    doc_2: "जमिनीचा चालू ७/१२ उतारा किंवा ८-अ उतारा.",
    doc_3: "अनुदान थेट खात्यात (DBT) जमा होण्यासाठी आधार लिंक बँक पासबुक.",
    doc_4: "कृषी विभागाकडून घेतलेले जमिनीचे मृदा आरोग्य पत्रिका (Soil Health Card).",
    sch_download_btn: "📄 शासकीय योजनांची एक-पानी माहिती (PDF)",

    // ===================================================================
    // CAMPAIGN & MOVEMENT PAGE STRINGS
    // ===================================================================
    camp_eyebrow: "जनआंदोलन व प्रसार",
    camp_title: "जैविकसेतू जनजागृती मोहीम",
    camp_sub: "शेतकऱ्यांसाठी प्रत्यक्ष खत कार्यशाळा, स्थानिक भाषेतील कृतीपत्रिका, शाळा-महाविद्यालयांमध्ये प्रचार आणि थेट शेतकरी-ग्राहक बाजारपेठ.",
    camp_road_eyebrow: "कृती आराखडा",
    camp_road_title: "ग्रामीण जनजागृतीचे ४ मुख्य स्तंभ",
    camp_road_sub: "तांत्रिक संशोधनाला थेट गावपातळीवरील शेताशी जोडणारा आमचा ४ टप्प्यांचा कृती कार्यक्रम.",

    stage_1_badge: "टप्पा १",
    stage_1_title: "गावनिहाय प्रत्यक्ष कार्यशाळा",
    stage_1_desc: "शेतकऱ्यांसोबत मिळून गावातच नाडेप विटांची टाकी बांधणे आणि दशपर्णी अर्क तयार करण्याचे प्रत्यक्ष प्रात्यक्षिक दाखवणे.",
    stage_1_target: "उद्दिष्ट: २५०+ ग्रामपंचायती",

    stage_2_badge: "टप्पा २",
    stage_2_title: "स्थानिक भाषेतील मार्गदर्शक पत्रके",
    stage_2_desc: "ग्रामीण आठवडे बाजारात आणि कृषी प्रदर्शनात सोप्या मराठी-हिंदी कृतीपत्रिका व योजना अर्जांचे मोफत वाटप.",
    stage_2_target: "उद्दिष्ट: ५०,०००+ छापील पॉकेट गाइड्स",

    stage_3_badge: "टप्पा ३",
    stage_3_title: "शाळा व महाविद्यालयांमध्ये जागृती",
    stage_3_desc: "विद्यार्थ्यांना व तरुणांना परसबाग कंपोस्टिंग आणि जैविक शेतीचे महत्त्व शिकवण्यासाठी ग्रीन क्लब्सची स्थापना.",
    stage_3_target: "उद्दिष्ट: १००+ युवा ग्रीन क्लब्स",

    stage_4_badge: "टप्पा ४",
    stage_4_title: "FPO समूह व QR कोडिंग",
    stage_4_desc: "शेतकरी उत्पादक कंपन्यांना सेंद्रिय शेतमालाची गुणवत्ता सिद्ध करणाऱ्या QR कोड तंत्रज्ञानाची आणि थेट विक्रीची जोड देणे.",
    stage_4_target: "उद्दिष्ट: ३०+ सेंद्रिय शेतकरी समूह",

    gallery_eyebrow: "मैदानी क्षणचित्रे",
    gallery_title: "जनजागृती मोहीम छायाचित्र दालन",
    gallery_sub: "महाराष्ट्र व मध्य भारतातील शेतकरी कार्यशाळा, खत प्रात्यक्षिके आणि कृषी प्रदर्शनातील दृश्ये.",
    gal_1_title: "नाडेप टाकीचे प्रत्यक्ष बांधकाम",
    gal_1_desc: "नाशिक जिल्ह्यातील प्रयोगशील शेतकऱ्यांसोबत विटांच्या टाकीचे थेट बांधकाम प्रात्यक्षिक.",
    gal_2_title: "दशपर्णी अर्क तयार करण्याचे सत्र",
    gal_2_desc: "सातारा येथे स्थानिक औषधी वनस्पतींची ओळख करून देऊन अर्क तयार करण्याची पद्धत.",
    gal_3_title: "महाविद्यालयीन सेंद्रिय शेती उपक्रम",
    gal_3_desc: "पुण्यात कृषी विद्यार्थ्यांना गांडूळ खत व सजीव मातीचा उभा छेद समजावून सांगताना.",
    gal_4_title: "FPO सेंद्रिय शेतमाल थेट विक्री",
    gal_4_desc: "प्रमाणित सेंद्रिय शेतकऱ्यांचा शेतमाल थेट मुंबईतील ग्राहक सोसायट्यांपर्यंत पोहोचवणे.",

    dl_eyebrow: "प्रिंट करा व वाटा",
    dl_title: "मुद्रणयोग्य शैक्षणिक साहित्य (PDF हब)",
    dl_sub: "आपल्या गावात, शाळेत वा सोसायटीत वाटण्यासाठी ही एक-पानी रंगीत माहितीपत्रके डाउनलोड करा.",
    dl_1_title: "१-पानी कंपोस्ट खत मास्टर चीट-शीट",
    dl_1_desc: "घरगुती कचरा, गांडूळ खत व शेतातील ढीगासाठी अचूक प्रमाण, ओलावा चाचणी व सोपे उपाय.",
    dl_2_title: "नैसर्गिक कीटकनाशक पॉकेट कार्ड",
    dl_2_desc: "निंबोळी अर्क, दशपर्णी व लसूण-मिरची अर्काचे साहित्य, फवारणी वेळापत्रक आणि सुरक्षा नियम.",
    dl_3_title: "शासकीय योजना व प्रमाणीकरण सारांश",
    dl_3_desc: "PKVY अंतर्गत ₹५०,००० चे अनुदान, PGS नोंदणीच्या ५ पायऱ्या आणि आवश्यक कागदपत्रे.",
    dl_btn: "पहा आणि प्रिंट करा 🖨️",

    join_eyebrow: "सहभागी व्हा",
    join_title: "गाव किंवा महाविद्यालय राजदूत म्हणून सहभागी व्हा",
    join_sub: "तुम्ही शेतकरी, विद्यार्थी वा सामाजिक कार्यकर्ते असाल तर सेंद्रिय ज्ञानाचा दिवा पुढील गावापर्यंत नेण्यास मदत करा.",
    form_name_lbl: "तुमचे पूर्ण नाव *",
    form_name_ph: "उदा. रमेश पाटील",
    form_phone_lbl: "मोबाईल नंबर (WhatsApp) *",
    form_phone_ph: "उदा. ९८७६५४३२१०",
    form_state_lbl: "राज्य व जिल्हा *",
    form_state_ph: "उदा. महाराष्ट्र, नाशिक",
    form_role_lbl: "तुमची भूमिका / ओळख *",
    form_role_opt1: "सेंद्रिय शेतकरी बांधव",
    form_role_opt2: "कृषी विद्यार्थी / संशोधक",
    form_role_opt3: "सामाजिक संस्था (NGO) / कार्यकर्ते",
    form_submit_btn: "जैविकसेतू नेटवर्कमध्ये सामील व्हा ➔",

    // Campaign Feedback Form (PRD §7.8)
    fb_eyebrow: "शेतकरी व लोकसहभाग",
    fb_title: "आपले विचार मांडा व कार्यशाळांचे आयोजन करा",
    fb_sub: "तुम्ही शेतकरी, परसबाग अभ्यासक किंवा सामाजिक कार्यकर्ते आहात का? सेंद्रिय शेतीच्या प्रवासात जैविकसेतू आपल्याला कशी मदत करू शकते ते सांगा.",
    fb_name_lbl: "पूर्ण नाव (ऐच्छिक):",
    fb_role_lbl: "तुमची मुख्य भूमिका / आवड:",
    fb_role_opt1: "अल्प / अत्यल्प भूधारक शेतकरी",
    fb_role_opt2: "शहरी परसबाग / टेरेस शेतकरी",
    fb_role_opt3: "कृषी विद्यार्थी / संशोधक",
    fb_role_opt4: "सामाजिक कार्यकर्ते / ग्रामसेवक",
    fb_role_opt5: "शेतकरी उत्पादक कंपनी (FPO) सदस्य",
    fb_rating_lbl: "पोर्टलचा अनुभव व दर्जा:",
    fb_rating_opt5: "⭐⭐⭐⭐⭐ ५ - उत्कृष्ट व अत्यंत उपयुक्त",
    fb_rating_opt4: "⭐⭐⭐⭐ ४ - अतिशय माहितीपूर्ण",
    fb_rating_opt3: "⭐⭐⭐ ३ - चांगले व उपयुक्त",
    fb_rating_opt2: "⭐⭐ २ - अधिक स्थानिक भाषेची गरज",
    fb_msg_lbl: "तुमचा संदेश, प्रश्न किंवा कार्यशाळेची विनंती:",
    fb_btn: "🌱 अभिप्राय / विनंती सादर करा",

    // ===================================================================
    // ABOUT PAGE STRINGS
    // ===================================================================
    abt_eyebrow: "आमचा उद्देश",
    abt_title: "जैविकसेतू विषयी",
    abt_sub: "\"जैविक\" = सेंद्रिय. \"सेतू\" = जोडणारा पूल. पारंपरिक कृषी शहाणपण आणि आधुनिक पर्यावरण विज्ञानाला जोडणारा विश्वासार्ह डिजिटल सेतू.",
    vision_eyebrow: "मूळ दृष्टीकोन",
    vision_title: "भारताला रसायनमुक्त समृद्धीकडे नेणारा सेतू",
    vision_p1: "जगात सर्वाधिक सेंद्रिय शेतकरी भारतात आहेत, तरीही लाखो लहान शेतकरी रासायनिक खतांच्या कर्जात, मृत मातीत आणि प्रमाणीकरणाच्या क्लिष्ट प्रक्रियेत अडकलेले आहेत.",
    vision_p2: "<strong>जैविकसेतू</strong> ची निर्मिती एक खुली लोकचळवळ म्हणून करण्यात आली आहे. महागड्या व्यापारी जाहिराती बाजूला ठेवून, आम्ही शेतकऱ्यांना पारदर्शक काढे, कॅल्क्युलेटर आणि शासकीय योजनांची अचूक माहिती देतो.",
    pillars_title: "जैविकसेतूचे ४ मूलभूत स्तंभ:",
    pillar_1: "<strong>१००% बिगर-व्यावसायिक:</strong> कोणतीही खते-औषधे विकणे नाही, कमिशन नाही व कोणाचीही प्रायोजित जाहिरात नाही.",
    pillar_2: "<strong>शेतकऱ्यांसाठी सोपी भाषा:</strong> ग्रामीण बोलीला समजतील अशी सुटसुटीत वाक्ये आणि प्रादेशिक भाषा (मराठी व इंग्रजी).",
    pillar_3: "<strong>वैज्ञानिक प्रामाणिकपणा:</strong> अवास्तव आश्वासने न देता सुरुवातीच्या २-३ वर्षांच्या संक्रमण काळाची वस्तुस्थिती मांडणे.",
    pillar_4: "<strong>शासकीय योजनांशी सांगड:</strong> अधिकृत सरकारी पोर्टल्सशी (PKVY, NMNF, PGS-India, FSSAI) थेट जोडणी.",

    persona_eyebrow: "प्रत्येकासाठी स्वतंत्र मार्गदर्शन",
    persona_title: "जैविकसेतूचा वापर कसा करावा?",
    persona_sub: "तुमची गरज आणि अनुभवानुसार खालील योग्य पर्याय निवडा.",
    per_farmer_title: "लहान व सीमांत शेतकऱ्यांसाठी",
    per_farmer_desc: "प्रथम <strong>खत कॅल्क्युलेटर</strong> वापरा, कमी खर्चातील <strong>दशपर्णी अर्क</strong> शिका आणि <strong>₹५०,००० PKVY अनुदानासाठी</strong> पात्रता तपासा.",
    per_farmer_btn: "शेतकरी मार्गदर्शक ➔",
    per_gardener_title: "शहरी गृहबागायतदारांसाठी",
    per_gardener_desc: "घरातील कचऱ्यापासून दुर्गंधीमुक्त <strong>मडके कंपोस्टिंग</strong> आणि <strong>बोकाशी खत</strong> तयार करून बाल्कनीतील कुंड्या समृद्ध करा.",
    per_gardener_btn: "गृहबागायतदार मार्गदर्शक ➔",
    per_student_title: "विद्यार्थी व संशोधकांसाठी",
    per_student_desc: "<strong>सजीव मातीचा उभा छेद</strong>, IFOAM ची तत्त्वे, राष्ट्रीय आकडेवारी आणि NPOP/APEDA मानकांचा सखोल अभ्यास करा.",
    per_student_btn: "अभ्यासक्रम माहिती ➔",
    per_volunteer_title: "स्वयंसेवक व संस्थांसाठी",
    per_volunteer_desc: "गावात वाटण्यासाठी <strong>एक-पानी PDF पत्रके डाउनलोड करा</strong>, प्रत्यक्ष प्रात्यक्षिके आयोजित करा आणि PGS नोंदणीत शेतकऱ्यांना मदत करा.",
    per_volunteer_btn: "प्रसार साहित्य ➔",

    ref_eyebrow: "वैज्ञानिक अधिष्ठान",
    ref_title: "संदर्भ व अधिकृत स्रोत",
    ref_sub: "जैविकसेतूवरील संपूर्ण माहिती पीअर-रिव्ह्यूड कृषी विज्ञान आणि अधिकृत शासकीय प्रकाशनांवर आधारित आहे.",
    ref_1: "<strong>ICAR (भारतीय कृषी संशोधन परिषद):</strong> प्रमुख पिकांमधील सेंद्रिय शेती पॅकेज, राष्ट्रीय सेंद्रिय शेती संस्था (NIOF).",
    ref_2: "<strong>APEDA (कृषी आणि प्रक्रिया केलेले अन्न उत्पादने निर्यात विकास प्राधिकरण):</strong> NPOP मानके आणि व्यापार आकडेवारी (२०२४-२०२५).",
    ref_3: "<strong>कृषी आणि शेतकरी कल्याण मंत्रालय, भारत सरकार:</strong> परंपरागत कृषी विकास योजना (PKVY) आणि राष्ट्रीय नैसर्गिक शेती अभियान (NMNF) मार्गदर्शक तत्त्वे.",
    ref_4: "<strong>IFOAM – ऑरगॅनिक्स इंटरनॅशनल:</strong> सेंद्रिय शेतीची चार मूलभूत तत्त्वे: आरोग्य, पर्यावरण, न्याय्यता आणि काळजी.",
    ref_5: "<strong>FSSAI (भारतीय अन्न सुरक्षा आणि मानके प्राधिकरण):</strong> अन्न सुरक्षा आणि मानके (सेंद्रिय अन्न) नियम आणि 'जैविक भारत' प्रमाणीकरण पुस्तिका.",
    ref_6: "<strong>FiBL आणि IFOAM:</strong> 'द वर्ल्ड ऑफ ऑरगॅनिक ॲग्रीकल्चर: आकडेवारी आणि उदयोन्मुख प्रवाह'.",
    ref_7: "<strong>पांढरीपांडे, ना. दे. (काका):</strong> नाडेप (NADEP) कंपोस्ट टाकी पद्धतीचे मूळ अभियांत्रिकी आराखडे, प्रयोग परिवार, महाराष्ट्र.",

    // 404 Not Found Page
    notfound_eyebrow: "त्रुटी ४०४",
    notfound_title: "हे पान सापडले नाही",
    notfound_sub: "कदाचित हे पान अस्तित्वात नाही किंवा पत्ता बदलला आहे. चला पुन्हा मुख्य सेंद्रिय शेती मार्गावर जाऊया.",
    notfound_btn_home: "मुख्यपृष्ठावर जा ➔",
    notfound_btn_tools: "शेती साधने पहा ➔",
    notfound_quick_title: "महत्त्वाचे दुवे"
  }
};

// ===================================================================
// COMPREHENSIVE PHRASE TRANSLATION DICTIONARY
// For automatic seamless DOM translation of untagged sentences,
// buttons, lists, tables, and paragraphs across all pages.
// ===================================================================
const phraseTranslations = {
  // Common buttons & links
  "learn more ➔": "अधिक जाणून घ्या ➔",
  "read full guide ➔": "संपूर्ण मार्गदर्शक वाचा ➔",
  "view details ➔": "तपशील पहा ➔",
  "farmer pathway ➔": "शेतकरी मार्गदर्शक ➔",
  "home gardener guide ➔": "गृहबागायतदार मार्गदर्शक ➔",
  "academic curriculum ➔": "अभ्यासक्रम माहिती ➔",
  "outreach materials ➔": "प्रसार साहित्य ➔",
  "start rebuilding soil with compost ➔": "कंपोस्ट खताने माती पुनरुज्जीवित करा ➔",
  "how to protect this layer ➔": "हा थर कसा सुरक्षित ठेवावा ➔",
  "try the compost calculator ➔": "खत कॅल्क्युलेटर वापरा ➔",
  "view & print pdf 🖨️": "पहा आणि प्रिंट करा 🖨️",
  "🖨️ print / save as pdf": "🖨️ प्रिंट करा / PDF सेव्ह करा",
  "done": "पूर्ण झाले",
  "join the jaiviksetu network ➔": "जैविकसेतू नेटवर्कमध्ये सामील व्हा ➔",

  // Table headers
  "assessment parameter": "तुलनेचा निकष",
  "🌱 certified organic agriculture": "🌱 प्रमाणित सेंद्रिय शेती",
  "⚠️ conventional chemical farming": "⚠️ पारंपरिक रासायनिक शेती",
  "substrate category": "कचऱ्याचा प्रकार",
  "average c:n ratio": "सरासरी C:N गुणोत्तर",
  "biological function": "जैविक कार्य",
  "common farm & kitchen examples": "शेत व घरातील सामान्य उदाहरणे",
  "observed problem / symptom": "दिसणारी समस्या / लक्षण",
  "underlying biological cause": "त्यामागील जैविक कारण",
  "corrective action / practical solution": "करावयाची सुधारणा / सोपा उपाय",
  "selected pest": "निवडलेली कीड",
  "neem extract": "निंबोळी अर्क",
  "dashaparni ark": "दशपर्णी अर्क",
  "garlic-chilli": "लसूण-मिरची अर्क",
  "bio-agents (bt/trichoderma)": "जैविक घटक (बीटी/ट्रायकोडर्मा)",
  "physical traps": "भौतिक सापळे",
  "target pest": "किडीचा प्रकार",

  // Method tab buttons
  "1. heap/pit (indore)": "१. इंदोर ढीग/खड्डा",
  "2. nadep brick tank": "२. नाडेप विटांची टाकी",
  "3. vermicompost": "३. गांडूळ खत",
  "4. kitchen & balcony": "४. परसबाग व कुंडी",
  "5. bokashi & green manure": "५. बोकाशी व हिरवळीचे खत",

  // Layer slice labels
  "🍂 layer o: humus & organic biomass (0 – 2\")": "🍂 थर ओ: सेंद्रिय आच्छादन व कुजलेला थर (० ते २ इंच)",
  "🌱 layer a: living topsoil & rhizosphere (2 – 10\")": "🌱 थर ए: सजीव वरची माती व मुळांचा परिसर (२ ते १० इंच)",
  "🧱 layer b: subsoil minerals (10 – 30\")": "🧱 थर बी: उपमाती व खनिजांचा थर (१० ते ३० इंच)",
  "🪨 layer c: parent bedrock (below 30\")": "🪨 थर सी: मूळ खडकाचा पाया (३० इंचाखालील)",

  // Badges & metadata
  "active soil horizon": "सक्रिय मृदा थर",
  "time to harvest": "खत तयार होण्याचा कालावधी",
  "farm & large garden scale": "शेत व मोठ्या बागांसाठी",
  "ministry of agriculture": "कृषी मंत्रालय",
  "chemical-free cropping": "रसायनमुक्त शेती",
  "peer certification": "गट प्रमाणीकरण",
  "export equivalence & retail": "निर्यात व किरकोळ बाजारपेठ",
  "national context": "राष्ट्रीय संदर्भ",
  "warning signs": "धोक्याची घंटा",
  "interactive soil biology": "परस्परसंवादी मृदा विज्ञान",
  "scientific comparison": "वैज्ञानिक तुलना",
  "agroecological management": "शाश्वत शेती व्यवस्थापन",
  "institutional support & standards": "शासकीय पाठबळ व मानके",
  "the 4 central pillars": "४ मुख्य स्तंभ",
  "step-by-step pathway": "टप्प्याटप्प्याने कृती",
  "documentation ready": "कागदपत्रे तयार ठेवा",
  "movement & outreach": "जनआंदोलन व प्रसार",
  "action roadmap": "कृती आराखडा",
  "field highlights": "मैदानी क्षणचित्रे",
  "print & share": "प्रिंट करा व वाटा",
  "get involved": "सहभागी व्हा",
  "our purpose": "आमचा उद्देश",
  "foundational vision": "मूळ दृष्टीकोन",
  "tailored guidance": "प्रत्येकासाठी स्वतंत्र मार्गदर्शन",
  "academic integrity": "वैज्ञानिक अधिष्ठान",
  "the 4 essential steps:": "४ आवश्यक पायऱ्या:",
  "speed comparison": "वेगाची तुलना",
  "biological balancing": "जैविक संतुलन",
  "troubleshooting guide": "अडचणींवर मात",
  "application rules": "फवारणीचे नियम",
  "authentic formulations": "अस्सल सेंद्रिय कृती",
  "interactive diagnosis": "परस्परसंवादी निदान",
  "practice 01": "पद्धती ०१",
  "practice 02": "पद्धती ०२",
  "practice 03": "पद्धती ०३",
  "practice 04": "पद्धती ०४",
  "stage 1": "टप्पा १",
  "stage 2": "टप्पा २",
  "stage 3": "टप्पा ३",
  "stage 4": "टप्पा ४",

  // Form labels & placeholders
  "your full name *": "तुमचे पूर्ण नाव *",
  "mobile number (whatsapp) *": "मोबाईल नंबर (WhatsApp) *",
  "state & district *": "राज्य व जिल्हा *",
  "your role / profile *": "तुमची भूमिका / ओळख *",
  "practicing farmer / grower": "सेंद्रिय शेतकरी बांधव",
  "agriculture student / researcher": "कृषी विद्यार्थी / संशोधक",
  "ngo / community organizer": "सामाजिक संस्था (NGO) / कार्यकर्ते",
  "urban home gardener": "शहरी परसबाग प्रेमी"
};

let currentLang = localStorage.getItem('jaivik_lang') || 'en';

// Helper to normalize strings for phrase dictionary matching
function normalizeText(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

// Universal DOM text translator for untagged elements
function translateDomText(lang) {
  const isMr = lang === 'mr';
  const targetSelectors = 'h1, h2, h3, h4, h5, h6, p, li, th, td, label, span.section-eyebrow, span.scheme-badge, span.recipe-meta-tag, span.benefit-chip, div.step-card h4, div.step-card p, a.btn, a.method-tab-btn, button.btn, div.dos-card h4, div.donts-card h4';

  document.querySelectorAll(targetSelectors).forEach(el => {
    // If element already has data-i18n or is inside a dynamic tool with custom handlers, skip
    if (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html')) return;

    // Check if element has direct text or simple formatted text
    const text = el.textContent ? normalizeText(el.textContent) : '';
    if (!text) return;

    if (isMr) {
      if (!el.hasAttribute('data-en-orig')) {
        el.setAttribute('data-en-orig', el.innerHTML);
      }
      if (phraseTranslations[text]) {
        el.textContent = phraseTranslations[text];
      }
    } else {
      if (el.hasAttribute('data-en-orig')) {
        el.innerHTML = el.getAttribute('data-en-orig');
      }
    }
  });

  // Also handle placeholder translations for inputs
  document.querySelectorAll('input[placeholder]').forEach(input => {
    if (isMr) {
      if (!input.hasAttribute('data-en-ph')) {
        input.setAttribute('data-en-ph', input.getAttribute('placeholder'));
      }
      const ph = normalizeText(input.getAttribute('data-en-ph'));
      if (ph.includes('ramesh patil')) input.setAttribute('placeholder', 'उदा. रमेश पाटील');
      if (ph.includes('9876543210')) input.setAttribute('placeholder', 'उदा. ९८७६५४३२१०');
      if (ph.includes('nashik')) input.setAttribute('placeholder', 'उदा. महाराष्ट्र, नाशिक');
    } else {
      if (input.hasAttribute('data-en-ph')) {
        input.setAttribute('placeholder', input.getAttribute('data-en-ph'));
      }
    }
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('jaivik_lang', lang);
  
  if (lang === 'mr') {
    document.body.classList.add('lang-mr');
  } else {
    document.body.classList.remove('lang-mr');
  }

  const dict = translations[lang] || translations.en;

  // 1. Update all elements with data-i18n (plain text)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 2. Update all elements with data-i18n-html (formatted rich content)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 3. Update language toggle button text across all headers/footers
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    const targetText = dict.lang_btn;
    btn.innerHTML = `<span class="lang-icon">🌐</span> <span class="lang-text">${targetText}</span>`;
  });

  // 4. Run universal DOM phrase translator for any untagged elements
  translateDomText(lang);

  // 5. Update dynamic organic tree if on home page
  if (typeof window.selectTreeBranch === 'function' && document.querySelector('.tree-branch-btn.active')) {
    const activeBranch = document.querySelector('.tree-branch-btn.active').getAttribute('data-branch') || 'soil';
    window.selectTreeBranch(activeBranch);
  }

  // 6. Update compost calculator if on tools page
  if (typeof calculateCompost === 'function' && document.getElementById('calc-res-title')) {
    calculateCompost();
  }

  // 7. Update pest finder if on tools/pesticides page
  if (typeof selectPest === 'function' && document.querySelector('.pest-btn.active')) {
    const activePest = document.querySelector('.pest-btn.active').getAttribute('data-pest') || 'aphids';
    selectPest(activePest);
  }

  // 8. Update quiz step if on tools page
  if (typeof renderQuizStep === 'function' && document.getElementById('quiz-step-container')) {
    renderQuizStep();
  }

  // 9. Update soil layer if on learn page
  if (typeof selectSoilLayer === 'function' && document.querySelector('.soil-layer-slice.active')) {
    const activeSoil = document.querySelector('.soil-layer-slice.active').getAttribute('data-layer') || 'humus';
    selectSoilLayer(activeSoil);
  }
}

function toggleLanguage() {
  const nextLang = currentLang === 'en' ? 'mr' : 'en';
  applyLanguage(nextLang);
}

// Initialise language on page load
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });
});
