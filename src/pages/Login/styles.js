import styled from "styled-components";
import { Button } from "reactstrap";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #404041;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 500px;
  background: #c4c4c4;
  border-radius: 5px;
`;

export const LogoArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
export const SubmitArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Submit = styled(Button)`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
