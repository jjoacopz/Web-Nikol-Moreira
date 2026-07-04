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

function toSortedArray(globObj, prefix) {
  return Object.keys(globObj)
    .sort()
    .map((key, i) => ({
      id: `${prefix}-${i}`,
      src: globObj[key],
      alt: `${prefix} ${i + 1}`,
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
