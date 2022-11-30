import { fishList } from "./fishList";

interface IWikiInfo {
  extract: string;
  title: string;
  source: string;
}

const defaultInfo: IWikiInfo = {
  extract: "No Exact Match Found",
  title: "",
  source: "",
};

export async function getWikiInfo(searchTerm: string) {
  const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;
  let toRtn = defaultInfo;
  await fetch(url, { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      toRtn = {
        title: json.title,
        extract: json.extract,
        source: json.originalimage.source,
      };
    });
  return toRtn;
}

export function getRandomFish(): string {
  return fishList[getRandomInt(0, fishList.length - 1)];
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
