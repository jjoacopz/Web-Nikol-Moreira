const proyectosImages = import.meta.glob('../assets/images/proyectos/*', {
  eager: true,
  import: 'default',
});
const worksImages = import.meta.glob('../assets/images/works/*', {
  eager: true,
  import: 'default',
});
const capsulaImages = import.meta.glob('../assets/images/capsula/*', {
  eager: true,
  import: 'default',
});

// Filled in per category as real project descriptions come in; index matches
// the alphabetical file order within each assets/images/<category> folder.
const descriptions = {
  proyectos: [],
  works: [],
  capsula: [],
};

function toSortedArray(globObj, prefix) {
  return Object.keys(globObj)
    .sort()
    .map((key, i) => ({
      id: `${prefix}-${i}`,
      src: globObj[key],
      alt: `${prefix} ${i + 1}`,
      description: descriptions[prefix]?.[i] ?? '',
    }));
}

export const categories = [
  {
    id: 'proyectos',
    label: 'Proyectos',
    images: toSortedArray(proyectosImages, 'proyectos'),
  },
  {
    id: 'works',
    label: 'Works',
    images: toSortedArray(worksImages, 'works'),
  },
  {
    id: 'capsula',
    label: 'Capsula',
    images: toSortedArray(capsulaImages, 'capsula'),
  },
];
