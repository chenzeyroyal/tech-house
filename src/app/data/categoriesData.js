import phoneImage from "/src/shared/assets/images/categories/phone.png";
import tvImage from "/src/shared/assets/images/categories/tv.png";
import laptopImage from "/src/shared/assets/images/categories/laptop.png";
import washImage from "/src/shared/assets/images/categories/wash.png";
import soundImage from "/src/shared/assets/images/categories/sound.png";

export const categoriesData = [
  {
    id: "smartphones",
    title: "Смартфоны и гаджеты",
    icon: "phone",
    image: phoneImage,
    isPopular: true,
  },
  {
    id: "tv",
    title: "Телевизоры",
    icon: "tv",
    image: tvImage,
    isPopular: true,
  },
  {
    id: "computers",
    title: "Компьютеры и ноутбуки",
    icon: "laptop",
    image: laptopImage,
    isPopular: true,
  },
  {
    id: "appliances",
    title: "Крупная бытовая",
    icon: "wash",
    image: washImage,
    isPopular: true,
  },
  {
    id: "beauty",
    title: "Красота и здоровье",
    icon: "health",
    image: "",
    isPopular: false,
  },
  {
    id: "audio",
    title: "Аудиосистемы",
    icon: "sound",
    image: soundImage,
    isPopular: true,
  },
];
