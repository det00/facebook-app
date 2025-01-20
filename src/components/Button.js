import "../css/Main.css";

export default ({text, onClick}) => {
  return (
    <div className="button" onClick={onClick}>
        {text}
    </div>
  );
};
