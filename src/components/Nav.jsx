function Nav({ categories, active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        {categories.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`nav-link${active === c.id ? ' is-active' : ''}`}
              onClick={() => scrollTo(c.id)}
            >
              {c.label.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
      <span className="nav-logo">NM</span>
    </nav>
  );
}

export default Nav;
