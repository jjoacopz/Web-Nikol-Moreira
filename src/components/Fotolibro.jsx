import hand from '../assets/images/fotolibro_hand.jpg';
import dog from '../assets/images/fotolibro_dog.jpg';

function Fotolibro({ onSelect }) {
  return (
    <section className="fotolibro">
      <span className="fotolibro-label">FOTOLIBRO</span>
      <div className="fotolibro-images">
        <button
          type="button"
          className="fotolibro-main"
          onClick={() => onSelect(0)}
          aria-label="Ver imagen en grande"
        >
          <img src={hand} alt="Fotolibro - mano abierta" />
        </button>
        <button
          type="button"
          className="fotolibro-side"
          onClick={() => onSelect(1)}
          aria-label="Ver imagen en grande"
        >
          <img src={dog} alt="Fotolibro - perro en el pasto" />
        </button>
      </div>
      <p className="fotolibro-text">
        Este proyecto no es solo una s&iacute;ntesis conceptual, sino tambi&eacute;n un
        cierre personal. Tiene un valor sentimental que atraviesa todo el proceso y que
        define por qu&eacute; elijo terminar mi tesis desde este lugar. Por el valor que
        ocupa en mi vida, por lo que representa y por lo que me construy&oacute;, este
        cruce deja de ser solo una idea para convertirse en algo propio.
      </p>
    </section>
  );
}

export default Fotolibro;
