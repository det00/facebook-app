import React, { useState, useEffect } from "react";
import "../css/Card.css";
import Comment from "./Comment";
import Separator from "./Separator";

export default ({
  username,
  date,
  publication,
  comments,
  interactions,
  onClickAngry,
}) => {
  const [showComment, setShowComments] = useState(false);
  const [hasLike, setHasLike] = useState(false);
  const [hasLove, setHasLove] = useState(false);
  const [hasCare, setHasCare] = useState(false);
  const [hasFun, setHasFun] = useState(false);
  const [hasDelight, setHasDelight] = useState(false);
  const [hasSad, setHasSad] = useState(false);
  const [hasAngry, setHasAngry] = useState(false);

  useEffect(() => {
    console.log(interactions);
    let nHasLike = false;
    let nHasLove = false;
    let nHasCare = false;
    let nHasFun = false;
    let nHasDelight = false;
    let nHasSad = false;
    let nHasAngry = false;
    interactions.forEach((interaction) => {
      switch (interaction.interaction) {
        case "like":
          nHasLike = true;
          break;
        case "love":
          nHasLove = true;
          break;
        case "care":
          nHasCare = true;
          break;
        case "fun":
          nHasFun = true;
          break;
        case "delight":
          nHasDelight = true;
          break;
        case "sad":
          nHasSad = true;
          break;
        case "angry":
          nHasAngry = true;
          break;
      }
    });
    setHasLike(nHasLike);
    setHasLove(nHasLove);
    setHasCare(nHasCare);
    setHasFun(nHasFun);
    setHasDelight(nHasDelight);
    setHasSad(nHasSad);
    setHasAngry(nHasAngry);
  }, [interactions]);

  return (
      <div className="cardPublication">
        <div className="cardTittle">
          <img src="./images/profilepublication.jpg" />
          <div className="userData">
            <div>{username}</div>
            <div>
              {date} ·
              <img src="/images/world.png" />
              <img src="/images/lock.png" />
            </div>
          </div>
        </div>
        <div className="cardContent">
          <div className="textContent">{publication}</div>
          <div className="imgContent">
            <img src="/images/imgpublicacion.jpg" />
          </div>
          <div className="reactions">
            <div className="emojis">
              {hasLike && <img src="/images/like.png" />}
              {hasLove && <img src="/images/corazon.png" />}
              {hasCare && <img src="/images/importa.png" />}
              {hasFun && <img src="/images/divierte.png" />}
              {hasDelight && <img src="/images/asombra.png" />}
              {hasSad && <img src="/images/triste.png" />}
              {hasAngry && <img src="/images/enfada.png" />}
            </div>
            <span onClick={onClickAngry}>{interactions.length}</span>
            <div
              className="comments"
              onClick={() => {
                setShowComments(true);
              }}
            >
              Comentarios
            </div>
          </div>
        </div>
        {showComment && (
          <div>
            <Separator />
            {comments.map((comment) => {
              return (
                <Comment
                  profileImg={"/images/profilepublication.jpg"}
                  nameUser={comment.username}
                  comment={comment.text}
                />
              );
            })}
            <div
              className="closeComments"
              onClick={() => {
                setShowComments(false);
              }}
            >
              <img src="/images/arriba.png"></img>
            </div>
          </div>
        )}
      </div>
  );
};
