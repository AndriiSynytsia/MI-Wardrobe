const fs = require('fs');

const sitePath = 'C:\\Users\\Verto\\OneDrive\\Desktop\\HTML\\site.html';
let content = fs.readFileSync(sitePath, 'utf8');

// Let's verify where gltfModel is declared
console.log('Includes let gltfModel?', content.includes('let gltfModel = null;'));

// Let's check where window.openAuthModal is declared
console.log('Includes window.openAuthModal?', content.includes('window.openAuthModal'));

// Let's make sure window.openAuthModal and ALL auth functions are declared at top of script
// so they are available immediately when the page loads!
const authFunctionsSnippet = `
    /* -------------------------------------------------------------
     * CORE USER AUTHENTICATION & HARDWARE PAIRING (IMMEDIATE ATTACH)
     * ----------------------------------------------------------- */
    window.USER_SESSION = {
      isLoggedIn: false,
      isPaired: false,
      user: {
        name: '',
        email: '',
        model: 'Mini',
        serial: '',
        height: '178',
        weight: '72',
        topSize: 'M',
        bottomSize: '32',
        fitPref: 'tailored',
        bodyPhotoUrl: ''
      },
      currentDemoCode: '482-195'
    };

    window.openAuthModal = function(initialTab) {
      const modal = document.getElementById('modal-onboarding');
      if (!modal) return;
      if (window.USER_SESSION.isLoggedIn && window.USER_SESSION.isPaired) {
        showOnboardingStep('dashboard');
      } else if (window.USER_SESSION.isLoggedIn) {
        showOnboardingStep('model');
      } else {
        showOnboardingStep('auth');
        window.switchAuthTab(initialTab || 'signup');
      }
      if (typeof modal.showModal === 'function') modal.showModal();
    };

    window.closeOnboardingModal = function() {
      const modal = document.getElementById('modal-onboarding');
      if (modal && typeof modal.close === 'function') modal.close();
    };

    window.openWardrobePortal = function() {
      showOnboardingStep('dashboard');
      const modal = document.getElementById('modal-onboarding');
      if (modal && typeof modal.showModal === 'function') modal.showModal();
    };

    function showOnboardingStep(stepName) {
      const steps = ['auth', 'verify', 'model', 'scan', 'profile', 'dashboard'];
      steps.forEach(s => {
        const el = document.getElementById('onboard-step-' + s);
        if (el) el.style.display = (s === stepName) ? 'block' : 'none';
      });

      const titleEl = document.getElementById('modal-onboarding-title');
      const subEl = document.getElementById('modal-onboarding-subtitle');
      if (!titleEl || !subEl) return;

      if (stepName === 'auth') {
        titleEl.textContent = 'Create your MI Account';
        subEl.textContent = 'Account Setup';
      } else if (stepName === 'verify') {
        titleEl.textContent = 'Verify Email Address';
        subEl.textContent = 'Security Check';
      } else if (stepName === 'model') {
        titleEl.textContent = 'Select Wardrobe Model';
        subEl.textContent = 'Hardware Pairing';
      } else if (stepName === 'scan') {
        titleEl.textContent = 'Pair Wardrobe Hardware';
        subEl.textContent = 'Hardware Association';
      } else if (stepName === 'profile') {
        titleEl.textContent = 'Sizing & Body Photo';
        subEl.textContent = 'Ritual Personalization';
      } else if (stepName === 'dashboard') {
        titleEl.textContent = 'MI Wardrobe Dashboard';
        subEl.textContent = 'Connected Suite';
      }
    }

    window.switchAuthTab = function(mode) {
      const btnSignup = document.getElementById('tab-btn-signup');
      const btnSignin = document.getElementById('tab-btn-signin');
      const nameGroup = document.getElementById('auth-group-name');
      const submitBtn = document.getElementById('btn-auth-submit');

      if (mode === 'signup') {
        if (btnSignup) btnSignup.classList.add('active');
        if (btnSignin) btnSignin.classList.remove('active');
        if (nameGroup) nameGroup.style.display = 'block';
        if (submitBtn) submitBtn.textContent = 'Send verification code ↗';
      } else {
        if (btnSignup) btnSignup.classList.remove('active');
        if (btnSignin) btnSignin.classList.add('active');
        if (nameGroup) nameGroup.style.display = 'none';
        if (submitBtn) submitBtn.textContent = 'Send login code ↗';
      }
    };

    window.handleSendVerification = function(e) {
      e.preventDefault();
      const nameInput = document.getElementById('auth-input-name');
      const emailInput = document.getElementById('auth-input-email');

      window.USER_SESSION.user.name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Alex Mercer';
      window.USER_SESSION.user.email = emailInput ? emailInput.value.trim() : 'user@example.com';

      const r1 = Math.floor(100 + Math.random() * 900);
      const r2 = Math.floor(100 + Math.random() * 900);
      window.USER_SESSION.currentDemoCode = r1 + '-' + r2;

      const codeDisplay = document.getElementById('generated-demo-code');
      if (codeDisplay) codeDisplay.textContent = window.USER_SESSION.currentDemoCode;

      const emailDisplay = document.getElementById('verify-email-display');
      if (emailDisplay) emailDisplay.textContent = window.USER_SESSION.user.email;

      showOnboardingStep('verify');
    };

    window.autoFillVerificationCode = function() {
      const codeInput = document.getElementById('input-verify-code');
      if (codeInput) codeInput.value = window.USER_SESSION.currentDemoCode;
    };

    window.handleVerifyCodeSubmit = function(e) {
      e.preventDefault();
      const codeInput = document.getElementById('input-verify-code');
      const errMsg = document.getElementById('verify-error-msg');
      if (!codeInput) return;

      const entered = codeInput.value.replace(/\\s+/g, '');
      const expected = window.USER_SESSION.currentDemoCode.replace('-', '');

      if (entered === expected || entered === window.USER_SESSION.currentDemoCode || entered.length >= 6) {
        window.USER_SESSION.isLoggedIn = true;
        if (errMsg) errMsg.style.display = 'none';
        showOnboardingStep('model');
      } else {
        if (errMsg) errMsg.style.display = 'block';
      }
    };

    window.selectModelChoice = function(model) {
      window.USER_SESSION.user.model = model;
      const cMini = document.getElementById('card-choice-mini');
      const cPro = document.getElementById('card-choice-pro');
      if (model === 'Mini') {
        if (cMini) cMini.classList.add('selected');
        if (cPro) cPro.classList.remove('selected');
      } else {
        if (cMini) cMini.classList.remove('selected');
        if (cPro) cPro.classList.add('selected');
      }
    };

    window.proceedToPairingScan = function() {
      const label = document.getElementById('pairing-model-name-label');
      if (label) label.textContent = 'MI Wardrobe ' + window.USER_SESSION.user.model;

      const serialInput = document.getElementById('input-wardrobe-serial');
      if (serialInput) serialInput.value = 'MI-' + window.USER_SESSION.user.model.toUpperCase() + '-2026';

      showOnboardingStep('scan');
    };

    window.handleQrImageUpload = function(input) {
      if (input.files && input.files[0]) {
        const serialInput = document.getElementById('input-wardrobe-serial');
        if (serialInput) serialInput.value = 'MI-' + window.USER_SESSION.user.model.toUpperCase() + '-8492';
        simulateSerialVerification();
      }
    };

    window.handleManualSerialSubmit = function(e) {
      e.preventDefault();
      simulateSerialVerification();
    };

    function simulateSerialVerification() {
      const statusBox = document.getElementById('serial-handshake-status');
      const serialInput = document.getElementById('input-wardrobe-serial');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.textContent = 'Connecting to wardrobe gantry... Verified serial ' + (serialInput ? serialInput.value : '');
      }

      setTimeout(() => {
        window.USER_SESSION.user.serial = serialInput ? serialInput.value : 'MI-MINI-2026';
        showOnboardingStep('profile');
      }, 1000);
    }

    window.handleBodyPhotoSelect = function(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          window.USER_SESSION.user.bodyPhotoUrl = e.target.result;
          const prevImg = document.getElementById('body-photo-preview-img');
          const emptyState = document.getElementById('body-photo-empty-state');
          if (prevImg) {
            prevImg.src = e.target.result;
            prevImg.style.display = 'block';
          }
          if (emptyState) emptyState.style.display = 'none';
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    window.handleFinishProfileSubmit = function(e) {
      e.preventDefault();
      const h = document.getElementById('prof-height');
      const w = document.getElementById('prof-weight');
      const t = document.getElementById('prof-tops-size');
      const b = document.getElementById('prof-bottoms-size');
      const f = document.getElementById('prof-fit-pref');

      window.USER_SESSION.user.height = h ? h.value : '178';
      window.USER_SESSION.user.weight = w ? w.value : '72';
      window.USER_SESSION.user.topSize = t ? t.value : 'M';
      window.USER_SESSION.user.bottomSize = b ? b.value : '32';
      window.USER_SESSION.user.fitPref = f ? f.value : 'tailored';

      window.USER_SESSION.isPaired = true;
      updateHeaderUserState();
      updateDashboardData();
      showOnboardingStep('dashboard');
    };

    function updateHeaderUserState() {
      const authBtns = document.getElementById('header-auth-container');
      const userBadge = document.getElementById('header-user-badge');
      const userName = document.getElementById('header-user-name');
      const pairedTag = document.getElementById('header-paired-tag');

      if (window.USER_SESSION.isLoggedIn && window.USER_SESSION.isPaired) {
        if (authBtns) authBtns.style.display = 'none';
        if (userBadge) userBadge.style.display = 'block';
        if (userName) userName.textContent = window.USER_SESSION.user.name || window.USER_SESSION.user.email;
        if (pairedTag) pairedTag.textContent = window.USER_SESSION.user.model + ' Paired';
      } else {
        if (authBtns) authBtns.style.display = 'flex';
        if (userBadge) userBadge.style.display = 'none';
      }
    }

    function updateDashboardData() {
      const wn = document.getElementById('dash-wardrobe-name');
      const ws = document.getElementById('dash-wardrobe-serial');
      const un = document.getElementById('dash-user-name');
      const um = document.getElementById('dash-user-measure');
      const us = document.getElementById('dash-upper-stat');
      const ls = document.getElementById('dash-lower-stat');
      const ps = document.getElementById('dash-photo-status');

      if (wn) wn.textContent = 'MI Wardrobe ' + window.USER_SESSION.user.model;
      if (ws) ws.textContent = 'Serial: ' + window.USER_SESSION.user.serial + ' · Connected';
      if (un) un.textContent = window.USER_SESSION.user.name;
      if (um) um.textContent = window.USER_SESSION.user.height + ' cm · ' + window.USER_SESSION.user.weight + ' kg · Size ' + window.USER_SESSION.user.topSize;
      if (us) us.textContent = window.USER_SESSION.user.model === 'Pro' ? '50–60 Positions' : '≈ 40 Positions';
      if (ls) ls.textContent = window.USER_SESSION.user.model === 'Pro' ? '≈ 30 Positions' : '≈ 20 Positions';
      if (ps) ps.textContent = window.USER_SESSION.user.bodyPhotoUrl ? 'Photo Active' : 'No Photo';
    }

    window.handleUserSignOut = function() {
      window.USER_SESSION.isLoggedIn = false;
      window.USER_SESSION.isPaired = false;
      updateHeaderUserState();
      window.closeOnboardingModal();
    };
`;

// Insert auth functions snippet right after CONFIG and ASSETS declarations
if (!content.includes('CORE USER AUTHENTICATION & HARDWARE PAIRING (IMMEDIATE ATTACH)')) {
  content = content.replace("const $ = (id) => document.getElementById(id);", "const $ = (id) => document.getElementById(id);\n" + authFunctionsSnippet);
  console.log('Attached auth functions snippet immediately at script top');
}

// 4. Also ensure that the Three.js canvas container is visible and has a background color / styling
content = content.replace("#static-webgl-fallback {", "#static-webgl-fallback { display: none !important; /* disabled by default */");

// Write to all destinations
const targets = [
  'C:\\Users\\Verto\\OneDrive\\Desktop\\HTML\\site.html',
  'C:\\Users\\Verto\\OneDrive\\Desktop\\HTML\\MI-Wardrobe\\site.html',
  'C:\\Users\\Verto\\OneDrive\\Desktop\\HTML\\MI-Wardrobe\\index.html'
];

targets.forEach(t => {
  fs.writeFileSync(t, content, 'utf8');
  console.log('Updated:', t);
});
