// your code here
const cakeAPI = 'http://localhost:3000/cakes';
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
};

const cakeList = document.getElementById('cake-list');
const cakeName = document.getElementById('cake-name');
const cakeImage = document.getElementById('cake-image');
const cakeDescrip = document.getElementById('cake-description');
const reviewList = document.getElementById('review-list');
const cakeDetials = document.getElementById('cake-details');

fetch(`${cakeAPI}/1`)
    .then(res => res.json())
    .then(renderFirstCake);

fetch(cakeAPI)
    .then(res => res.json())
    .then(renderCakes);

function renderCakes(cakes) {
    cakeList.innerHTML = '';
    cakes.forEach(renderCake);
}
function renderFirstCake(cake) {
    cakeName.textContent = cake.name;
    cakeImage.src = cake.image_url;
    cakeImage.alt = cake.name;
    cakeDescrip.textContent = cake.description;
    renderReviews(cake.reviews);
}

function renderReviews(reviews) {
    reviewList.innerHTML = '';
    reviews.forEach(review => {
        const reviewListItem = document.createElement("li");
        reviewListItem.textContent = review;
        reviewList.appendChild(reviewListItem);
    });
}

function renderCake(cake) {
    const cakeListItem = document.createElement("li");
    cakeListItem.textContent = cake.name;
    cakeList.appendChild(cakeListItem);
}

// review struggling with adding this 

// reviewForm.addEventListener('submit', function (e) 
//     e.preventDefault(); 
    



