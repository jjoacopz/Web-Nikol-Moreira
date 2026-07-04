const COLUMNS_BY_CATEGORY = {
  proyectos: 4,
  works: 3,
  capsula: 3,
};

function Gallery({ categories, onSelect }) {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-columns">
        {categories.map((category) => (
          <div key={category.id} className="gallery-column">
            <div
              className="gallery-grid"
              style={{ columnCount: COLUMNS_BY_CATEGORY[category.id] ?? 2 }}
            >
              {category.projects.map((project) =>
                project.images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    className="gallery-item"
                    onClick={() => onSelect(category.id, project.id, i)}
                    aria-label={`Ver ${img.alt} en grande`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </button>
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
