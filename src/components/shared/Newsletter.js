'use client';

import { useEffect, useRef } from 'react';

export default function Newsletter() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double loading
    if (scriptLoadedRef.current) return;
    
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', 'becdfbfd16');
    script.src = 'https://kasuns.kit.com/becdfbfd16/index.js';
    
    const container = document.getElementById('newsletter-container');
    if (container) {
      container.appendChild(script);
      scriptLoadedRef.current = true;
    }

    return () => {
      // Cleanup
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="newsletter-container" />;
}