import "../css/Header.css";

export default ({ imageSrc, imageSrcSel, title, selected, onClick }) => {
  return (
    <div className="headerIconDiv" title={title} onClick={onClick}>
      <div className="headerIconDiv2">
        <img src={selected ? imageSrcSel : imageSrc} className="headerIcon" />
      </div>
      {selected && <div className="headerIconLine" />}
    </div>
  );
};
