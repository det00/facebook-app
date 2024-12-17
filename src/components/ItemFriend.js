import "../css/Main.css";
export default ({ profilePic, isOnline, username }) => {
  return (
    <div className="itemFriend">
      <div className="itemFriendPic">
        <img src={profilePic}></img>
        {isOnline && (
          <div className="onlineStatus">
            <img src="/images/online.png"></img>
          </div>
        )}
      </div>
      <div className="usernameItemFriend">{username}</div>
    </div>
  );
};
