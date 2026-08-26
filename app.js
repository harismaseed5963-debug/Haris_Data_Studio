/**
 * HARIS DATA STUDIO - Application Controller
 * Brand: Haris Data Studio
 * Tagline: "Turn Data Into Decisions."
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Application Components
  initNavbar();
  initHeroDashboard();
  renderSkillStrip();
  renderAboutProcess();
  renderServices();
  renderProjects();
  renderDataPipeline();
  renderWhyUs();
  renderInsights();
  initContactForm();
  initScrollAnimations();
  initModalListeners();
});

/* ==========================================================================
   NAVBAR & SCROLL CONTROLLER
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');

  // Shrink navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNav();
  });

  // Mobile menu drawer toggle
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('active');
      if (isOpen) {
        mobileNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile nav when link clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}

/* ==========================================================================
   HERO DASHBOARD CONTROLLER
   ========================================================================== */
function initHeroDashboard() {
  HarisCharts.initHeroChart();

  const monthlyBtn = document.getElementById('btnMonthlyPeriod');
  const quarterlyBtn = document.getElementById('btnQuarterlyPeriod');

  if (monthlyBtn && quarterlyBtn) {
    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('active');
      quarterlyBtn.classList.remove('active');
      HarisCharts.updateHeroPeriod('monthly');
    });

    quarterlyBtn.addEventListener('click', () => {
      quarterlyBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
      HarisCharts.updateHeroPeriod('quarterly');
    });
  }
}

/* ==========================================================================
   SKILL STRIP RENDERER
   ========================================================================== */
