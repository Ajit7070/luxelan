"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";

export default function Header() {
  const headerRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuPanelRef = useRef(null);

  // PRELOADER REFS
  const preloaderRef = useRef(null);
  const shapeRef = useRef(null);
  const preloaderVideoRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  // PRELOADER STATES
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  const menuItems = [
    { title: "ABOUT", href: "/about" },
    { title: "OUR PROJECTS", href: "/projects" },
    { title: "THE LUXELAN LIFE", href: "/luxelan-life" },
    { title: "HOW IT WORKS", href: "/process" },
    { title: "CONTENT HUB", href: "/content-hub" },
    { title: "CAREERS", href: "/careers" },
    { title: "CONTACT US", href: "/contact" },
  ];

  // HEADER INTRO ANIMATION
  useGSAP(
    () => {
      gsap.from(".hero-menu-button", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    },
    { scope: headerRef }
  );

  // INITIAL MENU SETUP
  useGSAP(
    () => {
      const overlay = menuOverlayRef.current;
      const panel = menuPanelRef.current;

      if (!overlay || !panel) return;

      gsap.set(overlay, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(panel, {
        xPercent: 100,
      });

      gsap.set(".menu-link", {
        y: 35,
        autoAlpha: 0,
      });
    },
    { scope: headerRef }
  );

  // MENU OPEN / CLOSE ANIMATION
  useGSAP(
    () => {
      const overlay = menuOverlayRef.current;
      const panel = menuPanelRef.current;

      if (!overlay || !panel) return;

      const links = gsap.utils.toArray(".menu-link", headerRef.current);

      gsap.killTweensOf([overlay, panel, ...links]);

      if (menuOpen) {
        // OPEN MENU
        gsap.set(overlay, {
          autoAlpha: 1,
          pointerEvents: "auto",
        });

        gsap
          .timeline()
          .to(panel, {
            xPercent: 0,
            duration: 0.9,
            ease: "power4.inOut",
          })
          .to(
            links,
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.35"
          );
      } else {
        // CLOSE MENU
        gsap
          .timeline({
            onComplete: () => {
              gsap.set(overlay, {
                autoAlpha: 0,
                pointerEvents: "none",
              });
            },
          })
          .to(links, {
            y: 15,
            autoAlpha: 0,
            duration: 0.25,
            stagger: {
              each: 0.025,
              from: "end",
            },
            ease: "power2.in",
          })
          .to(
            panel,
            {
              xPercent: 100,
              duration: 0.85,
              ease: "power4.inOut",
            },
            "-=0.1"
          );
      }
    },
    {
      scope: headerRef,
      dependencies: [menuOpen],
    }
  );

  // PRELOADER: DON'T WAIT FOR THE ENTIRE PAGE
  useGSAP(
    () => {
      setPageReady(true);

      // Fallback if video takes too long
      const fallback = setTimeout(() => {
        setVideoReady(true);
      }, 1500);

      return () => {
        clearTimeout(fallback);
      };
    },
    { scope: headerRef }
  );

  // PRELOADER: GEOMETRIC ZOOM REVEAL
  useGSAP(
    () => {
      if (!videoReady || !pageReady || !preloaderVisible) return;

      const timeline = gsap.timeline({
        delay: 0,
        onComplete: () => setPreloaderVisible(false),
      });

      timeline.to(shapeRef.current, {
        scale: 8,
        duration: 1,
        ease: "power4.in",
      });

      timeline.to(
        preloaderRef.current,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.1"
      );
    },
    {
      scope: headerRef,
      dependencies: [videoReady, pageReady, preloaderVisible],
    }
  );

  return (
    <header ref={headerRef}>
      {/* LUXELAN GEOMETRIC VIDEO PRELOADER */}

      {preloaderVisible && (
        <div ref={preloaderRef} className="lux-preloader">
          <div ref={shapeRef} className="lux-preloader-shape">
            <video
              ref={preloaderVideoRef}
              className="lux-preloader-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setVideoReady(true)}
              onError={() => setVideoReady(true)}
            >
              <source src="/assets/videos/banner-vdo.mp4" type="video/mp4" />
            </video>

            <img
              src="/assets/images/luxelan-logo.png"
              className="lux-preloader-frame"
              alt=""
            />
          </div>
        </div>
      )}

      {/* FLOATING MENU BUTTON */}

      <button
        type="button"
        className={`hero-menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

      {/* FULL SCREEN NAVIGATION */}

      <div
        ref={menuOverlayRef}
        className="menu-overlay"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        {/* LEFT IMAGE / VIDEO AREA */}

        {/* <div className="menu-visual">
          <video autoPlay muted loop playsInline>
            <source src="/assets/videos/banner-vdo.mp4" type="video/mp4" />
          </video>

          <div className="menu-visual-overlay"></div>

          <div className="menu-brand">LUXELAN</div>
        </div> */}

        {/* RIGHT NAVIGATION PANEL */}

        <div
          ref={menuPanelRef}
          className="menu-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="menu-top">
            <img
              src="/assets/images/logo/Luxelanfinallogo.png"
              alt="Luxelan - The Art of Living"
              className="menu-logo"
            />
          </div>

          <nav className="menu-navigation">
            {menuItems.map((item, index) => (
              <a
                href={item.href}
                className="menu-link"
                key={item.title}
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu-index">0{index + 1}</span>

                <span className="menu-title">{item.title}</span>

                <span className="menu-arrow">↗</span>
              </a>
            ))}
          </nav>

          <div className="menu-bottom">
            <span>CRAFTED FOR THE WAY YOU LIVE.</span>
            <span>© LUXELAN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
