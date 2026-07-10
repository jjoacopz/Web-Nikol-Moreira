import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Lightbox({ images, title, description, index, onClose, onNavigate }) {
  const { language } = useLanguage();
  const t = strings[language];
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
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t.close}>
        &times;
      </button>
      <div className="lightbox-scroll">
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          {title && <h2 className="lightbox-title">{title}</h2>}
          <div className="lightbox-images">
            <div className="lightbox-main">
              <img src={current.src} alt={title} />
            </div>
            <button
              type="button"
              className="lightbox-side"
              onClick={() => onNavigate(nextIndex)}
              aria-label={t.nextImage}
            >
              <img src={next.src} alt={title} />
            </button>
          </div>
          {description && <p className="lightbox-description">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
