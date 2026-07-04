import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Fotolibro from './components/Fotolibro';
import Lightbox from './components/Lightbox';
import { categories } from './data/gallery';
import handImg from './assets/images/fotolibro_hand.jpg';
import dogImg from './assets/images/fotolibro_dog.jpg';
import './App.css';

const fotolibroImages = [
  { id: 'fotolibro-0', src: handImg, alt: 'Fotolibro - mano abierta' },
  { id: 'fotolibro-1', src: dogImg, alt: 'Fotolibro - perro en el pasto' },
];

function App() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (categoryId, index) => setLightbox({ categoryId, index });
  const closeLightbox = () => setLightbox(null);

  const activeImages =
    lightbox?.categoryId === 'fotolibro'
      ? fotolibroImages
      : categories.find((c) => c.id === lightbox?.categoryId)?.images;

  return (
    <div className="site">
      <Header />
      <Hero />
      <Intro />
      <Nav categories={categories} />
      <main>
        <Gallery categories={categories} onSelect={openLightbox} />
      </main>
      <Fotolibro onSelect={(index) => openLightbox('fotolibro', index)} />
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
