# 🌱 JaivikSetu (जैविकसेतू) – Organic Farming Awareness Hub

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3 Tokens](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: ISC](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)](LICENSE)
[![Bilingual: EN & MR](https://img.shields.io/badge/Language-English%20%7C%20%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%A0%E0%A5%80-orange?style=for-the-badge)](#bilingual-engine)

> **"Jaivik" = Organic · "Setu" = Bridge**  
> Bridging India's awareness and adoption gap in organic farming through open-access scientific guides, practical grassroots tools, and policy navigation.

---

## 🌟 Overview

**JaivikSetu** is an open-access, public awareness web platform built for Indian farmers, urban gardeners, agricultural students, and grassroots extension workers. 

While India leads the world in absolute numbers of certified organic producers, millions of small and marginal farmers remain dependent on chemical inputs due to:
1. **The Chemical Treadmill**: Rising fertilizer costs and declining soil organic carbon.
2. **Knowledge Barriers**: Confusing academic jargon and lack of step-by-step preparation recipes.
3. **Certification Bureaucracy**: Misconceptions about PGS-India vs. NPOP certification procedures.

**JaivikSetu** bridges this gap with structured visual knowledge, practical recipes, dynamic decision calculators, and complete dual-language support (**English and Marathi**).

---

## ✨ Key Features

### 1. 📖 Interactive Living Soil Science (`learn.html`)
- **Living Soil Explorer**: Interactive 3-layer cross-section exploring Humus, Topsoil, and Subsoil with dynamic biological metrics.
- **Microbial Inoculants**: Step-by-step guides for Jeevamrut (जीवामृत), Beejamrit (बीजामृत), and Panchagavya.
- **The 4 IFOAM Principles**: Clear breakdown of Health, Ecology, Fairness, and Care.

### 2. 🍂 6 Master Composting Guides (`composting.html`)
Step-by-step instructions with C:N ratios, pit dimensions, temperature curves, and aeration specifications:
- **NADEP Method**: Brick tank aeration system pioneered by N.D. Pandharipande.
- **Vermicomposting (गांडूळ खत)**: Optimal beds using *Eisenia fetida*.
- **18-Day Berkeley Hot Composting**: Rapid high-heat decomposition method.
- **Indore Pit & Heap Methods**: Traditional farm waste stacking techniques.
- **Kitchen Bokashi & Aerobic Bins**: Odorless urban home composting.

### 3. 🌿 Botanical Formulations & Bio-Repellents (`pesticides.html`)
- Preparation steps, dilution rates, and safety harvest intervals:
  - **Neem Seed Kernel Extract (NSKE 5%)** (निंबोळी अर्क)
  - **Dashparni Ark (दशपर्णी अर्क)** – 10-leaf broad-spectrum organic spray
  - **Agniastra (अग्निअस्त्र)** & **Brahmastra (ब्रह्मास्त्र)** – Concentrated repellents for borers and leaf-folders
  - **Sour Buttermilk Spray (ताक फवारणी)** – Natural antifungal for powdery & downy mildew
- **Physical Traps**: Yellow/Blue sticky sheets and Pheromone lures.

### 4. 🌾 Sustainable Field Practices (`field-practices.html`)
- Legume crop rotation schemes to fix atmospheric nitrogen.
- Multispecies intercropping and border trap cropping (e.g. Marigold, Maize).
- Organic biomass mulching for 60% soil moisture retention.
- Precision drip irrigation guidelines.

### 5. 📜 Government Schemes & Certification Navigator (`schemes.html`)
- **PKVY (Paramparagat Krishi Vikas Yojana)**: ₹50,000/ha cluster assistance.
- **BPKP / NMNF (National Mission on Natural Farming)**: Cow maintenance & bio-input subsidies.
- **MOVCDNER**: Dedicated northeastern organic value chain development.
- **PGS-India vs. NPOP Comparison Matrix**: Clear decision path between domestic group certification and third-party export standards.

### 6. 🧮 4 Smart Interactive Digital Aids (`tools.html`)
- **Compost Method Calculator**: Automatically recommends the ideal composting method based on available daily waste, land area, and timeline.
- **Pest & Disease Diagnostic Finder**: Select crop damage symptoms to receive instant bio-spray recipes and biological control remedies.
- **Organic Transition Readiness Quiz**: 5-question diagnostic evaluating soil condition, water source, and livestock availability.
- **Myth vs. Fact Flashcards**: Interactive cards debunking common misconceptions about yields, costs, and organic timelines.

### 7. 🌐 Dual-Language Engine (English & मराठी)
- Seamless real-time bilingual switching across every page, card, modal, and tool.
- Automatically persists user language preference in `localStorage`.

### 8. 🖨️ Printable One-Page PDF Cheat-Sheets
- Formatted printable quick-reference summaries for offline distribution in gram panchayats and farmer study circles.

---

## 🏗️ Architecture & Technology Stack

Built using **Pure Vanilla Web Standards** for zero dependencies, instant page loads, and 100% offline reliability:

- **HTML5**: Semantic structure, microdata-ready, accessibility-compliant (`aria-*`).
- **CSS3 Design System**: Custom property design tokens (`tokens.css`) defining colors (Deep Forest `#1e3f20`, Fresh Earth `#2f6b32`, Terracotta `#6b4a2a`, Warm Cream `#fbf8ee`), typography, shadows, and spacing.
- **Vanilla JavaScript (ES6+)**:
  - `i18n.js`: Complete 1700+ line bilingual dictionary engine.
  - `tools.js`: Interactive calculators, quiz engine, modal renderer.
  - `particles.js`: Lightweight HTML5 canvas organic spore animation.
  - `main.js`: Sticky navigation, smooth scroll, and mobile drawer handlers.
- **Performance**: Zero external npm runtime dependencies, sub-50ms render, optimized WebP imagery.

---

## 📂 Project Directory Structure

```text
JaivikSetu/
├── index.html               # Home portal & Interactive Knowledge Tree
├── learn.html               # Soil science & living biology explorer
├── composting.html          # 6 Master Composting guides & specs
├── pesticides.html          # Botanical pesticide formulations
├── field-practices.html     # Crop rotation, mulching & drip systems
├── schemes.html             # PKVY, BPKP, PGS-India & NPOP portal
├── tools.html               # Compost calculator, Pest diagnostic & Quiz
├── campaign.html            # Grassroots awareness & volunteer drive
├── about.html               # Mission, personas & academic citations
├── 404.html                 # Branded bilingual 404 error page
│
├── css/
│   ├── tokens.css           # Design tokens (colors, fonts, elevations)
│   └── global.css           # Layouts, components, responsive styles
│
├── js/
│   ├── i18n.js              # Complete English & Marathi localization engine
│   ├── main.js              # Header, mobile navigation & interaction logic
│   ├── tools.js             # Calculator, diagnostic & modal logic
│   └── particles.js         # Canvas organic particle background
│
├── assets/
│   └── images/              # Hero banner, WebP images & OpenGraph assets
│
├── vercel.json              # Vercel deployment configuration & caching headers
├── robots.txt               # Search engine crawler permissions
├── sitemap.xml              # XML Sitemap for search engines
├── package.json             # Project metadata & start scripts
├── local-server.js          # Built-in lightweight local development server
└── .gitignore               # Excluded files for git version control
```

---

## 🚀 Getting Started & Local Development

### Option 1: Native Node.js Development Server (Recommended)
Clone the repository and run:
```bash
npm start
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: VS Code Live Server
Right-click on `index.html` and click **"Open with Live Server"**.

### Option 3: Python Built-in Server
```bash
# Python 3
python -m http.server 3000
```

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)

#### Method A: Via GitHub Integration (One-Click)
1. Push this repository to your GitHub account (see [GitHub Steps](#pushing-to-github)).
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Add New..."** -> **"Project"**.
4. Import your `JaivikSetu` repository.
5. In **Framework Preset**, leave it as **"Other"**.
6. The `vercel.json` already contains `cleanUrls: true` and security/caching headers.
7. Click **"Deploy"**. Your site will be live within seconds!

#### Method B: Via Vercel CLI
```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Deploy directly from the project directory
vercel

# 3. For production release
vercel --prod
```

---

## 🐙 Pushing to GitHub

To publish this project to your GitHub account:

```bash
# 1. Initialize git (if not already done)
git init -b main

# 2. Add all project files
git add .

# 3. Commit the repository
git commit -m "Initial release: JaivikSetu Organic Farming Awareness Hub"

# 4. Link your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# 5. Push to GitHub
git push -u origin main
```

---

## 📚 Academic & Statutory References

All formulations, preparation ratios, and scheme parameters on JaivikSetu are cross-verified against official statutory publications:
- **ICAR (Indian Council of Agricultural Research)**: Package of Practices for Organic Farming in Important Crops, National Institute of Organic Farming (NIOF).
- **APEDA (Ministry of Commerce & Industry, GoI)**: National Programme for Organic Production (NPOP) Standards (2024–2025).
- **Ministry of Agriculture & Farmers Welfare, GoI**: Paramparagat Krishi Vikas Yojana (PKVY) & National Mission on Natural Farming (NMNF) Operational Guidelines.
- **IFOAM – Organics International**: The Four Principles of Organic Agriculture: Health, Ecology, Fairness, and Care.
- **FSSAI**: Food Safety and Standards (Organic Foods) Regulations & Jaivik Bharat Certification Manual.
- **Pandharipande, N.D. (Kaka)**: Original Engineering Specifications of the NADEP Composting Tank Method, Prayog Parivar, Maharashtra.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).  
Created as an open-access public service initiative dedicated to India's farming communities.
