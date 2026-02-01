import Section from "@/shared/ui/Section/Section";
import styles from "./Hits.module.scss";
import classNames from "classnames";
import { useContext, useRef } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import ProductCard from "@/features/product-card/ui";
import Slider from "@/widgets/Slider";
import SliderNavigation from "@/widgets/Slider/components/SliderNavigation";

const sliderParams = {
  spaceBetween: 30,
  slidesPerGroup: 1,

  breakpoints: {
    390: {
      slidesPerView: 1,
    },
    415: {
      slidesPerView: 1.2,
    },
    520: {
      slidesPerView: 1.5,
    },
    650: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.2,
    },
    1400: {
      slidesPerView: 4.2,
    },
  },
};

const Hits = () => {
  const { products } = useContext(ProductsContext);
  const hits = products.filter((product) => product.isHit);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Section
      className={classNames(styles.hits, "container")}
      title="Хиты продаж"
    >
      <SliderNavigation
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        hasPagination={false}
      />
      <Slider
        params={sliderParams}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      >
        {hits.map((product) => (
          <ProductCard layout="column" {...product} key={product.id} />
        ))}
      </Slider>
    </Section>
  );
};

export default Hits;
