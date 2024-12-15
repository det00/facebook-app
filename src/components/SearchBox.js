import "../css/Header.css";

export default ({placeholder, imgSrc, type}) => {
  return (
    <div>
        <div className="searchBox">
          <img src={imgSrc}></img>
          <input type={type} placeholder={placeholder}></input>
        </div>
    </div>
  );
};
