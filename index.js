const call = async function () {
  try {
    let DataFromUrl = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(DataFromUrl);
    if (DataFromUrl.ok) {
      let books = await DataFromUrl.json();
      console.log(books);
      const threePartBooks = Math.ceil(books.length / 3);
      const thirdPart = books.splice(-threePartBooks);
      const secondPart = books.splice(-threePartBooks);
      const firstPart = books;
      let col1 = document.getElementById("col1");
      let col2 = document.getElementById("col2");
      let col3 = document.getElementById("col3");
      firstPart.forEach((book) => {
        col1.innerHTML =
          col1.innerHTML +
          `<div class="crad mb-3 border border-2" style="width: 18rem;"><img src="${book.img}"class="card-img-top" alt=""><div class="card-body"></div><h5 class="card-title">${book.title}</h5><p class="card-text">${book.price}€</p><a href="#" class="btn btn-primary">Skip</a></div></div>`;
      });
      secondPart.forEach((book) => {
        col2.innerHTML =
          col2.innerHTML +
          `<div class="crad mb-3 border border-2" style="width: 18rem;"><img src="${book.img}"class="card-img-top" alt=""><div class="card-body"></div><h5 class="card-title">${book.title}</h5><p class="card-text">${book.price}€</p><a href="#" class="btn btn-primary">Skip</a></div></div>`;
      });
      thirdPart.forEach((book) => {
        col3.innerHTML =
          col3.innerHTML +
          `<div class="crad mb-3 border border-2" style="width: 18rem;"><img src="${book.img}"class="card-img-top" alt=""><div class="card-body"></div><h5 class="card-title">${book.title}</h5><p class="card-text">${book.price}€</p><a href="#" class="btn btn-primary">Skip</a></div></div>`;
      });
      let buttons = document.querySelectorAll("a");
      buttons.forEach((a) => {
        a.addEventListener("click", () => {
          a.parentElement.remove();
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

call();
