import React, { useEffect, useRef } from 'react';

const Metaballs = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth || 600);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth || 600;
        height = canvas.height = canvas.offsetHeight || 600;
      }
    };
    window.addEventListener('resize', handleResize);

    // 60FPS Fluid Lava-Lamp Metaballs Engine
    const numBalls = 7;
    const balls = Array.from({ length: numBalls }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 45 + 35,
      color: i % 2 === 0 ? '#10b981' : '#38bdf8',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update ball physics & bounce off boundaries
      balls.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.radius || b.x > width - b.radius) b.vx *= -1;
        if (b.y < b.radius || b.y > height - b.radius) b.vy *= -1;

        // Render glowing fluid metaball gradient
        const grad = ctx.createRadialGradient(b.x, b.y, b.radius * 0.1, b.x, b.y, b.radius);
        grad.addColorStop(0, b.color);
        grad.addColorStop(0.6, `${b.color}88`);
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.shadowBlur = 30;
        ctx.shadowColor = b.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-50 no-print bg-transparent"
    />
  );
};

export default Metaballs;
