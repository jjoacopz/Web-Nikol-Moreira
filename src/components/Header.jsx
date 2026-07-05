import Logo from './Logo';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <Logo className="logo" />
      <h1 className="site-title">Nikol Moreira</h1>
      <button type="button" className="lang-toggle" onClick={toggleLanguage}>
        {strings[language].langToggle}
      </button>
    </header>
  );
}

export default Header;
