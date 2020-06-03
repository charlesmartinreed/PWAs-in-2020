const container = document.querySelector(".container");

const coffeeOptions = [
  { name: "Perspiciatis", image: "../images/coffee1.jpg" },
  { name: "Voluptatem", image: "../images/coffee2.jpg" },
  { name: "Explicabo", image: "../images/coffee3.jpg" },
  { name: "Rchitecto", image: "../images/coffee4.jpg" },
  { name: " Beatae", image: "../images/coffee5.jpg" },
  { name: " Vitae", image: "../images/coffee6.jpg" },
  { name: "Inventore", image: "../images/coffee7.jpg" },
  { name: "Veritatis", image: "../images/coffee8.jpg" },
  { name: "Accusantium", image: "../images/coffee9.jpg" },
];

// if browser supports the service worker api
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    this.navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.error("service worker not registered"));
  });
}

const displayCoffeeOpts = () => {
  let output = "";

  coffeeOptions.forEach(
    ({ name, image }) =>
      (output += `
        <div class="card">
            <img class="card__avatar" src=${image} />
            <h1 class="card__title">${name}</h1>
            <a class="card__link" href="#">Order</a>
        </div>
        `)
  );

  // append the output to the container el on DOM
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", displayCoffeeOpts);
