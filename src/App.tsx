import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useGetWikiInfo } from "./Api/hooks/useGetWikiInfo";
import { getRandomFish } from "./Api/wikiApi";
import {
  ContentContainer,
  ContentDiv,
  ContentParagraph,
  PageContainer,
  StyledButton,
  StyledImage,
  Title,
} from "./App.styles";

export default function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const { data: wikiInfo, isLoading } = useGetWikiInfo(searchTerm, handleClick);

  function handleClick() {
    const fish = getRandomFish();
    setSearchTerm(fish);
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
        {!wikiInfo ? (
          <></>
        ) : !isLoading ? (
          <ContentDiv>
            <Title>{wikiInfo.title}</Title>
            <StyledImage src={wikiInfo.source} alt={wikiInfo?.title} />
            <ContentParagraph>{wikiInfo.extract}</ContentParagraph>
          </ContentDiv>
        ) : (
          <p>LOADING AAAAHHHHHHHH</p>
        )}
      </ContentContainer>
    </PageContainer>
  );
}
