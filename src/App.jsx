import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import { categories } from './data/gallery';
import './App.css';

function App() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (categoryId, index) => setLightbox({ categoryId, index });
  const closeLightbox = () => setLightbox(null);

  const activeImages = categories.find((c) => c.id === lightbox?.categoryId)?.images;

  return (
    <div className="site">
      <Header />
      <Hero />
      <Intro />
      <Nav categories={categories} />
      <main>
        <Gallery categories={categories} onSelect={openLightbox} />
      </main>
      {lightbox && activeImages && (
        <Lightbox
          images={activeImages}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={(newIndex) => setLightbox({ categoryId: lightbox.categoryId, index: newIndex })}
        />
      )}
    </div>
  );
}

export default App;
