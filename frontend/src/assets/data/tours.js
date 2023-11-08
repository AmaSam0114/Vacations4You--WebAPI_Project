import tourImg01 from '../images/gallfort.jpg'
import tourImg02 from '../images/ninearchbridge.jpg'
import tourImg03 from '../images/Sigiriya.jpg'
import tourImg04 from '../images/SriDaladaMaligawa.jpg'
import tourImg05 from '../images/YalaPark.jpg'
import tourImg06 from '../images/HortonPlains.jpg'


const tours = [
  {
    id: "01",
    title: "Gallfort",
    city: "Gall",
    distance: 300,
    price: 12000,
    maxGroupSize: 10,
    desc: "Galle Fort in Sri Lanka is a historic coastal fortress. Built by the Dutch, it features charming streets, colonial architecture, and a vibrant cultural atmosphere.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Nine arch bridge",
    city: "Badulla",
    distance: 400,
    price: 20000,
    maxGroupSize: 8,
    desc: "The Nine Arch Bridge in Sri Lanka is a scenic stone railway bridge, surrounded by lush greenery. Its iconic design and location make it a popular tourist attraction.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Sigiriya Rock",
    city: "Sigiriya",
    distance: 500,
    price: 13000,
    maxGroupSize: 8,
    desc: "Sigiriya Rock in Sri Lanka is an ancient rock fortress with a palace atop. Majestic and steeped in history, it offers stunning views of the surrounding landscape.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Sri Dalada Maligawa",
    city: "Kandy",
    distance: 500,
    price: 14000,
    maxGroupSize: 8,
    desc: "Sri Dalada Maligawa in Sri Lanka houses the sacred tooth relic of Buddha. A revered Buddhist temple in Kandy, it attracts pilgrims and visitors with its spiritual significance.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Yala National Park",
    city: "Hambanthota",
    distance: 500,
    price: 18000,
    maxGroupSize: 8,
    desc: "this is the Yala National Park in Sri Lanka is a wildlife sanctuary renowned for diverse fauna. Home to leopards and elephants, it offers thrilling safaris amidst natural beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Horton Plains National Park",
    city: "Nuwara-Eliya",
    distance: 500,
    price: 19900,
    maxGroupSize: 8,
    desc: "this is Horton Plains National Park in Sri Lanka is a scenic plateau with diverse ecosystems. Famous for World's End, it offers breathtaking landscapes and unique biodiversity. description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
];

export default tours;
