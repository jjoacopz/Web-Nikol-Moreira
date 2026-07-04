import Logo from './Logo';

function Nav({ categories }) {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        {categories.map((c) => (
          <li key={c.id}>
            <button type="button" className="nav-link" onClick={scrollToGallery}>
              {c.label.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
      <Logo className="nav-logo" />
    </nav>
  );
}

export default Nav;
