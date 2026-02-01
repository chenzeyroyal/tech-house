import Section from "@/shared/ui/Section/Section";
import Slider from "@/widgets/Slider";
import { useRef } from "react";
import styles from "./Hero.module.scss";
import SliderCard from "@/shared/ui/SliderCard";
import slide1 from "/src/shared/assets/images/slide-1.jpg";
import slide2 from "/src/shared/assets/images/slide-2.jpg";
import slide3 from "/src/shared/assets/images/slide-3.jpg";

const Hero = () => {
  const slides = [
    {
      title: "Технологии как искусство",
      subtitle: "Новинки для Вас и Вашего дома",
      image: slide1,
      href: '/categories/beauty',
      buttonLabel: "Подробнее",
    },
    {
      title: "Стиль и функциональность",
      subtitle: "Кухонная техника на любой вкус",
      image: slide2,
      href: '/categories/appliances',
      buttonLabel: "Подробнее",
    },
    {
      title: "Смартфон, который понимает Вас",
      subtitle: "Гаджеты с искусственным интеллектом",
      image: slide3,
      href: '/categories/smartphones',
      buttonLabel: "Подробнее",
    },
  ];

  const sliderParams = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <Section className={styles.hero}>
      <Slider
        params={sliderParams}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        paginationRef={paginationRef}
        hasNavigationInner
      >
        {slides.map((slide) => (
          <SliderCard {...slide} />
        ))}
      </Slider>
    </Section>
  );
};

export default Hero;
