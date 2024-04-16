import * as Yup from "yup";

export const phoneNumberValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .trim()
    .matches(/^\d{11}$/, "Неверный номер телефона")
    .required("Пожалуйста, введите свой номер телефона"),
});
