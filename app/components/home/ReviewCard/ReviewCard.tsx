import sanitizeHtml from "sanitize-html";
import sanitizeHtmlIOptions from "@/data/sanitizeHtmlIOptions";

import styles from "./ReviewCard.module.scss";

type TReviewCardProps = {
  content: string;
};

const ReviewCard = ({ content }: TReviewCardProps) => {
  const sanitizedContent = sanitizeHtml(content, sanitizeHtmlIOptions);

  return (
    <article
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    ></article>
  );
};

export default ReviewCard;
