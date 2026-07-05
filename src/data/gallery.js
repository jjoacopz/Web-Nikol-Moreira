const categoryIds = ['proyectos', 'works', 'capsula'];

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
    .map((slug) => ({
      id: slug,
      images: bySlug[slug].map((src, i) => ({ id: `${slug}-${i}`, src })),
    }));
}

export const categories = categoryIds.map((id) => ({
  id,
  projects: buildProjects(id),
}));
