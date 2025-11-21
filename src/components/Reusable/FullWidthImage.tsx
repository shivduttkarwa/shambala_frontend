import { FC } from "react";
import styles from "./FullWidthImage.module.css";

const publicUrl = import.meta.env.BASE_URL;

type FullWidthImageProps = {
  imageUrl?: string;
};

const FullWidthImage: FC<FullWidthImageProps> = ({
  imageUrl = `${publicUrl}images/bg.png`,
}) => {
  // No CTA/popup state needed

  return (
    <section className={styles["fwi-wrapper"]}>
      <div
        className={styles["fwi-hero-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* No text */}
        {/* No exclusions/popup or CTA — simplified hero */}
      </div>
    </section>
  );
};

export default FullWidthImage;
