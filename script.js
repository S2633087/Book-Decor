document.addEventListener('DOMContentLoaded', function () {
  console.log("Bookish Home Décor website loaded.");

  const products = document.querySelectorAll('tbody tr');
  products.forEach(product => {
    product.addEventListener('click', () => {
      alert("You selected: " + product.cells[0].innerText);
    });
  });
});
