import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

const Page = forwardRef(({ item }, ref) => (
  <div className="flipbook-page" ref={ref}>
    {item.type === 'video' ? (
      <video src={item.src} controls playsInline />
    ) : (
      <img src={item.src} alt="" />
    )}
  </div>
));
Page.displayName = 'FlipBookPage';

function FlipBook({ images, title, description, onClose }) {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t.close}>
        &times;
      </button>
      <div className="lightbox-scroll">
        <div className="flipbook-content" onClick={(e) => e.stopPropagation()}>
          {title && <h2 className="lightbox-title">{title}</h2>}
          <HTMLFlipBook
            width={420}
            height={560}
            size="stretch"
            minWidth={260}
            maxWidth={640}
            minHeight={340}
            maxHeight={860}
            showCover={false}
            maxShadowOpacity={0.4}
            className="flipbook"
          >
            {images.map((item) => (
              <Page key={item.id} item={item} />
            ))}
          </HTMLFlipBook>
          {description && <p className="lightbox-description">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default FlipBook;
