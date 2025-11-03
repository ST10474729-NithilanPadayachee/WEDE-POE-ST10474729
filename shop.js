

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-cart");
  const cartList = document.querySelector(".cart-list");
  const cartTotal = document.querySelector(".cart-total");
  const clearBtn = document.getElementById("clear-cart");

  let total = 0;

  // Add to cart
  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".product-card");
      const name = productCard.getAttribute("data-name");
      const price = parseFloat(productCard.getAttribute("data-price"));

      // Creates list item
      const li = document.createElement("li");
      li.textContent = `${name} - $${price}`;
      cartList.appendChild(li);

      // Update total
      total += price;
      cartTotal.textContent = `Total: $${total}`;
    });
  });

  // Clear cart
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      cartList.innerHTML = "";
      total = 0;
      cartTotal.textContent = "Total: $0";
      alert("🧹 Your cart has been cleared!");
    });
  }
  const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'block';
  lightboxImg.src = galleryItems[index].src;
  captionText.innerHTML = galleryItems[index].alt;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

closeBtn.onclick = () => lightbox.style.display = 'none';

prevBtn.onclick = () => {
  currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
  openLightbox(currentIndex);
}

nextBtn.onclick = () => {
  currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
  openLightbox(currentIndex);
}

// Close lightbox on click outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

});
