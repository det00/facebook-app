import React, { useState, useEffect } from "react";

import "../css/Main.css";
import Card from "../components/Card";
import moment from "moment";
import LeftBar from "../components/LeftBar";
import FriendsBar from "../components/FriendsBar";
require("moment/locale/es");

/*const posts=[{
  id: 1,
  username:"juegaterapia.org",
  date: "12 Diciembre a las 21:54",
  publication: "Al pan, pan y al cariño, cariño 💙. ¡Gracias a @levaduramadre por ayudarnos en esta acción tan bonita! Durante unas semanas tendrán a la venta 1.000 pulseras juegaterapéuticas en sus tiendas propias, con las que nos ayudarán a seguir poniendo en marcha proyectos chulos para Adriana, para Carla y para muchos peques en tratamiento. Además, prepararán un taller para hacer galletas navideñas en su obrador, al que ya se están apuntando muchos de nuestros peques🧑🏼‍🎄. ¡Qué dulce sabe la solidaridad! 🥰 Juntos, #HumanizamosHospitales #FamiliaJuegaterapéutica",
  comments: [
    {
      id: 1,
      username: "Alejandro Cristo",
      date: "12 Diciembre a las 22:54",
      text: "Me parece muy bien!"
    },
    {
      id: 2,
      username: "David Estévez",
      date: "12 Diciembre a las 22:56",
      text: "Excelente idea chicos!!!"
    },
    {
      id: 5,
      username: "Miguel Sánchez",
      date: "13 Diciembre a las 23:59",
      text: "Contad conmigo"
    },
  ],
  interactions: [{
    id: 1001,
    username:"Alejandro Cristo",
    interaction: "like"
  },
  {
    id: 1002,
    username:"Guillermo Cristo",
    interaction: "like"
  },
  {
    id: 1003,
    username:"Victoria Estévez",
    interaction: "like"
  },
  {
    id: 1004,
    username:"Sergius Garridus",
    interaction: "love"
  }]
},
{
  id: 2,
  username:"Talleres Juanjo",
  date: "11 Diciembre a las 10:54",
  publication: "Ya hemos abierto la nueva nabe...",
  comments: [
    {
      id: 101,
      username: "Mamá Juanjo",
      date: "11 Diciembre a las 11:34",
      text: "A la escuela te voy a mandar otra vez!"
    },
  ],
  interactions: [
    {
      id: 10078,
      username:"Mamá Juanjo",
      interaction: "angry"
    }
  ]
}]*/

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          username: "juegaterapia.org",
          date: "16 Diciembre a las 12:43",
          publication:
            "Al pan, pan y al cariño, cariño 💙. ¡Gracias a @levaduramadre por ayudarnos en esta acción tan bonita! Durante unas semanas tendrán a la venta 1.000 pulseras juegaterapéuticas en sus tiendas propias, con las que nos ayudarán a seguir poniendo en marcha proyectos chulos para Adriana, para Carla y para muchos peques en tratamiento. Además, prepararán un taller para hacer galletas navideñas en su obrador, al que ya se están apuntando muchos de nuestros peques🧑🏼‍🎄. ¡Qué dulce sabe la solidaridad! 🥰 Juntos, #HumanizamosHospitales #FamiliaJuegaterapéutica",
          comments: [
            {
              id: 1,
              username: "Alejandro Cristo",
              date: "12 Diciembre a las 22:54",
              text: "Me parece muy bien!",
            },
            {
              id: 2,
              username: "David Estévez",
              date: "12 Diciembre a las 22:56",
              text: "Excelente idea chicos!!!",
            },
            {
              id: 5,
              username: "Miguel Sánchez",
              date: "13 Diciembre a las 23:59",
              text: "Contad conmigo",
            },
          ],
          interactions: [
            {
              id: 1001,
              username: "Alejandro Cristo",
              interaction: "like",
            },
            {
              id: 1002,
              username: "Guillermo Cristo",
              interaction: "like",
            },
            {
              id: 1003,
              username: "Victoria Estévez",
              interaction: "like",
            },
            {
              id: 1004,
              username: "Sergius Garridus",
              interaction: "love",
            },
          ],
        },
        {
          id: 2,
          username: "Talleres Juanjo",
          date: "11 febrero a las 10:54",
          publication: "Ya hemos abierto la nueva nabe...",
          comments: [
            {
              id: 101,
              username: "Mamá Juanjo",
              date: "11 Diciembre a las 11:34",
              text: "A la escuela te voy a mandar otra vez!",
            },
          ],
          interactions: [
            {
              id: 10078,
              username: "Mamá Juanjo",
              interaction: "angry",
            },
          ],
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="rowContent">
      <LeftBar />
      <div className="mainContent">
        {posts.map((post, index) => {
          let fechaFormateada = moment(
            post.date,
            "DD MMMM [a las] HH:mm",
            "es"
          );
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
              comments={post.comments}
              interactions={post.interactions}
              onClickAngry={() => {
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
