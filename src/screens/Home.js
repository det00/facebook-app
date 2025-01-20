import React, { useState, useEffect, } from "react";

import "../css/Main.css";
import Card from "../components/Card";
import moment from "moment";
import LeftBar from "../components/LeftBar";
import FriendsBar from "../components/FriendsBar";
require("moment/locale/es");

export default () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  function getRandomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  async function fetchData() {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=20"
    );
    const posts = await postResponse.json();

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();

    const photosResponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const photos = await photosResponse.json();

    const combinedData = posts.map((post) => {
      const user = users.find((user) => user.id === post.userId);
      const photo = photos.find((photo) => photo.id === post.id);

      return {
        id: post.id,
        username: user.username,
        date: getRandomDate(new Date(2020, 0, 1), new Date()),
        profilePic: `https://i.pravatar.cc/150?img=${user.id}`,
        publication: post.body,
        postImg: photo.url,
        comments: [
        ],
        interactions: [],
      };
    });
    return combinedData;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      const nPosts = data.sort((a, b) =>
        moment(b.date).isBefore(moment(a.date)) ? -1 : 1
      );
      setPosts(nPosts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="rowContent">
      <LeftBar />
      <div className="mainContent">
        {posts.map((post, index) => {
          let fechaFormateada = moment(post.date, "YYYY-MM-DDTHH:mm:ss.sssZ");
          if (fechaFormateada.isSameOrAfter(moment().subtract(24, "hours"))) {
            fechaFormateada = fechaFormateada.fromNow();
          } else {
            fechaFormateada = fechaFormateada.format("LLL");
          }
          return (
            <Card
              username={post.username}
              date={fechaFormateada}
              publication={post.publication}
              profilePic={post.profilePic}
              imgPublication={post.postImg}
              comments={post.comments}
              interactions={post.interactions}
              onClickAddComment={(textComment) => {
                const comment = {
                  text: textComment
                }
                post.comments.push(comment)
                const nComments = structuredClone(posts)
                setComments(nComments)
              }}
              onClickAngry={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "angry",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
              onClickCare={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "care",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
              onClickDelight={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "delight",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
              onClickFun={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "fun",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
              onClickLike={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "like",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
              onClickLove={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "love",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
              onClickSad={() => {
                const interaction = {
                  id: 10000,
                  username: "David Estévez",
                  interaction: "sad",
                };
                post.interactions.push(interaction);
                const nposts = structuredClone(posts);
                setPosts(nposts);
              }}
            />
          );
        })}
      </div>
      <FriendsBar />
    </div>
  );
};
