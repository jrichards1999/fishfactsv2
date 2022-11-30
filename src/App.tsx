import React, { useState } from "react";
import { getRandomFish, getWikiInfo } from "./Api/wikiApi";
import {
  ContentContainer,
  ContentDiv,
  ContentParagraph,
  PageContainer,
  StyledButton,
  StyledImage,
  Title,
} from "./App.styles";

function App(): JSX.Element {
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
        <h1>Fish Facts</h1>
        <div>
          <StyledButton onClick={handleClick} className="btn btn-primary">
            Next Fish
          </StyledButton>
        </div>
        {title && (
          <ContentDiv>
            <Title>{title}</Title>
            <StyledImage src={imageSrc} alt="" />
            <ContentParagraph>{content}</ContentParagraph>
          </ContentDiv>
        )}
      </ContentContainer>
    </PageContainer>
  );
}

export default App;
