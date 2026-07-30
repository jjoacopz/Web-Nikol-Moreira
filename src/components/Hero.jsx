import heroImg from '../assets/images/hero.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero">
      <img src={heroImg} alt="Nikol Moreira" className="hero-image" />
      <p className="hero-quote">{strings[language].heroQuote}</p>
    </section>
  );
}

export default Hero;
