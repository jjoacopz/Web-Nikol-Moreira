# Nikol Moreira — Portfolio

Sitio de portfolio para presentar proyectos, trabajos y c&aacute;psulas.

## Estructura

- **Header + Hero**: nombre, foto principal y frase.
- **Intro**: retrato, frase y biograf&iacute;a.
- **Nav**: PROYECTOS / WORKS / CAPSULA, fijo arriba y resalta la secci&oacute;n visible.
- **Galer&iacute;a**: grilla tipo masonry por categor&iacute;a. Al tocar una imagen se abre en grande junto a la
  siguiente imagen de la categor&iacute;a; tocando esa imagen del costado se pasa a la siguiente (`src/components/Lightbox.jsx`).
- **Fotolibro**: secci&oacute;n final destacada con texto de cierre.

Las im&aacute;genes de las tres categor&iacute;as viven en `src/assets/images/{proyectos,works,capsula}` y se
cargan autom&aacute;ticamente y en orden alfab&eacute;tico desde `src/data/gallery.js`. Para agregar o
reemplazar fotos, solo hay que sumar el archivo a la carpeta correspondiente (el nombre define el orden).

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producci&oacute;n en dist/
npm run lint
```
