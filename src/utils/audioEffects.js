import landingPageAudio from '../assets/landingPage.webm';
import menuBgmAudio from '../assets/menuBgm.webm';

// Web Audio API Sci-Fi Sound Effects Synthesizer (Zero External Audio Files)
let audioCtx = null;

const getAudioContext = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playHoverSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Ignore audio restrictions
  }
};

export const playClickSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Ignore audio restrictions
  }
};

export const playMjolnirAssembleSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Metallic crackle hum & Thor snap sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(850, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.3);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.32);
  } catch (e) {}
};

export const playDigitalWarpSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [330, 440, 554, 659, 880, 1108, 1318];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + idx * 0.04 + 0.15);

      gain.gain.setValueAtTime(0.04, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.18);
    });
  } catch (e) {
    // Ignore audio restrictions
  }
};

let bgmAudioElement = null;
let cvBgmAudioElement = null;
let isBgmPlaying = false;
let isCvBgmPlaying = false;
let bgmAutoplayBlocked = false;

const resolveAudioSrc = (asset) => {
  if (!asset) return '';
  if (typeof asset === 'string') return asset;
  if (typeof asset === 'object' && asset.default && typeof asset.default === 'string') {
    return asset.default;
  }
  return String(asset);
};

const landingSrc = resolveAudioSrc(landingPageAudio);
const menuSrc = resolveAudioSrc(menuBgmAudio);

const createBgmAudio = () => {
  if (typeof window === 'undefined' || !landingSrc) return null;
  const audio = new Audio(landingSrc);
  audio.preload = 'auto';
  audio.loop = true;
  audio.volume = 0.5;
  return audio;
};

const createCvBgmAudio = () => {
  if (typeof window === 'undefined' || !menuSrc) return null;
  const audio = new Audio(menuSrc);
  audio.preload = 'auto';
  audio.loop = true;
  audio.volume = 0.4;
  return audio;
};

// Eagerly pre-buffer BGM audio so it's ready to play instantly on first gesture
if (typeof window !== 'undefined' && landingSrc) {
  bgmAudioElement = createBgmAudio();
}
if (typeof window !== 'undefined' && menuSrc) {
  cvBgmAudioElement = createCvBgmAudio();
}

// Called synchronously from a user gesture to force-start BGM audio
export const unlockAudio = () => {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  // Only attempt BGM recovery if it was blocked and should be playing
  if (bgmAutoplayBlocked && isBgmPlaying) {
    bgmAutoplayBlocked = false;
    // Destroy the tainted audio element and create a fresh one
    if (bgmAudioElement) {
      try { bgmAudioElement.pause(); } catch (e) {}
      bgmAudioElement = null;
    }
    bgmAudioElement = createBgmAudio();
    if (bgmAudioElement) {
      bgmAudioElement.play().catch(() => {
        // Still blocked — will retry on next gesture
        bgmAutoplayBlocked = true;
      });
    }
  }

  // Handle CV BGM recovery
  if (isCvBgmPlaying && cvBgmAudioElement && cvBgmAudioElement.paused) {
    cvBgmAudioElement.play().catch(() => {});
  }
};

// Persistent gesture listener — stays active until BGM successfully plays
if (typeof window !== 'undefined') {
  const gestureHandler = () => {
    unlockAudio();
  };
  ['click', 'pointerdown', 'touchstart', 'keydown'].forEach((evt) => {
    window.addEventListener(evt, gestureHandler, { passive: true });
  });
}

// Landing Gate BGM (landingPage.webm)
export const startDigimonBGM = () => {
  isBgmPlaying = true;
  bgmAutoplayBlocked = false;
  stopCVProfileBGM();

  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  try {
    if (!bgmAudioElement) {
      bgmAudioElement = createBgmAudio();
    }
    if (bgmAudioElement) {
      const playPromise = bgmAudioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked by browser policy
          // Mark as blocked so unlockAudio() knows to recreate the element on next gesture
          bgmAutoplayBlocked = true;
        });
      }
    }
  } catch (e) {
    bgmAutoplayBlocked = true;
  }
};

export const stopDigimonBGM = () => {
  isBgmPlaying = false;
  if (bgmAudioElement) {
    try {
      bgmAudioElement.pause();
      bgmAudioElement.currentTime = 0;
    } catch (e) {}
  }
};

// Web CV Profile BGM (menuBgm.webm)
export const startCVProfileBGM = () => {
  isCvBgmPlaying = true;
  stopDigimonBGM();
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  try {
    if (!cvBgmAudioElement) {
      cvBgmAudioElement = createCvBgmAudio();
    }
    if (cvBgmAudioElement) {
      const playPromise = cvBgmAudioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  } catch (e) {}
};

export const stopCVProfileBGM = () => {
  isCvBgmPlaying = false;
  if (cvBgmAudioElement) {
    try {
      cvBgmAudioElement.pause();
      cvBgmAudioElement.currentTime = 0;
    } catch (e) {}
  }
};

export const toggleCVProfileBGM = () => {
  if (isCvBgmPlaying) {
    stopCVProfileBGM();
    return false;
  } else {
    startCVProfileBGM();
    return true;
  }
};

export const isCVProfileBGMPlaying = () => isCvBgmPlaying;

// Audio readiness tracking — lets UI show loading state while audio buffers
let bgmReady = false;
let bgmReadyCallbacks = [];

export const isBgmAudioReady = () => bgmReady;

export const onBgmReady = (callback) => {
  if (bgmReady) {
    callback();
  } else {
    bgmReadyCallbacks.push(callback);
  }
};

const markBgmReady = () => {
  if (bgmReady) return;
  bgmReady = true;
  bgmReadyCallbacks.forEach((cb) => { try { cb(); } catch (e) {} });
  bgmReadyCallbacks = [];
};

// Listen for audio buffer readiness on the pre-created element
if (bgmAudioElement) {
  if (bgmAudioElement.readyState >= 3) {
    markBgmReady();
  } else {
    bgmAudioElement.addEventListener('canplaythrough', markBgmReady, { once: true });
    // Fallback timeout — don't block UI forever if audio is slow
    setTimeout(markBgmReady, 8000);
  }
} else {
  // No audio element — mark ready immediately so splash gate isn't stuck
  markBgmReady();
}


