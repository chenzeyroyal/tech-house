import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderNavigation from "./components/SliderNavigation";

import "swiper/css";
import styles from "./Slider.module.scss";

const defaultParams = {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: false,
};

const Slider = (props) => {
  const {
    params = defaultParams,
    children,
    navigationPrevRef,
    navigationNextRef,
    paginationRef,
    hasNavigationInner = false,
  } = props;

  const onBeforeInit = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef?.current;
    swiper.params.navigation.nextEl = navigationNextRef?.current;
    swiper.params.pagination.el = paginationRef?.current;
  };

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          el: paginationRef?.current,
          clickable: true,
        }}
        onBeforeInit={onBeforeInit}
        {...params}
      >
        {children.map((item, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            {item}
          </SwiperSlide>
        ))}

        {hasNavigationInner && (
          <SliderNavigation
            placement="inside"
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
            paginationRef={paginationRef}
            hasButtons={false}
          />
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
