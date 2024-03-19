import FaqsPage from "@/application_pages/faqsPage/page";

export const metadata = {
  title: "FAQ | Royale Touche Plywood ",
  description: `Find answers to commonly asked questions about Plywood its maintenance, how to use  and more. Explore our FAQs section for comprehensive information and assistance.`,
  icons: {
    other: [
      {
        rel: "canonical",
        url: "https://plywood.royaletouche.com/faqs",
      },
    ],
  },
};
const Page = () => {
  return <FaqsPage />;
};

export default Page;
