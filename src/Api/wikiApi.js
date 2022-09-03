export class WikiInfo {
  constructor(title, extract, source) {
    this.extract = extract;
    this.title = title;
    this.source = source;
  }
}

export async function getWikiInfo(searchTerm) {
  const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;
  let info = new WikiInfo("No Exact Match Found", "", "");
  await fetch(url, { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      info = new WikiInfo(json.title, json.extract, json.originalimage.source);
    });
  return info;
}
