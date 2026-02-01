import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "@/shared/ui/Button";
import Loading from "@/shared/ui/Loading";
import classNames from "classnames";

import "swiper/css";
import styles from "./Carousel.module.scss";

const Carousel = (props) => {
  const { items } = props;
  const sliderRef = useRef(null);

  const isTablet = useMediaQuery({ maxWidth: 1023 });

  const handleNavigationButtonClick = (index) => {
    if (sliderRef.current) sliderRef.current.slideTo(index, 0);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items) {
    return <Loading />;
  }

  return (
    <div className={styles.carousel}>
      {!isTablet && (
        <div className={styles.navigation}>
          <Button
            className={styles.navigationButton}
            label="Предыдущее изображение"
            icon="chevron-up"
            isLabelHidden
            onClick={() => sliderRef.current.slidePrev(0)}
          />
          {items.map((image, index) => (
            <button
              className={classNames(
                styles.paginationButton,
                index === activeIndex && styles.isActive
              )}
              key={index}
              onClick={() => handleNavigationButtonClick(index)}
            >
              <img className={styles.paginationImage} src={image} />
            </button>
          ))}
          <Button
            className={styles.navigationButton}
            label="Следующее изображение"
            icon="chevron-down"
            isLabelHidden
            onClick={() => sliderRef.current.slideNext(0)}
          />
        </div>
      )}

      <Swiper
        className={styles.slider}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        modules={[Pagination]}
        pagination={{
          el: `.${styles.pagination}`,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
        }}
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        slidesPerView={1}
      >
        {items.map((image) => (
          <SwiperSlide className={styles.slide} key={image}>
            <img
              className={styles.slideImage}
              src={image}
              alt="Изображение товара"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination}></div>
    </div>
  );
};

export default Carousel;
