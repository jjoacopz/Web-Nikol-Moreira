import { projectsMeta } from './projectsMeta';

const categoryDefs = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'works', label: 'Works' },
  { id: 'capsula', label: 'Capsula' },
];

// Matches src/assets/images/<category>/<project-slug>/<file>
const allImages = import.meta.glob('../assets/images/{proyectos,works,capsula}/*/*', {
  eager: true,
  import: 'default',
});

function buildProjects(categoryId) {
  const bySlug = {};
  const prefix = `../assets/images/${categoryId}/`;
  Object.keys(allImages)
    .filter((path) => path.startsWith(prefix))
    .sort()
    .forEach((path) => {
      const rest = path.slice(prefix.length);
      const slug = rest.split('/')[0];
      bySlug[slug] ??= [];
      bySlug[slug].push(allImages[path]);
    });

  return Object.keys(bySlug)
    .sort()
    .map((slug) => {
      const meta = projectsMeta[slug];
      return {
        id: slug,
        title: meta?.title ?? slug,
        description: meta?.description ?? '',
        images: bySlug[slug].map((src, i) => ({
          id: `${slug}-${i}`,
          src,
          alt: `${meta?.title ?? slug} ${i + 1}`,
        })),
      };
    });
}

export const categories = categoryDefs.map((c) => ({
  ...c,
  projects: buildProjects(c.id),
}));
