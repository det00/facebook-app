import "../css/Header.css";

export default ({ imgSrc, onClick, imgBSrc }) => {
  return (
    <div>
      <div className="circleButton" onClick={onClick}>
        <div className="imageButton">
          <img src={imgSrc}></img>
        {imgBSrc && <div className="imageArrow">
          <img src={imgBSrc}></img>
        </div>}
        </div>
      </div>
    </div>
  );
};
