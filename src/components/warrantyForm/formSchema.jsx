
import * as Yup from 'yup';

export const FormSchemas = Yup.object({
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  Phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Phone number is required'),
  Whatsapp: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Whatsapp number is required'),
  Address: Yup.string().required('Address is required'),
  Pincode: Yup.string()
  .matches(/^[0-9]+$/, 'Must be only digits')
  .min(6, 'Must be exactly 06 digits')
  .max(6, 'Must be exactly 06 digits')
  .required('Pincode is required'),
  City: Yup.string().required('City is required'),
  District: Yup.string().required('District is required'),
  State: Yup.string().required('State is required'),
  Dealer_Name: Yup.string().required('Dealer Name is required'),
  // Category: Yup.object().required('Category is required'),
  // sheets: Yup.number().required('No of sheets is required'),
  // Product_Name:Yup.object().required("Product is required"),
  // No_of_thickness:Yup.object().required("No of Thickness is required"),
  agreeTerms: Yup.boolean().oneOf([true], "You must agree to the terms and conditions."),
  // agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});
