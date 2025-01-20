import { useEffect, useState } from "react";
import "../css/Main.css";
import ItemFriend from "./ItemFriend";
import SearchBox from "./SearchBox";

export default () => {
  const [friends, setFriends] = useState([]);
  const [showSearchbox, setShowSearchBox] = useState(false);
  const [searchFriend, setSearchFriend] = useState("");
  
  const randomBoolean = () => Math.random() >= 0.5;

  async function fetchData() {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=20"
    );
    const users = await usersResponse.json();

    const todosResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = await todosResponse.json();

    const combinedData = users.map((user) => {
      const todo = todos.find((todo) => todo.id === user.id);
      return {
        id: user.id,
        username: user.name,
        //isOnline: todo.completed,
        isOnline: randomBoolean(),
        profilePic: `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff&size=128`,
      };
    });
    return combinedData;
  }

  useEffect(() => {
    const fetchFriends = async () => {
      const data = await fetchData()
      const nFriends = data.sort((a, b) =>
        b.isOnline - a.isOnline
      )
      setFriends(nFriends);
    }
    fetchFriends();
  }, [])  

  const filteredFriends = friends.filter((friend) =>
    friend.username.toLowerCase().includes(searchFriend.toLowerCase())
  );

  return (
    <div className="friendsBar">
      <div className="tittleFriends">
        <span>Contactos</span>
        <div className="tittleFriendsButtons">
          <img
            src="/images/search.png"
            onClick={() => {
              setShowSearchBox(!showSearchbox);
            }}
          ></img>
          <img
            src="/images/ordenar-az.png"
            onClick={() => {
              const nfriends = [...friends].sort((a, b) =>
                a.username.localeCompare(b.username)
              );
              setFriends(nfriends);
            }}
          ></img>
        </div>
      </div>
      {showSearchbox && (
        <div className="searchBoxFriends">
          <SearchBox
            placeholder="Buscar..."
            type="text"
            onChange={(input) => setSearchFriend(input.target.value)}
            value={searchFriend}
          />
        </div>
      )}
      <div className="containerFriends">
        {filteredFriends.map((friend) => {
          return (
            <ItemFriend
              profilePic={friend.profilePic}
              username={friend.username}
              isOnline={friend.isOnline}
            />
          );
        })}
      </div>
    </div>
  );
};
