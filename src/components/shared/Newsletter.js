'use client';

import { useEffect, useRef } from 'react';

export default function Newsletter() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if script already exists
    const existingScript = containerRef.current.querySelector('script[data-uid="181298bf77"]');
    if (existingScript) return;

    // Create and append the script
    const script = document.createElement('script');
    script.src = 'https://kasuns.kit.com/181298bf77/index.js';
    script.async = true;
    script.setAttribute('data-uid', '181298bf77');

    containerRef.current.appendChild(script);

    // Cleanup function
    return () => {
      if (containerRef.current && script.parentNode) {
        script.remove();
      }
    };
  }, []);

  return (
    <section className="newsletter-section w-full py-8 bg-gradient-to-bl from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div ref={containerRef} id="newsletter-container"></div>
        </div>
      </div>
    </section>
  );
}