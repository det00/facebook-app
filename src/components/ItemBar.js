import "../css/Main.css";

export default ({ imgSrc, imgSrcB, tittle, onClick }) => {
  return (
    <div className="itemLeftBar" onClick={onClick}>
      <img src={imgSrc}/>
      <div className="textLeftBar">{tittle}</div>
      {imgSrcB && <div className="imgRightMenuUserProfile"><img src={imgSrcB}></img></div>}
    </div>
  );
};
