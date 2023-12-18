import React, { useState } from "react";
import { useGetWikiInfo } from "./Api/hooks/useGetWikiInfo";
import { getRandomFish } from "./Api/wikiApi";
import sound from "./assets/leFishe.mp3";
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
   const { data: wikiInfo } = useGetWikiInfo(searchTerm, handleClick);
   const formattedTimeStamp = new Date(wikiInfo?.timestamp ?? "");
   const audio = new Audio(sound);
   const [audioIsPlaying, setAudioIsPlaying] = useState(false);

   function handleClick() {
      const fish = getRandomFish();
      setSearchTerm(fish);
      playLeFishe();
   }

   const playLeFishe = () => {
      if (!audioIsPlaying) {
         audio.play();
      }
      setAudioIsPlaying(true);
   };

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
            ) : (
               <ContentDiv>
                  <Title>{wikiInfo.title}</Title>
                  <StyledImage src={wikiInfo.source} alt={wikiInfo?.title} />
                  <ContentParagraph
                     dangerouslySetInnerHTML={{ __html: wikiInfo.extract_html }}
                  ></ContentParagraph>
               </ContentDiv>
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
