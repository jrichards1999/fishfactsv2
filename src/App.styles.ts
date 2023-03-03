import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 25px;
  background-color: darkgray;
`;

export const ContentContainer = styled.div`
  padding: 25px;
  border-radius: 25px;
  background-color: #add8e6;
  box-shadow: 8px 5px 5px gray;
`;

export const StyledImage = styled.img`
  max-height: 500px;
  max-width: 500px;
  box-shadow: 8px 5px 5px #23395d;
`;

export const Title = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
`;

// TODO - Media query stuff currently not working
// export const device = {
//   big: `(min-width: 1024)`,
//   small: `(min-width: 768)`,
// };

export const ContentParagraph = styled.p`
  margin-top: 30px;
  background-color: #23395d;
  color: white;
  border-radius: 25px;
  padding: 20px 200px;
`;

export const StyledButton = styled.button`
  margin-top: -5px;
  margin-left: 35px;
  border-radius: 25px;
  background-color: #23395d;
  box-shadow: 8px 5px 5px gray;

  :hover {
    background-color: #33435e;
  }

  :focus {
    background-color: #23395d;
    box-shadow: 8px 5px 5px gray;
  }
`;

export const ContentDiv = styled.div`
  margin-top: 15px;
  padding-top: 1px;
  align-items: center;
  text-align: center;
  background-color: #34aed1;

  box-shadow: 8px 5px 5px gray;
  border-radius: 25px;
`;
