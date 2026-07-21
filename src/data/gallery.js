const categoryIds = ['proyectos', 'works', 'capsula'];

// Matches src/assets/images/<category>/<project-slug>/<file>
const allImages = import.meta.glob('../assets/images/{proyectos,works,capsula}/*/*', {
  eager: true,
  import: 'default',
});

const videoExtension = /\.(mp4|webm|mov)$/i;

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
      bySlug[slug].push({
        src: allImages[path],
        type: videoExtension.test(path) ? 'video' : 'image',
      });
    });

  return Object.keys(bySlug)
    .sort()
    .map((slug) => ({
      id: slug,
      images: bySlug[slug].map((item, i) => ({ id: `${slug}-${i}`, ...item })),
    }));
}

export const categories = categoryIds.map((id) => ({
  id,
  projects: buildProjects(id),
}));
