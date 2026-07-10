import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { useLanguage } from '../i18n/LanguageContext';
import { strings, categoryLabels } from '../i18n/strings';

const menuCategoryOrder = ['proyectos', 'works', 'capsula'];

function Header({ onNavigate }) {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const t = strings[language];

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleSelect = (target) => {
    setMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header className="header">
      <Logo className="logo" />
      <h1 className="site-title">Nikol Moreira</h1>
      <div className="header-controls" ref={menuRef}>
        <button type="button" className="lang-toggle" onClick={toggleLanguage}>
          {t.langToggle}
        </button>
        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={t.menuLabel}
          aria-expanded={menuOpen}
        />
        {menuOpen && (
          <div className="header-menu">
            <span className="header-menu-label">{t.menuLabel}</span>
            <ul>
              {menuCategoryOrder.map((id) => (
                <li key={id}>
                  <button type="button" onClick={() => handleSelect(id)}>
                    {categoryLabels[id][language].toUpperCase()}
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => handleSelect('about')}>
                  {t.aboutLabel.toUpperCase()}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
