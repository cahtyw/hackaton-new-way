import React from "react";

import {
  Container,
  CardFooterEdited,
  SubTitle,
  CardColumn,
  CreatedAt,
  Title
} from "./styles";

import { Card, CardText, CardBody, CardFooter, Button } from "reactstrap";

export default function Post({ item }) {
  return (
    <Container>
      <Card>
        <CardBody>
          <Title data-href={item.postUrl}>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
          <CardText>{item.message}</CardText>
        </CardBody>
        <CardFooter>
          <CardFooterEdited>
            <CardColumn>
              <CreatedAt>
                Criado em: {new Date(item.createdAt).toLocaleString()}
              </CreatedAt>
            </CardColumn>
            <CardColumn>
              <Button color="link">
                <CardText>Leia mais</CardText>
              </Button>
            </CardColumn>
          </CardFooterEdited>
        </CardFooter>
      </Card>
    </Container>
  );
}
