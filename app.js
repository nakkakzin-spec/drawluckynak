/**
 * Lucky Draw Student Prize Spinner
 * Complete application logic: Canvas Wheel, Web Audio FX, Confetti, Roster & History Management, i18n
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) DICTIONARIES
     ========================================================================== */
  const I18N = {
    km: {
      appTitle: 'កងបង្វិលចាប់រង្វាន់សិស្ស',
      appSubtitle: 'កម្មវិធីចាប់ឆ្នោតផ្សងសំណាងក្នុងថ្នាក់រៀន',
      labelCurrentPrize: 'រង្វាន់បច្ចុប្បន្ន ៖',
      centerSpinText: 'បង្វិល',
      btnMainSpinText: 'ចាប់ផ្តើមបង្វិល!',
      btnShortcut: '(Spacebar)',
      labelSpinSpeed: 'ល្បឿនបង្វិល ៖',
      speedFast: 'រហ័ស (3s)',
      speedNormal: 'ធម្មតា (6s)',
      speedSuspense: 'រំភើប (10s)',
      tabStudentsText: 'បញ្ជីសិស្ស',
      tabPrizesText: 'រង្វាន់',
      tabHistoryText: 'ប្រវត្តិអ្នកឈ្នះ',
      inputStudentPlaceholder: 'វាយបញ្ចូលឈ្មោះសិស្ស...',
      btnAddStudentText: 'បន្ថែម',
      btnLoadSampleText: 'ឈ្មោះគំរូ',
      btnBulkText: 'នាំចូលច្រើន',
      btnShuffleText: 'ច្របល់',
      btnClearText: 'លុបទាំងអស់',
      labelAutoRemove: 'ដកឈ្មោះអ្នកឈ្នះចេញពីកងដោយស្វ័យប្រវត្តិ',
      labelRosterList: 'ឈ្មោះក្នុងកង',
      btnToggleAllText: 'ដោះ/ជ្រើសរើសទាំងអស់',
      titleSetCurrentPrize: 'កំណត់រង្វាន់ដែលត្រូវចាប់បន្ទាប់',
      inputCustomPrizePlaceholder: 'ឧទាហរណ៍៖ រង្វាន់ធំ (កាតាបស្ពាយ)',
      btnApplyPrizeText: 'កំណត់យក',
      labelQuickPrizes: 'រង្វាន់គំរូពេញនិយម ៖',
      labelTotalWinners: 'អ្នកឈ្នះសរុប ៖',
      emptyHistoryText: 'មិនទាន់មានអ្នកឈ្នះនៅឡើយទេ!<br>សូមចាប់ផ្តើមបង្វិលកងដើម្បីស្វែងរកអ្នកឈ្នះ។',
      modalWinnerBadge: '🎉 អបអរសាទរអ្នកឈ្នះរង្វាន់! 🎉',
      btnKeepAndNextText: 'បន្តចាប់ទៀត (រក្សាឈ្មោះទុក)',
      btnRemoveAndNextText: 'ដកឈ្មោះចេញ & ចាប់បន្ត',
      titleBulkModal: '📋 នាំចូលបញ្ជីឈ្មោះសិស្សម្តងច្រើន',
      descBulkModal: 'សូម Copy ឈ្មោះសិស្សពី Excel, Google Sheets, Word ឬ Telegram រួច Paste ចូលក្នុងប្រអប់ខាងក្រោម (១ បន្ទាត់ = ឈ្មោះ ១ នាក់ ឬបំបែកដោយសញ្ញាក្បៀស <strong>,</strong>) ៖',
      bulkPlaceholder: 'ឧទាហរណ៍៖\nស៊ុន វណ្ណដា\nមាស សុខលី\nលឹម គឹមហុង\nចាន់ រតនៈ\nសេង ស្រីម៉ៅ',
      labelDetectedNames: 'រកឃើញ ៖',
      btnCancelBulk: 'បោះបង់',
      btnImportNowText: 'នាំចូលទៅក្នុងកង',
      alertNeedNames: 'សូមបន្ថែមឈ្មោះសិស្សយ៉ាងតិច ២ នាក់ជាមុនសិន!',
      confirmClearAll: 'តើអ្នកពិតជាចង់លុបឈ្មោះសិស្សទាំងអស់មែនទេ?',
      confirmClearHistory: 'តើអ្នកពិតជាចង់សម្អាតប្រវត្តិអ្នកឈ្នះទាំងអស់មែនទេ?',
      splashCreatorLabel: 'បង្កើតដោយ ៖',
      splashSkipText: 'ចូលកម្មវិធីភ្លាមៗ ➜',
      footerCreatorText: 'បង្កើតដោយ ៖ <strong>សុវឌ្ឍនៈ IT</strong>',
      footerHintText: '🎯 ចុច Spacebar ឬចុចប៊ូតុងកណ្តាលដើម្បីបង្វិលកងចាប់រង្វាន់',
      personUnit: 'នាក់',
      langCode: 'km'
    },
    en: {
      appTitle: 'Student Lucky Draw Spinner',
      appSubtitle: 'Interactive prize wheel for classrooms and events',
      labelCurrentPrize: 'Current Prize:',
      centerSpinText: 'SPIN',
      btnMainSpinText: 'SPIN THE WHEEL!',
      btnShortcut: '(Spacebar)',
      labelSpinSpeed: 'Spin Speed:',
      speedFast: 'Fast (3s)',
      speedNormal: 'Normal (6s)',
      speedSuspense: 'Suspense (10s)',
      tabStudentsText: 'Students',
      tabPrizesText: 'Prizes',
      tabHistoryText: 'Winners',
      inputStudentPlaceholder: 'Enter student name...',
      btnAddStudentText: 'Add',
      btnLoadSampleText: 'Sample',
      btnBulkText: 'Bulk Import',
      btnShuffleText: 'Shuffle',
      btnClearText: 'Clear All',
      labelAutoRemove: 'Auto-remove winner from wheel',
      labelRosterList: 'Names on Wheel',
      btnToggleAllText: 'Toggle Select All',
      titleSetCurrentPrize: 'Set Upcoming Prize',
      inputCustomPrizePlaceholder: 'e.g. 1st Prize (Backpack)',
      btnApplyPrizeText: 'Apply',
      labelQuickPrizes: 'Popular Prize Presets:',
      labelTotalWinners: 'Total Winners:',
      emptyHistoryText: 'No winners yet!<br>Spin the wheel to start drawing prizes.',
      modalWinnerBadge: '🎉 CONGRATULATIONS WINNER! 🎉',
      btnKeepAndNextText: 'Keep Name & Spin Again',
      btnRemoveAndNextText: 'Remove & Spin Next',
      titleBulkModal: '📋 Bulk Import Student Names',
      descBulkModal: 'Copy student names from Excel, Sheets, or Telegram and paste below (one name per line or comma separated):',
      bulkPlaceholder: 'e.g.\nVisal Chan\nSophea Sok\nVathanak Lim\nSokha Keo\nSreylin Meng',
      labelDetectedNames: 'Found:',
      btnCancelBulk: 'Cancel',
      btnImportNowText: 'Import to Wheel',
      alertNeedNames: 'Please add at least 2 active students first!',
      confirmClearAll: 'Are you sure you want to clear all student names?',
      confirmClearHistory: 'Are you sure you want to clear all winner history?',
      splashCreatorLabel: 'Created by:',
      splashSkipText: 'Enter Now ➜',
      footerCreatorText: 'Created by: <strong>Sovathana IT</strong>',
      footerHintText: '🎯 Press Spacebar or click center button to spin the wheel',
      personUnit: 'students',
      langCode: 'en'
    }
  };

  const SAMPLE_NAMES_KM = [
    'ចាន់ វិសាល', 'សុខ សុភា', 'លឹម វឌ្ឍនៈ', 'កែវ សុខា',
    'ម៉េង ស្រីលីន', 'ហេង រតនា', 'ជា គឹមឡុង', 'រស់ មុនីរ័ត្ន',
    'វ៉ាន់ សុវណ្ណ', 'ភួង ចិន្តា', 'ស៊ុន វណ្ណដា', 'មាស សុខលី',
    'ឡុង សុវណ្ណារ៉ា', 'គង់ ធារ៉ា', 'នួន ស្រីនីត', 'ឈុំ ពិសិដ្ឋ'
  ];

  const SAMPLE_NAMES_EN = [
    'Visal Chan', 'Sophea Sok', 'Vathanak Lim', 'Sokha Keo',
    'Sreylin Meng', 'Rathana Heng', 'Kimlong Chea', 'Muniroth Ros',
    'Sovann Van', 'Chinda Phuong', 'Vannda Sun', 'Sokhly Meas',
    'Sovannara Long', 'Theara Kong', 'Sreynit Nuon', 'Piseth Chhum'
  ];

  const SLICE_COLORS = [
    '#f59e0b', '#ec4899', '#6366f1', '#10b981', '#06b6d4',
    '#8b5cf6', '#ef4444', '#14b8a6', '#f97316', '#3b82f6',
    '#d946ef', '#84cc16'
  ];

  /* ==========================================================================
     2. APPLICATION STATE
     ========================================================================== */
  const state = {
    lang: localStorage.getItem('draw_lucky_lang') || 'km',
    soundEnabled: localStorage.getItem('draw_lucky_sound') !== 'false',
    students: JSON.parse(localStorage.getItem('draw_lucky_students') || 'null') || SAMPLE_NAMES_KM.map((name, i) => ({
      id: 'st_' + Date.now() + '_' + i,
      name: name,
      active: true
    })),
    currentPrize: localStorage.getItem('draw_lucky_prize') || 'រង្វាន់ធំ (1st Prize)',
    autoRemove: localStorage.getItem('draw_lucky_autoremove') !== 'false',
    spinDuration: 6000, // ms
    winners: JSON.parse(localStorage.getItem('draw_lucky_winners') || '[]'),
    
    // Wheel animation runtime
    isSpinning: false,
    rotation: 0, // current angle in radians
    angularVelocity: 0,
    spinStartTime: 0,
    startRotation: 0,
    targetRotation: 0,
    lastPinIndex: -1,
    currentWinner: null
  };

  /* ==========================================================================
     3. WEB AUDIO SYNTHESIZER ENGINE (Offline, zero dependency)
     ========================================================================== */
  class SoundEngine {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTick(frequency = 700) {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
      } catch (e) {
        console.warn('Audio tick error:', e);
      }
    }

    playFanfare() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const notes = [
        { f: 523.25, d: 0.15, wait: 0 },    // C5
        { f: 659.25, d: 0.15, wait: 0.12 }, // E5
        { f: 783.99, d: 0.18, wait: 0.24 }, // G5
        { f: 1046.50, d: 0.5, wait: 0.38 }  // C6
      ];

      notes.forEach(note => {
        setTimeout(() => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(note.f, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + note.d);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + note.d);
        }, note.wait * 1000);
      });
    }
  }

  const sound = new SoundEngine();

  /* ==========================================================================
     4. CONFETTI ENGINE (Realistic 3D physics canvas confetti)
     ========================================================================== */
  class ConfettiEngine {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.animating = false;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    fire() {
      this.particles = [];
      const colors = ['#f59e0b', '#ec4899', '#6366f1', '#10b981', '#38bdf8', '#fbbf24', '#ffffff'];
      const count = 180;

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
          y: this.canvas.height / 2 + (Math.random() - 0.5) * 100,
          w: Math.random() * 10 + 6,
          h: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 24,
          vy: -Math.random() * 18 - 8,
          gravity: 0.45,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 15,
          opacity: 1,
          decay: Math.random() * 0.005 + 0.003
        });
      }

      if (!this.animating) {
        this.animating = true;
        this.loop();
      }
    }

    loop() {
      if (!this.animating) return;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      let alive = false;
      for (let p of this.particles) {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity > 0 && p.y < this.canvas.height + 50) {
          alive = true;
          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.fillStyle = p.color;
          this.ctx.globalAlpha = Math.max(0, p.opacity);
          this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          this.ctx.restore();
        }
      }

      if (alive) {
        requestAnimationFrame(() => this.loop());
      } else {
        this.animating = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  const confetti = new ConfettiEngine('confettiCanvas');

  /* ==========================================================================
     5. WHEEL CANVAS RENDERER & INTERACTIVE SYSTEM
     ========================================================================== */
  class WheelRenderer {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.pointer = document.getElementById('wheelPointer');
      this.ledRing = document.getElementById('wheelLedRing');
      this.setupDPI();
      this.createLEDs();
      window.addEventListener('resize', () => {
        this.setupDPI();
        this.draw();
      });
    }

    setupDPI() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const size = 600; // base resolution
      this.canvas.width = size * dpr;
      this.canvas.height = size * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = size;
      this.height = size;
      this.radius = size / 2;
    }

    createLEDs() {
      this.ledRing.innerHTML = '';
      const totalLEDs = 24;
      const radius = 50; // percentage
      for (let i = 0; i < totalLEDs; i++) {
        const angle = (i / totalLEDs) * 2 * Math.PI;
        const x = 50 + 50 * Math.cos(angle);
        const y = 50 + 50 * Math.sin(angle);
        const dot = document.createElement('div');
        dot.className = `wheel-led-dot ${i % 2 === 0 ? '' : 'alt'}`;
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        this.ledRing.appendChild(dot);
      }
    }

    getActiveStudents() {
      return state.students.filter(s => s.active);
    }

    draw() {
      const activeList = this.getActiveStudents();
      const numSlices = activeList.length;
      const ctx = this.ctx;
      const r = this.radius;

      ctx.clearRect(0, 0, this.width, this.height);

      if (numSlices === 0) {
        // Draw empty state placeholder
        ctx.save();
        ctx.translate(r, r);
        ctx.beginPath();
        ctx.arc(0, 0, r - 12, 0, 2 * Math.PI);
        ctx.fillStyle = '#1e293b';
        ctx.fill();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 20px "Kantumruy Pro", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(state.lang === 'km' ? 'សូមបន្ថែមឈ្មោះសិស្ស' : 'Please Add Students', 0, 0);
        ctx.restore();
        return;
      }

      ctx.save();
      ctx.translate(r, r);
      ctx.rotate(state.rotation);

      const sliceAngle = (2 * Math.PI) / numSlices;

      // 1. Draw Wedges
      for (let i = 0; i < numSlices; i++) {
        const startAngle = i * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, r - 16, startAngle, endAngle);
        ctx.closePath();

        // Wedge fill
        ctx.fillStyle = SLICE_COLORS[i % SLICE_COLORS.length];
        ctx.fill();

        // Subtle gradient highlight on wedge edge
        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.stroke();
        ctx.restore();

        // 2. Draw Text
        ctx.save();
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        // Dynamic font size depending on number of items
        let fontSize = 18;
        if (numSlices > 16) fontSize = 14;
        if (numSlices > 30) fontSize = 11;
        if (numSlices > 50) fontSize = 9;

        ctx.font = `600 ${fontSize}px "Kantumruy Pro", "Outfit", sans-serif`;
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        const maxTextWidth = r - 85;
        let displayName = activeList[i].name;

        // Truncate text if too long
        if (ctx.measureText(displayName).width > maxTextWidth) {
          while (ctx.measureText(displayName + '…').width > maxTextWidth && displayName.length > 1) {
            displayName = displayName.substring(0, displayName.length - 1);
          }
          displayName += '…';
        }

        ctx.fillText(displayName, r - 42, 0);
        ctx.restore();
      }

      // 3. Draw Pins / Pegs on Outer Edge
      for (let i = 0; i < numSlices; i++) {
        const angle = i * sliceAngle;
        const pinX = (r - 20) * Math.cos(angle);
        const pinY = (r - 20) * Math.sin(angle);

        ctx.save();
        ctx.beginPath();
        ctx.arc(pinX, pinY, 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // 4. Outer Metallic Ring
      ctx.beginPath();
      ctx.arc(0, 0, r - 12, 0, 2 * Math.PI);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 10;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, r - 6, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore(); // restore translation & rotation
    }

    triggerPointerBounce() {
      this.pointer.classList.remove('hit');
      // Trigger reflow to restart CSS animation
      void this.pointer.offsetWidth;
      this.pointer.classList.add('hit');
      setTimeout(() => this.pointer.classList.remove('hit'), 90);
    }
  }

  let wheelRenderer;

  /* ==========================================================================
     6. SPIN PHYSICS & ANIMATION
     ========================================================================== */
  function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  }

  function startSpin() {
    if (state.isSpinning) return;

    const activeList = wheelRenderer.getActiveStudents();
    if (activeList.length < 2) {
      alert(I18N[state.lang].alertNeedNames);
      return;
    }

    sound.init();
    state.isSpinning = true;
    document.querySelector('.wheel-frame').classList.add('spinning');
    updateButtonsDisabledState(true);

    const numSlices = activeList.length;
    const sliceAngle = (2 * Math.PI) / numSlices;

    // Pick a random winner index
    const winningIndex = Math.floor(Math.random() * numSlices);
    const chosenWinner = activeList[winningIndex];
    state.currentWinner = chosenWinner;

    // Calculate required final angle so the chosen slice aligns with the TOP POINTER (which is at -Math.PI / 2 or 3*PI/2)
    // Canvas pointer is at the very top (angle = -PI / 2).
    // In our coordinate space: (sliceIndex * sliceAngle + sliceAngle/2 + rotation) % 2PI == 3PI/2.
    const pointerAngle = (3 * Math.PI) / 2;
    const targetSliceCenter = winningIndex * sliceAngle + sliceAngle / 2;
    
    // Add multiple full revolutions (between 6 and 9 turns)
    const extraTurns = Math.floor(Math.random() * 3) + 7;
    const totalExtraAngle = extraTurns * 2 * Math.PI;

    // Target rotation
    const currentRotMod = state.rotation % (2 * Math.PI);
    let neededDelta = (pointerAngle - targetSliceCenter - currentRotMod) % (2 * Math.PI);
    if (neededDelta < 0) neededDelta += 2 * Math.PI;

    state.startRotation = state.rotation;
    state.targetRotation = state.rotation + totalExtraAngle + neededDelta;
    state.spinStartTime = performance.now();
    state.lastPinIndex = -1;

    requestAnimationFrame(animateSpin);
  }

  function animateSpin(now) {
    const elapsed = now - state.spinStartTime;
    const progress = Math.min(elapsed / state.spinDuration, 1);
    const ease = easeOutQuart(progress);

    state.rotation = state.startRotation + (state.targetRotation - state.startRotation) * ease;

    // Check for pin collision to play tick sound and oscillate pointer
    const activeList = wheelRenderer.getActiveStudents();
    const numSlices = activeList.length;
    if (numSlices > 0) {
      const sliceAngle = (2 * Math.PI) / numSlices;
      const pointerAngle = (3 * Math.PI) / 2;
      // Current angle relative to pointer
      const relativeAngle = (pointerAngle - state.rotation) % (2 * Math.PI);
      const normalizedAngle = relativeAngle < 0 ? relativeAngle + 2 * Math.PI : relativeAngle;
      const currentPin = Math.floor(normalizedAngle / sliceAngle);

      if (currentPin !== state.lastPinIndex) {
        state.lastPinIndex = currentPin;
        wheelRenderer.triggerPointerBounce();
        // Dynamic tick pitch based on speed
        const speedFactor = 1 - progress;
        const tickPitch = 450 + speedFactor * 450;
        sound.playTick(tickPitch);
      }
    }

    wheelRenderer.draw();

    if (progress < 1) {
      requestAnimationFrame(animateSpin);
    } else {
      // Finished spinning!
      onSpinComplete();
    }
  }

  function onSpinComplete() {
    state.isSpinning = false;
    document.querySelector('.wheel-frame').classList.remove('spinning');
    updateButtonsDisabledState(false);

    // Play fanfare celebration & fire confetti
    sound.playFanfare();
    confetti.fire();

    // Show winner celebration modal
    showWinnerModal(state.currentWinner);
  }

  function updateButtonsDisabledState(disabled) {
    document.getElementById('btnMainSpin').disabled = disabled;
    document.getElementById('btnCenterSpin').disabled = disabled;
    document.getElementById('btnAddStudent').disabled = disabled;
    document.getElementById('btnLoadSample').disabled = disabled;
    document.getElementById('btnShuffle').disabled = disabled;
  }

  /* ==========================================================================
     7. WINNER MODAL & HISTORY MANAGEMENT
     ========================================================================== */
  function showWinnerModal(winner) {
    const modal = document.getElementById('winnerModal');
    const nameDisplay = document.getElementById('winnerModalStudentName');
    const prizeDisplay = document.getElementById('winnerModalPrizeName');

    nameDisplay.textContent = winner.name;
    prizeDisplay.textContent = state.currentPrize;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }

  function hideWinnerModal() {
    const modal = document.getElementById('winnerModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  function recordWinner(winner, prize) {
    const record = {
      id: 'win_' + Date.now(),
      studentId: winner.id,
      studentName: winner.name,
      prize: prize,
      timestamp: new Date().toLocaleString(state.lang === 'km' ? 'km-KH' : 'en-US', {
        dateStyle: 'short',
        timeStyle: 'short'
      })
    };

    state.winners.unshift(record);
    saveWinners();
    renderHistory();
  }

  function saveWinners() {
    localStorage.setItem('draw_lucky_winners', JSON.stringify(state.winners));
    document.getElementById('historyCountPill').textContent = state.winners.length;
    document.getElementById('historyTotalCount').textContent = state.winners.length;
  }

  function renderHistory() {
    const container = document.getElementById('historyListContainer');
    const emptyState = document.getElementById('historyEmptyState');
    container.innerHTML = '';

    if (state.winners.length === 0) {
      emptyState.style.display = 'flex';
      return;
    }

    emptyState.style.display = 'none';

    state.winners.forEach(w => {
      const li = document.createElement('li');
      li.className = 'history-item';
      li.innerHTML = `
        <div class="history-item-left">
          <span class="history-winner-name">${escapeHtml(w.studentName)}</span>
          <span class="history-winner-prize">🎁 ${escapeHtml(w.prize)}</span>
          <span class="history-winner-time">🕒 ${w.timestamp}</span>
        </div>
      `;
      container.appendChild(li);
    });
  }

  /* ==========================================================================
     8. STUDENT ROSTER MANAGEMENT
     ========================================================================== */
  function saveStudents() {
    localStorage.setItem('draw_lucky_students', JSON.stringify(state.students));
    renderStudentList();
    wheelRenderer.draw();
  }

  function addStudent(name) {
    const trimmed = name.trim();
    if (!trimmed) return;
    state.students.push({
      id: 'st_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      name: trimmed,
      active: true
    });
    saveStudents();
  }

  function removeStudent(id) {
    state.students = state.students.filter(s => s.id !== id);
    saveStudents();
  }

  function toggleStudent(id) {
    const student = state.students.find(s => s.id === id);
    if (student) {
      student.active = !student.active;
      saveStudents();
    }
  }

  function shuffleStudents() {
    for (let i = state.students.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.students[i], state.students[j]] = [state.students[j], state.students[i]];
    }
    saveStudents();
  }

  function renderStudentList() {
    const container = document.getElementById('studentListContainer');
    container.innerHTML = '';

    const activeStudents = state.students.filter(s => s.active);
    document.getElementById('studentCountPill').textContent = state.students.length;
    document.getElementById('activeCount').textContent = activeStudents.length;

    state.students.forEach((student, index) => {
      const item = document.createElement('div');
      item.className = `student-item ${student.active ? '' : 'inactive'}`;

      // Student initial avatar
      const initial = student.name.trim().charAt(0) || 'S';

      item.innerHTML = `
        <div class="student-info">
          <div class="student-avatar">${escapeHtml(initial)}</div>
          <span class="student-name" title="${escapeHtml(student.name)}">${escapeHtml(student.name)}</span>
        </div>
        <div class="student-actions">
          <button class="btn-item-action toggle" title="${student.active ? 'បិទ' : 'បើក'}">
            ${student.active ? '👁️' : '🚫'}
          </button>
          <button class="btn-item-action delete" title="លុប">🗑️</button>
        </div>
      `;

      item.querySelector('.toggle').addEventListener('click', () => toggleStudent(student.id));
      item.querySelector('.delete').addEventListener('click', () => removeStudent(student.id));

      container.appendChild(item);
    });
  }

  /* ==========================================================================
     9. PRIZE MANAGEMENT
     ========================================================================== */
  function setCurrentPrize(prize) {
    if (!prize.trim()) return;
    state.currentPrize = prize.trim();
    localStorage.setItem('draw_lucky_prize', state.currentPrize);
    document.getElementById('currentPrizeText').textContent = state.currentPrize;

    // Update active state in chips
    document.querySelectorAll('.prize-chip').forEach(chip => {
      if (chip.getAttribute('data-prize') === state.currentPrize) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  /* ==========================================================================
     10. BULK IMPORT MODAL
     ========================================================================== */
  function openBulkModal() {
    const modal = document.getElementById('bulkModal');
    const textarea = document.getElementById('textareaBulkNames');
    textarea.value = '';
    updateBulkCount();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    textarea.focus();
  }

  function closeBulkModal() {
    const modal = document.getElementById('bulkModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  function parseBulkNames(text) {
    // Split by newlines or commas
    const rawList = text.split(/[\r\n,]+/);
    const cleaned = [];

    rawList.forEach(line => {
      // Remove leading numbering like "1. ", "2- ", "• "
      let name = line.replace(/^[\d\.\-\)\•\*\s]+/, '').trim();
      if (name.length > 0) {
        cleaned.push(name);
      }
    });

    return cleaned;
  }

  function updateBulkCount() {
    const text = document.getElementById('textareaBulkNames').value;
    const names = parseBulkNames(text);
    const countLabel = document.getElementById('labelDetectedNames');
    const unit = state.lang === 'km' ? 'ឈ្មោះ' : 'names';
    countLabel.textContent = `${I18N[state.lang].labelDetectedNames} ${names.length} ${unit}`;
  }

  function submitBulkImport() {
    const text = document.getElementById('textareaBulkNames').value;
    const names = parseBulkNames(text);
    if (names.length === 0) return;

    names.forEach(name => {
      state.students.push({
        id: 'st_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        name: name,
        active: true
      });
    });

    saveStudents();
    closeBulkModal();
  }

  /* ==========================================================================
     11. EXPORT & PRINT
     ========================================================================== */
  function exportWinnersCsv() {
    if (state.winners.length === 0) {
      alert(state.lang === 'km' ? 'មិនមានទិន្នន័យអ្នកឈ្នះសម្រាប់ Export ទេ!' : 'No winner data to export!');
      return;
    }

    let csvContent = '\uFEFF'; // UTF-8 BOM for proper Khmer text display in Excel
    csvContent += 'No,Student Name,Prize,Date & Time\n';

    state.winners.forEach((w, index) => {
      const cleanName = `"${w.studentName.replace(/"/g, '""')}"`;
      const cleanPrize = `"${w.prize.replace(/"/g, '""')}"`;
      const cleanTime = `"${w.timestamp.replace(/"/g, '""')}"`;
      csvContent += `${index + 1},${cleanName},${cleanPrize},${cleanTime}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `lucky_draw_winners_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function printWinners() {
    if (state.winners.length === 0) {
      alert(state.lang === 'km' ? 'មិនមានទិន្នន័យអ្នកឈ្នះសម្រាប់បោះពុម្ពទេ!' : 'No winner data to print!');
      return;
    }

    const printWin = window.open('', '_blank');
    const lang = state.lang;
    const title = lang === 'km' ? 'បញ្ជីឈ្មោះអ្នកឈ្នះរង្វាន់' : 'Lucky Draw Winners List';

    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: 'Kantumruy Pro', sans-serif; padding: 30px; color: #1e293b; }
          h2 { text-align: center; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #cbd5e1; padding: 10px 14px; text-align: left; }
          th { background: #f1f5f9; }
          .timestamp { font-size: 0.85rem; color: #64748b; }
        </style>
      </head>
      <body>
        <h2>🏆 ${title}</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>${lang === 'km' ? 'ឈ្មោះសិស្ស' : 'Student Name'}</th>
              <th>${lang === 'km' ? 'រង្វាន់' : 'Prize'}</th>
              <th>${lang === 'km' ? 'កាលបរិច្ឆេទ' : 'Date & Time'}</th>
            </tr>
          </thead>
          <tbody>
    `;

    state.winners.forEach((w, i) => {
      html += `
        <tr>
          <td>${i + 1}</td>
          <td><strong>${escapeHtml(w.studentName)}</strong></td>
          <td>${escapeHtml(w.prize)}</td>
          <td class="timestamp">${w.timestamp}</td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </body>
      </html>
    `;

    printWin.document.write(html);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => {
      printWin.print();
      printWin.close();
    }, 300);
  }

  /* ==========================================================================
     12. FULLSCREEN & LOCALIZATION LOGIC
     ========================================================================== */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('draw_lucky_lang', lang);
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.getElementById('appTitle').textContent = dict.appTitle;
    document.getElementById('appSubtitle').textContent = dict.appSubtitle;
    document.getElementById('labelCurrentPrize').textContent = dict.labelCurrentPrize;
    document.getElementById('centerSpinText').textContent = dict.centerSpinText;
    document.getElementById('btnMainSpinText').textContent = dict.btnMainSpinText;
    document.querySelector('.btn-shortcut').textContent = dict.btnShortcut;
    document.getElementById('labelSpinSpeed').textContent = dict.labelSpinSpeed;
    document.getElementById('speedFast').textContent = dict.speedFast;
    document.getElementById('speedNormal').textContent = dict.speedNormal;
    document.getElementById('speedSuspense').textContent = dict.speedSuspense;

    document.getElementById('tabStudentsText').textContent = dict.tabStudentsText;
    document.getElementById('tabPrizesText').textContent = dict.tabPrizesText;
    document.getElementById('tabHistoryText').textContent = dict.tabHistoryText;

    document.getElementById('inputStudentName').placeholder = dict.inputStudentPlaceholder;
    document.getElementById('btnAddStudentText').textContent = dict.btnAddStudentText;
    document.getElementById('btnLoadSampleText').textContent = dict.btnLoadSampleText;
    document.getElementById('btnBulkText').textContent = dict.btnBulkText;
    document.getElementById('btnShuffleText').textContent = dict.btnShuffleText;
    document.getElementById('btnClearText').textContent = dict.btnClearText;
    document.getElementById('labelAutoRemove').textContent = dict.labelAutoRemove;
    document.getElementById('btnToggleAll').textContent = dict.btnToggleAllText;

    document.getElementById('titleSetCurrentPrize').textContent = dict.titleSetCurrentPrize;
    document.getElementById('inputCustomPrize').placeholder = dict.inputCustomPrizePlaceholder;
    document.getElementById('btnApplyPrizeText').textContent = dict.btnApplyPrizeText;
    document.getElementById('labelQuickPrizes').textContent = dict.labelQuickPrizes;

    document.getElementById('labelTotalWinners').innerHTML = `${dict.labelTotalWinners} <strong id="historyTotalCount">${state.winners.length}</strong> ${dict.personUnit}`;
    document.getElementById('emptyHistoryText').innerHTML = dict.emptyHistoryText;

    document.getElementById('modalWinnerBadge').textContent = dict.modalWinnerBadge;
    document.getElementById('btnKeepAndNextText').textContent = dict.btnKeepAndNextText;
    document.getElementById('btnRemoveAndNextText').textContent = dict.btnRemoveAndNextText;

    document.getElementById('titleBulkModal').textContent = dict.titleBulkModal;
    document.getElementById('descBulkModal').innerHTML = dict.descBulkModal;
    document.getElementById('textareaBulkNames').placeholder = dict.bulkPlaceholder;
    document.getElementById('btnCancelBulk').textContent = dict.btnCancelBulk;
    document.getElementById('btnImportNowText').textContent = dict.btnImportNowText;

    const flag = lang === 'km' ? '🇰🇭' : '🇬🇧';
    document.querySelector('.lang-flag').textContent = flag;
    document.getElementById('langLabel').textContent = lang === 'km' ? 'ខ្មែរ' : 'English';

    // Splash & Footer elements i18n
    if (document.getElementById('splashTitle')) document.getElementById('splashTitle').textContent = dict.appTitle;
    if (document.getElementById('splashSubtitle')) document.getElementById('splashSubtitle').textContent = dict.appSubtitle;
    if (document.getElementById('splashCreatorLabel')) document.getElementById('splashCreatorLabel').textContent = dict.splashCreatorLabel;
    if (document.getElementById('splashSkipText')) document.getElementById('splashSkipText').textContent = dict.splashSkipText;
    if (document.getElementById('footerCreatorText')) document.getElementById('footerCreatorText').innerHTML = dict.footerCreatorText;
    if (document.getElementById('footerHintText')) document.getElementById('footerHintText').textContent = dict.footerHintText;

    wheelRenderer.draw();
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ==========================================================================
     13. EVENT LISTENERS & INITIALIZATION
     ========================================================================== */
  function initEventListeners() {
    // Spin triggers
    document.getElementById('btnMainSpin').addEventListener('click', startSpin);
    document.getElementById('btnCenterSpin').addEventListener('click', startSpin);

    // Keyboard shortcut (Spacebar to spin)
    window.addEventListener('keydown', e => {
      if (e.code === 'Space' && !state.isSpinning) {
        // Only trigger if not focused in an input or textarea
        const activeEl = document.activeElement;
        if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
          return;
        }
        e.preventDefault();
        startSpin();
      }
      if (e.code === 'Escape') {
        hideWinnerModal();
        closeBulkModal();
      }
    });

    // Speed buttons
    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const speed = btn.getAttribute('data-speed');
        if (speed === 'fast') state.spinDuration = 3000;
        else if (speed === 'normal') state.spinDuration = 6000;
        else if (speed === 'suspense') state.spinDuration = 10000;
      });
    });

    // Sound toggle
    const soundBtn = document.getElementById('btnSoundToggle');
    soundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      localStorage.setItem('draw_lucky_sound', state.soundEnabled);
      document.getElementById('soundIcon').textContent = state.soundEnabled ? '🔊' : '🔇';
    });
    document.getElementById('soundIcon').textContent = state.soundEnabled ? '🔊' : '🔇';

    // Fullscreen
    document.getElementById('btnFullscreen').addEventListener('click', toggleFullscreen);

    // Language toggle
    document.getElementById('btnLangToggle').addEventListener('click', () => {
      const newLang = state.lang === 'km' ? 'en' : 'km';
      applyLanguage(newLang);
    });

    // Tabs switching
    document.querySelectorAll('.tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panelId = 'panel' + tab.getAttribute('data-tab').charAt(0).toUpperCase() + tab.getAttribute('data-tab').slice(1);
        document.getElementById(panelId).classList.add('active');
      });
    });

    // Add student
    const inputStudent = document.getElementById('inputStudentName');
    const btnAdd = document.getElementById('btnAddStudent');
    btnAdd.addEventListener('click', () => {
      addStudent(inputStudent.value);
      inputStudent.value = '';
      inputStudent.focus();
    });
    inputStudent.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        addStudent(inputStudent.value);
        inputStudent.value = '';
      }
    });

    // Load sample names
    document.getElementById('btnLoadSample').addEventListener('click', () => {
      const sampleList = state.lang === 'km' ? SAMPLE_NAMES_KM : SAMPLE_NAMES_EN;
      state.students = sampleList.map((name, i) => ({
        id: 'st_' + Date.now() + '_' + i,
        name: name,
        active: true
      }));
      saveStudents();
    });

    // Shuffle
    document.getElementById('btnShuffle').addEventListener('click', shuffleStudents);

    // Clear all students
    document.getElementById('btnClearAllStudents').addEventListener('click', () => {
      if (confirm(I18N[state.lang].confirmClearAll)) {
        state.students = [];
        saveStudents();
      }
    });

    // Auto remove checkbox
    const autoRemoveToggle = document.getElementById('toggleAutoRemove');
    autoRemoveToggle.checked = state.autoRemove;
    autoRemoveToggle.addEventListener('change', () => {
      state.autoRemove = autoRemoveToggle.checked;
      localStorage.setItem('draw_lucky_autoremove', state.autoRemove);
    });

    // Toggle all students active/inactive
    document.getElementById('btnToggleAll').addEventListener('click', () => {
      const allActive = state.students.every(s => s.active);
      state.students.forEach(s => s.active = !allActive);
      saveStudents();
    });

    // Custom prize apply
    const inputCustomPrize = document.getElementById('inputCustomPrize');
    document.getElementById('btnApplyPrize').addEventListener('click', () => {
      setCurrentPrize(inputCustomPrize.value);
      inputCustomPrize.value = '';
    });
    inputCustomPrize.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        setCurrentPrize(inputCustomPrize.value);
        inputCustomPrize.value = '';
      }
    });

    // Preset prize chips
    document.querySelectorAll('.prize-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const prize = chip.getAttribute('data-prize');
        setCurrentPrize(prize);
      });
    });

    // History controls
    document.getElementById('btnExportCsv').addEventListener('click', exportWinnersCsv);
    document.getElementById('btnPrintHistory').addEventListener('click', printWinners);
    document.getElementById('btnClearHistory').addEventListener('click', () => {
      if (confirm(I18N[state.lang].confirmClearHistory)) {
        state.winners = [];
        saveWinners();
        renderHistory();
      }
    });

    // Winner modal buttons
    document.getElementById('btnCloseWinnerModal').addEventListener('click', () => {
      if (state.currentWinner) {
        recordWinner(state.currentWinner, state.currentPrize);
      }
      hideWinnerModal();
    });

    document.getElementById('btnKeepAndNext').addEventListener('click', () => {
      if (state.currentWinner) {
        recordWinner(state.currentWinner, state.currentPrize);
      }
      hideWinnerModal();
    });

    document.getElementById('btnRemoveAndNext').addEventListener('click', () => {
      if (state.currentWinner) {
        recordWinner(state.currentWinner, state.currentPrize);
        // Remove winner from roster
        removeStudent(state.currentWinner.id);
      }
      hideWinnerModal();
    });

    // Bulk modal
    document.getElementById('btnOpenBulkModal').addEventListener('click', openBulkModal);
    document.getElementById('btnCloseBulkModal').addEventListener('click', closeBulkModal);
    document.getElementById('btnCancelBulk').addEventListener('click', closeBulkModal);
    document.getElementById('btnSubmitBulk').addEventListener('click', submitBulkImport);
    document.getElementById('textareaBulkNames').addEventListener('input', updateBulkCount);
  }

  /* ==========================================================================
     13.5. 5-SECOND SPLASH SCREEN (Created by Sovathana IT)
     ========================================================================== */
  function initSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if (!splash) return;

    const progressFill = document.getElementById('splashProgressFill');
    const countdownText = document.getElementById('splashCountdownText');
    const btnSkip = document.getElementById('btnSkipSplash');

    const totalSeconds = 5;
    const intervalMs = 50;
    let dismissed = false;

    function dismissSplash() {
      if (dismissed) return;
      dismissed = true;
      clearInterval(timerInterval);
      splash.classList.add('fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
      }, 600);
    }

    if (btnSkip) {
      btnSkip.addEventListener('click', dismissSplash);
    }

    const startTime = performance.now();
    const timerInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min((elapsed / (totalSeconds * 1000)) * 100, 100);
      const remainingSec = Math.max(0, Math.ceil((totalSeconds * 1000 - elapsed) / 1000));

      if (progressFill) {
        progressFill.style.width = progress + '%';
      }

      if (countdownText) {
        if (state.lang === 'km') {
          countdownText.textContent = `កំពុងបើកកម្មវិធីក្នុងរយៈពេល ${remainingSec} វិនាទី...`;
        } else {
          countdownText.textContent = `Entering application in ${remainingSec}s...`;
        }
      }

      if (elapsed >= totalSeconds * 1000) {
        dismissSplash();
      }
    }, intervalMs);
  }

  /* ==========================================================================
     14. APP BOOTSTRAP
     ========================================================================== */
  window.addEventListener('DOMContentLoaded', () => {
    wheelRenderer = new WheelRenderer('wheelCanvas');
    applyLanguage(state.lang);
    setCurrentPrize(state.currentPrize);
    renderStudentList();
    renderHistory();
    saveWinners();
    initEventListeners();
    initSplashScreen();
  });

})();
