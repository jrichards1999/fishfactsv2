const fishInfoUrl = (searchTerm?: string) =>
   "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;

const fishListUrl =
   "https://api.wikimedia.org/core/v1/wikipedia/en/page/List_of_fish_common_names";

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

export async function getFishList(): Promise<string[]> {
   return await fetch(fishListUrl, { method: "GET" })
      .then(function (response) {
         return response.json();
      })
      .then(function (json) {
         return massageRawData(json.source);
      });
}

export function getRandomFish(fishList: string[]): string {
   return fishList[getRandomInt(0, fishList.length - 1)];
}

function getRandomInt(min: number, max: number): number {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function massageRawData(source: string): string[] {
   const wordsToIgnore = [
      "Common name",
      "species",
      "genus",
      "family (biology)|family",
      "Scientific name",
      "List of aquarium fish by scientific name",
      "List of freshwater aquarium fish species",
      "Diversity of fish",
      "Category:Fish common names|*",
      "Category:Lists of fishes",
      "Category:Ichthyology|*",
   ];

   let fishList = new Array<string>();

   const listEnd = false;
   do {
      const startIndex = source.indexOf("[[") + 2;
      const endIndex = source.indexOf("]]");

      if (startIndex === -1 || endIndex === -1) break;

      const substring = source.substring(startIndex, endIndex);
      fishList.push(substring);
      source = source.substring(endIndex + 2);
   } while (!listEnd);

   fishList = fishList.filter((word) => !wordsToIgnore.includes(word));
   console.log(fishList);
   return fishList;
}