function renderSkillStrip() {
  const container = document.getElementById('skillStripContainer');
  if (!container) return;

  container.innerHTML = HarisDataStore.skills.map(skill => `
    <div class="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-[rgba(3,4,94,0.08)] rounded-xl shadow-sm hover:border-[#00B4D8] hover:shadow-md transition-all">
      <div class="w-2.5 h-2.5 rounded-full bg-[#00B4D8]"></div>
      <div>
        <span class="font-bold text-sm text-[#03045E] block leading-tight">${skill.name}</span>
        <span class="text-xs text-[#6E7A9F] block">${skill.desc}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   ABOUT 3-STEP PROCESS RENDERER
   ========================================================================== */
function renderAboutProcess() {
  const container = document.getElementById('aboutProcessContainer');
  if (!container) return;

  container.innerHTML = HarisDataStore.aboutProcess.map(step => `
    <div class="dash-card flex flex-col justify-between group hover:border-[#00B4D8]">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl font-extrabold text-[#00B4D8] font-mono">${step.num}</span>
          <span class="text-xs font-bold tracking-wider px-2.5 py-1 bg-[#CAF0F8] text-[#03045E] rounded-md">PHASE ${step.num}</span>
        </div>
        <h3 class="text-xl font-bold text-[#03045E] mb-2 group-hover:text-[#00B4D8] transition-colors">${step.title}</h3>
        <p class="text-sm text-[#3D486B] leading-relaxed mb-4">${step.summary}</p>
      </div>
      <div class="pt-4 border-t border-[rgba(3,4,94,0.08)]">
        <p class="text-xs text-[#6E7A9F] leading-relaxed">${step.details}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   SERVICES RENDERER & MODAL
   ========================================================================== */
function renderServices() {
  const container = document.getElementById('servicesGridContainer');
  if (!container) return;

  container.innerHTML = HarisDataStore.services.map(service => `
    <div class="dash-card flex flex-col justify-between group hover:border-[#00B4D8] cursor-pointer" onclick="openServiceModal('${service.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-mono font-bold text-[#00B4D8] tracking-widest">${service.num}</span>
          <div class="w-9 h-9 rounded-lg bg-[#CAF0F8] text-[#03045E] flex items-center justify-center group-hover:bg-[#00B4D8] group-hover:text-white transition-all">
            <i data-lucide="${service.icon}" class="w-5 h-5"></i>
          </div>
        </div>
        <h3 class="text-xl font-bold text-[#03045E] mb-2 group-hover:text-[#00B4D8] transition-colors">${service.title}</h3>
        <p class="text-sm text-[#3D486B] mb-4">${service.shortDesc}</p>
        <ul class="space-y-2 mb-6">
          ${service.features.map(f => `
            <li class="flex items-center gap-2 text-xs text-[#3D486B]">
              <i data-lucide="check" class="w-3.5 h-3.5 text-[#00B4D8] shrink-0"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <button class="w-full py-2.5 px-4 bg-[#CAF0F8] text-[#03045E] text-xs font-bold rounded-lg group-hover:bg-[#00B4D8] group-hover:text-white transition-all flex items-center justify-center gap-1.5">
        <span>Explore Service Details</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function openServiceModal(serviceId) {
  const service = HarisDataStore.services.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('globalModalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  title.innerText = `${service.num}: ${service.title}`;
  body.innerHTML = `
    <div class="space-y-6">
      <div class="p-4 bg-[#CAF0F8] rounded-xl border border-[rgba(0,180,216,0.3)]">
        <p class="text-sm font-semibold text-[#03045E]">${service.shortDesc}</p>
      </div>
      
      <div>
        <h4 class="text-sm font-bold uppercase tracking-wider text-[#03045E] mb-3">Service Scope & Deliverables</h4>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${service.features.map(f => `
            <div class="p-3 bg-[#F8FDFF] border border-[rgba(3,4,94,0.08)] rounded-lg flex items-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-[#00B4D8] shrink-0"></i>
              <span class="text-xs font-medium text-[#03045E]">${f}</span>
            </div>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-[rgba(3,4,94,0.1)]">
        <h4 class="text-sm font-bold uppercase tracking-wider text-[#03045E] mb-2">Detailed Approach</h4>
        <p class="text-sm text-[#3D486B] leading-relaxed">${service.fullDetails}</p>
      </div>

      <div class="flex items-center gap-3 pt-4">
        <a href="#contact" onclick="closeModal()" class="btn btn-primary flex-1">
          <i data-lucide="mail" class="w-4 h-4"></i>
          <span>Inquire About ${service.title}</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   PROJECTS RENDERER & CASE STUDY MODAL
   ========================================================================== */
function renderProjects(filterCategory = 'All') {
  const container = document.getElementById('projectsGridContainer');
  const filterContainer = document.getElementById('projectFilterTabs');
  if (!container) return;

  // Render Category Filter Tabs
  const categories = ['All', 'SQL', 'Excel', 'Power BI', 'Python'];
  filterContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === filterCategory ? 'active' : ''}" onclick="filterProjects('${cat}')">
      ${cat}
    </button>
  `).join('');

  // Filter projects dataset
  const filtered = filterCategory === 'All' 
    ? HarisDataStore.projects 
    : HarisDataStore.projects.filter(p => p.tools.includes(filterCategory) || p.category === filterCategory);

  container.innerHTML = filtered.map(proj => `
    <div class="dash-card flex flex-col justify-between group hover:border-[#00B4D8]">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-mono font-bold text-[#00B4D8]">${proj.num}</span>
          <div class="flex gap-1.5">
            ${proj.tools.map(t => `<span class="px-2 py-0.5 text-[10px] font-bold bg-[#CAF0F8] text-[#03045E] rounded">${t}</span>`).join('')}
          </div>
        </div>

        <h3 class="text-xl font-bold text-[#03045E] mb-2 group-hover:text-[#00B4D8] transition-colors">${proj.title}</h3>
        <p class="text-sm text-[#3D486B] mb-4">${proj.shortDesc}</p>

        <div class="p-3 bg-[#F8FDFF] border border-[rgba(0,180,216,0.2)] rounded-lg mb-6">
          <div class="flex items-center gap-1.5 text-xs font-bold text-[#00B4D8] mb-1">
            <i data-lucide="lightbulb" class="w-3.5 h-3.5"></i>
            <span>KEY INSIGHT</span>
          </div>
          <p class="text-xs text-[#03045E] font-medium leading-relaxed">${proj.insight}</p>
        </div>
      </div>

      <button class="w-full btn btn-primary text-xs py-2.5" onclick="openCaseStudyModal('${proj.id}')">
        <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
        <span>View Full Case Study</span>
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterProjects(cat) {
  renderProjects(cat);
}

function openCaseStudyModal(projId) {
  const proj = HarisDataStore.projects.find(p => p.id === projId);
  if (!proj) return;

  const modal = document.getElementById('globalModalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  title.innerText = `${proj.num}: ${proj.title}`;
  body.innerHTML = `
    <div class="space-y-6">
      <div class="flex gap-2 mb-2">
        ${proj.tools.map(t => `<span class="px-2.5 py-1 text-xs font-bold bg-[#CAF0F8] text-[#03045E] rounded-md">${t}</span>`).join('')}
      </div>

      <div class="grid grid-cols-3 gap-3">
        ${proj.caseStudy.metrics.map(m => `
          <div class="p-3 bg-[#F8FDFF] border border-[rgba(3,4,94,0.08)] rounded-xl text-center">
            <span class="block text-lg font-extrabold text-[#00B4D8]">${m.value}</span>
            <span class="block text-[11px] font-semibold text-[#6E7A9F] uppercase tracking-wider">${m.label}</span>
          </div>
        `).join('')}
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#03045E] mb-1">Business Problem</h4>
        <p class="text-sm text-[#3D486B]">${proj.caseStudy.problem}</p>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#03045E] mb-1">Analytical Approach</h4>
        <p class="text-sm text-[#3D486B]">${proj.caseStudy.approach}</p>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#03045E] mb-2">Interactive Data Preview</h4>
        <div class="h-48 w-full bg-[#F8FDFF] border border-[rgba(3,4,94,0.08)] rounded-xl p-3">
          <canvas id="caseStudyChartCanvas"></canvas>
        </div>
      </div>

      <div class="p-3.5 bg-[#CAF0F8] rounded-xl border border-[rgba(0,180,216,0.3)]">
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#03045E] mb-1">Core Recommendation</h4>
        <p class="text-xs text-[#03045E] font-medium">${proj.insight}</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) lucide.createIcons();

  // Render chart inside modal after layout frame
  setTimeout(() => {
    HarisCharts.renderCaseStudyChart('caseStudyChartCanvas', proj.caseStudy.chartData);
  }, 100);
}

/* ==========================================================================
   DATA PIPELINE STORYTELLING RENDERER
   ========================================================================== */
function renderDataPipeline() {
  const container = document.getElementById('pipelineStepsContainer');
  const detailsBox = document.getElementById('pipelineDetailsBox');
  if (!container) return;

  container.innerHTML = HarisDataStore.storylineSteps.map((step, idx) => `
    <div class="p-4 bg-white border border-[rgba(3,4,94,0.08)] rounded-xl shadow-sm hover:border-[#00B4D8] cursor-pointer transition-all ${idx === 0 ? 'ring-2 ring-[#00B4D8]' : ''}"
         onclick="selectPipelineStep('${step.id}', this)">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-mono font-bold text-[#00B4D8]">${step.stepNum}</span>
        <i data-lucide="chevron-right" class="w-4 h-4 text-[#6E7A9F]"></i>
      </div>
      <h4 class="font-bold text-sm text-[#03045E] mb-1">${step.title}</h4>
      <p class="text-xs text-[#6E7A9F] line-clamp-1">${step.subtitle}</p>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();

  // Select initial step
  selectPipelineStep('raw-data');
}

function selectPipelineStep(stepId, element) {
  const step = HarisDataStore.storylineSteps.find(s => s.id === stepId);
  if (!step) return;

  if (element) {
    document.querySelectorAll('#pipelineStepsContainer > div').forEach(el => {
      el.classList.remove('ring-2', 'ring-[#00B4D8]');
    });
    element.classList.add('ring-2', 'ring-[#00B4D8]');
  }

  const detailsBox = document.getElementById('pipelineDetailsBox');
  if (detailsBox) {
    detailsBox.innerHTML = `
      <div class="animate-fade-in-up visible">
        <div class="flex items-center gap-2 mb-3">
          <span class="px-2.5 py-1 text-xs font-extrabold bg-[#00B4D8] text-white rounded-md font-mono">STAGE ${step.stepNum}</span>
          <span class="text-xs font-bold text-[#6E7A9F] uppercase tracking-wider">${step.subtitle}</span>
        </div>
        <h3 class="text-2xl font-extrabold text-[#03045E] mb-3">${step.title}</h3>
        <p class="text-base text-[#3D486B] font-medium leading-relaxed mb-4">${step.desc}</p>
        <div class="p-4 bg-white border border-[rgba(3,4,94,0.08)] rounded-xl">
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#03045E] mb-1">Execution Methodology</h4>
          <p class="text-xs text-[#6E7A9F] leading-relaxed">${step.details}</p>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   WHY HARIS DATA STUDIO RENDERER
   ========================================================================== */
function renderWhyUs() {
  const container = document.getElementById('whyHarisContainer');
  if (!container) return;

  container.innerHTML = HarisDataStore.whyUs.map(item => `
    <div class="dash-card group hover:border-[#00B4D8]">
      <span class="block text-3xl font-extrabold text-[#00B4D8] font-mono mb-3">${item.num}</span>
      <h3 class="text-xl font-bold text-[#03045E] mb-2 group-hover:text-[#00B4D8] transition-colors">${item.title}</h3>
      <p class="text-sm text-[#3D486B] leading-relaxed">${item.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   INSIGHTS RENDERER & READER MODAL
   ========================================================================== */
function renderInsights(filterCategory = 'All') {
  const container = document.getElementById('insightsGridContainer');
  const filterContainer = document.getElementById('insightFilterTabs');
  if (!container) return;

  const categories = ['All', 'Excel Tips', 'SQL Tutorials', 'Power BI', 'Business Insights'];
  filterContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === filterCategory ? 'active' : ''}" onclick="filterInsights('${cat}')">
      ${cat}
    </button>
  `).join('');

  const filtered = filterCategory === 'All'
    ? HarisDataStore.articles
    : HarisDataStore.articles.filter(a => a.category === filterCategory);

  container.innerHTML = filtered.map(art => `
    <div class="dash-card flex flex-col justify-between group hover:border-[#00B4D8]">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 text-[11px] font-bold bg-[#CAF0F8] text-[#03045E] rounded-md">${art.category}</span>
          <span class="text-xs text-[#6E7A9F] font-medium">${art.readTime}</span>
        </div>
        <h3 class="text-lg font-bold text-[#03045E] mb-2 group-hover:text-[#00B4D8] transition-colors">${art.title}</h3>
        <p class="text-xs text-[#3D486B] leading-relaxed mb-6">${art.shortDesc}</p>
      </div>

      <button class="w-full py-2 px-3 bg-[#CAF0F8] text-[#03045E] text-xs font-bold rounded-lg group-hover:bg-[#00B4D8] group-hover:text-white transition-all flex items-center justify-center gap-1.5"
              onclick="openArticleModal('${art.id}')">
        <span>Read Full Article</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterInsights(cat) {
  renderInsights(cat);
}

function openArticleModal(artId) {
  const art = HarisDataStore.articles.find(a => a.id === artId);
  if (!art) return;

  const modal = document.getElementById('globalModalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  title.innerText = art.title;
  body.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-[rgba(3,4,94,0.1)]">
        <span class="px-2.5 py-1 text-xs font-bold bg-[#CAF0F8] text-[#03045E] rounded-md">${art.category}</span>
        <span class="text-xs font-medium text-[#6E7A9F]">${art.readTime} • Haris Data Studio Insights</span>
      </div>
      
      <div class="prose max-w-none text-sm text-[#3D486B] space-y-4 leading-relaxed">
        ${art.content}
      </div>

      <div class="pt-6 border-t border-[rgba(3,4,94,0.1)] flex items-center justify-between">
        <span class="text-xs font-bold text-[#03045E]">Haris Data Studio • Education Hub</span>
        <button class="btn btn-primary text-xs py-2" onclick="closeModal()">Close Reader</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

/* ==========================================================================
   CONTACT FORM CONTROLLER
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('contactToast');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields (Name, Email, Message).');
      return;
    }

    // Structure backend message record with slots (Name, Email, Subject, Message)
    const formDataRecord = {
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
      Subject: subject,
      Message: message
    };

    console.log('[Contact Message Received]:', formDataRecord);

    // Save locally for persistence
    saveBackendSubmission(formDataRecord);

    // Show clean success notice
    if (toast) {
      toast.classList.remove('hidden');
      form.reset();
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 6000);
    }
  });
}

function saveBackendSubmission(record) {
  try {
    const existing = JSON.parse(localStorage.getItem('haris_contact_submissions') || '[]');
    existing.push(record);
    localStorage.setItem('haris_contact_submissions', JSON.stringify(existing));
  } catch (e) {
    console.error('Storage error:', e);
  }
}

/* ==========================================================================
   SCROLL ANIMATIONS & MODAL HELPERS
   ========================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-in-up').forEach(el => {
    observer.observe(el);
  });
}

function initModalListeners() {
  const modal = document.getElementById('globalModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById('globalModalOverlay');
  if (modal) modal.classList.remove('active');
}
