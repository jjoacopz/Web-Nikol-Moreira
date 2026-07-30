import Logo from './Logo';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabels } from '../i18n/strings';

function Nav({ categories, activeFilter, onFilterChange }) {
  const { language } = useLanguage();

  return (
    <nav className="nav">
      <ul className="nav-list">
        {categories.map((c) => {
          const isActive = activeFilter === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                className={`nav-link${isActive ? ' is-active' : ''}`}
                onClick={() => onFilterChange(isActive ? null : c.id)}
              >
                {categoryLabels[c.id][language].toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
      <Logo className="nav-logo" />
    </nav>
  );
}

export default Nav;
