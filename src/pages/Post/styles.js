import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 5px;
  margin: 5px 0;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

export const CardColumn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.h3`
  font-weight: bold;
  color: #545454;
`;

export const Message = styled.h4``;

export const Header = styled.div``;
export const Body = styled.div``;
export const CardFooterEdited = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const CreatedAt = styled.span`
  font-size: 10px;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DefaultHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ flex }) => flex};
  align-items: center;
`;

export const Image = styled.img`
  max-height: 30px;
  max-width: 30px;
  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
`;

export const Author = styled.span`
  font-size: 10px;
  color: #404041;
  margin-right: 10px;
`;
