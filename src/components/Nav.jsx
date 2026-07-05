import Logo from './Logo';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabels } from '../i18n/strings';

function Nav({ categories }) {
  const { language } = useLanguage();

  const scrollToCategory = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        {categories.map((c) => (
          <li key={c.id}>
            <button type="button" className="nav-link" onClick={() => scrollToCategory(c.id)}>
              {categoryLabels[c.id][language].toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
      <Logo className="nav-logo" />
    </nav>
  );
}

export default Nav;
