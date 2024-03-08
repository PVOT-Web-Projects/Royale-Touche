"use client";
import { useFormik } from "formik";
import { useState } from "react";
import Select from "react-select";
import styles from "@/components/form/form.module.css";
import Button from "@/common/button/button3";
import Image from "next/image";
import { Slide, ToastContainer, toast } from "react-toastify";
// import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import form_image from "@/images/contactImage.png";
import { ContactFormSchemas } from "@/components/schemas/page";
import "./form.css";
const Contactform = () => {
  const [formResponse, setFormResponse] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const stateOption = [
    { value: "AndraPradesh", label: "AndraPradesh" },
    { value: "ArunachalPradesh", label: "ArunachalPradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "HimachalPradesh", label: "HimachalPradesh" },
    { value: "JammuKashmir", label: "JammuKashmir" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "MadhyaPradesh", label: "MadhyaPradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "TamilNadu", label: "TamilNadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "UttarPradesh", label: "UttarPradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "WestBengal", label: "WestBengal" },
    { value: "AndamanNicobar", label: "AndamanNicobar" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "DadraHaveli", label: "DadraHaveli" },
    { value: "DamanDiu", label: "DamanDiu" },
    { value: "Delhi", label: "Delhi" },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Puducherry", label: "Puducherry" },
  ];

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setFieldValue("state", selectedOption.value);
    setFieldValue("City", selectedOption.value);
    switch (selectedOption.value) {
      case "AndraPradesh":
        setCities([
          "Anantapur",
          "Chittoor",
          "East Godavari",
          "Guntur",
          "Kadapa",
          "Krishna",
          "Kurnool",
          "Prakasam",
          "Nellore",
          "Srikakulam",
          "Visakhapatnam",
          "Vizianagaram",
          "West Godavari",
        ]);
        break;
      case "ArunachalPradesh":
        setCities([
          "Anjaw",
          "Changlang",
          "Dibang Valley",
          "East Kameng",
          "East Siang",
          "Kra Daadi",
          "Kurung Kumey",
          "Lohit",
          "Longding",
          "Lower Dibang Valley",
          "Lower Subansiri",
          "Namsai",
          "Papum Pare",
          "Siang",
          "Tawang",
          "Tirap",
          "Upper Siang",
          "Upper Subansiri",
          "West Kameng",
          "West Siang",
          "Itanagar",
        ]);
        break;
      case "Assam":
        setCities([
          "Baksa",
          "Barpeta",
          "Biswanath",
          "Bongaigaon",
          "Cachar",
          "Charaideo",
          "Chirang",
          "Darrang",
          "Dhemaji",
          "Dhubri",
          "Dibrugarh",
          "Goalpara",
          "Golaghat",
          "Hailakandi",
          "Hojai",
          "Jorhat",
          "Kamrup Metropolitan",
          "Kamrup (Rural)",
          "Karbi Anglong",
          "Karimganj",
          "Kokrajhar",
          "Lakhimpur",
          "Majuli",
          "Morigaon",
          "Nagaon",
          "Nalbari",
          "Dima Hasao",
          "Sivasagar",
          "Sonitpur",
          "South Salmara Mankachar",
          "Tinsukia",
          "Udalguri",
          "West Karbi Anglong",
        ]);
        break;
      case "Bihar":
        setCities([
          "Araria",
          "Arwal",
          "Aurangabad",
          "Banka",
          "Begusarai",
          "Bhagalpur",
          "Bhojpur",
          "Buxar",
          "Darbhanga",
          "East Champaran",
          "Gaya",
          "Gopalganj",
          "Jamui",
          "Jehanabad",
          "Kaimur",
          "Katihar",
          "Khagaria",
          "Kishanganj",
          "Lakhisarai",
          "Madhepura",
          "Madhubani",
          "Munger",
          "Muzaffarpur",
          "Nalanda",
          "Nawada",
          "Patna",
          "Purnia",
          "Rohtas",
          "Saharsa",
          "Samastipur",
          "Saran",
          "Sheikhpura",
          "Sheohar",
          "Sitamarhi",
          "Siwan",
          "Supaul",
          "Vaishali",
          "West Champaran",
        ]);
        break;
      case "Chhattisgarh":
        setCities([
          "Balod",
          "Baloda Bazar",
          "Balrampur",
          "Bastar",
          "Bemetara",
          "Bijapur",
          "Bilaspur",
          "Dantewada",
          "Dhamtari",
          "Durg",
          "Gariaband",
          "Janjgir Champa",
          "Jashpur",
          "Kabirdham",
          "Kanker",
          "Kondagaon",
          "Korba",
          "Koriya",
          "Mahasamund",
          "Mungeli",
          "Narayanpur",
          "Raigarh",
          "Raipur",
          "Rajnandgaon",
          "Sukma",
          "Surajpur",
          "Surguja",
        ]);
        break;
      case "Goa":
        setCities(["North Goa", "South Goa"]);
        break;
      case "Gujarat":
        setCities([
          "Ahmedabad",
          "Amreli",
          "Anand",
          "Aravalli",
          "Banaskantha",
          "Bharuch",
          "Bhavnagar",
          "Botad",
          "Chhota Udaipur",
          "Dahod",
          "Dang",
          "Devbhoomi Dwarka",
          "Gandhinagar",
          "Gir Somnath",
          "Jamnagar",
          "Junagadh",
          "Kheda",
          "Kutch",
          "Mahisagar",
          "Mehsana",
          "Morbi",
          "Narmada",
          "Navsari",
          "Panchmahal",
          "Patan",
          "Porbandar",
          "Rajkot",
          "Sabarkantha",
          "Surat",
          "Surendranagar",
          "Tapi",
          "Vadodara",
          "Valsad",
        ]);
        break;
      case "Haryana":
        setCities([
          "Ambala",
          "Bhiwani",
          "Charkhi Dadri",
          "Faridabad",
          "Fatehabad",
          "Gurugram",
          "Hisar",
          "Jhajjar",
          "Jind",
          "Kaithal",
          "Karnal",
          "Kurukshetra",
          "Mahendragarh",
          "Mewat",
          "Palwal",
          "Panchkula",
          "Panipat",
          "Rewari",
          "Rohtak",
          "Sirsa",
          "Sonipat",
          "Yamunanagar",
        ]);
        break;
      case "HimachalPradesh":
        setCities([
          "Bilaspur",
          "Chamba",
          "Hamirpur",
          "Kangra",
          "Kinnaur",
          "Kullu",
          "Lahaul Spiti",
          "Mandi",
          "Shimla",
          "Sirmaur",
          "Solan",
          "Una",
        ]);
        break;
      case "JammuKashmir":
        setCities([
          "Anantnag",
          "Bandipora",
          "Baramulla",
          "Budgam",
          "Doda",
          "Ganderbal",
          "Jammu",
          "Kargil",
          "Kathua",
          "Kishtwar",
          "Kulgam",
          "Kupwara",
          "Leh",
          "Poonch",
          "Pulwama",
          "Rajouri",
          "Ramban",
          "Reasi",
          "Samba",
          "Shopian",
          "Srinagar",
          "Udhampur",
        ]);
        break;
      case "Jharkhand":
        setCities([
          "Bokaro",
          "Chatra",
          "Deoghar",
          "Dhanbad",
          "Dumka",
          "East Singhbhum",
          "Garhwa",
          "Giridih",
          "Godda",
          "Gumla",
          "Hazaribagh",
          "Jamtara",
          "Khunti",
          "Koderma",
          "Latehar",
          "Lohardaga",
          "Pakur",
          "Palamu",
          "Ramgarh",
          "Ranchi",
          "Sahebganj",
          "Seraikela Kharsawan",
          "Simdega",
          "West Singhbhum",
        ]);
        break;
      case "Karnataka":
        setCities([
          "Bagalkot",
          "Bangalore Rural",
          "Bangalore Urban",
          "Belgaum",
          "Bellary",
          "Bidar",
          "Vijayapura",
          "Chamarajanagar",
          "Chikkaballapur",
          "Chikkamagaluru",
          "Chitradurga",
          "Dakshina Kannada",
          "Davanagere",
          "Dharwad",
          "Gadag",
          "Gulbarga",
          "Hassan",
          "Haveri",
          "Kodagu",
          "Kolar",
          "Koppal",
          "Mandya",
          "Mysore",
          "Raichur",
          "Ramanagara",
          "Shimoga",
          "Tumkur",
          "Udupi",
          "Uttara Kannada",
          "Yadgir",
        ]);
        break;
      case "Kerala":
        setCities([
          "Alappuzha",
          "Ernakulam",
          "Idukki",
          "Kannur",
          "Kasaragod",
          "Kollam",
          "Kottayam",
          "Kozhikode",
          "Malappuram",
          "Palakkad",
          "Pathanamthitta",
          "Thiruvananthapuram",
          "Thrissur",
          "Wayanad",
        ]);
        break;
      case "MadhyaPradesh":
        setCities([
          "Agar Malwa",
          "Alirajpur",
          "Anuppur",
          "Ashoknagar",
          "Balaghat",
          "Barwani",
          "Betul",
          "Bhind",
          "Bhopal",
          "Burhanpur",
          "Chhatarpur",
          "Chhindwara",
          "Damoh",
          "Datia",
          "Dewas",
          "Dhar",
          "Dindori",
          "Guna",
          "Gwalior",
          "Harda",
          "Hoshangabad",
          "Indore",
          "Jabalpur",
          "Jhabua",
          "Katni",
          "Khandwa",
          "Khargone",
          "Mandla",
          "Mandsaur",
          "Morena",
          "Narsinghpur",
          "Neemuch",
          "Panna",
          "Raisen",
          "Rajgarh",
          "Ratlam",
          "Rewa",
          "Sagar",
          "Satna",
          "Sehore",
          "Seoni",
          "Shahdol",
          "Shajapur",
          "Sheopur",
          "Shivpuri",
          "Sidhi",
          "Singrauli",
          "Tikamgarh",
          "Ujjain",
          "Umaria",
          "Vidisha",
        ]);
        break;
      case "Maharashtra":
        setCities([
          "Ahmednagar",
          "Akola",
          "Amravati",
          "Aurangabad",
          "Beed",
          "Bhandara",
          "Buldhana",
          "Chandrapur",
          "Dhule",
          "Gadchiroli",
          "Gondia",
          "Hingoli",
          "Jalgaon",
          "Jalna",
          "Kolhapur",
          "Latur",
          "Mumbai City",
          "Mumbai Suburban",
          "Nagpur",
          "Nanded",
          "Nandurbar",
          "Nashik",
          "Osmanabad",
          "Palghar",
          "Parbhani",
          "Pune",
          "Raigad",
          "Ratnagiri",
          "Sangli",
          "Satara",
          "Sindhudurg",
          "Solapur",
          "Thane",
          "Wardha",
          "Washim",
          "Yavatmal",
        ]);
        break;
      case "Manipur":
        setCities([
          "Bishnupur",
          "Chandel",
          "Churachandpur",
          "Imphal East",
          "Imphal West",
          "Jiribam",
          "Kakching",
          "Kamjong",
          "Kangpokpi",
          "Noney",
          "Pherzawl",
          "Senapati",
          "Tamenglong",
          "Tengnoupal",
          "Thoubal",
          "Ukhrul",
        ]);
        break;
      case "Meghalaya":
        setCities([
          "East Garo Hills",
          "East Jaintia Hills",
          "East Khasi Hills",
          "North Garo Hills",
          "Ri Bhoi",
          "South Garo Hills",
          "South West Garo Hills",
          "South West Khasi Hills",
          "West Garo Hills",
          "West Jaintia Hills",
          "West Khasi Hills",
        ]);
        break;
      case "Mizoram":
        setCities([
          "Aizawl",
          "Champhai",
          "Kolasib",
          "Lawngtlai",
          "Lunglei",
          "Mamit",
          "Saiha",
          "Serchhip",
          "Aizawl",
          "Champhai",
          "Kolasib",
          "Lawngtlai",
          "Lunglei",
          "Mamit",
          "Saiha",
          "Serchhip",
        ]);
        break;
      case "Nagaland":
        setCities([
          "Dimapur",
          "Kiphire",
          "Kohima",
          "Longleng",
          "Mokokchung",
          "Mon",
          "Peren",
          "Phek",
          "Tuensang",
          "Wokha",
          "Zunheboto",
        ]);
        break;
      case "Odisha":
        setCities([
          "Angul",
          "Balangir",
          "Balasore",
          "Bargarh",
          "Bhadrak",
          "Boudh",
          "Cuttack",
          "Debagarh",
          "Dhenkanal",
          "Gajapati",
          "Ganjam",
          "Jagatsinghpur",
          "Jajpur",
          "Jharsuguda",
          "Kalahandi",
          "Kandhamal",
          "Kendrapara",
          "Kendujhar",
          "Khordha",
          "Koraput",
          "Malkangiri",
          "Mayurbhanj",
          "Nabarangpur",
          "Nayagarh",
          "Nuapada",
          "Puri",
          "Rayagada",
          "Sambalpur",
          "Subarnapur",
          "Sundergarh",
        ]);
        break;
      case "Punjab":
        setCities([
          "Amritsar",
          "Barnala",
          "Bathinda",
          "Faridkot",
          "Fatehgarh Sahib",
          "Fazilka",
          "Firozpur",
          "Gurdaspur",
          "Hoshiarpur",
          "Jalandhar",
          "Kapurthala",
          "Ludhiana",
          "Mansa",
          "Moga",
          "Mohali",
          "Muktsar",
          "Pathankot",
          "Patiala",
          "Rupnagar",
          "Sangrur",
          "Shaheed Bhagat Singh Nagar",
          "Tarn Taran",
        ]);
        break;
      case "Rajasthan":
        setCities([
          "Ajmer",
          "Alwar",
          "Banswara",
          "Baran",
          "Barmer",
          "Bharatpur",
          "Bhilwara",
          "Bikaner",
          "Bundi",
          "Chittorgarh",
          "Churu",
          "Dausa",
          "Dholpur",
          "Dungarpur",
          "Ganganagar",
          "Hanumangarh",
          "Jaipur",
          "Jaisalmer",
          "Jalore",
          "Jhalawar",
          "Jhunjhunu",
          "Jodhpur",
          "Karauli",
          "Kota",
          "Nagaur",
          "Pali",
          "Pratapgarh",
          "Rajsamand",
          "Sawai Madhopur",
          "Sikar",
          "Sirohi",
          "Tonk",
          "Udaipur",
        ]);
        break;
      case "Sikkim":
        setCities([
          "East Sikkim",
          "North Sikkim",
          "South Sikkim",
          "West Sikkim",
        ]);
        break;
      case "TamilNadu":
        setCities([
          "Ariyalur",
          "Chennai",
          "Coimbatore",
          "Cuddalore",
          "Dharmapuri",
          "Dindigul",
          "Erode",
          "Kanchipuram",
          "Kanyakumari",
          "Karur",
          "Krishnagiri",
          "Madurai",
          "Nagapattinam",
          "Namakkal",
          "Nilgiris",
          "Perambalur",
          "Pudukkottai",
          "Ramanathapuram",
          "Salem",
          "Sivaganga",
          "Thanjavur",
          "Theni",
          "Thoothukudi",
          "Tiruchirappalli",
          "Tirunelveli",
          "Tiruppur",
          "Tiruvallur",
          "Tiruvannamalai",
          "Tiruvarur",
          "Vellore",
          "Viluppuram",
          "Virudhunagar",
        ]);
        break;
      case "Telangana":
        setCities([
          "Adilabad",
          "Bhadradri Kothagudem",
          "Hyderabad",
          "Jagtial",
          "Jangaon",
          "Jayashankar",
          "Jogulamba",
          "Kamareddy",
          "Karimnagar",
          "Khammam",
          "Komaram Bheem",
          "Mahabubabad",
          "Mahbubnagar",
          "Mancherial",
          "Medak",
          "Medchal",
          "Nagarkurnool",
          "Nalgonda",
          "Nirmal",
          "Nizamabad",
          "Peddapalli",
          "Rajanna Sircilla",
          "Ranga Reddy",
          "Sangareddy",
          "Siddipet",
          "Suryapet",
          "Vikarabad",
          "Wanaparthy",
          "Warangal Rural",
          "Warangal Urban",
          "Yadadri Bhuvanagiri",
        ]);
        break;
      case "Tripura":
        setCities([
          "Dhalai",
          "Gomati",
          "Khowai",
          "North Tripura",
          "Sepahijala",
          "South Tripura",
          "Unakoti",
          "West Tripura",
        ]);
        break;
      case "UttarPradesh":
        setCities([
          "Agra",
          "Aligarh",
          "Allahabad",
          "Ambedkar Nagar",
          "Amethi",
          "Amroha",
          "Auraiya",
          "Azamgarh",
          "Baghpat",
          "Bahraich",
          "Ballia",
          "Balrampur",
          "Banda",
          "Barabanki",
          "Bareilly",
          "Basti",
          "Bhadohi",
          "Bijnor",
          "Budaun",
          "Bulandshahr",
          "Chandauli",
          "Chitrakoot",
          "Deoria",
          "Etah",
          "Etawah",
          "Faizabad",
          "Farrukhabad",
          "Fatehpur",
          "Firozabad",
          "Gautam Buddha Nagar",
          "Ghaziabad",
          "Ghazipur",
          "Gonda",
          "Gorakhpur",
          "Hamirpur",
          "Hapur",
          "Hardoi",
          "Hathras",
          "Jalaun",
          "Jaunpur",
          "Jhansi",
          "Kannauj",
          "Kanpur Dehat",
          "Kanpur Nagar",
          "Kasganj",
          "Kaushambi",
          "Kheri",
          "Kushinagar",
          "Lalitpur",
          "Lucknow",
          "Maharajganj",
          "Mahoba",
          "Mainpuri",
          "Mathura",
          "Mau",
          "Meerut",
          "Mirzapur",
          "Moradabad",
          "Muzaffarnagar",
          "Pilibhit",
          "Pratapgarh",
          "Raebareli",
          "Rampur",
          "Saharanpur",
          "Sambhal",
          "Sant Kabir Nagar",
          "Shahjahanpur",
          "Shamli",
          "Shravasti",
          "Siddharthnagar",
          "Sitapur",
          "Sonbhadra",
          "Sultanpur",
          "Unnao",
          "Varanasi",
        ]);
        break;
      case "Uttarakhand":
        setCities([
          "Almora",
          "Bageshwar",
          "Chamoli",
          "Champawat",
          "Dehradun",
          "Haridwar",
          "Nainital",
          "Pauri",
          "Pithoragarh",
          "Rudraprayag",
          "Tehri",
          "Udham Singh Nagar",
          "Uttarkashi",
        ]);
        break;
      case "WestBengal":
        setCities([
          "Alipurduar",
          "Bankura",
          "Birbhum",
          "Cooch Behar",
          "Dakshin Dinajpur",
          "Darjeeling",
          "Hooghly",
          "Howrah",
          "Jalpaiguri",
          "Jhargram",
          "Kalimpong",
          "Kolkata",
          "Malda",
          "Murshidabad",
          "Nadia",
          "North 24 Parganas",
          "Paschim Bardhaman",
          "Paschim Medinipur",
          "Purba Bardhaman",
          "Purba Medinipur",
          "Purulia",
          "South 24 Parganas",
          "Uttar Dinajpur",
        ]);
        break;
      case "AndamanNicobar":
        setCities(["Nicobar", "North Middle Andaman", "South Andaman"]);
        break;
      case "Chandigarh":
        setCities(["Chandigarh"]);
        break;
      case "DadraHaveli":
        setCities(["Dadra Nagar Haveli"]);
        break;
      case "DamanDiu":
        setCities(["Daman", "Diu"]);
        break;
      case "Delhi":
        setCities([
          "Central Delhi",
          "East Delhi",
          "New Delhi",
          "North Delhi",
          "North East Delhi",
          "North West Delhi",
          "Shahdara",
          "South Delhi",
          "South East Delhi",
          "South West Delhi",
          "West Delhi",
        ]);
        break;
      case "Lakshadweep":
        setCities(["Lakshadweep"]);
        break;
      case "Puducherry":
        setCities(["Karaikal", "Mahe", "Puducherry", "Yanam"]);
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
    PhoneNo: "",
    state: "",
    City: "",
    message: "",
  };

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(
        "https://prod-14.centralindia.logic.azure.com/workflows/171dcbea9b1148e88514788a30bc1718/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=52ykqTmRHPECU-KMQbm1r_aZIHIvcdAzpCVe_F4fl2U",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const result = await response.statusText;
      console.log("API Response", response);
      if (response.ok) {
        resetForm();
        setSelectedState("");
        setCities([]);
        toast.success("Email sent successfully");
      } else {
        console.error("API Error:", result);
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: ContactFormSchemas,
    onSubmit: (value, action) => {
      handleSubmitForm(value);
      action.resetForm();
      console.log("values", value);
      // emailjs
      //   .send(
      //     "service_6pitte7",
      //     "template_azgm81o",
      //     values,
      //     "dp6xvACY2kw4Z6gwc"
      //   )
      //   .then((response) => {
      //     console.log("Email sent successfully:", response);
      //     setFormResponse(response);
      //     action.resetForm();
      //     // resetForm();
      //   })
      //   .catch((error) => {
      //     console.error("Email send error:", error);
      //   });
      submitMessage();
      action.resetForm();
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
                placeholder="Your Name"
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
                name="PhoneNo"
                onChange={handleChange}
                value={values.PhoneNo}
                pattern="\d{10}"
                maxlength="10"
                placeholder="8140X XXXXX"
              />
              {touched.PhoneNo ||
                (errors.PhoneNo && (
                  <p className={styles.error}>{errors.PhoneNo}</p>
                ))}
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
                // value={values.City}
                onChange={(selectedOption) => {
                  let event = {
                    target: {
                      name: "City",
                      value: selectedOption.value,
                      label: selectedOption.label,
                    },
                  };
                  handleChange(event);
                }}
                isSearchable={true}
                options={cities.map((city) => ({ value: city, label: city }))}
                // options={yearOptions}
                name="year"
                isDisabled={!selectedState}
              />
              {touched.City && errors.City && (
                <p className={styles.error}>{errors.City}</p>
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
              {/* )} */}
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
