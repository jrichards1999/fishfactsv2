import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [searchBoxText, setSearchBoxText] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  function handleClick() {
    const Url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchBoxText;
    fetch(Url, { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        try {
          setTitle(json.title);
          setContent(json.extract);
          setImageSrc(json.originalimage.source);
          console.log(json.title);
          console.log(json.extract);
          console.log(json.thumbnail.source);
        } catch {
          setTitle("No Exact Match Found");
          setContent("");
          setImageSrc("");
        }
      });
  }

  return (
    <PageContainer className="jumbotron">
      <ContentContainer>
        <h1>Wikipedia API Demonstration</h1>
        <p>To start, type a word or phrase and click Search.</p>
        <SearchContainer>
          <StyledInput
            onChange={(event) => setSearchBoxText(event.target.value)}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
                handleClick();
              }
            }}
          ></StyledInput>
          <StyledLink onClick={handleClick} className="btn btn-primary">
            Search
          </StyledLink>
        </SearchContainer>
        <ContentDiv>
          <Title>{title}</Title>
          <Image src={imageSrc} alt="" />
          <ContentParagraph>{content}</ContentParagraph>
        </ContentDiv>
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
`;

const Image = styled.img`
  max-height: 500px;
  max-width: 500px;
`;

const Title = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ContentParagraph = styled.p`
  margin-top: 15px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: darkblue;
  color: white;
  border-radius: 25px;
`;

const SearchContainer = styled.div``;

const StyledInput = styled.input`
  margin-right: 5px;
  height: 40px;
`;

const StyledLink = styled.button`
  margin-top: -5px;
`;

const ContentDiv = styled.div`
  align-items: center;
  text-align: center;
`;

export default App;
