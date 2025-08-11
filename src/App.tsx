import React, { useState } from "react";
import sound from "./assets/leFishe.mp3";
import { useGetWikiInfo } from "./Api/hooks/useGetWikiInfo";
import { getRandomFish } from "./Api/wikiApi";
import {
   PageContainer,
   ContentContainer,
   StyledButton,
   ContentDiv,
   Title,
   StyledImage,
   ContentParagraph,
   BarLine,
   StyledTimeStamp,
} from "./App.styles";
import { useGetFishList } from "./Api/hooks/useGetFishList";

export default function App(): JSX.Element {
   const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
   const [audioIsPlaying, setAudioIsPlaying] = useState(false);

   const { data: wikiInfo } = useGetWikiInfo(searchTerm, handleClick);
   const { data: fishList } = useGetFishList();
   const formattedTimeStamp = new Date(wikiInfo?.timestamp ?? "");
   const audio = new Audio(sound);

   function handleClick() {
      if (fishList) {
         const fish = getRandomFish(fishList);
         setSearchTerm(fish);
         playLeFishe();
      }
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
            <StyledButton onClick={handleClick} className="btn btn-primary">
               Next Fish
            </StyledButton>
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
