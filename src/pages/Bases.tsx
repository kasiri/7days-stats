/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

function useSlider(
  sliderRef: React.RefObject<HTMLDivElement | null>,
  gap = 20,
) {
  const indexRef = useRef(0);

  function move(direction: number): void {
    const slider = sliderRef.current;
    if (!slider) return;
    const slides = slider.querySelectorAll<HTMLElement>(".slide");
    if (!slides.length) return;
    indexRef.current =
      (indexRef.current + direction + slides.length) % slides.length;
    const slideWidth = slides[0].offsetWidth + gap;
    slider.style.transform = `translateX(-${indexRef.current * slideWidth}px)`;
  }

  return { move };
}

export default function Bases(): React.ReactElement {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { move } = useSlider(sliderRef);

  const images = [
    { src: "images/base1.jpg", alt: "Base 1", caption: "Base de OQ49" },
    {
      src: "images/base2.jpg",
      alt: "Base 2",
      caption: "Base de CalvoTeam primer server",
    },
  ];

  useEffect(() => {
    // lock scroll when lightbox is open
    if (lightboxIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [lightboxIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null)
        setLightboxIndex((lightboxIndex + 1) % images.length);
      if (e.key === "ArrowLeft" && lightboxIndex !== null)
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
    if (lightboxIndex !== null) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, images.length]);

  // touch swipe
  useEffect(() => {
    let startX: number | null = null;
    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
    }
    function onTouchEnd(e: TouchEvent) {
      if (startX === null || lightboxIndex === null) return;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - startX;
      const threshold = 50;
      if (delta > threshold) {
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
      } else if (delta < -threshold) {
        setLightboxIndex((lightboxIndex + 1) % images.length);
      }
      startX = null;
    }
    if (lightboxIndex !== null) {
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchend", onTouchEnd);
    }
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [lightboxIndex, images.length]);

  function openLightbox(idx: number) {
    setLightboxIndex(idx);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function next() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }

  function prev() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="container">
      <PageHeader title="🏠 Bases de los Jugadores" />

      <div className="slider-container">
        <div className="slider" id="slider" ref={sliderRef}>
          {images.map((img, i) => (
            <div className="slide" key={img.src}>
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => openLightbox(i)}
              />
              <p className="slide-text">{img.caption}</p>
            </div>
          ))}
        </div>

        <button className="slider-btn left" onClick={() => move(-1)}>
          ❮
        </button>
        <button className="slider-btn right" onClick={() => move(1)}>
          ❯
        </button>
      </div>

      {lightboxIndex !== null && (
        <div
          id="lightbox"
          className="lightbox"
          style={{ display: "flex" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
          >
            ❮
          </button>
          <span className="close" onClick={closeLightbox} aria-label="Cerrar">
            ✖
          </span>
          <img
            id="lightbox-img"
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
}
