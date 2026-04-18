// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Open menu
  function openMenu() {
    hamburgerBtn.classList.add('active');
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
  }

  // Close menu
  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
  }

  // Event listeners
  hamburgerBtn.addEventListener('click', openMenu);
  mobileCloseBtn.addEventListener('click', closeMenu);
  mobileMenuOverlay.addEventListener('click', closeMenu);

  // Close menu when clicking navigation links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});

document.querySelectorAll(".popular-card").forEach(card => {
  const minusBtn = card.querySelector(".cart-minus");
  const plusBtn = card.querySelector(".cart-plus");
  const quantity = card.querySelector(".cart-quantity");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(quantity.textContent);
    if (value > 1) quantity.textContent = value - 1;
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(quantity.textContent);
    quantity.textContent = value + 1;
  });
});






// Kitchen cards
// Array of food objects
const foods = [
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-1.png",
    discount: "50%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹123",
    img: "images/pizza-2.png",
    discount:"",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-3.png",
    discount: "20%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-4.png",
    discount: "",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "$19",
    img: "images/pizza-5.png",
    discount: "50%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-6.png",
    discount: "",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-7.png",
    discount: "20%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-8.png",
    discount: "50%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "$19",
    img: "images/pizza-1.png",
    discount: "50%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹123",
    img: "images/pizza-2.png",
    discount:"",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-3.png",
    discount: "20%",
    rating: 4.7,
    delivery: "50-79 min"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    img: "images/pizza-4.png",
    discount: "",
    rating: 4.7,
    delivery: "50-79 min"
  },
  
];

// Target container
const foodGrid = document.querySelector(".food-grid");

// Render each card
foods.forEach(food => {
  const discountBadge = food.discount
    ? `<span class="discount-badge">${food.discount}</span>`
    : "";
  const card = `
    <div class="food-card">
      <div class="food-image">
        <img src="${food.img}" alt="${food.name}" class="food-img">
        ${discountBadge}
      </div>
      <div class="food-details">
        <div class="food-header">
          <h3 class="food-name">${food.name}</h3>
          <div class="price-tag">${food.price}</div>
        </div>
        <div class="food-meta">
          <div class="rating">
            <div class="star-icon">★</div>
            <div>${food.rating}</div>
            <div class="delivery-time"><div class="delivery-time-box">${food.delivery}</div></div>
          </div>
          <div class="add-to-cart">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 0V11M0 5.5H11" stroke="white" stroke-width="3.5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `;


  foodGrid.innerHTML += card;
});



// Popular items section
 // Card Data Array
const cardData = [
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    delivery: "50-79 min",
    discount: "",
    image: "./images/pizza-1.png"
  },
  {
    name: "Tandoori Chicken",
    price: "₹184",
    rating: 4.3,
    delivery: "15-29 min",
    discount: "20%",
    image: "./images/tandoori-chicken.png"
  },
  {
    name: "Chilli Chicken",
    price: "₹116",
    rating: 4.1,
    delivery: "30-40 min",
    discount: "50%",
    image: "./images/chilli-chicken.png"
  },
  {
    name: "Paneer Tikka",
    price: "₹150",
    rating: 4.5,
    delivery: "20-35 min",
    discount: "",
    image: "./images/pizza-16.png"
  },
  {
    name: "Home made pizza",
    price: "₹190",
    rating: 4.7,
    delivery: "50-79 min",
    discount: null,
    image: "./images/pizza-1.png"
  },
  {
    name: "Tandoori Chicken",
    price: "₹184",
    rating: 4.3,
    delivery: "15-29 min",
    discount: "20%",
    image: "./images/tandoori-chicken.png"
  },
  {
    name: "Chilli Chicken",
    price: "₹116",
    rating: 4.1,
    delivery: "30-40 min",
    discount: "50%",
    image: "./images/chilli-chicken.png"
  },
  {
    name: "Paneer Tikka",
    price: "₹150",
    rating: 4.5,
    delivery: "20-35 min",
    discount: "",
    image: "./images/pizza-16.png"
  },
];

// Render Cards
const slider = document.querySelector(".slider");
function renderCards() {
  slider.innerHTML = "";

  cardData.forEach(food => {
    const discountBadge = food.discount
      ? `<span class="discount-badge">${food.discount}</span>`
      : "";

    const card = `
      <div class="popular-food-card">
        <div class="food-image">
          <img src="${food.image}" alt="${food.name}" class="food-img">
          ${discountBadge}
        </div>
        <div class="food-details">
          <div class="food-header">
            <h3 class="food-name">${food.name}</h3>
            <div class="price-tag">${food.price}</div>
          </div>
          <div class="food-meta">
            <div class="rating">★ ${food.rating}</div>
            <div class="delivery-time"><div class="delivery-time-box">${food.delivery}</div></div>
            <div class="add-to-cart">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 0V11M0 5.5H11" stroke="white" stroke-width="3.5"/>
            </svg>
          </div>
          </div>
          
        </div>
      </div>
    `;
    slider.innerHTML += card;
  });
}

renderCards();

// Slider functionality
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
  const card = slider.querySelector('.popular-food-card');
  if (!card) return;

  const cardWidth = card.offsetWidth + 24;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function getVisibleCards() {
  if (window.innerWidth <= 768) return 1; // Mobile: 1 card
  if (window.innerWidth <= 1024) return 2; // Tablet: 2 cards
  return 3; // Desktop: 3 cards
}

next.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  if (currentIndex < slider.children.length - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', () => {
  // Reset to first slide on resize to avoid issues
  currentIndex = 0;
  updateSlider();
});


const arrowBtn = document.getElementById('arrowBtn');
const arrowIcon = document.getElementById('arrowIcon');

// Toggle play/pause on click
arrowBtn.addEventListener('click', () => {
    if (arrowIcon.classList.contains('fa-play')) {
        arrowIcon.classList.remove('fa-play');
        arrowIcon.classList.add('fa-pause');
        console.log('Playing...');
    } else {
        arrowIcon.classList.remove('fa-pause');
        arrowIcon.classList.add('fa-play');
        console.log('Paused...');
    }
});



// Request Dish Modal //
const requestDishBtn = document.getElementById('requestDishBtn');
const requestDishModal = document.getElementById('requestDishModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');

// Open modal
requestDishBtn.addEventListener('click', () => {
    requestDishModal.style.display = 'flex';
});

// Close modal
function closeModalFn() {
    requestDishModal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalFn);
cancelBtn.addEventListener('click', closeModalFn);
submitBtn.addEventListener('click', closeModalFn);

// Optional: close modal if clicked outside the modal box
window.addEventListener('click', (e) => {
    if (e.target === requestDishModal) {
        closeModalFn();
    }
});

