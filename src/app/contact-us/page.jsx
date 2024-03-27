import ContactUs from "@/application_pages/contactUsPage/page";

export const metadata = {
  title: "Contact Us | Royale Touche Plywood",
  description: `Reach out to Royale Touche Plywood for all your inquiries and assistance. Our team is here to help you with your plywood needs. Contact us today.`,
  icons: {
    other: [
     { rel: 'canonical', url: 'https://plywood.royaletouche.com/contact-us/' },
    ]
  }
};
const Page = () => {
  return <ContactUs />;
};

export default Page;
