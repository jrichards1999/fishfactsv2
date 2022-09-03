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
        <h1>Fish Facts!</h1>
        <p>To start, type a word or phrase and click Search.</p>
        <div>
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
  margin-top: 15px;
  background-color: #23395d;
  color: white;
  border-radius: 25px;
  padding: 20px 200px;
`;

const StyledInput = styled.input`
  margin-right: 5px;
  height: 40px;
`;

const StyledLink = styled.button`
  margin-top: -5px;
  border-radius: 25px;
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
