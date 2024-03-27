import AboutUsPageComponent from "@/application_pages/aboutUsPage/page";

export const metadata = {
  title: "About us | Royale Touche Plywood",
  description: `Learn about Royale Touche Plywood's journey of excellence in crafting premium plywood and block boards in India. Discover our commitment to quality & innovation.`,
  icons: {
    other: [
     { rel: 'canonical', url: 'https://plywood.royaletouche.com/about-us/' },
    ]
  }
};

const Page = () => {
  return <AboutUsPageComponent />;
};
export default Page;
