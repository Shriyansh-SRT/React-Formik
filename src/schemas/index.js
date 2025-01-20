import * as Yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{5,}$/;

export const basicSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Required"),
  age: Yup.number().positive().integer().required("Required"),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "passwords must match")
    .required(),
});

export const advancedSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be atleast 3 characters long")
    .required("Required"),
  jobType: Yup.string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid")
    .required("Required"),
  acceptedTos: Yup.boolean().oneOf(
    [true],
    "Please accept the terms of service"
  ),
});
