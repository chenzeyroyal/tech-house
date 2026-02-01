import Rating from "@/shared/ui/Rating";
import Slider from "@/widgets/Slider";
import { useContext, useRef } from "react";
import SliderNavigation from "@/widgets/Slider/components/SliderNavigation";
import Section from "@/shared/ui/Section/Section";
import { ProductCardContext } from "../../model/context/ProductCardContext/ProductCardContext";
import styles from "./ProductReviews.module.scss";

const sliderParams = {
  spaceBetween: 30,
  slidesPerGroup: 3.5,
  slidesPerView: 3.5,
  breakpoints: {
    390: {
      slidesPerGroup: 1,
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 3.5,
      slidesPerGroup: 3.5,
    },
  },
};

const ProductReviews = () => {
  const { reviews } = useContext(ProductCardContext);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <Section
      className={styles.reviews}
      title="Отзывы"
      id="reviews"
      actions={
        <SliderNavigation
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          hasPagination={false}
        />
      }
    >
      <div className={styles.reviewsSlider}>
        <Slider
          params={sliderParams}
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
          paginationRef={paginationRef}
        >
          {reviews.map(({ username, score, message }) => (
            <div className={styles.reviewCard}>
              <span className={styles.username}>{username}</span>
              <Rating score={score} mode="large" />
              <p> {message}</p>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default ProductReviews;
