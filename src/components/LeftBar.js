import React, { useState } from "react";
import "../css/Main.css";
import ItemLeftBar from "../components/ItemLeftBar";
import Link from "../components/Link";

export default () => {
  const [showMoreTop, setShowMoreTop] = useState(false);
  const [showMoreBottom, setShowMoreBottom] = useState(false);
  return (
    <div className="leftContent">
      <div className="mainLeftBar">
        <ItemLeftBar imgSrc={"/images/friends.png"} tittle={"Friends"} />
        <ItemLeftBar imgSrc={"/images/memories.png"} tittle={"Memories"} />
        <ItemLeftBar imgSrc={"/images/saved.png"} tittle={"Saved"} />
        <ItemLeftBar imgSrc={"/images/groups.png"} tittle={"Groups"} />
        <ItemLeftBar imgSrc={"/images/video.png"} tittle={"Video"} />
        <ItemLeftBar
          imgSrc={"/images/marketplace.png"}
          tittle={"Marketplace"}
        />
        <ItemLeftBar imgSrc={"/images/feed.png"} tittle={"Feed"} />
        {!showMoreTop && (
          <ItemLeftBar
            imgSrc={"/images/abajo.png"}
            tittle={"See more"}
            onClick={() => {
              setShowMoreTop(true);
            }}
          />
        )}
        {showMoreTop && (
          <div>
            <ItemLeftBar
              imgSrc={"/images/publi.png"}
              tittle={"Actividad publicitaria reciente"}
            />
            <ItemLeftBar
              imgSrc={"/images/anuncios.png"}
              tittle={"Administrador de anuncios"}
            />
            <ItemLeftBar
              imgSrc={"/images/arriba.png"}
              tittle={"See less"}
              onClick={() => {
                setShowMoreTop(false);
              }}
            />
          </div>
        )}
      </div>
      <div className="mainLeftBar">
        <div className="tittleBottomLeftBar">Tus accesos directos</div>
        <ItemLeftBar imgSrc={"/images/ajedrez.png"} tittle={"Ajedrez"} />
        <ItemLeftBar imgSrc={"/images/sudoku.png"} tittle={"Sudoku"} />
        {!showMoreBottom && (
          <ItemLeftBar
            imgSrc={"/images/abajo.png"}
            tittle={"See more"}
            onClick={() => setShowMoreBottom(true)}
          />
        )}
        {showMoreBottom && (
          <div>
            <ItemLeftBar imgSrc={"/images/cartas.png"} tittle={"Cartas"} />
            <ItemLeftBar imgSrc={"/images/teatro.png"} tittle={"Teatro"} />
            <ItemLeftBar imgSrc={"/images/musica.png"} tittle={"Música"} />
            <ItemLeftBar
              imgSrc={"/images/arriba.png"}
              tittle={"See less"}
              onClick={() => {
                setShowMoreBottom(false);
              }}
            />
          </div>
        )}
      </div>
      <div className="containerLinks">
        <Link text={"Privacidad"} url={"https://www.facebook.com/privacy/policy/?entry_point=comet_dropdown"}></Link>
        <Link text={"Condiciones"} url={"https://www.facebook.com/policies?ref=pf"}></Link>
        <Link text={"Publicidad"} url={"https://www.facebook.com/business/"}></Link>
        <Link
          text={"Opciones de anuncios"}
          url={"https://www.facebook.com/help/568137493302217"}
        ></Link>
        <Link text={"Cookies"} url={"https://www.facebook.com/policies/cookies/"}></Link>
      </div>
    </div>
  );
};
