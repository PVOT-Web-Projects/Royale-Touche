import TermsAndConditionPage from "@/application_pages/termsAndConditionPage/page";

export const metadata = {
  title: "Treams & Conditions | Royale Touche Plywood",
  description: `Terms and conditions outlined by Royale Touche Plywood to ensure transparency and trust in every transaction. Learn about our policies regarding warranties, returns, and more on our official website.`,
  icons: {
    other: [
      {
        rel: "canonical",
        url: "https://plywood.royaletouche.com/terms_and_condition",
      },
    ],
  },
};
const Page = () => {
  return <TermsAndConditionPage />;
};

export default Page;
