function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(item + " added to cart!");
}

function buyNow(item) {
  localStorage.setItem('buyNow', item);
  window.location.href = "form.html";
}

window.onload = function() {
  if (document.getElementById('cart-items')) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let list = document.getElementById('cart-items');
    cart.forEach(i => {
      let li = document.createElement('li');
      li.textContent = i;
      list.appendChild(li);
    });
  }
};
