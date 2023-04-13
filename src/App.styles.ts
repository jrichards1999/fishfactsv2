import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 25px;
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
  border-radius: 25px;
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

  p {
    // We apply the margin stying in the upper paragraph, so we remove any margin styling that comes with the html
    margin: 0px;
  }
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

export const StyledTimeStamp = styled.p`
  text-align: center;
  font-size: 0.85em;
  opacity: 50%;
`;

export const BarLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: gray;
  box-shadow: 8px 5px 5px gray;
  opacity: 25%;
  margin: 20px 0px;
  border-radius: 25px;
`;
