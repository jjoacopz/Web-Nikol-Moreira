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

  const openLightbox = (categoryId, projectId, index) =>
    setLightbox({ categoryId, projectId, index });
  const closeLightbox = () => setLightbox(null);

  const activeProject = categories
    .find((c) => c.id === lightbox?.categoryId)
    ?.projects.find((p) => p.id === lightbox?.projectId);

  return (
    <div className="site">
      <Header />
      <Hero />
      <Intro />
      <Nav categories={categories} />
      <main>
        <Gallery categories={categories} onSelect={openLightbox} />
      </main>
      {lightbox && activeProject && (
        <Lightbox
          images={activeProject.images}
          description={activeProject.description}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={(newIndex) => setLightbox({ ...lightbox, index: newIndex })}
        />
      )}
    </div>
  );
}

export default App;
