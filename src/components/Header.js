import "../css/Header.css";
import React, { useState } from "react";

import HeaderIcon from "./HeaderIcon";
import SearchBox from "./SearchBox";
import CircleButton from "./CircleButton.js";
import ItemLeftBar from "./ItemBar.js";

export default ({ currentScreen, onClickIconButton }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <div className="header">
      <div className="headerL">
        <img src="/images/facebook.png"></img>
        <div className="searchBoxHeader">
          <SearchBox
            imgSrc={"/images/search.png"}
            placeholder={"Buscar en Facebook"}
            type={Text}
          />
        </div>
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
            setShowUserMenu(!showUserMenu);
          }}
        />
      </div>
      {showUserMenu && (
        <div className="menuUserProfile">
          <ItemLeftBar
            imgSrc={"/images/ajustes.png"}
            tittle={"Configuración y privacidad"}
            imgSrcB={"/images/derecha.png"}
          />
          <ItemLeftBar
            imgSrc={"/images/interrogatorio.png"}
            tittle={"Ayuda y asistencia"}
          />
          <ItemLeftBar
            imgSrc={"/images/una.png"}
            tittle={"Pantalla y accesibilidad"}
          />
          <ItemLeftBar
            imgSrc={"/images/comentario-alt.png"}
            tittle={"Enviar comentarios"}
          />
          <ItemLeftBar
            imgSrc={"/images/salida.png"}
            tittle={"Cerrar sesión"}
          />
        </div>
      )}
    </div>
  );
};
