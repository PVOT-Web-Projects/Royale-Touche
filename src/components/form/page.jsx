"use client";
import { useFormik } from "formik";
import { useState } from "react";
import Select from "react-select";
import styles from "@/components/form/form.module.css";
import Button from "@/common/button/button3";
import Image from "next/image";
import { Slide, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import form_image from "@/images/contactImage.png";
import { ContactFormSchemas } from "@/components/schemas/page";
import "./form.css";
const Contactform = () => {
  const [formResponse, setFormResponse] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const stateOption = [
    { value: "AndraPradesh", label: "Gujarat" },
    { value: "ArunachalPradesh", label: "Maharastra" },
    { value: "Assam", label: "Kerela" },
    { value: "Bihar", label: "Karnataka" },
    { value: "Chhattisgarh", label: "Delhi" },
    { value: "Goa", label: "Punjab" },
    { value: "Gujarat", label: "Himachal Pradesh" },
    { value: "Haryana", label: "Chhattisgarh" },
    { value: "HimachalPradesh", label: "Uttar Pradesh" },
    { value: "JammuKashmir", label: "Madhya Pradesh" },
    { value: "Jharkhand", label: "Mizoram" },
    { value: "Karnataka", label: "Assam" },
    { value: "Kerala", label: "Bihar" },
    { value: "MadhyaPradesh", label: "Goa" },
    { value: "Maharashtra", label: "Odisha" },
    { value: "Manipur", label: "Odisha" },
    { value: "Meghalaya", label: "Odisha" },
    { value: "Mizoram", label: "Odisha" },
    { value: "Nagaland", label: "Odisha" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Odisha" },
    { value: "Rajasthan", label: "Odisha" },
    { value: "Sikkim", label: "Odisha" },
    { value: "TamilNadu", label: "Odisha" },
    { value: "Telangana", label: "Odisha" },
    { value: "Tripura", label: "Odisha" },
    { value: "UttarPradesh", label: "Odisha" },
    { value: "Uttarakhand", label: "Odisha" },
    { value: "WestBengal", label: "Odisha" },
    { value: "AndamanNicobar", label: "Odisha" },
    { value: "Chandigarh", label: "Odisha" },
    { value: "DadraHaveli", label: "Odisha" },
    { value: "DamanDiu", label: "Odisha" },
    { value: "Delhi", label: "Odisha" },
    { value: "Lakshadweep", label: "Odisha" },
    { value: "Puducherry", label: "Odisha" },
  ];

  // const yearOptions = [
  //   { value: "Ahmedabad", label: "Ahmedabad" },
  //   { value: "Amreli", label: "Amreli" },
  //   { value: "Anand", label: "Anand" },
  //   { value: "Banaskantha", label: "Banaskantha" },
  //   { value: "Bhavnagar", label: "Bhavnagar" },
  //   { value: "Dahod", label: "Dahod" },
  //   { value: "Dang", label: "Dang" },
  //   { value: "Gandhinagar", label: "Gandhinagar" },
  //   { value: "Godhara", label: "Godhara" },
  //   { value: "Jamnagar", label: "Jamnagar" },
  //   { value: "Junagadh", label: "Junagadh" },
  //   { value: "Kheda", label: "Kheda" },
  //   { value: "Kutch", label: "Kutch" },
  //   { value: "Mahesana", label: "Mahesana" },
  //   { value: "Narmada", label: "Narmada" },
  //   { value: "Navsari", label: "Navsari" },
  //   { value: "Patan", label: "Patan" },
  //   { value: "Porbandar", label: "Porbandar" },
  //   { value: "Rajkot", label: "Rajkot" },
  //   { value: "Sabarkantha", label: "Sabarkantha" },
  //   { value: "Surat", label: "Surat" },
  //   { value: "Surendranagar", label: "Surendranagar" },
  //   { value: "Vadodara", label: "Vadodara" },
  //   { value: "Valsad", label: "Valsad" },
  //   { value: "Tapi", label: "Tapi" },
  //   { value: "Navsari", label: "Navsari" },
  //   { value: "Pune", label: "Pune" },
  //   { value: "Nagpur", label: "Nagpur" },
  //   { value: "Mumbai", label: "Mumbai" },
  //   { value: "Maharastra", label: "Maharastra" },
  //   { value: "Rajasthan", label: "Rajasthan" },
  //   { value: "Delhi", label: "Delhi" },
  //   { value: "Kerela", label: "Kerela" },
  //   { value: "Kolkata", label: "Kolkata" },
  //   { value: "Jaipur", label: "Jaipur" },
  //   { value: "Goa", label: "Goa" },
  //   { value: "Karnataka", label: "Karnataka" },
  //   { value: "BHOPAL", label: "BHOPAL" },
  //   { value: "Ujjain", label: "Ujjain" },
  //   { value: "Jagatpur", label: "Jagatpur" },
  //   { value: "Jaipur", label: "Jaipur" },
  //   { value: "Tripura", label: "Tripura" },
  //   { value: "Mirzapur", label: "Mirzapur" },
  //   { value: "Mathura", label: "Mathura" },
  //   { value: "Patna", label: "Patna" },
  //   { value: "Raipur", label: "Raipur" },
  //   { value: "Kota", label: "Kota" },
  //   { value: "Rohini", label: "Rohini" },
  //   { value: "Ranchi", label: "Ranchi" },
  //   { value: "Nepal", label: "Nepal" },
  //   { value: "Chennai", label: "Chennai" },
  //   { value: "Odisha", label: "Odisha" },
  //   { value: "Lucknow", label: "Lucknow" },
  //   { value: "Odisha", label: "Odisha" },
  //   { value: "Assam", label: "Assam" },
  //   { value: "Rewa", label: "Rewa" },
  //   { value: "Solapur", label: "Solapur" },
  //   { value: "Mansa", label: "Mansa" },
  //   { value: "Jaisalmer", label: "Jaisalmer" },
  //   { value: "Udaipur", label: "Udaipur" },
  //   { value: "Hyderabad", label: "Hyderabad" },
  // ];

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setFieldValue("state", selectedOption.value);
    setFieldValue("year", "");
    switch (selectedOption.value) {
      case "AndraPradesh":
        setCities(["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"]);
        break;
      case "ArunachalPradesh":
        setCities(["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"]);
        break;
      case "Assam":
        setCities(["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]);
        break;
      case "Bihar":
        setCities(["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]);
        break;
      case "Chhattisgarh":
        setCities(["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"]);
        break;
      case "Goa":
        setCities(["North Goa","South Goa"]);
        break;
      case "Gujarat":
        setCities(["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"]);
        break;
      case "Haryana":
        setCities(["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]);
        break;
      case "HimachalPradesh":
        setCities(["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"]);
        break;
      case "JammuKashmir":
        setCities(["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]);
        break;
      case "Jharkhand":
        setCities(["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"]);
        break;
      case "Karnataka":
        setCities(["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"]);
        break;
      case "Kerala":
        setCities(["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad" ]);
        break;
      case "MadhyaPradesh":
        setCities(["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
        "Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]);
        break;
      case "Maharashtra":
        setCities(["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]);
        break;
      case "Manipur":
          setCities(["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]);
          break;
      case "Meghalaya":
            setCities(["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]);
            break;
      case "Mizoram":
              setCities(["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]);
              break;
      case "Nagaland":
                setCities(["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]);
                break;
      case "Odisha":
                  setCities(["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"]);
                  break;
      case "Punjab":
                    setCities(["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"]);
                    break;
                    case "Rajasthan":
                      setCities(["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"]);
                      break;
                      case "Sikkim":
                        setCities(["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]);
                        break;
                        case "TamilNadu":
                          setCities(["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]);
                          break;
                          case "Telangana":
                            setCities(["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"]);
                            break;
                            case "Tripura":
                              setCities(["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]);
                              break;
                              case "UttarPradesh":
                                setCities(["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]);
                                break;
                                case "Uttarakhand":
                                  setCities(["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"]);
                                  break;
                                  case "WestBengal":
                                    setCities(["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"]);
                                    break;
                                    case "AndamanNicobar":
                                      setCities(["Nicobar","North Middle Andaman","South Andaman"]);
                                      break;
                                      case "Chandigarh":
                                        setCities(["Chandigarh"]);
                                        break;
                                        case "DadraHaveli":
                                          setCities(["Dadra Nagar Haveli"]);
                                          break;
                                          case "DamanDiu":
                                            setCities(["Daman","Diu"]);
                                            break;
                                            case "Delhi":
                                              setCities(["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"]);
                                              break;
                                              case "Lakshadweep":
                                                setCities(["Lakshadweep"]);
                                                break;
                                                case "Puducherry":
                                                  setCities(["Karaikal","Mahe","Puducherry","Yanam"]);
                                                  break;


      // Add cases for other states
      default:
        setCities([]);
        break;
    }
  };

  const initialValue = {
    fullName: "",
    Email: "",
    Phone: "",
    state: "",
    year: "",
    message: "",
  };

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: initialValue,
      validationSchema: ContactFormSchemas,
      onSubmit: (value, action) => {
        action.resetForm();
        console.log("value", value);
        emailjs
          .send(
            "service_6pitte7",
            "template_azgm81o",
            values,
            "dp6xvACY2kw4Z6gwc"
          )
          .then((response) => {
            console.log("Email sent successfully:", response);
            setFormResponse(response);
            action.resetForm();
            // resetForm();
          })
          .catch((error) => {
            console.error("Email send error:", error);
          });
        submitMessage();
        console.log("FINALVALUE", value);
      },
    });

  console.log("value", values);
  console.log("response", formResponse.text);

  return (
    <div className={styles.contact_form}>
      <div className={styles.contact_form_wrapper}>
        <form onSubmit={handleSubmit} className={styles.Form_Container}>
          <div className={styles.Form_content}>
            <h1 className={styles.contact_form_title}>Contact Us</h1>

            <div className={styles.field}>
              <label htmlFor="fullName">Name</label>
              <input
                type="name"
                name="fullName"
                onChange={handleChange}
                value={values.fullName}
                placeholder="Rajesh Sharma"
              />
              {touched.fullName && errors.fullName && (
                <p className={styles.error}>{errors.fullName}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                onChange={handleChange}
                value={values.Email}
                placeholder="example@gmail.com"
              />
              {touched.Email && errors.Email && (
                <p className={styles.error}>{errors.Email}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="Phone"
                onChange={handleChange}
                value={values.Phone}
                placeholder="8140X XXXXX"
              />
              {touched.Phone && errors.Phone && (
                <p className={styles.error}>{errors.Phone}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="State">State</label>
              <Select
                placeholder="Select State"
                value={selectedState}
                // onChange={(selectedOption) => {
                //   let event = {
                //     target: { name: "state", value: selectedOption },
                //   };
                //   handleChange(event);
                // }}
                onChange={(selectedOption) => {
                  handleStateChange(selectedOption);
                }}
                isSearchable={true}
                options={stateOption}
                name="state"
              />
              {touched.state && errors.state && (
                <p className={styles.error}>{errors.state}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="City">City</label>
              <Select
                placeholder={
                  selectedState ? "Select City" : "Please select a state first"
                }
                value={values.year}
                onChange={(selectedOption) => {
                  let event = {
                    target: { name: "year", value: selectedOption },
                  };
                  handleChange(event);
                }}
                isSearchable={true}
                options={cities.map((city) => ({ value: city, label: city }))}
                // options={yearOptions}
                name="year"
                isDisabled={!selectedState}
              />
              {touched.year && errors.year && (
                <p className={styles.error}>{errors.year}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                rows={5}
                onChange={handleChange}
                value={values.message}
                placeholder="Enter your message"
              />
              {touched.message && errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>
            <div className={styles.common_button_outer2}>
              <Button btn_text="Send Message" />
              {formResponse.text === "OK" && (
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
              )}
            </div>
          </div>
        </form>
        <div className={styles.Image_Container}>
          <Image src={form_image} alt="none" className={styles.form_image} />
        </div>
      </div>
    </div>
  );
};
export default Contactform;
