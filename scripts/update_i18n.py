import sys
import os

with open('js/i18n.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update nav_about in en and mr to include nav_activities
if 'nav_activities:' not in content:
    content = content.replace('nav_about: "About",', 'nav_activities: "Activities",\n    nav_about: "About",')
    content = content.replace('nav_about: "परिचय",', 'nav_activities: "उपक्रम",\n    nav_about: "परिचय",')

# 2. Add EN activities translations
en_insert = '''
    // ===================================================================
    // ACTIVITIES & FIELD EXPERIENCES (PRD & activities.md)
    // ===================================================================
    // Home Page Teaser
    teaser_activities_eyebrow: "Our Ground Action",
    teaser_activities_title: "Our Activities & Field Experiences",
    teaser_activities_sub: "From soil research and farmer interviews to field surveys and digital tools — exploring practical pathways for chemical-free agriculture.",
    teaser_activities_btn: "See Our Activities ➔",

    // Activities Page Header & Hero
    act_hero_eyebrow: "Ground Engagement & Research",
    act_hero_title: "Our Activities & Field Experiences",
    act_hero_sub: "Our project focused on understanding awareness and adoption of organic farming practices among farmers. We combined research, field visits, farmer interaction, surveys and awareness activities to understand the practical challenges associated with organic farming.",
    act_hero_sub2: "Each activity helped us explore a different aspect of the topic, from observing existing farming practices to preparing a digital resource that makes organic farming information easier to access.",
    act_breadcrumb_home: "Home",
    act_breadcrumb_act: "Activities",

    // Sub-navigation pills
    act_subnav_journey: "🌱 Our Journey",
    act_subnav_gallery: "🖼️ Image Gallery",
    act_subnav_learning: "💡 Project Learning",

    // Stats Ribbon
    act_stat_1_num: "8",
    act_stat_1_lbl: "Activities Completed",
    act_stat_1_sub: "Comprehensive Project Work",
    act_stat_2_num: "3",
    act_stat_2_lbl: "Field Locations Explored",
    act_stat_2_sub: "Hanumanwadi · Vidhate Farm · Lalgun",
    act_stat_3_num: "1",
    act_stat_3_lbl: "Open-Access Digital Platform",
    act_stat_3_sub: "JaivikSetu",
    act_stat_4_num: "1",
    act_stat_4_lbl: "Marathi Article Authored",
    act_stat_4_sub: "Bridging Research & Practice",

    // Journey Section
    act_journey_eyebrow: "Chronological Progression",
    act_journey_title: "Our Journey",
    act_journey_sub: "Exploring organic agriculture across 8 structured milestones from research to community action.",

    // Activity Titles & Subtitles (EN)
    act_1_title: "1. Research & Organic Farming Awareness",
    act_1_sub: "Understanding Organic Farming Beyond Theory",
    act_2_title: "2. Field Visit – Hanumanwadi, Alandi Devachi, Pune",
    act_2_sub: "Understanding Farming Practices at the Ground Level",
    act_3_title: "3. Farmer Interview – Vidhate Natural Farm, Manjari Budruk",
    act_3_sub: "Learning from Natural Farming and Biodiversity",
    act_4_title: "4. Farmer Awareness & Survey – Lalgun Village",
    act_4_sub: "Understanding Awareness, Adoption and Farmers' Needs",
    act_5_title: "5. Digital Initiative – JaivikSetu",
    act_5_sub: "Connecting Organic Farming Information with Practical Guidance",
    act_6_title: "6. Article Writing – Sharing Our Findings",
    act_6_sub: "Communicating the Importance of Organic Farming Awareness",
    act_7_title: "7. Awareness Poster – Communicating Through Visuals",
    act_7_sub: "Presenting Organic Farming in a Simple and Engaging Format",
    act_8_title: "8. Newspaper Clipping Analysis",
    act_8_sub: "Learning from Agricultural News and Public Information",

    // UI Badges & Buttons
    badge_illustration: "Illustration",
    badge_chart: "Chart",
    badge_screenshot: "Screenshot",
    badge_document: "Document",
    view_all_photos: "View in gallery ➔",
    exp_learning_heading: "Experience & Learning",
    key_learning_heading: "Key Learning",
    survey_charts_heading: "Survey Charts (Lalgun Village)",
    btn_explore_website: "Explore the Website ↗",
    btn_source_code: "Source Code ↗",

    // Gallery Section
    gallery_eyebrow: "Visual Documentation",
    gallery_title: "Project Image Gallery",
    gallery_sub: "Authentic photographs, survey data charts, digital interface screenshots, and news cutouts from our project work.",
    filter_all: "All",
    filter_research: "Research",
    filter_field_visit: "Field Visit",
    filter_interview: "Farm Interview",
    filter_survey: "Survey",
    filter_digital: "JaivikSetu",
    filter_article: "Article",
    filter_poster: "Poster",
    filter_newspaper: "Newspaper",

    // Lightbox Controls
    lb_prev: "Previous image",
    lb_next: "Next image",
    lb_close: "Close viewer (Esc)",
    lb_open_orig: "Open original ↗",

    // Overall Learning
    learning_eyebrow: "Reflections & Insights",
    learning_title: "Overall Project Learning",
    takeaway_label: "Our central takeaway:",
    takeaway_quote: "Increasing awareness is an important beginning; making organic farming practices easier to understand and adopt is the next step.",
    cta_about_title: "Know more about the project and mission",
    cta_about_sub: "Explore our non-commercial ethos, references, and open-access educational tools for Indian agriculture.",
    cta_about_btn: "About JaivikSetu ➔",
'''

# 3. Add MR activities translations
mr_insert = '''
    // ===================================================================
    // उपक्रम व क्षेत्रीय अनुभव (ACTIVITIES & FIELD EXPERIENCES)
    // ===================================================================
    // Home Page Teaser
    teaser_activities_eyebrow: "आमचे प्रत्यक्ष कार्य",
    teaser_activities_title: "आमचे उपक्रम व क्षेत्रीय अनुभव",
    teaser_activities_sub: "माती संशोधन, शेतकरी मुलाखती, सर्वेक्षण ते डिजिटल व्यासपीठापर्यंत — सेंद्रिय शेतीतील प्रत्यक्ष अनुभवांचा प्रवास.",
    teaser_activities_btn: "आमचे उपक्रम पहा ➔",

    // Activities Page Header & Hero
    act_hero_eyebrow: "प्रत्यक्ष सहभाग व संशोधन",
    act_hero_title: "आमचे उपक्रम व क्षेत्रीय अनुभव",
    act_hero_sub: "आमच्या प्रकल्पाचा मुख्य भर शेतकऱ्यांमधील सेंद्रिय शेती पद्धतींची जाणीव आणि त्यांचा प्रत्यक्ष अवलंब समजून घेण्यावर होता. सेंद्रिय शेतीशी संबंधित व्यवहार्य आव्हाने समजण्यासाठी आम्ही संशोधन, शिवार भेटी, शेतकरी संवाद, सर्वेक्षण आणि जनजागृती उपक्रमांची सांगड घातली.",
    act_hero_sub2: "प्रत्येक उपक्रमाने आम्हाला विषयाच्या वेगवेगळ्या पैलूंचा अभ्यास करण्यास मदत केली — अस्तित्वातील शेती पद्धतींचे निरीक्षण करण्यापासून ते सेंद्रिय शेतीची माहिती सहज उपलब्ध करून देणारे डिजिटल व्यासपीठ तयार करण्यापर्यंत.",
    act_breadcrumb_home: "मुख्यपृष्ठ",
    act_breadcrumb_act: "उपक्रम",

    // Sub-navigation pills
    act_subnav_journey: "🌱 आमचा प्रवास",
    act_subnav_gallery: "🖼️ छायाचित्र दालन",
    act_subnav_learning: "💡 प्रकल्पातील शिकवण",

    // Stats Ribbon
    act_stat_1_num: "८",
    act_stat_1_lbl: "पूर्ण केलेले उपक्रम",
    act_stat_1_sub: "सर्वसमावेशक प्रकल्प कार्य",
    act_stat_2_num: "३",
    act_stat_2_lbl: "अभ्यासलेली क्षेत्रीय ठिकाणे",
    act_stat_2_sub: "हनुमानवाडी · विधाते फार्म · लालगुण",
    act_stat_3_num: "१",
    act_stat_3_lbl: "खुले डिजिटल व्यासपीठ",
    act_stat_3_sub: "जैविकसेतू (JaivikSetu)",
    act_stat_4_num: "१",
    act_stat_4_lbl: "प्रकाशित मराठी लेख",
    act_stat_4_sub: "संशोधन व व्यवहाराची सांगड",

    // Journey Section
    act_journey_eyebrow: "कालक्रमानुसार टप्पे",
    act_journey_title: "आमचा प्रवास",
    act_journey_sub: "सेंद्रिय शेतीचा पायाभूत अभ्यास ते थेट ग्रामपातळीवरील जनजागृतीपर्यंतच्या ८ टप्प्यांचा प्रवास.",

    // Activity Titles & Subtitles (MR)
    act_1_title: "१. संशोधन व सेंद्रिय शेती जनजागृती",
    act_1_sub: "सेंद्रिय शेती पद्धती, मातीचे आरोग्य आणि जनजागृतीचा सखोल अभ्यास",
    act_2_title: "२. शिवार भेट – हनुमानवाडी, आळंदी देवाची, पुणे",
    act_2_sub: "स्थानिक शेतकऱ्यांशी थेट संवाद साधून प्रत्यक्ष शेती पद्धती व आव्हाने समजून घेतली",
    act_3_title: "३. शेतकरी मुलाखत – विधाते नॅचरल फार्म, मांजरी बुद्रुक",
    act_3_sub: "नैसर्गिक शेती, दुर्मीळ देशी वाण संवर्धन व जैवविविधतेचे प्रत्यक्ष दर्शन",
    act_4_title: "४. शेतकरी जनजागृती व सर्वेक्षण – लालगुण गाव",
    act_4_sub: "शेतकऱ्यांची सेंद्रिय शेतीविषयक जाणीव, प्रत्यक्ष वापर आणि गरजांचे पद्धतशीर सर्वेक्षण",
    act_5_title: "५. डिजिटल पुढाकार – जैविकसेतू (JaivikSetu)",
    act_5_sub: "सेंद्रिय शेतीची शास्त्रीय व व्यवहार्य माहिती सुलभपणे उपलब्ध करून देणारे खुले संकेतस्थळ",
    act_6_title: "६. लेख लेखन – निष्कर्षांची मांडणी",
    act_6_sub: "“सेंद्रिय शेतीचा स्वीकार वाढवण्यासाठी जागरूकतेसोबत व्यवहार्य मार्गदर्शनही गरजेचे” (Practical Guidance Alongside Awareness Is Essential to Increase the Adoption of Organic Farming)",
    act_7_title: "७. जनजागृती भित्तीपत्रक (पोस्टर) – दृकश्राव्य मांडणी",
    act_7_sub: "सेंद्रिय शेती पद्धती व प्रकल्पातील निरीक्षणे रंजक व दृश्य स्वरूपात मांडणारे माहितीपत्रक",
    act_8_title: "८. वृत्तपत्र कात्रण विश्लेषण",
    act_8_sub: "कृषी विषयक वृत्तपत्रीय बातम्या, सरकारी योजना व यशोगाथांचे सखोल विश्लेषण",

    // UI Badges & Buttons
    badge_illustration: "चित्र / आकृती",
    badge_chart: "आलेख / तक्ता",
    badge_screenshot: "स्क्रीनशॉट",
    badge_document: "कागदपत्र / कात्रण",
    view_all_photos: "दालनात पहा ➔",
    exp_learning_heading: "अनुभव आणि शिकवण",
    key_learning_heading: "महत्त्वाची शिकवण",
    survey_charts_heading: "सर्वेक्षण आलेख (लालगुण गाव)",
    btn_explore_website: "संकेतस्थळ पहा ↗",
    btn_source_code: "सोर्स कोड ↗",

    // Gallery Section
    gallery_eyebrow: "दृश्य दस्तऐवजीकरण",
    gallery_title: "प्रकल्प छायाचित्र दालन",
    gallery_sub: "शिवार भेटी, शेतकरी मुलाखती, सर्वेक्षण आलेख आणि वृत्तपत्रांतील कात्रणांचे प्रामाणिक संग्रह.",
    filter_all: "सर्व",
    filter_research: "संशोधन",
    filter_field_visit: "शिवार भेट",
    filter_interview: "शेतकरी मुलाखत",
    filter_survey: "सर्वेक्षण",
    filter_digital: "जैविकसेतू",
    filter_article: "लेख",
    filter_poster: "भित्तीपत्रक",
    filter_newspaper: "वृत्तपत्र विश्लेषण",

    // Lightbox Controls
    lb_prev: "मागील छायाचित्र",
    lb_next: "पुढील छायाचित्र",
    lb_close: "बंद करा (Esc)",
    lb_open_orig: "मूळ चित्र पहा ↗",

    // Overall Learning
    learning_eyebrow: "प्रकल्पाचा सारांश व निष्कर्ष",
    learning_title: "प्रकल्पातील एकूण शिकवण",
    takeaway_label: "आमचा मुख्य निष्कर्ष:",
    takeaway_quote: "जागरूकता वाढवणे ही एक महत्त्वाची सुरुवात आहे; सेंद्रिय शेती पद्धती समजून घेणे आणि त्यांचा अंगीकार करणे सोपे करणे ही पुढची पायरी आहे.",
    cta_about_title: "प्रकल्प आणि ध्येयाबद्दल अधिक जाणून घ्यायचे आहे का?",
    cta_about_sub: "आमची बिनव्यापारी भूमिका, संदर्भ आणि भारतीय कृषी क्षेत्रासाठी खुली शैक्षणिक साधने जाणून घ्या.",
    cta_about_btn: "जैविकसेतूबद्दल माहिती ➔",
'''

# Find 'mr: {'
mr_pos = content.find('mr: {')
if mr_pos != -1:
    content = content[:mr_pos] + en_insert + '\n  ' + content[mr_pos:]

# Find the end of translations object, right before 'let currentLang'
end_trans_pos = content.find('let currentLang')
if end_trans_pos != -1:
    brace_pos = content.rfind('};', 0, end_trans_pos)
    if brace_pos != -1:
        content = content[:brace_pos] + mr_insert + '\n  ' + content[brace_pos:]

with open('js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated js/i18n.js successfully')
