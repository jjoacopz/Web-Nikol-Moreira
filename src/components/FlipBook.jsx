import { forwardRef, useRef, useState } from 'react';
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
  const [bookOpen, setBookOpen] = useState(false);

  const [cover, ...pages] = images;

  const goPrev = () => {
    if (!bookOpen) return;
    bookRef.current?.pageFlip()?.flipPrev();
  };
  const goNext = () => {
    if (!bookOpen) {
      setBookOpen(true);
      return;
    }
    bookRef.current?.pageFlip()?.flipNext();
  };

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t.close}>
        &times;
      </button>
      <div className="lightbox-scroll">
        <div className="flipbook-content" onClick={(e) => e.stopPropagation()}>
          {title && <h2 className="lightbox-title">{title}</h2>}
          {!bookOpen ? (
            <div className="lightbox-images">
              <div className="lightbox-main">
                {cover.type === 'video' ? (
                  <video src={cover.src} controls playsInline />
                ) : (
                  <img src={cover.src} alt={title} />
                )}
              </div>
              <button
                type="button"
                className="lightbox-side"
                onClick={() => setBookOpen(true)}
                aria-label={t.nextImage}
              >
                {pages[0].type === 'video' ? (
                  <video src={pages[0].src} muted playsInline />
                ) : (
                  <img src={pages[0].src} alt={title} />
                )}
              </button>
            </div>
          ) : (
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
                usePortrait={false}
                maxShadowOpacity={0.4}
                className="flipbook"
              >
                {pages.map((item) => (
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
          )}
          {description && <p className="lightbox-description">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default FlipBook;
