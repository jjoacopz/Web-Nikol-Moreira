import portrait from '../assets/images/portrait.jpg';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-portrait-wrap">
        <img src={portrait} alt="Retrato de Nikol Moreira" className="intro-portrait" />
        <p className="intro-quote">
          &ldquo;presencia silenciosa,
          <br />
          que deja huella sin hacer ruido.&rdquo;
        </p>
      </div>
      <p className="intro-bio">
        Soy Nikol Moreira, nacida a las afueras de Montevideo. Mi mirada se construye
        desde un entorno ligado al campo, atravesado por el esfuerzo f&iacute;sico, la
        incertidumbre y el paso del tiempo sobre el cuerpo. En paralelo, encontr&eacute;
        en la moda un espacio de expresi&oacute;n que, aunque en un inicio se sent&iacute;a
        lejano, fui haciendo propio de forma intuitiva y personal. Hoy trabajo desde el
        cruce entre ambos mundos, explorando la tensi&oacute;n entre lo real y lo
        construido, desarrollando proyectos que traducen ese contraste en una
        est&eacute;tica propia.
      </p>
    </section>
  );
}

export default Intro;
