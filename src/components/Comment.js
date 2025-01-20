import "../css/Card.css"

export default ({profileImg, username, comment})=>{
    return(
        <div className="commentBox">
          <div className="profileImgComment">
            <img src={profileImg}></img>
          </div>
          <div className="userDataComment">
            <div className="nameComment">{username}</div>
            <div className="textComment">{comment}</div>
          </div>
        </div>
    )
}