import { useEffect, useState } from "react";
import "../css/Main.css";
import ItemFriend from "./ItemFriend";
import SearchBox from "./SearchBox";

export default () => {
  const [friends, setFriends] = useState([]);
  const [showSearchbox, setShowSearchBox] = useState(false);
  const [searchFriend, setSearchFriend] = useState("");

  useEffect(() => {
    setFriends([
      {
        id: 1,
        username: "Juan Pérez",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 2,
        username: "María López",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 3,
        username: "Carlos García",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 4,
        username: "Luis Martínez",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 5,
        username: "Laura González",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 6,
        username: "Pedro Fernández",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 7,
        username: "Ángel Cortés",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 8,
        username: "Alicia Castro",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 9,
        username: "José Gutiérrez",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 10,
        username: "Isabel Sánchez",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 11,
        username: "Daniel Ramírez",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 12,
        username: "Patricia Vázquez",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 13,
        username: "Óscar Pérez",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 14,
        username: "Martina López",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 15,
        username: "Javier Díaz",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 16,
        username: "Susana Bernal",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 17,
        username: "Francisco Ramos",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 18,
        username: "Elena Fernández",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 19,
        username: "Raúl Pérez",
        isOnline: true,
        profilepic: "./images/profilepublication.jpg",
      },
      {
        id: 20,
        username: "Beatriz González",
        isOnline: false,
        profilepic: "./images/profilepublication.jpg",
      },
    ]);
  }, []);

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
              profilePic={friend.profilepic}
              username={friend.username}
              isOnline={friend.isOnline}
            />
          );
        })}
      </div>
    </div>
  );
};
