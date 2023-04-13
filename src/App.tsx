import React, { useState } from "react";
import { useGetWikiInfo } from "./Api/hooks/useGetWikiInfo";
import { getRandomFish } from "./Api/wikiApi";
import {
  BarLine,
  ContentContainer,
  ContentDiv,
  ContentParagraph,
  PageContainer,
  StyledButton,
  StyledImage,
  StyledTimeStamp,
  Title,
} from "./App.styles";

export default function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const { data: wikiInfo, isLoading } = useGetWikiInfo(searchTerm, handleClick);
  const formattedTimeStamp = new Date(wikiInfo?.timestamp ?? "");

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
            <ContentParagraph
              dangerouslySetInnerHTML={{ __html: wikiInfo.extract_html }}
            ></ContentParagraph>
          </ContentDiv>
        ) : (
          <p>LOADING AAAAHHHHHHHH</p>
        )}
      </ContentContainer>
      {wikiInfo?.timestamp && (
        <>
          <BarLine />
          <StyledTimeStamp>
            Info last updated:
            <br />
            {formattedTimeStamp.toLocaleString()}
          </StyledTimeStamp>
        </>
      )}
    </PageContainer>
  );
}
