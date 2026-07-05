import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { projectsMeta } from '../data/projectsMeta';

const COLUMNS_BY_CATEGORY = {
  proyectos: 4,
  works: 3,
  capsula: 3,
};

function Gallery({ categories, onSelect }) {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-columns">
        {categories.map((category) => (
          <div key={category.id} id={category.id} className="gallery-column">
            <div
              className="gallery-grid"
              style={{ columnCount: COLUMNS_BY_CATEGORY[category.id] ?? 2 }}
            >
              {category.projects.map((project) => {
                const cover = project.images[0];
                const title = projectsMeta[project.id]?.[language]?.title ?? project.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    className="gallery-item"
                    onClick={() => onSelect(category.id, project.id, 0)}
                    aria-label={`${t.viewProject} ${title}`}
                  >
                    <img src={cover.src} alt={title} loading="lazy" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
