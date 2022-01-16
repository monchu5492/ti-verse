const request = require("axios");
const fs = require("fs");

const url = "https://random.dog/woof.json";
request.get(url).then((response) => {
  const path = response.data.url;
  request.get(path, { responseType: "stream" });
});
