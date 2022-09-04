import React, { useState } from "react";
import styled from "styled-components";
import { getRandomFish, getWikiInfo } from "./Api/wikiApi";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  async function handleClick() {
    const fish = getRandomFish();
    const info = await getWikiInfo(fish);
    setTitle(info.title);
    setContent(info.extract);
    setImageSrc(info.source);
  }

  return (
    <PageContainer className="jumbotron">
      <ContentContainer>
        <h1>Fish Facts!</h1>
        <div>
          <StyledButton onClick={handleClick} className="btn btn-primary">
            Show Me Da Fishees
          </StyledButton>
        </div>
        {title && (
          <ContentDiv>
            <Title>{title}</Title>
            <Image src={imageSrc} alt="" />
            <ContentParagraph>{content}</ContentParagraph>
          </ContentDiv>
        )}
      </ContentContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: 25px;
`;

const ContentContainer = styled.div`
  padding: 25px;
  border-radius: 25px;
  background-color: #add8e6;
  box-shadow: 8px 5px 5px gray;
`;

const Image = styled.img`
  max-height: 500px;
  max-width: 500px;
  box-shadow: 8px 5px 5px #23395d;
`;

const Title = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
`;

// TODO - Media query stuff currently not working
// export const device = {
//   big: `(min-width: 1024)`,
//   small: `(min-width: 768)`,
// };

const ContentParagraph = styled.p`
  margin-top: 30px;
  background-color: #23395d;
  color: white;
  border-radius: 25px;
  padding: 20px 200px;
`;

const StyledButton = styled.button`
  margin-top: -5px;
  border-radius: 25px;
  background-color: #23395d;

  :hover {
    background-color: #33435e;
  }

  :focus {
    background-color: #23395d;
  }
`;

const ContentDiv = styled.div`
  margin-top: 15px;
  padding-top: 1px;
  align-items: center;
  text-align: center;
  background-color: #34aed1;

  box-shadow: 8px 5px 5px gray;
  border-radius: 25px;
`;

export default App;
