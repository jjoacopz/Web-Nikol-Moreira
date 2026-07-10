import { useEffect, useState } from 'react';

// Vertical object-position (%) tuned per photo so faces stay in frame
// without wasting space above the head, while keeping the styling below
// visible. Falls back to center (50) for photos without this tuning.
const verticalPosition = {
  'img01.jpg': 50,
  'img02.jpg': 42,
  'img03.jpg': 10,
  'img04.jpg': 18,
  'img05.jpg': 50,
  'img06.jpg': 90,
  'img07.jpg': 52,
  'img08.jpg': 50,
  'img09.jpg': 50,
  'img10.jpg': 10,
  'img11.jpg': 0,
  'img12.jpg': 59,
  'img13.jpg': 50,
  'img14.jpg': 0,
  'img15.jpg': 49,
  'img16.jpg': 50,
};

const images = Object.entries(
  import.meta.glob('../assets/images/hero-strip/*', { eager: true, import: 'default' })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    position: `50% ${verticalPosition[path.split('/').pop()] ?? 50}%`,
  }));

const INTERVAL_MS = 450;

function PhotoStrip() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (images.length === 0) return undefined;
    const id = setInterval(() => setTick((t) => t + 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  if (images.length === 0) return null;

  const left = images[tick % images.length];
  const right = images[(tick + Math.floor(images.length / 2)) % images.length];

  return (
    <section className="photo-strip">
      <div className="photo-strip-panel">
        <img key={left.src} src={left.src} alt="" style={{ objectPosition: left.position }} />
      </div>
      <div className="photo-strip-panel">
        <img key={right.src} src={right.src} alt="" style={{ objectPosition: right.position }} />
      </div>
    </section>
  );
}

export default PhotoStrip;
