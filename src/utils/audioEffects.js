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

const unlockAudio = () => {
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (isBgmPlaying && bgmAudioElement && bgmAudioElement.paused) {
    bgmAudioElement.play().catch(() => {});
  }
  if (isCvBgmPlaying && cvBgmAudioElement && cvBgmAudioElement.paused) {
    cvBgmAudioElement.play().catch(() => {});
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);
  window.addEventListener('pointerdown', unlockAudio);
}

// Landing Gate BGM (landingPage.webm)
export const startDigimonBGM = () => {
  isBgmPlaying = true;
  stopCVProfileBGM();
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }

  try {
    if (!bgmAudioElement && typeof window !== 'undefined') {
      bgmAudioElement = new Audio(landingPageAudio);
      bgmAudioElement.loop = true;
      bgmAudioElement.volume = 0.5;
    }
    if (bgmAudioElement) {
      const playPromise = bgmAudioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  } catch (e) {}
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
    ctx.resume();
  }

  try {
    if (!cvBgmAudioElement && typeof window !== 'undefined') {
      cvBgmAudioElement = new Audio(menuBgmAudio);
      cvBgmAudioElement.loop = true;
      cvBgmAudioElement.volume = 0.4;
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






