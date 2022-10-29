import React, { useState } from "react";
import styled from "styled-components";
import {
  PageContainer,
  ContentContainer,
  Image,
  Title,
  ContentParagraph,
  StyledButton,
  ContentDiv,
} from "./App.styles";
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

export default App;
