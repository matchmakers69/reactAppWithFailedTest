import * as yup from "yup";

export const awsCompleteNewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Enter a password")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .matches(/[\d]+/, "Must contain at least 1 number")
    .matches(/[A-Z]+/, "Must contain at least 1 uppercase letter")
    .matches(/[a-z]+/, "Must contain at least 1 lowercase letter")
    .matches(/[+=£$%^&!]+/, "Must contain at least 1 special character ([+ = £ $ % ^ & !)")
    .min(8, "Min 8 characters"),

  confirmPassword: yup
    .string()
    .required("Enter a password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
