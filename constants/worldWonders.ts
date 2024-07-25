import type { Wonder } from "~/types/worldWonders";

const WORLD_WONDERS: Wonder[] = [
  {
    name: "Great Wall of China",
    location: { lat: 40.4319, lng: 116.5704 },
    imgs: ["/images/wonders/china/1.jpg", "/images/wonders/china/2.jpg"],
    desc: "The Great Wall of China is one of the world's largest building-construction projects, stretching over 13,000 miles in total length.",
    marker: { lat: 40.4319, lng: 116.5704 }
  },
  {
    name: "Petra",
    location: { lat: 30.3285, lng: 35.4444 },
    imgs: ["/images/wonders/petra/1.jpg", "/images/wonders/petra/2.jpg"],
    desc: "Petra is a historical and archaeological city famous for its rock-cut architecture and water conduit system.",
    marker: { lat: 30.3285, lng: 35.4444 }
  },
  {
    name: "Machu Picchu",
    location: { lat: -13.1631, lng: -72.5450 },
    imgs: ["/images/wonders/machu-picchu/1.jpg", "/images/wonders/machu-picchu/2.jpg"],
    desc: "Machu Picchu is an ancient Incan city set high in the Andes Mountains in Peru, renowned for its dry-stone walls.",
    marker: { lat: -13.1631, lng: -72.5450 }
  },
  {
    name: "Colosseum",
    location: { lat: 41.8902, lng: 12.4922 },
    imgs: ["/images/wonders/colosseum/1.jpg", "/images/wonders/colosseum/2.jpeg"],
    desc: "The Colosseum is an ancient amphitheater in Rome, Italy, known for its gladiatorial contests and public spectacles.",
    marker: { lat: 41.8902, lng: 12.4922 }
  },
  {
    name: "Taj Mahal",
    location: { lat: 27.1751, lng: 78.0421 },
    imgs: ["/images/wonders/taj-mahal/1.jpeg", "/images/wonders/taj-mahal/2.jpg"],
    desc: "The Taj Mahal is an iconic white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    marker: { lat: 27.1751, lng: 78.0421 }
  },
  {
    name: "Chichen Itza",
    location: { lat: 20.6843, lng: -88.5678 },
    imgs: ["/images/wonders/chichen-itza/1.jpg", "/images/wonders/chichen-itza/2.jpg"],
    desc: "Chichen Itza is a large pre-Columbian archaeological site in Mexico, known for its stepped pyramids and Temple of Kukulcan.",
    marker: { lat: 20.6843, lng: -88.5678 }
  },
  {
    name: "Eiffel Tower",
    location: { lat: 48.8584, lng: 2.2945 },
    imgs: ["/images/wonders/eiffel-tower/1.jpg", "/images/wonders/eiffel-tower/2.jpg"],
    desc: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France, named after engineer Gustave Eiffel.",
    marker: { lat: 48.8584, lng: 2.2945 }
  }
];

export { WORLD_WONDERS };
