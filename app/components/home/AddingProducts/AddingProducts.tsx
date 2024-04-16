"use client";

import * as Yup from "yup";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import createMask from "@/helpers/createMask";
import { phoneNumberValidationSchema } from "@/helpers/validationSchemas";
import { OrderMessageModal, OrderingProducts } from "../../home";
import order from "@/app/lib/order";
import useCloseModal from "@/hooks/useCloseModal";
import { ORDER_SUCCESS_MESSAGE } from "@/constants";

import styles from "./AddingProducts.module.scss";

let phoneNumberFromStorage: string | null = "";

if (typeof window !== "undefined" && window.localStorage) {
  phoneNumberFromStorage = window?.localStorage?.getItem("phoneNumber");
}

const AddingProducts = ({ products }: { products: TProduct[] }) => {
  const [phoneNumber, setPhoneNumber] = useState(
    phoneNumberFromStorage ? phoneNumberFromStorage : ""
  );
  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [response, setResponse] = useState<TOrderResponse>();

  useEffect(() => {
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("orderingProducts", JSON.stringify(products));
  }, [phoneNumber, JSON.stringify(products)]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setPhoneNumberError(null);

      await phoneNumberValidationSchema.validate(
        { phoneNumber },
        { abortEarly: false }
      );

      const cart = products
        .filter((product) => product.quantity !== 0)
        .map((product) => {
          return {
            id: product.id,
            quantity: product.quantity as number,
          };
        });

      const body: TOrderBody = {
        cart,
        phone: phoneNumber,
      };

      const orderResponse = await order(body);

      setResponse({
        success: orderResponse.success,
        error: orderResponse.error,
      });

      setModalIsOpen(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          setPhoneNumberError(err.message);
        });
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(phoneNumber);
  };

  useCloseModal(modalIsOpen, setModalIsOpen);

  return (
    <>
      <section className={styles.addingProducts}>
        <div className={styles.container}>
          <h1 className={styles.title}>Добавленные товары</h1>

          <OrderingProducts products={products} />

          <form className={styles.form} onSubmit={handleSubmit}>
            <MaskedInput
              mask={createMask(phoneNumber)}
              guide={true}
              placeholderChar={"\u2000"}
              placeholder="+7 (___) ___ __-__"
              value={phoneNumber}
              onChange={handleChange}
            />

            {phoneNumberError && (
              <p className={styles.error}>{phoneNumberError}</p>
            )}

            <button
              className={styles.orderButton}
              onClick={(e) => handleSubmit(e)}
            >
              заказать
            </button>
          </form>
        </div>
      </section>

      {modalIsOpen && (
        <OrderMessageModal
          title={
            response?.success
              ? ORDER_SUCCESS_MESSAGE
              : (response?.error as string)
          }
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </>
  );
};

export default AddingProducts;
