import tourImg01 from '../images/gallfort.jpg'
import tourImg02 from '../images/ninearchbridge.jpg'
import tourImg03 from '../images/Sigiriya.jpg'
import tourImg04 from '../images/SriDaladaMaligawa.jpg'
import tourImg05 from '../images/YalaPark.jpg'
import tourImg06 from '../images/HortonPlains.jpg'
import tourImg07 from '../images/AdamsPeak.jpg'

const tours = [
  {
    id: "01",
    title: "Galle Tour",
    city: "Galle District",
    duration: "4 Days (3 nights, 4 days )",
    price: 12000,
    maxGroupSize: 10,
    specialty:"Holiday",
    desc: "Embark on a captivating 4-day journey to Galle, a charming coastal gem nestled on the southern shores of Sri Lanka. Our Galle tour package promises a perfect blend of history, culture, and scenic beauty. Immerse yourself in the colonial charm of Galle Fort, unwind on pristine beaches, and explore the vibrant local culture.",
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
    title: "Sigiriya Tour",
    city: "Sigiriya area",
    duration: "1 Days ",
    price: 5000,
    maxGroupSize: 8,
    specialty:"Holiday",
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
    id: "03",
    title: "Colombo Tour",
    city: "Colombo",
    duration: "4 Days (3 nights, 4 days )",
    price: 13000,
    maxGroupSize: 8,
    specialty:"Holiday",
    desc: "Embark on a vibrant 3-day journey through Colombo, the bustling capital city of Sri Lanka. Our Colombo tour package is designed for those seeking a perfect blend of modernity, culture, and a touch of colonial charm. Immerse yourself in the city's dynamic atmosphere, explore historic sites, and indulge in the diverse culinary scene.",
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
    title: "Adams Peak",
    city: "Haton",
    duration: "2 Days (1 nights, 2days )",
    price: 13000,
    maxGroupSize: 8,
    specialty:"Holiday",
    desc: "Adam's Peak in Sri Lanka is a revered pilgrimage site with a distinctive pointed summit. Pilgrims climb for spiritual reasons, while trekkers enjoy panoramic views at sunrise.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "05",
    title: "Badulla Tour",
    city: "Badulla District",
    duration: "4 Days (3 nights, 4 days )",
    price: 13000,
    maxGroupSize: 8,
    specialty:"Holiday",
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
    id: "06",
    title: "Yala National Park Tour",
    city: "Hambanthota",
    duration: "2 Days (1 nights, 2 days )",
    price: 13000,
    maxGroupSize: 8,
    specialty:"Holiday",
    desc: "this is the Yala National Park in Sri Lanka is a wildlife sanctuary renowned for diverse fauna. Home to leopards and elephants, it offers thrilling safaris amidst natural beauty.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "07",
    title: "Horton Plains National Park Tour",
    city: "Nuwara-Eliya",
    duration: "2 Days (1 nights, 2 days )",
    price: 13000,
    maxGroupSize: 8,
    specialty:"Holiday",
    desc: "this is Horton Plains National Park in Sri Lanka is a scenic plateau with diverse ecosystems. Famous for World's End, it offers breathtaking landscapes and unique biodiversity. description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  
];

export default tours;
