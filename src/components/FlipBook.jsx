import { forwardRef, useRef } from 'react';
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
  const bookRef = useRef(null);

  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const goNext = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t.close}>
        &times;
      </button>
      <div className="lightbox-scroll">
        <div className="flipbook-content" onClick={(e) => e.stopPropagation()}>
          {title && <h2 className="lightbox-title">{title}</h2>}
          <div className="flipbook-row">
            <button
              type="button"
              className="flipbook-arrow flipbook-arrow-prev"
              onClick={goPrev}
              aria-label={t.prevImage}
            >
              &lsaquo;
            </button>
            <HTMLFlipBook
              ref={bookRef}
              width={420}
              height={560}
              size="stretch"
              minWidth={260}
              maxWidth={640}
              minHeight={340}
              maxHeight={860}
              showCover
              maxShadowOpacity={0.4}
              className="flipbook"
            >
              {images.map((item) => (
                <Page key={item.id} item={item} />
              ))}
            </HTMLFlipBook>
            <button
              type="button"
              className="flipbook-arrow flipbook-arrow-next"
              onClick={goNext}
              aria-label={t.nextImage}
            >
              &rsaquo;
            </button>
          </div>
          {description && <p className="lightbox-description">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default FlipBook;
