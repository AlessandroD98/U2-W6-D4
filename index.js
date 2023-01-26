const call = async function () {
  try {
    let DataFromUrl = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(DataFromUrl);
    if (DataFromUrl.ok) {
      let books = await DataFromUrl.json();
      console.log(books);
      let row1 = document.getElementById("row1");
      books.forEach((book) => {
        row1.innerHTML =
          row1.innerHTML +
          `
          <div class="col-3" >
          <div class="crad mb-3 border border-2" style="width: 18rem;">
          <img src="${book.img}"class="card-img-top" alt="">
          <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.price}€</p>
          <button type="button" class="btn btn-primary">Skip</button>
          </div>
          </div>
          </div>
          `;
      });
      let buttons = document.querySelectorAll("button");
      buttons.forEach((a) => {
        a.addEventListener("click", () => {
          a.parentElement.parentElement.parentElement.remove();
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

call();
