function Gallery({ category, onSelect }) {
  return (
    <section id={category.id} className="gallery">
      <h2 className="gallery-title">{category.label.toUpperCase()}</h2>
      <div className="gallery-grid">
        {category.images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            className="gallery-item"
            onClick={() => onSelect(i)}
            aria-label={`Ver ${img.alt} en grande`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
