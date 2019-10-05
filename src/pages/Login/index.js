import React, { useState, useEffect } from "react";

import { Container, Card, Submit, LogoArea, SubmitArea } from "./styles";

import Logo from "../../assets/logo.png";

import {
  CardBody,
  FormGroup,
  Label,
  CardHeader,
  Input,
  Form,
  Alert
} from "reactstrap";

const users = [
  {
    username: "gabriel@gabriel.com",
    password: "123"
  },
  {
    username: "gabriel2@gabriel.com",
    password: "123"
  }
];

export default function Login({ history }) {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [wrong, toggleWrong] = useState(false);
  const [logged, toggleLogged] = useState(false);

  useEffect(() => {
    if (logged) {
      history.push("/feed");
    }
  }, [logged]);

  useEffect(() => {
    if (localStorage.getItem("logged")) {
      history.push("/feed");
    }
  }, []);

  const login = async e => {
    e.preventDefault();

    const some = users.some(
      user => user.username === username && user.password === password
    );

    if (some) {
      localStorage.setItem("logged", true);
      toggleLogged(true);
      toggleWrong(false);
    } else {
      toggleWrong(true);
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <LogoArea>
            <img src={Logo} alt="Logotipo do Instituto" />
          </LogoArea>
        </CardHeader>
        <CardBody>
          <Form>
            {wrong && <Alert color="danger">Usuário ou senha inválidos.</Alert>}
            <FormGroup>
              <Label for="exampleEmail">E-mail</Label>
              <Input
                type="email"
                name="email"
                value={username}
                onChange={e => changeUsername(e.target.value)}
                placeholder="exemplo@exemplo.com.br"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Senha</Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={e => changePassword(e.target.value)}
                placeholder="******************"
              />
            </FormGroup>
            <SubmitArea>
              <Submit type="submit" onClick={login} color="warning">
                Entrar
              </Submit>
            </SubmitArea>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
