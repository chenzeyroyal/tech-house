import Section from "@/shared/ui/Section/Section";
import styles from "./Stories.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

import story1 from "/src/shared/assets/images/story-1.jpg";
import story2 from "/src/shared/assets/images/story-2.jpg";
import story3 from "/src/shared/assets/images/story-3.jpg";

const Stories = () => {
  const links = [
    {
      href: "/",
      image: story1,
    },
    {
      href: "/",
      image: story2,
    },
    {
      href: "/",
      image: story3,
    },
    {
      href: "/",
      image: story1,
    },
    {
      href: "/",
      image: story2,
    },
    {
      href: "/",
      image: story3,
    },
    {
      href: "/",
      image: story1,
    },
    {
      href: "/",
      image: story2,
    },
    {
      href: "/",
      image: story3,
    },
    {
      href: "/",
      image: story1,
    },
    {
      href: "/",
      image: story2,
    },
  ];

  return (
    <Section className={classNames(styles.stories, "container")}>
      <ul className={styles.list}>
        {links.map(({ href, image }, index) => (
          <li className={styles.listItem} key={index}>
            <Link className={styles.listLink} to={href}>
              <img className={styles.image} src={image} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Stories;
