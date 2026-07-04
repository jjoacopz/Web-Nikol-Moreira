import { useEffect } from 'react';

function Lightbox({ images, index, onClose, onNavigate }) {
  const current = images[index];
  const nextIndex = (index + 1) % images.length;
  const next = images[nextIndex];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(nextIndex);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, nextIndex, onClose, onNavigate]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Cerrar">
        &times;
      </button>
      <div className="lightbox-scroll">
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-images">
            <div className="lightbox-main">
              <img src={current.src} alt={current.alt} />
            </div>
            <button
              type="button"
              className="lightbox-side"
              onClick={() => onNavigate(nextIndex)}
              aria-label="Ver siguiente imagen"
            >
              <img src={next.src} alt={next.alt} />
            </button>
          </div>
          {current.description && <p className="lightbox-description">{current.description}</p>}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
