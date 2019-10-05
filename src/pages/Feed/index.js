import React, { useEffect, useState } from "react";
import { Alert } from "reactstrap";

import { Container, UserArea, News, Logo, LogoArea } from "./styles";
import LogoInstitute from "../../assets/logo.png";

import Post from "../Post";
import MenuOffline from "../../components/MenuOffline";
import MenuOnline from "../../components/MenuOnline";

const data = [
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  },
  {
    _id: 1,
    postUrl: "./1",
    title: `Titulo Teste`,
    createdAt: "2019-10-05T17:09:50.411Z",
    subTitle: "Sub-titulo",
    message: `Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.`
  }
];

export default function Feed({ history }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // if (!localStorage.getItem("logged")) {
    //   return history.push("/login");
    // }
    loadPosts();
  });

  const loadPosts = async () => {
    const payload = await new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });

    setPosts(payload);
  };

  return (
    <Container>
      <UserArea>
        <LogoArea>
          <Logo>
            <img src={LogoInstitute} alt="Logotipo do Instituto " />
          </Logo>
        </LogoArea>
        {localStorage.getItem("logged") ? (
          <MenuOnline history={history} />
        ) : (
          <MenuOffline history={history}></MenuOffline>
        )}
      </UserArea>
      <News>
        {posts.length && (
          <Alert>Últimos {posts.length} posts encontrados.</Alert>
        )}
        {posts.map((element, index) => (
          <Post key={Date.now() + index} item={element}></Post>
        ))}
      </News>
    </Container>
  );
}
