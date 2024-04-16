"use client";

import Image from "next/image";
import { closeBtn } from "@/public/assets";

import styles from "./OrderMessageModal.module.scss";

type TOrderMessageModalProps = {
  setModalIsOpen: TSetBoolean;
  title: string;
};

const OrderMessageModal = ({
  setModalIsOpen,
  title,
}: TOrderMessageModalProps) => {
  const handleApply = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalCustom}>
        <aside className={styles.orderMessageModal}>
          <button
            className={styles.closeXBtn}
            onClick={() => setModalIsOpen(false)}
          >
            <Image
              src={closeBtn}
              alt={"closeXBtn"}
              width={30}
              height={30}
              priority={true}
            />
          </button>

          <h2 className={styles.title}>{title}</h2>

          <div className={styles.okBtnCtn}>
            <button className={styles.okBtn} onClick={handleApply}>
              OK
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default OrderMessageModal;
