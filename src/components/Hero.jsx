import heroImg from '../assets/images/hero.jpg';

function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Nikol Moreira" className="hero-image" />
      <p className="hero-quote">&ldquo;La moda como traducci&oacute;n de lo vivido&rdquo;</p>
    </section>
  );
}

export default Hero;
