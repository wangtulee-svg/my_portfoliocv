import { useEffect, useRef } from 'react';

const FinisherBackground = () => {
  const headerRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    // ກວດສອບວ່າ script ຖືກໂຫຼດແລ້ວບໍ່
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (window.FinisherHeader) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = '/js/finisher-header.es5.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load FinisherHeader'));
        document.body.appendChild(script);
      });
    };

    const initFinisher = () => {
      if (headerRef.current && window.FinisherHeader && !instanceRef.current) {
        try {
          instanceRef.current = new window.FinisherHeader({
            className: 'finisher-header',
            count: 60,
            size: {
              min: 1,
              max: 20,
              pulse: 0
            },
            speed: {
              x: { min: 0, max: 0.4 },
              y: { min: 0, max: 0.1 }
            },
            colors: {
              background: "#000000",
              particles: ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"]
            },
            blending: "screen",
            opacity: { center: 0, edge: 0.4 },
            skew: -0.3,
            shapes: ["c", "s", "t", "h"]
          });
          console.log("✅ FinisherHeader initialized!");
        } catch (error) {
          console.error("FinisherHeader error:", error);
        }
      }
    };

    loadScript()
      .then(() => {
        setTimeout(initFinisher, 100);
      })
      .catch(err => {
        console.error("Failed to load script:", err);
      });

    return () => {
      if (instanceRef.current && instanceRef.current.destroy) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="finisher-header"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default FinisherBackground;