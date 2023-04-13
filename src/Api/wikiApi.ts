import { fishList } from "./fishList";
import axios from "axios";

const fishInfoUrl = (searchTerm?: string) =>
  "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;
const wikipediaUrl = "https://en.wikipedia.org/wiki/Fish";

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

export async function getFishList() {
  await axios
    .get(wikipediaUrl, {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "https://en.wikipedia.org/wiki/Fish",
      },
    })
    .then((response) => {
      // Extract the data from the response
      const wikipediaData = response.data;

      // Use regular expressions to extract information about fish from the Wikipedia data
      const fishRegex =
        /<h2><span class="mw-headline" id=".*?">(.*?)<\/span><\/h2>/g;
      let match;
      let fishList = [];
      while ((match = fishRegex.exec(wikipediaData)) !== null) {
        // Extract the name of the fish from the regular expression match
        const fishName = match[1];

        // Add the name of the fish to the list
        fishList.push(fishName);
      }
      console.log(fishList);
    })
    .catch((error) => {
      // Handle errors that may occur while fetching data from Wikipedia
      console.error(error);
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
