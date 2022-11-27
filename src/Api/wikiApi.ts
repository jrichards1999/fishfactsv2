import { fishList } from "./fishList";

interface IWikiInfo {
  extract: string;
  title: string;
  source: string;
}

export async function getWikiInfo(searchTerm: string) {
  const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;
  let info: IWikiInfo = {
    extract: "No Exact Match Found",
    title: "",
    source: "",
  };
  await fetch(url, { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //info = new WikiInfo(json.title, json.extract, json.originalimage.source);
      info = {
        title: json.title,
        extract: json.extract,
        source: json.originalimage.source,
      };
    });
  return info;
}

export function getRandomFish() {
  const fish = fishList[getRandomInt(0, fishList.length - 1)];
  return fish;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
