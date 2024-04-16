import { ReviewCard } from "@/app/components/home";
import styles from "./Reviews.module.scss";

const Reviews = ({ reviews }: TReviewsProps) => { 

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        {reviews.map((review) => (
          <ReviewCard content={review.text} key={review.id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
