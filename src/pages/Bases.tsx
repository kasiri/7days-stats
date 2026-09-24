/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { images } from "@/data/images";

export default function Bases() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Bloquear scroll cuando el lightbox está abierto
  useEffect(() => {
    if (lightboxIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [lightboxIndex]);

  // Navegación con teclado
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null)
        setLightboxIndex((lightboxIndex + 1) % images.length);
      if (e.key === "ArrowLeft" && lightboxIndex !== null)
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }

    if (lightboxIndex !== null) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  // Swipe en móvil
  useEffect(() => {
    let startX = null;

    function onTouchStart(e) {
      startX = e.touches[0].clientX;
    }

    function onTouchEnd(e) {
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
  }, [lightboxIndex]);

  function move(direction) {
    setSliderIndex((prev) => (prev + direction + images.length) % images.length);
  }

  function openLightbox(idx) {
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

      {/* BLOQUE ÉPICO */}
      <div className="epic-block-container" style={{ marginBottom: "40px" }}>
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>Construcciones de la Comunidad</h3>
          <p>
            Aquí encontrarás las bases creadas por los jugadores del servidor.
            Cada una refleja creatividad, supervivencia y estilo propio.
          </p>
        </div>

        <div className="epic-block-line"></div>
      </div>

      {/* SLIDER PRINCIPAL */}
      <div className="slider-container">
        <div className="slider" id="slider">
          {images.map((_, i) => {
            const realIndex = (i + sliderIndex) % images.length;
            const img = images[realIndex];

            return (
              <div className="slide" key={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openLightbox(realIndex)}
                />
                <p className="slide-text">{img.caption}</p>
              </div>
            );
          })}
        </div>

        <button className="slider-btn left" onClick={() => move(-1)}>
          ❮
        </button>
        <button className="slider-btn right" onClick={() => move(1)}>
          ❯
        </button>
      </div>

      {/* LIGHTBOX */}
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

          {/* CONTENIDO DEL LIGHTBOX */}
          <div className="lightbox-content">
            <img
              id="lightbox-img"
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="lightbox-caption">
              {images[lightboxIndex].caption}
            </div>
          </div>

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
