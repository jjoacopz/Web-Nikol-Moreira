import portrait from '../assets/images/portrait.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { strings, contactInfo } from '../i18n/strings';

function Intro() {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <section id="about" className="intro">
      <p className="intro-quote">
        {t.introQuoteLine1}
        <br />
        {t.introQuoteLine2}
      </p>
      <img src={portrait} alt="Retrato de Nikol Moreira" className="intro-portrait" />
      <div className="intro-footer">
        <p className="intro-bio">{t.bio}</p>
        <div className="intro-contact">
          <span className="intro-contact-label">{t.contactLabel.toUpperCase()}</span>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
          <a
            href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            {contactInfo.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
