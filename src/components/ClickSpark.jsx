import { useEffect, useRef } from 'react';

const ClickSpark = ({ 
  children, 
  sparkColor = '#fff', 
  sparkSize = 10, 
  sparkRadius = 20, 
  sparkCount = 8, 
  duration = 100
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createSpark = (x, y) => {
      const sparks = [];
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount;
        const speed = 2 + Math.random() * 3;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: sparkSize * (0.6 + Math.random() * 0.8),
          alpha: 1,
          life: duration,
          maxLife: duration,
          color: sparkColor,
        });
      }
      return sparks;
    };

    const updateSparks = () => {
      sparksRef.current = sparksRef.current.filter((spark) => {
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= 16;
        spark.alpha = spark.life / spark.maxLife;
        return spark.life > 0;
      });
    };

    const drawSparks = () => {
      ctx.clearRect(0, 0, width, height);
      sparksRef.current.forEach((spark) => {
        ctx.save();
        ctx.globalAlpha = spark.alpha;
        ctx.fillStyle = spark.color;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // ເພີ່ມ glow effect
        ctx.shadowBlur = spark.size;
        ctx.shadowColor = spark.color;
        ctx.fill();
        ctx.restore();
      });
    };

    const animate = () => {
      updateSparks();
      drawSparks();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleClick = (e) => {
      const newSparks = createSpark(e.clientX, e.clientY);
      sparksRef.current = [...sparksRef.current, ...newSparks];
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <div className="relative w-full min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;