"use client";
import { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { FormSchemas } from "@/components/warrantyForm/formSchema";
import "./warrantyForm.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import invoice_icon from "@/images/invoice_svg.svg";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/components/warrantyForm/warrantyForm.module.css";
import Link from "next/link";
import index from "../footer/desc";

const FormCommon = () => {
  const router = useRouter();
  const form = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [uploadedInvoice, setUploadedInvoice] = useState(null);
  const [uploadedInvoice1, setUploadedInvoice1] = useState(null);
  const [uploadedInvoice2, setUploadedInvoice2] = useState(null);
  const [uploadedInvoice3, setUploadedInvoice3] = useState(null);
  const [submit, setSubmit] = useState(false);

  console.log("submit", submit ? "submit" : "unsubmit");
  const products = [
    { name: "8ft x 4ft", code: "NY" },
    { name: "7ft x 4ft", code: "RM" },
  ];
  const categories = [
    { name: "Royale Touche Performance Ply-Promaxx", code: "1" },
    { name: "Royale Touche Performance Ply-Promaxx+", code: "2" },
    { name: "Royale Touche Blockboard", code: "3" },
  ];
  const indexedCategories = categories.map((category, index) => ({
    ...category,

    index: index + 1,
  }));
  
  const chooseFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };
  const chooseFile1 = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice1) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice1(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };
  const chooseFile2 = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice2) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice2(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };
  const chooseFile3 = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice3) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice3(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };

  const initialValue = {
    fullName: "",
    email: "",
    Phone: "",
    Whatsapp: "",
    Address: "",
    Pincode: "",
    City: "",
    District: "",
    State: "",
    Dealer_Name: "",
    Category: "",
    Product_Name_0: "",
    Product_Name_1: "",
    Product_Name_2: "",
    Product_Name_3: "",
    sheets: "",
    sheets_0: "",
    sheets_1: "",
    sheets_2: "",
    No_of_thickness_0: "",
    No_of_thickness_1: "",
    No_of_thickness_2: "",
    No_of_thickness_3: "",
    Invoice_File: "",
    Invoice_File1: "",
    Invoice_File2: "",
    Invoice_File3: "",
    agreeTerms: false,
  };
  // const [submitAttempted, setSubmitAttempted] = useState(false);
  const [formResponse, setFormResponse] = useState("");
  const [sections, setSections] = useState([{}]);
  const [sectionValues, setSectionValues] = useState([initialValue]);
  const removeSection = (index) => {
    const updatedSections = [...sections];
    const updatedValues = [...sectionValues];
    updatedSections.splice(index, 1);
    updatedValues.splice(index, 1);
    setSections(updatedSections);
    setSectionValues(updatedValues);
  };
  console.log("sections", sections);
  
  const MAX_SECTIONS = 4;
  const [thicknessOptions, setThicknessOptions] = useState(Array.from({ length: MAX_SECTIONS }, () => []));
  const addSection = () => {
    if (sections.length < MAX_SECTIONS) {
        const newSections = [...sections, {}];
    const newSectionValues = [...sectionValues, { ...initialValue}];
    setSections(newSections);
    setSectionValues(newSectionValues);
    } else {
      toast.warning(`Maximum ${MAX_SECTIONS} sections allowed`);
    }
  };

  const handleCategoryChange = (category, index) => {
    console.log("index", index);
    values[`Category_${index}`] = category;
    values[`Product_Name_${index}`] = null;
    console.log("category" ,category)

    if (category.code === "1" || category.code === "2") {
      setThicknessOptions([
        { name: "6mm", code: "6mm" },
        { name: "9mm", code: "9mm" },
        { name: "12mm", code: "12mm" },
        { name: "16mm", code: "16mm" },
        { name: "19mm", code: "19mm" },
        { name: "25mm", code: "25mm" },
      ]);
    }
    if (category.code === "3") {
      setThicknessOptions([
        { name: "19mm", code: "19mm" },
        { name: "25mm", code: "25mm" },
      ]);
    }
  };

  const showErrorToast = () => {
    toast.error("Please fill all the required details", {
      data: {
        title: "Error toast",
        text: "This is an error message",
      },
    });
  };

  console.log(thicknessOptions);

  const clearUploadedFile = () => {
    setUploadedInvoice(null);
    setUploadedInvoice1(null);
    setUploadedInvoice2(null);
    setUploadedInvoice3(null);
  };

  const { values, actions, errors, touched, handleChange, handleSubmit, resetForm  } =
    useFormik({
      initialValues: initialValue,
      validationSchema: FormSchemas,
      onSubmit: (value, action) => {
        console.log("value", value);
        if (uploadedInvoice) {
          console.log("Uploaded PDF file:", uploadedInvoice);
        }
        clearUploadedFile();
        emailjs
          .send(
            "service_1yku1jq",  // service ID 
            "template_tpgu78n",  // template
            values,
            "wUn63IsqXIdoy36Vc" // public key 
          )
          .then((response) => {
            router.push("/thanks")
            // toast.success("Form Submitted Successfully...");
            resetForm();
            console.log("Email sent successfully");
            setSubmit(true);
            clearUploadedFile();
            setUploadedInvoice(null);
            setUploadedInvoice1(null);
            setUploadedInvoice2(null);
            setUploadedInvoice3(null);
            setSelectedProduct(null);
            console.log("Email sent successfully:", response);
            // resetForm();
          })                              
          .catch((error) => {
            // toast.error("Error submitting form. Please try again.");
            console.error("Email send error:", error);
          });
      },
    });
  console.log("FINAL VALUES", values);
  console.log("response", formResponse.text);     
  
  return (
    <div className={styles.Form_Container}>
      <div className={styles.Form_Header}>
        <div className={styles.Form_Header_Content}>
          <p className={styles.Form_Header_text}>
            FILL IN YOUR DETAILS TO GET YOUR
          </p>
          <p className={styles.Form_Header_text1}>WARRANTY CERTIFICATE NOW!</p>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={(e) => {
          handleSubmit(e);
          if (submit) {
            showErrorToast();
          }
        }}
        enctype="multipart/form-data"
        className={styles.RT_Form_Main_Form}
      >
        <div className={styles.RT_Form_main}>
          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Name" className={styles.form_Label}>
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="fullName"
                className={styles.input_field}
                onChange={handleChange}
                value={values.fullName}
              />
              {touched.fullName && errors.fullName && (
                <p className="error">{errors.fullName}</p>
              )}
            </div>
            <div className={styles.RT_Form_field}>
              <label htmlFor="email" className={styles.form_Label}>
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className={styles.input_field}
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
          </div>

          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Phone" className={styles.form_Label}>
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                name="Phone"
                className={styles.input_field}
                onChange={handleChange}
                value={values.Phone}
              />
              {touched.Phone && errors.Phone && (
                <p className="error">{errors.Phone}</p>
              )}
            </div>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Whatsapp" className={styles.form_Label}>
                Whatsapp Number *
              </label>
              <input
                type="tel"
                placeholder="Enter Whatsapp Number"
                name="Whatsapp"
                className={styles.input_field}
                onChange={handleChange}
                value={values.Whatsapp}
              />
              {touched.Whatsapp && errors.Whatsapp && (
                <p className="error">{errors.Whatsapp}</p>
              )}
            </div>
          </div>

          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field_address}>
              <label htmlFor="Address" className={styles.form_Label}>
                Address
              </label>
              <input
                type="tel"
                placeholder="Enter Address"
                name="Address"
                className={styles.input_field}
                onChange={handleChange}
                value={values.Address}
              />
              {touched.Address && errors.Address && (
                <p className="error">{errors.Address}</p>
              )}
            </div>
            <div className={styles.RT_Form_field_pincode}>
              <label htmlFor="Pincode" className={styles.form_Label}>
                Pincode
              </label>
              <input
                type="tel"
                placeholder="Enter Pincode"
                name="Pincode"
                className={styles.input_field}
                onChange={handleChange}
                value={values.Pincode}
              />
              {touched.Pincode && errors.Pincode && (
                <p className="error">{errors.Pincode}</p>
              )}
            </div>
          </div>

          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field}>
              <label htmlFor="City" className={styles.form_Label}>
                City
              </label>
              <input
                type="text"
                placeholder="Enter City"
                name="City"
                className={styles.input_field}
                onChange={handleChange}
                value={values.City}
              />
              {touched.City && errors.City && (
                <p className="error">{errors.City}</p>
              )}
            </div>
            <div className={styles.RT_Form_field}>
              <label htmlFor="District" className={styles.form_Label}>
                District
              </label>
              <input
                type="text"
                placeholder="Enter District"
                name="District"
                className={styles.input_field}
                onChange={handleChange}
                value={values.District}
              />
              {touched.District && errors.District && (
                <p className="error">{errors.District}</p>
              )}
            </div>
            <div className={styles.RT_Form_field}>
              <label htmlFor="State" className={styles.form_Label}>
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
                name="State"
                className={styles.input_field}
                onChange={handleChange}
                value={values.State}
              />
              {touched.State && errors.State && (
                <p className="error">{errors.State}</p>
              )}
            </div>
          </div>

          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field_dealer}>
              <label htmlFor="Dealer_Name" className={styles.form_Label}>
                Dealer/Contractor Name
              </label>
              <input
                type="text"
                placeholder="Enter Dealer Name"
                name="Dealer_Name"
                className={styles.input_field}
                onChange={handleChange}
                value={values.Dealer_Name}
              />
              {touched.Dealer_Name && errors.Dealer_Name && (
                <p className="error">{errors.Dealer_Name}</p>
              )}
            </div>
          </div>
          {/*  category*/}
          {sections.map((section, index) => {
            console.log("section", section);
            const isFirstSection = index === 0;
            return (
              <div key={index} className={`${styles.Form_Second_Part} ${isFirstSection ? styles.open : ''}`}>
                <div className={styles.RT_Form_Flex}>               
                  <div className={styles.RT_Form_field}>
                    <label
                      htmlFor={`Category_Name_${index}`}
                      className={styles.form_Label}
                    >
                      Category Name
                    </label>

                    <Dropdown
                     value={values[`Category_${index}`]}
                     onChange={(e) => {
                       handleCategoryChange(e.value, index);
                       setSelectedProduct(null);
                     }}
                      options={indexedCategories}
                      optionLabel="name"
                      name={`Category_${index}`}
                      placeholder="Select Category"
                      className={styles.input_field}
                    />
                    {touched[`Category_${index}`] &&
                      errors[`Category_${index}`] && (
                        <p className="error">{errors[`Category_${index}`]}</p>
                      )}
                  </div>
                  <div className={styles.RT_Form_field}>
                    <label
                      htmlFor={`Product_Name_${index}`}
                      className={styles.form_Label}
                    >
                      Select Product *
                    </label>
                    <Dropdown
                      value={values[`Product_Name_${index}`]}
                      onChange={(e) => handleChange(e, index)}
                      options={products.map((product) => ({
                        ...product, 
                        name: `${product.name}`,
                      }))}
                      optionLabel="name"
                      name={`Product_Name_${index}`}
                      placeholder="Product"
                      className={styles.input_field}
                    />
                  </div>
                </div>
                {/* sheets */}
                <div className={styles.RT_Form_Flex}>
                  <div className={styles.RT_Form_field}>
                    <label
                      htmlFor="sheets"
                      className={styles.form_Label}
                    >
                      No Of Sheets
                    </label>
                    <input
                      type="number"
                      placeholder="Enter No of sheets"
                      name={`sheets_${index}`}
                      className={styles.input_field}
                      onChange={(e) => handleChange(e, index)}
                      value={values[`sheets_${index}`]}
                    />
                    {touched[`sheets_${index}`] &&
                      errors[`sheets_${index}`] && (
                        <p className="error">{errors[`sheets_${index}`]}</p>
                      )}
                  </div>
                  <div className={styles.RT_Form_field}>
                    <label
                      htmlFor={`No_of_thickness_${index}`}
                      className={styles.form_Label}
                    >
                      Thickness
                    </label>
                    <Dropdown
                      value={values[`No_of_thickness_${index}`]}
                      onChange={(e) => handleChange(e, index)}
                      options={thicknessOptions}
                      optionLabel="name"
                      name={`No_of_thickness_${index}`}
                      placeholder="Select Thickness"
                      className={styles.input_field}
                    />
                  </div>
                </div>
                {index > 0 && (
                <div className={styles.Form_btn_Outer1}>
                  <button
                    onClick={() => removeSection(index)}
                    class="button-571"
                    role="button"
                  >
                    <span class="text">Remove</span>
                    <span>Remove</span>
                  </button>
                </div>
                )}
              </div>
            );
          })}
          <div className={styles.Form_btn_Outer}>
            <div onClick={addSection} class="button-57" role="button">
              <span className="text">
                {/* <div className=""> */}
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg_add"
                >
                  <path
                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                    fill-rule="white"
                  />
                </svg>
                {/* </div> */}
                ADD MORE
              </span>
              <span>CLICK TO ADD MORE</span>
            </div>
          </div>
        </div>

        {/* Upload File */}
        <div className={styles.invoice_upload_container}>
          <div>
            <p className={styles.upload_invoice_text}>
              Click here to upload invoice*
            </p>
          </div>
          {/* Invoice */}
          <div className={styles.invoice_Main}>
            <div className={styles.inovoice_inner_flex}>
              <div
                className={styles.invoice_inner_cards}
                onClick={() => document.getElementById("getFile").click()}
              >
                <label htmlFor="img">
                  <Image
                    src={invoice_icon}
                    alt="none"
                    className={styles.invc_img}
                  />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile"
                    accept=".pdf"
                    name="Invoice_File"
                    onChange={chooseFile}
                    value={values.Invoice_File}
                  />
                </label>
                {uploadedInvoice && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 1 has been uploaded: {uploadedInvoice}
                  </p>
                )}
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 1
                </p>
              </div>
            </div>

            <div className={styles.inovoice_inner_flex}>
              <div
                className={styles.invoice_inner_cards}
                onClick={() => document.getElementById("getFile1").click()}
              >
                <label htmlFor="img">
                  <Image
                    src={invoice_icon}
                    alt="none"
                    className={styles.invc_img}
                  />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile1"
                    name="Invoice_File1"
                    onChange={chooseFile1}
                  />
                </label>
                {uploadedInvoice1 && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 2 has been uploaded: {uploadedInvoice1}
                  </p>
                )}
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 2
                </p>
              </div>
            </div>

            <div className={styles.inovoice_inner_flex}>
              <div
                className={styles.invoice_inner_cards}
                onClick={() => document.getElementById("getFile2").click()}
              >
                <label htmlFor="img">
                  <Image
                    src={invoice_icon}
                    alt="none"
                    className={styles.invc_img}
                  />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile2"
                    name="Invoice_File2"
                    onChange={chooseFile2}
                  />
                </label>
                {uploadedInvoice2 && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 3 has been uploaded: {uploadedInvoice2}
                  </p>
                )}
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 3
                </p>
              </div>
            </div>

            <div className={styles.inovoice_inner_flex}>
              <div
                className={styles.invoice_inner_cards}
                onClick={() => document.getElementById("getFile3").click()}
              >
                <label htmlFor="img">
                  <Image
                    src={invoice_icon}
                    alt="none"
                    className={styles.invc_img}
                  />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile3"
                    name="Invoice_File3"
                    onChange={chooseFile3}
                  />
                </label>
                {uploadedInvoice3 && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 4 has been uploaded: {uploadedInvoice3}
                  </p>
                )}
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 4
                </p>
              </div>
            </div>
          </div>

          
          {/* invoice ends */}
          <div className={styles.form_last_section}>
            <div className={styles.form_last_section_content}>
              <div className={styles.check}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  value={values.agreeTerms}
                  // checked={values.agreeTerms}
                  onChange={handleChange}
                  // required
                  checked={values.agreeTerms}
                />
              </div>

              <p className={styles.form_agree_content}>
                Click here to agree to{" "}
                <span
                  className={styles.forms_terms_condition}
                  // onClick={() => router.push("/terms_and_condition")}
                >
                  <Link href="/terms-and-condition" target="_blank">
                    Terms And Conditions
                  </Link>
                </span>
              </p>
            </div>
            {touched.agreeTerms && errors.agreeTerms && (
              <p className="error">{errors.agreeTerms}</p>
            )}
          </div>
          {/*  */}
          <div className={styles.Form_btn_Outer_Main}>
            <button
              class="button-57"
              role="button"
              onClick={() => {
                handleSubmit();
                // showErrorToast();
                // submitMessage();
              }}
              // disabled={!values.agreeTerms}
            >
              <span class="text"> Submit</span>
              <span> Submit</span>
            </button>
            {/* <div className={styles.submit} >
              {submit && "Form Submitted Successfully"}
            </div> */}
            {/* <button className={styles.Form_btn_inner} onClick={notify}>
              Submit
            </button> */}
            {/* <Toaster position="top-right" /> */}
            {/* {formResponse.text === "OK" && ( */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={false}
              theme="light"
              transition={Slide}
              className={"contactFormNotification"}
              // progressStyle={{ background: "#f90" }}
            />
            {/* )}  */}
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormCommon;
