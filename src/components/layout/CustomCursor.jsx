"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Enable only for desktop devices with a precise pointer
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!mediaQuery.matches) return;

    document.documentElement.classList.add("lux-cursor-enabled");

    const moveRingX = gsap.quickTo(ringRef.current, "x", {
      duration: 0.35,
      ease: "power3.out",
    });

    const moveRingY = gsap.quickTo(ringRef.current, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const moveDotX = gsap.quickTo(dotRef.current, "x", {
      duration: 0.08,
      ease: "power2.out",
    });

    const moveDotY = gsap.quickTo(dotRef.current, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    const handleMouseMove = (e) => {
      moveDotX(e.clientX);
      moveDotY(e.clientY);

      moveRingX(e.clientX);
      moveRingY(e.clientY);
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest("a, button, input, textarea, select")) {
        gsap.to(ringRef.current, {
          scale: 1.25,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(ringRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);

      document.documentElement.classList.remove("lux-cursor-enabled");
    };
  }, []);

  return (
    <>
      <div className="lux-custom-cursor-dot" ref={dotRef} />
      <div className="lux-custom-cursor-ring" ref={ringRef} />
    </>
  );
}
