const url =  "https://restcountries.com/v3.1/name/aruba?fullText=true";
const res = fetch(url);

res
  .then((item) => {
    return item.json();
  })
  .then((item) => {
    console.log(item);
    let cards = "";
    item.forEach((prev) => {
        cards += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${prev.name.common}</h5>
            <p class="card-text">Capital: ${prev.capital}</p>
            <p class="card-text">Population: ${prev.population}</p>
          </div>
        </div>

      `;
    });
    document.getElementById("tb1").innerHTML = cards;
  })
  .catch((err) => {
    console.log(err);
  });