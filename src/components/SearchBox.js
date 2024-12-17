import "../css/Header.css";

export default ({ placeholder, imgSrc, type, onChange, value }) => {
  return (
    <div className="searchBox">
      <img src={imgSrc}></img>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};
