import "../css/Main.css";

export default ({imgSrc, tittle, onClick}) => {
  return (
    <div>
      <div className="leftBar">
        <div className="itemLeftBar" onClick={onClick}>
            <img src={imgSrc}></img>
            <div className="textLeftBar">{tittle}</div>
        </div>
      </div>
    </div>
  );
};
