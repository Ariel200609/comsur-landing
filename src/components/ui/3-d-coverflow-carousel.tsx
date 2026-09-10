"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

// Inline Icons (Cero dependencias externas)
const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export interface CarouselItem {
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  img: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface CoverFlowCarouselProps {
  items?: CarouselItem[];
  sectionLabel?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: CarouselItem) => void;
}

// Datos integrados con las imágenes reales de tu carpeta public/
export const defaultServices: CarouselItem[] = [
  {
    tag: "#SistemasDeCobro",
    titleLine1: "PUNTOS DE",
    titleLine2: "VENTA Y COBRO",
    desc: "Sistemas integrales Hasar, Clover y Fiserv para optimizar tus transacciones comerciales.",
    img: "/image.png",
    ctaText: "Consultar",
    ctaUrl: "#contacto",
  },
  {
    tag: "#SeguridadFísica",
    titleLine1: "SEGURIDAD DE",
    titleLine2: "ESPACIOS",
    desc: "Videovigilancia avanzada con Hikvision, Dahua y monitoreo integral ADT.",
    img: "/image copy.png",
    ctaText: "Consultar",
    ctaUrl: "#contacto",
  },
  {
    tag: "#Ciberseguridad",
    titleLine1: "SEGURIDAD",
    titleLine2: "DIGITAL",
    desc: "Protección total para tu empresa con soluciones de ciberseguridad y antivirus de primer nivel.",
    img: "/image copy 2.png",
    ctaText: "Consultar",
    ctaUrl: "#contacto",
  },
  {
    tag: "#Infraestructura",
    titleLine1: "REDES Y",
    titleLine2: "CONECTIVIDAD",
    desc: "Infraestructura de redes de datos, enlaces satelitales (Aitue) y gestión de activos tecnológicos.",
    img: "/image copy 3.png",
    ctaText: "Consultar",
    ctaUrl: "#contacto",
  },
  {
    tag: "#GestiónInteligente",
    titleLine1: "COMUNICACIÓN",
    titleLine2: "Y GESTIÓN",
    desc: "Plataformas de firma digital, gestión de eventos y diseño de software especializado (AutoCAD).",
    img: "/image copy 4.png",
    ctaText: "Consultar",
    ctaUrl: "#contacto",
  },
];

export function CoverFlowCarousel({
  items = defaultServices,
  sectionLabel = "NUESTRAS SOLUCIONES",
  autoplay = true,
  autoplayDelay = 5000,
  className = "",
  onCtaClick,
}: CoverFlowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section
      className={`relative w-full min-h-[760px] flex items-center justify-center overflow-hidden py-12 select-none ${className}`}
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={items[currentIndex]?.img}
          alt="ambience background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.2) blur(40px)",
            transform: "scale(1.15)",
            transition: "opacity 1000ms ease, filter 1000ms ease",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Eyebrow */}
        {sectionLabel && (
          <div className="flex items-center gap-3 mb-12">
            <span style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6)" }} />
            <h3
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#60a5fa",
                margin: 0,
              }}
            >
              {sectionLabel}
            </h3>
            <span style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
          </div>
        )}

        {/* 3D Coverflow Stage */}
        <div
          className="relative w-full h-[540px] flex justify-center items-center mb-8"
          style={{ perspective: "1400px" }}
        >
          {items.map((item, idx) => {
            const offset = (idx - currentIndex + total) % total;

            let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(0.4) blur(4px)";
            let isCenter = false;

            if (offset === 0) {
              isCenter = true;
              transform = "translateX(0px) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 30;
              filter = "brightness(1)";
            } else if (offset === 1) {
              transform = "translateX(300px) scale(0.8) rotateY(-25deg)";
              opacity = 0.7;
              zIndex = 20;
              filter = "brightness(0.6)";
            } else if (offset === 2) {
              transform = "translateX(540px) scale(0.6) rotateY(-40deg)";
              opacity = 0.4;
              zIndex = 10;
              filter = "brightness(0.4) blur(2px)";
            } else if (offset === total - 1) {
              transform = "translateX(-300px) scale(0.8) rotateY(25deg)";
              opacity = 0.7;
              zIndex = 20;
              filter = "brightness(0.6)";
            } else if (offset === total - 2) {
              transform = "translateX(-540px) scale(0.6) rotateY(40deg)";
              opacity = 0.4;
              zIndex = 10;
              filter = "brightness(0.4) blur(2px)";
            }

            return (
              <div
                key={idx}
                onClick={() => !isCenter && goToSlide(idx)}
                style={{
                  position: "absolute",
                  width: "340px",
                  height: "520px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: "#0f172a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformOrigin: "center center",
                  transition: "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow: isCenter
                    ? "0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(59,130,246,0.2)"
                    : "0 15px 35px rgba(0,0,0,0.5)",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Photo */}
                <img
                  src={item.img}
                  alt={item.titleLine1}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.4) 40%, rgba(15,23,42,0.85) 70%, rgba(15,23,42,0.98) 100%)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    zIndex: 20,
                    opacity: isCenter ? 1 : 0,
                    transform: isCenter ? "translateY(0px)" : "translateY(20px)",
                    transition: "opacity 500ms ease, transform 500ms ease",
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  {/* Tag */}
                  <div style={{ textAlign: "right", width: "100%" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        color: "#93c5fd",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                        backgroundColor: "rgba(15,23,42,0.6)",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "auto",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        color: "#ffffff",
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                      }}
                    >
                      {item.titleLine1}
                    </h2>

                    {item.titleLine2 && (
                      <span
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#e2e8f0",
                          lineHeight: 1.2,
                          textShadow: "0 3px 10px rgba(0,0,0,0.8)",
                        }}
                      >
                        {item.titleLine2}
                      </span>
                    )}

                    <div
                      style={{
                        width: "40px",
                        height: "3px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "2px",
                        margin: "12px auto 8px",
                        boxShadow: "0 0 10px rgba(59,130,246,0.6)",
                      }}
                    />

                    {item.desc && (
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.85)",
                          maxWidth: "280px",
                          margin: "0 0 16px",
                          lineHeight: 1.4,
                          textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                        }}
                      >
                        {item.desc}
                      </p>
                    )}

                    <a
                      href={item.ctaUrl || "#"}
                      onClick={(e) => {
                        if (onCtaClick) {
                          e.preventDefault();
                          onCtaClick(item);
                        }
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 24px",
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                        color: "#ffffff",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.4), 0 0 20px rgba(37,99,235,0.4)",
                        transition: "transform 200ms ease, box-shadow 200ms ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous service"
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgba(15,23,42,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.6)")}
        >
          <ChevronLeftIcon />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next service"
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgba(15,23,42,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.6)")}
        >
          <ChevronRightIcon />
        </button>

        {/* Pagination Dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", zIndex: 30 }}>
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: "6px",
                width: idx === currentIndex ? "32px" : "8px",
                borderRadius: "9999px",
                backgroundColor: idx === currentIndex ? "#3b82f6" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                boxShadow: idx === currentIndex ? "0 0 10px rgba(59,130,246,0.6)" : "none",
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Component = CoverFlowCarousel;
export default CoverFlowCarousel;