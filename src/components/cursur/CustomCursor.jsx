import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Store coordinates in refs to avoid unnecessary re-renders
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);

  useEffect(() => {
    // Check if the device has hover capability (skip on mobile/touch)
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    // Mouse Move Handler
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Immediately move the inner dot for instant responsiveness
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Hover Event Delegation
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        isHovered.current = true;
        ringRef.current?.classList.add('cursor--hover');
        dotRef.current?.classList.add('cursor--hover');
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        isHovered.current = false;
        ringRef.current?.classList.remove('cursor--hover');
        dotRef.current?.classList.remove('cursor--hover');
      }
    };

    // Smooth Lerp Loop using requestAnimationFrame
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Lerp factor (0.15 gives a smooth fluid lag)
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) ${
          isHovered.current ? 'scale(1.8)' : 'scale(1)'
        }`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Register events & start animation loop
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;