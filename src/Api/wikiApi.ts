import { fishList } from "./fishList";

const fishInfoUrl = (searchTerm?: string) =>
  "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;

export interface IWikiInfo {
  title: string;
  source: string;
  extract_html: string;
  timestamp: string;
}

export async function getWikiInfo(searchTerm?: string) {
  const url = fishInfoUrl(searchTerm);
  return await fetch(url, { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return {
        title: json.title,
        extract_html: json.extract_html,
        source: json.originalimage.source,
        timestamp: json.timestamp,
      };
    });
}

export function getRandomFish(): string {
  return fishList[getRandomInt(0, fishList.length - 1)];
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
