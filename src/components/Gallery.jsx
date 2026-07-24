import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { projectsMeta } from '../data/projectsMeta';

function Gallery({ categories, onSelect, activeFilter }) {
  const { language } = useLanguage();
  const t = strings[language];

  const projectsByCategory = categories.map((category) =>
    category.projects.map((project) => ({ ...project, categoryId: category.id }))
  );
  const maxLength = Math.max(...projectsByCategory.map((list) => list.length), 0);
  const allProjects = [];
  for (let i = 0; i < maxLength; i += 1) {
    for (const list of projectsByCategory) {
      if (list[i]) allProjects.push(list[i]);
    }
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-grid-unified">
        {allProjects.map((project) => {
          const cover = project.images.find((item) => item.type === 'image') ?? project.images[0];
          const title = projectsMeta[project.id]?.[language]?.title ?? project.id;
          const visible = !activeFilter || activeFilter === project.categoryId;
          return (
            <button
              key={project.id}
              type="button"
              className={`gallery-item-unified${visible ? '' : ' is-hidden'}`}
              onClick={() => onSelect(project.categoryId, project.id, 0)}
              aria-label={`${t.viewProject} ${title}`}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
            >
              <img src={cover.src} alt={title} loading="lazy" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
