const defaults = {
    origin: { y: 0.7 },
    spread: 360,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
  };
  
  export function fireConfetti(confetti) {
    const patterns = [
      { particleRatio: 0.25, spread: 26, startVelocity: 55 },
      { particleRatio: 0.2, spread: 60 },
      { particleRatio: 0.35, spread: 100, decay: 0.91, scalar: 0.8 },
      { particleRatio: 0.1, spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 },
      { particleRatio: 0.1, spread: 120, startVelocity: 45 },
    ];
  
    // Immediate bursts
    patterns.forEach(pattern => {
      confetti({
        ...defaults,
        ...pattern,
        particleCount: Math.floor(200 * pattern.particleRatio),
      });
    });
  
    // Delayed bursts
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: Math.floor(200 * 0.2),
        spread: 180,
        startVelocity: 35,
      });
    }, 200);
  
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: Math.floor(200 * 0.15),
        spread: 120,
        startVelocity: 40,
      });
    }, 400);
  }