import * as Yup from "yup";
export const ContactFormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  Email: Yup.string().email('Invalid email address').required('Email is required'),
  PhoneNo: Yup.string()
  // .matches(/^[0-9]+$/, 'Must be only digits')
  .min(10, 'Phone number must be of 10 digits')
  .max(10, 'Phone number must be of 10 digits')
  .required('Phone number is required'),
  // state: Yup.object().required("please select any one of the state"),
  City: Yup.string().required("please select any one of the city"),
  message: Yup.string().required("message is required"),
});