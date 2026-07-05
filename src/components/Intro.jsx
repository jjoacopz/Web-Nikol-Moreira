import portrait from '../assets/images/portrait.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Intro() {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <section className="intro">
      <p className="intro-quote">
        {t.introQuoteLine1}
        <br />
        {t.introQuoteLine2}
      </p>
      <img src={portrait} alt="Retrato de Nikol Moreira" className="intro-portrait" />
      <p className="intro-bio">{t.bio}</p>
    </section>
  );
}

export default Intro;
