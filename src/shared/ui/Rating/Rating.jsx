import classNames from "classnames";
import Icon from "../Icon";
import styles from "./Rating.module.scss";
import { getFormattedWord } from "@/shared/lib/getFormattedWord";

const Rating = (props) => {
  const { score, title, reviews, mode } = props;

  const getRatingStars = () => {
    if (!score) return;
    const arr = [];
    const rating = Math.round(score);
    const maxStars = 5;

    for (let number = 1; number <= maxStars; number++) {
      const isFilled = number <= rating;
      arr.push({ number, isFilled });
    }

    return arr;
  };

  return (
    <div className={classNames(styles.rating, styles[mode])}>
      {mode === "large" ? (
        <>
          <div className={styles.stars}>
            {getRatingStars()?.map(({ number, isFilled }) => (
              <Icon
                className={isFilled && styles.isFilled}
                name="star"
                width={20}
                height={20}
                fill="currentColor"
                key={`${title}-star-${number}`}
              />
            ))}
          </div>

          {reviews && (
            <a className={styles.quantity} href="#reviews">
              {getFormattedWord(reviews.length)}
            </a>
          )}
        </>
      ) : (
        <>
          <Icon
            className={styles.star}
            name="star"
            width={20}
            height={20}
            fill="currentColor"
          />
          <span>{score}</span>
        </>
      )}
    </div>
  );
};

export default Rating;
