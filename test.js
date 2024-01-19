function mockFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/data") {
        resolve({
          json: () =>
            Promise.resolve([
              { id: 1, name: "Item 1" },
              { id: 2, name: "Item 2" },
              { id: 3, name: "Item 3" },
              { id: 10, name: "Item 10" },
            ]),
        });
      } else {
        reject(new Error("URL non trovato"));
      }
    }, 1000);
  });
}
mockFetch("https://example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const ul = document.querySelector(".ul");
    data.map((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      ul.appendChild(li);
    });
  })
  .catch((error) => console.error("Errore:", error));
