import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import PhotoStrip from './components/PhotoStrip';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import { categories } from './data/gallery';
import { projectsMeta } from './data/projectsMeta';
import { useLanguage } from './i18n/LanguageContext';
import './App.css';

function App() {
  const { language } = useLanguage();
  const [lightbox, setLightbox] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const openLightbox = (categoryId, projectId, index) =>
    setLightbox({ categoryId, projectId, index });
  const closeLightbox = () => setLightbox(null);

  const handleMenuNavigate = (target) => {
    if (target === 'about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setActiveFilter(target);
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeProject = categories
    .find((c) => c.id === lightbox?.categoryId)
    ?.projects.find((p) => p.id === lightbox?.projectId);
  const activeMeta = activeProject && projectsMeta[activeProject.id]?.[language];

  return (
    <div className="site">
      <Header onNavigate={handleMenuNavigate} />
      <Hero />
      <PhotoStrip />
      <Nav categories={categories} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <main>
        <Gallery categories={categories} onSelect={openLightbox} activeFilter={activeFilter} />
      </main>
      <Intro />
      {lightbox && activeProject && (
        <Lightbox
          images={activeProject.images}
          title={activeMeta?.title}
          description={activeMeta?.description}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={(newIndex) => setLightbox({ ...lightbox, index: newIndex })}
        />
      )}
    </div>
  );
}

export default App;
