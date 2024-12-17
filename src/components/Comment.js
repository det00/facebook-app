import "../css/Card.css"

export default ({profileImg, nameUser, comment})=>{
    return(
        <div className="commentBox">
          <div className="profileImgComment">
            <img src={profileImg}></img>
          </div>
          <div className="userDataComment">
            <div className="nameComment">{nameUser}</div>
            <div className="textComment">{comment}</div>
          </div>
        </div>
    )
}