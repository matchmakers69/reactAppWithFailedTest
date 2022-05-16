import * as yup from "yup";

const postCodeRegex =
  /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

const phoneNumberRegex = /^(\+|0)[0-9]+$/;

export const contactDetailsSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email("Enter a valid email address")
    .required("Enter a valid email address"),

  phoneNumber: yup
    .string()
    .required("Enter a valid phone number")
    .matches(phoneNumberRegex, "Enter a valid phone number"),

  line1: yup.string().required("You must have a first line"),

  postCode: yup
    .string()
    .required("Enter a valid postal code")
    .matches(postCodeRegex, "Enter a valid Postal Code"),
});
