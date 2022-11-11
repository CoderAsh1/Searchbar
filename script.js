let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let linkTag = document.querySelector("a");
let autoSug = document.querySelector(".autoSuggestion");

let fetchSuggestion = async (q) => {
  let url = `http://api.tvmaze.com/search/shows?q=${q}`;
  let fetchedData = await fetch(url);
  let data = await fetchedData.json();
  return data;
};

input.onkeyup = async (e) => {
  query = e.target.value;
  let data = await fetchSuggestion(query);
  let suggArr = [];
  for (let v of data) {
    suggArr.push(v.show.name);
  }

  suggArr = suggArr.map((data) => {
    return `<li>${data}</li>`;
  });
  if (!query) {
    autoSug.style.display = "none";
  } else {
    autoSug.style.display = "block";

    autoSug.innerHTML = suggArr.join("");
  }
  let suggItems = document.querySelectorAll("li");
  for (let item of suggItems) {
    item.setAttribute("onclick", "setText(this)");
  }
};

function setText(e) {
  input.value = e.textContent;
  autoSug.style.display = "none";
}
btn.onclick = () => {
  if (input.value) {
    webLink = `https://www.google.com/search?q=${input.value}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
};

function trial() {
  return a;
}
