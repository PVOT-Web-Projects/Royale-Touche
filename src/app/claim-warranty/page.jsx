import ClaimWarrantyPage from "@/application_pages/claimWarrantyPage/page";
// import WarrantyAccordian from "@/components/warrantyAccordian/page";

export const metadata = {
  title: "Claim Warranty | Royale Touche Plywood",
  description: `Need to claim warranty for your Royale Touche plywood or block boards? Visit our official website to learn about the warranty process and ensure the longevity of your products.`,
  icons: {
    other: [
     { rel: 'canonical', url: 'https://plywood.royaletouche.com/claim-warranty/' },
    ]
  }
};
const Blogs = () => {
  return <ClaimWarrantyPage />;
};

export default Blogs;
