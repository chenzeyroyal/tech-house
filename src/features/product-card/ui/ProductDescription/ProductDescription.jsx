import Section from "@/shared/ui/Section/Section";
import styles from "./ProductDescription.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductCardContext } from "../../model/context/ProductCardContext/ProductCardContext";
import Button from "@/shared/ui/Button";

const MAX_LINES = 3;

const ProductDescription = () => {
  const { description } = useContext(ProductCardContext);

  const [isTruncated, setIsTruncated] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const textRef = useRef(null);

  const optimizeLines = () => {
    if (textRef.current) {
      const lineHeight = parseInt(getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * MAX_LINES;
      setIsTruncated(textRef.current.scrollHeight > maxHeight);
      setIsButtonVisible(textRef.current.scrollHeight > maxHeight);
    }
  };

  useEffect(optimizeLines, []);

  useEffect(() => {
    window.addEventListener("resize", optimizeLines);

    return () => window.removeEventListener("resize", optimizeLines);
  });

  return (
    <Section id="description" title="О товаре">
      <div className={styles.description}>
        <p
          className={styles.text}
          ref={textRef}
          style={{
            display: isTruncated ? "-webkit-box" : "block",
            WebkitLineClamp: isTruncated ? MAX_LINES : "none",
          }}
        >
          {description}{" "}
        </p>
        {isButtonVisible && (
          <Button
            className={styles.showMoreButton}
            label={!isTruncated ? "Скрыть подробное" : "Показать больше"}
            onClick={() => setIsTruncated(!isTruncated)}
          />
        )}
      </div>
    </Section>
  );
};

export default ProductDescription;
