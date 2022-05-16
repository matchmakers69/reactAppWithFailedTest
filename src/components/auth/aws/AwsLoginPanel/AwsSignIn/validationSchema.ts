import * as yup from "yup";

export const awsSignInSchema = yup.object().shape({
  username: yup.string().required("Username cannot be blank"),
  password: yup.string().required("Password cannot be blank"),
});
