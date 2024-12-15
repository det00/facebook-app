import "../css/Header.css";

import HeaderIcon from "./HeaderIcon";
import SearchBox from "./SearchBox";
import CircleButton from "./CircleButton.js";

export default ({ currentScreen, onClickIconButton }) => {
  return (
    <div className="header">
      <div className="headerL">
        <img src="/images/facebook.png"></img>
        <SearchBox
          imgSrc={"/images/search.svg"}
          placeholder={"Buscar en Facebook"}
          type={Text}
        />
      </div>
      <div className="headerC">
        <HeaderIcon
          imageSrc="/images/casa.svg"
          imageSrcSel="/images/casa-b.svg"
          selected={currentScreen === "home"}
          title="INICIO"
          onClick={() => {
            onClickIconButton("home");
          }}
        />
        <HeaderIcon
          imageSrc="/images/claqueta.svg"
          imageSrcSel="/images/claqueta-b.svg"
          selected={currentScreen === "videos"}
          title="VÍDEOS"
          onClick={() => {
            onClickIconButton("videos");
          }}
        />
        <HeaderIcon
          imageSrc="/images/almacenar.svg"
          imageSrcSel="/images/almacenar-b.svg"
          selected={currentScreen === "store"}
          title="TIENDA"
          onClick={() => {
            onClickIconButton("store");
          }}
        />
        <HeaderIcon
          imageSrc="/images/grupo.svg"
          imageSrcSel="/images/grupo-b.svg"
          selected={currentScreen === "friends"}
          title="AMIGOS"
          onClick={() => {
            onClickIconButton("friends");
          }}
        />
        <HeaderIcon
          imageSrc="/images/control-de-juego.svg"
          imageSrcSel="/images/control-de-juego-b.svg"
          selected={currentScreen === "games"}
          title="JUEGOS"
          onClick={() => {
            onClickIconButton("games");
          }}
        />
      </div>
      <div className="headerR">
        <CircleButton
          imgSrc={"/images/aplicaciones.png"}
          imgBSrc={null}
          onClick={() => {
            alert("menu");
          }}
        />
        <CircleButton
          imgSrc={"/images/comentario.png"}
          imgBSrc={null}
          onClick={() => {
            alert("mensajes");
          }}
        />
        <CircleButton
          imgSrc={"/images/campana.png"}
          imgBSrc={null}
          onClick={() => {
            alert("alerta");
          }}
        />
        <CircleButton
          imgSrc={"/images/usuario.png"}
          imgBSrc={"/images/abajo.png"}
          onClick={() => {
            alert("alerta");
          }}
        />
      </div>
    </div>
  );
};
