import { useEffect, useState } from 'react';

const images = Object.values(
  import.meta.glob('../assets/images/hero-strip/*', { eager: true, import: 'default' })
).sort();

const INTERVAL_MS = 1000;

function PhotoStrip() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (images.length === 0) return undefined;
    const id = setInterval(() => setTick((t) => t + 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  if (images.length === 0) return null;

  const leftSrc = images[tick % images.length];
  const rightSrc = images[(tick + Math.floor(images.length / 2)) % images.length];

  return (
    <section className="photo-strip">
      <div className="photo-strip-panel">
        <img key={leftSrc} src={leftSrc} alt="" />
      </div>
      <div className="photo-strip-panel">
        <img key={rightSrc} src={rightSrc} alt="" />
      </div>
    </section>
  );
}

export default PhotoStrip;
