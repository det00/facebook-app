import React, { useState, useEffect, useRef } from "react";
import "../css/Card.css";
import Comment from "./Comment";
import Separator from "./Separator";
import Button from "./Button";

export default ({
  username,
  date,
  publication,
  imgPublication,
  comments,
  interactions,
  onClickAngry,
  onClickCare,
  onClickDelight,
  onClickFun,
  onClickLike,
  onClickLove,
  onClickSad,
  profilePic,
  onClickAddComment,
}) => {
  const [showComment, setShowComments] = useState(false);
  const [hasLike, setHasLike] = useState(false);
  const [hasLove, setHasLove] = useState(false);
  const [hasCare, setHasCare] = useState(false);
  const [hasFun, setHasFun] = useState(false);
  const [hasDelight, setHasDelight] = useState(false);
  const [hasSad, setHasSad] = useState(false);
  const [hasAngry, setHasAngry] = useState(false);
  const [textComment, setTextComment] = useState("");
  const textAreaRef = useRef();
  const [buttonLike, setButtonLike] = useState(false);

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
        <img src={profilePic} />
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
          <img src={imgPublication} />
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
        </div>
      </div>
      <Separator />
      <div className="reactionButtons">
        {buttonLike && (
          <div className="emojisButtons">
            <img
              src="/images/like.png"
              onClick={() => {
                onClickLike();
                setButtonLike(false);
              }}
            />
            <img src="/images/corazon.png" onClick={()=>{
              onClickLove()
              setButtonLike(false)
            }} />
            <img src="/images/importa.png" onClick={()=>{
              onClickCare()
              setButtonLike(false)
            }} />
            <img src="/images/divierte.png" onClick={()=>{
              onClickFun()
              setButtonLike(false)
            }} />
            <img src="/images/asombra.png" onClick={()=>{
              onClickDelight()
              setButtonLike(false)
            }} />
            <img src="/images/triste.png" onClick={()=>{
              onClickSad()
              setButtonLike(false)
            }} />
            <img src="/images/enfada.png" onClick={()=>{
              onClickAngry()
              setButtonLike(false)
            }} />
          </div>
        )}
        <Button text={"Me gusta"} onClick={() => setButtonLike(!buttonLike)} />
        <Button
          text={"Comentar"}
          onClick={() => setShowComments(!showComment)}
        />
        <Button text={"Enviar"} onClick={null} />
        <Button text={"Compartir"} onClick={null} />
      </div>
      {showComment && (
        <div>
          {comments.map((comment) => {
            return (
              <Comment
                profileImg={"/images/profilepublication.jpg"}
                nameUser={comment.username}
                comment={comment.text}
              />
            );
          })}
          <div className="inputNewComment">
            <textarea
              className="newCommentText"
              type="text"
              ref={textAreaRef}
            />
          </div>
          <div className="closeComments">
            <div
              className="sendComment"
              onClick={() => {
                onClickAddComment(textAreaRef.current.value);
              }}
            >
              Enviar
            </div>
            <img
              src="/images/arriba.png"
              onClick={() => {
                setShowComments(false);
              }}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};
