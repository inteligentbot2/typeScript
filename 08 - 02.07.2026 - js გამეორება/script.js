const houses = [
  {
    id: 1,
    title: "Cozy Studio",
    address: "12 Oak St, Springfield",
    city: "Springfield",
    state: "IL",
    zipCode: "62701",
    price: 65000,
    bedrooms: 1,
    bathrooms: 1,
    areaSqM: 48,
    yearBuilt: 1985,
    propertyType: "Studio",
    condition: "Good",
    garage: false,
    parkingSpaces: 1,
    hasGarden: false,
    hasPool: false,
    images: ["studio.jpg"],
    rating: 4.1,
  },
  {
    id: 2,
    title: "Modern Apartment",
    address: "88 River Ave",
    city: "Austin",
    state: "TX",
    zipCode: "73301",
    price: 189000,
    bedrooms: 2,
    bathrooms: 2,
    areaSqM: 91,
    yearBuilt: 2017,
    propertyType: "Apartment",
    condition: "Excellent",
    garage: true,
    parkingSpaces: 1,
    hasGarden: false,
    hasPool: true,
    images: ["modernAppartament.jpeg"],
    rating: 4.5,
  },
  {
    id: 3,
    title: "Family Home",
    address: "455 Maple Dr",
    city: "Denver",
    state: "CO",
    zipCode: "80202",
    price: 375000,
    bedrooms: 3,
    bathrooms: 2,
    areaSqM: 172,
    yearBuilt: 2004,
    propertyType: "House",
    condition: "Very Good",
    garage: true,
    parkingSpaces: 2,
    hasGarden: true,
    hasPool: false,
    images: ["familyHome.jpg"],
    rating: 4.7,
  },
  {
    id: 4,
    title: "Luxury Villa",
    address: "9 Palm Beach Rd",
    city: "Miami",
    state: "FL",
    zipCode: "33101",
    price: 1250000,
    bedrooms: 5,
    bathrooms: 5,
    areaSqM: 483,
    yearBuilt: 2021,
    propertyType: "Villa",
    condition: "New",
    garage: true,
    parkingSpaces: 4,
    hasGarden: true,
    hasPool: true,
    images: ["luxoryVilla.jpg"],
    rating: 4.9,
  },
  {
    id: 5,
    title: "Country Cottage",
    address: "71 Pine Hill",
    city: "Nashville",
    state: "TN",
    zipCode: "37201",
    price: 295000,
    bedrooms: 2,
    bathrooms: 2,
    areaSqM: 125,
    yearBuilt: 1994,
    propertyType: "Cottage",
    condition: "Good",
    garage: false,
    parkingSpaces: 3,
    hasGarden: true,
    hasPool: false,
    images: ["cotegge.webp"],
    rating: 4.4,
  },
  {
    id: 6,
    title: "Downtown Penthouse",
    address: "300 Skyline Blvd",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    price: 2800000,
    bedrooms: 4,
    bathrooms: 4,
    areaSqM: 316,
    yearBuilt: 2023,
    propertyType: "Penthouse",
    condition: "New",
    garage: true,
    parkingSpaces: 2,
    hasGarden: false,
    hasPool: true,
    images: ["downtownPentHouse.webp"],
    rating: 5.0,
  },
  {
    id: 7,
    title: "Suburban Townhouse",
    address: "22 Cedar Lane",
    city: "Charlotte",
    state: "NC",
    zipCode: "28202",
    price: 420000,
    bedrooms: 3,
    bathrooms: 2.5,
    areaSqM: 163,
    yearBuilt: 2016,
    propertyType: "Townhouse",
    condition: "Excellent",
    garage: true,
    parkingSpaces: 2,
    hasGarden: true,
    hasPool: false,
    images: ["townhouse.jpg"],
    rating: 4.6,
  },
  {
    id: 8,
    title: "Mountain Cabin",
    address: "18 Aspen Trail",
    city: "Aspen",
    state: "CO",
    zipCode: "81611",
    price: 890000,
    bedrooms: 4,
    bathrooms: 3,
    areaSqM: 242,
    yearBuilt: 2012,
    propertyType: "Cabin",
    condition: "Excellent",
    garage: true,
    parkingSpaces: 2,
    hasGarden: true,
    hasPool: false,
    images: ["mountainCabine.jpg"],
    rating: 4.8,
  },
];

const housesContainer = document.querySelector("#houses");
const search = document.querySelector("#searchInp");

const renderHouses = (housesList) => {
  housesContainer.innerHTML = "";
  housesList.forEach((house) => {
    const starCount = Math.round(house.rating);
    const starsString = "★".repeat(starCount) + "☆".repeat(5 - starCount);
    console.log(starsString);

    const card = `
      <div class="house-card">
        <img src="images/${house.images[0]}" alt="${house.title}">
        <div class="house-content">
            <div class="price">$${house.price}</div>
            <div class="title">${house.title}</div>
            <div class="address">${house.address}</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="label">Bedrooms</div>
                    <div class="value">${house.bedrooms}</div>
                </div>
                <div class="info-item">
                    <div class="label">Bathrooms</div>
                    <div class="value">${house.bathrooms}</div>
                </div>
                <div class="info-item">
                    <div class="label">Area</div>
                    <div class="value">${house.areaSqM} m²</div>
                </div>
                <div class="info-item">
                    <div class="label">Parking</div>
                    <div class="value">${house.parkingSpaces} Cars</div>
                </div>
            </div>
            <div class="features">
                <span class="badge">${house.propertyType}</span>
                <span class="badge">Condition: ${house.condition}</span>
                <span class="badge">Garage: ${house.garage}</span>
                <span class="badge">Garden: ${house.hasGarden}</span>
                <span class="badge">Pool: ${house.hasPool}</span>
            </div>
            <div class="rating">
                <div class="stars"> ${starsString} ${house.rating}</div>
                <div class="year">Built: ${house.yearBuilt}</div>
            </div>
        </div>
      </div>
    `;
    housesContainer.innerHTML += card;
  });
};

search.addEventListener("keyup", () => {
  const searchValue = search.value.trim().toLowerCase();
  const filteredHouses = houses.filter((house) =>
    house.title.toLowerCase().includes(searchValue),
  );
  renderHouses(filteredHouses);
});

renderHouses(houses);
