import "../css/Card.css";

export default () => {
  return (
    <div className="cardMain">
    <div className="cardPublication">
      <div className="cardTittle">
        <img src="./images/usuario.png" />
        <div className="userData">
          <div>David Estévez</div>
          <div>
            12 Diciembre a las 21:54 ·
            <img src="/images/world.png" />
            <img src="/images/lock.png" />
          </div>
        </div>
      </div>
      <div className="cardContent">
        <div className="textContent">
          Al pan, pan y al cariño, cariño 💙. ¡Gracias a @levaduramadre por
          ayudarnos en esta acción tan bonita! Durante unas semanas tendrán a la
          venta 1.000 pulseras juegaterapéuticas en sus tiendas propias, con las
          que nos ayudarán a seguir poniendo en marcha proyectos chulos para
          Adriana, para Carla y para muchos peques en tratamiento. Además,
          prepararán un taller para hacer galletas navideñas en su obrador, al
          que ya se están apuntando muchos de nuestros peques🧑🏼‍🎄. ¡Qué dulce sabe
          la solidaridad! 🥰 Juntos, #HumanizamosHospitales
          #FamiliaJuegaterapéutica
        </div>
        <div className="imgContent">
          <img src="/images/imgpublicacion.jpg" />
        </div>
        <div className="reactions">
          <div className="emojis">
            <img src="/images/like.png" />
            <img src="/images/corazon.png" />
            <img src="/images/importa.png" />
            <img src="/images/divierte.png" />
            <img src="/images/asombra.png" />
            <img src="/images/triste.png" />
            <img src="/images/enfada.png" />
          </div>
          <div className="comments">Comentarios:</div>
        </div>
        <div className="separatorContainer">
          <div className="separatorReactions"></div>
        </div>
      </div>
    </div>
    </div>
  );
};
