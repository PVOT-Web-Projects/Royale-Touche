"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/index";
import styles from "@/application_pages/termsAndConditionPage/terms.module.css";
import Inner_header from "@/common/inner_header/page";
import Claim_banner from "@/images/claim_banner.png";
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Terms & Conditions | Royale Touche Plywood";
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
    if (typeof document !== "undefined") {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }
  }, 2000);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Inner_header
        inner_header_image={Claim_banner}
        heading_big="Terms & Condition"
      />
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div className={styles.privacyPolicySection}>
          <h1>Terms & Condition</h1>

          <div className={styles.description}>
            <p>
              1. This warranty is personal to the owner of the product and is
              non-transferable.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              2. The authority to implement the warranty rests solely with
              Royalé Touché Industries Private Limited.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              3. This warranty will only applicable if this warranty certificate
              is duly filled, invoice is uploaded and physical verification of
              the product installation is done by our authorised representative
              within 6 months of date of invoice.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              4. Upon the receipt of a complaint, Royalé Touché Industries
              Private Limited shall depute their authorised representatives for
              physical inspection of the allegedly manufacturing defect related
              portion of the products at the place where it has been used.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              5. At the time of inspection, the purchaser/owner will have to
              produce the proof of purchase (invoice only) issued either by the
              authorized dealer of Royalé Touché Industries Private Limited or
              by the Company, along with the duly filled-in Warranty Certificate
              provided by the Company. The significant mark and the authenticity
              of the product as relevant to Royalé Touché Industries Private
              Limited shall be verified by the authorized representatives of
              Royalé Touché Industries Private Limited. No claims will be
              entertained unless they are accompanied by the purchase invoice.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              6. The authorized representatives of Royalé Touché Industries
              Private Limited will identify the nature of the manufacturing
              defect and compute the extent of the same. The claim of warranty
              shall be subject to verification by the authorized representatives
              of Royalé Touché Industries Private Limited that the manufacturing
              defect caused is covered under the warranty provided by the
              company.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              7. Royalé Touché Industries Private Limited reserves the right to
              take sample from the defective portion of the products and
              thereafter send it for physical/ chemical examination to any of
              the following places:
              <ul className={styles.list}>
               <p> a. Royalé Touché laboratory</p>
               <p> b. All nationally renowned laboratories including:</p>
               <div className={styles.list12}>
                <li >a. National Test House</li>
                <li>b. Shriram Test House, Delhi</li>
                <li>c. B.I.S.</li>
                <li>d. Other government recognised laboratories</li>
                </div>
              </ul>
            </p>
          </div>

          <div className={styles.description}>
            <p>
              8. Royalé Touché Industries Private Limited shall only admit a
              claim for replacement or refund, subject to the test certificate
              (from testing facilities as listed in Clause 6), confirming the
              manufacturing defect and the visual, chemical/physical examination
              confirming that the product is a genuine produce of Royalé Touché
              Industries Private Limited.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              9. On satisfactory proof of the originality of the product and
              based on physical and/or chemical examination, Royalé Touché
              Industries Private Limited shall replace equal quantity of
              respective product which has actually been identified to have a
              manufacturing defect, or refund the money for that particular
              quantity as per the prices mentioned in the Invoice attached by
              the Customer. The decision to either refund or replace the product
              with manufacturing defect will solely be of that of Royalé Touché
              Industries Private Limited.
            </p>
          </div>

          
          <div className={styles.description}>
            <p>
              10.  Notwithstanding what has been stated hereinabove, this
              warranty shall not be applicable to and shall exclude the
              following:
              <ul className={styles.list}>
                <li>
                  Any damage to the product due to natural calamities and causes
                  in the nature of hailstorm, earthquake, fire, flood, tornado
                  and any other Act of God;
                </li>
                <li>
                  Any chemical alternation or treatment or damage done to the
                  product;
                </li>
                <li>
                  Any damage to the product due to water seepage, rot, decay in
                  the product due to the presence of these in the building where
                  the product is used;
                </li>
                <li>
                  Any damage to the product due to impact with foreign objects;
                </li>
                <li>
                  Damage resulting from improper storage, handling, machining,
                  joinery, and other mechanical, chemical, or any other
                  treatment;
                </li>
                <li>
                  Any incidental, consequential or accidental damage caused to
                  the product or arising from the use of the product or due to
                  negligence, mishandling of the product by the end user or his
                  agents;
                </li>
                <li>
                  Any use of the product other than for the specific purposes
                  for which it has been sold to the end user;
                </li>
                <li>
                  Any damage to the product due to poor storage by the end user;
                </li>
                <li>
                  Any act or omission or negligence or nuisance caused by any
                  third party;
                </li>
                <li>
                  Natural wear and tear which is beyond the control of Royalé
                  Touché Industries Private Limited
                </li>
                <li>
                  Cases wherein the Royalé Touché branded plywood and block
                  board, is used along with any other brand of plywood,
                  Blockboard, decorative products or allied products in making
                  the furniture or wood panel products or untreated timber for
                  furnishing.
                </li>
                <li>
                  Cases where components of solid wood timber without proper
                  treatment with fixed type of preservative chemicals are used
                  with our plywood.
                </li>
              </ul>
            </p>
          </div>

          <div className={styles.description}>
            <p>
              11. Royalé Touché Industries Private Limited provides lifetime
              warranty against borer and termite attack subject to the below
              conditions:
            </p>
            <p>
              Though Royalé Touché Industries Private Limited treats its
              products with special chemicals, the warranty does not cover
              abnormal use of the material, i.e. close proximity to water or if
              product has over 15% moisture content which is in accordance to
              BIS norms or any other similar contingencies, lack of maintenance
              or severely pest infected environment and inferior/bad
              workmanship. Royalé Touché Industries Private Limited is not
              responsible for any consequential damages to the plywood products.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              12. This warranty shall not be applicable in any case of
              commercial or economic loss including any direct, incidental or
              consequential loss relating thereto.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              13. This warranty is not applicable if there is any breach of
              warranty condition by the Consumer or the Purchaser.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              14. This warranty shall not be applicable if the Purchaser and/or
              the Consumer fails to strictly adhere to the instructions or
              warning regarding improper or incorrect usage of the Royalé Touché
              Plywood product and/or is not diligent and/or has not taken all
              measures to prevent any harm to the products.
            </p>
          </div>

          {/* <div className={styles.description}>
            <p>
              15. This warranty shall not be applicable if the Royalé Touché
              branded products have been misused, altered or modified by the
              consumer or any other person including the product seller other
              than Royalé Touché Industries Private Limited
            </p>
          </div> */}


          {/* <p>Attach image of board</p> */}

          <div className={styles.description}>
            <p>
              15. The liability of Royalé Touché Industries Private Limited is
              strictly limited to the extent of replacement or refund of the
              material actually defective and no further monetary claim on the
              damaged product or portion can be claimed from Royalé Touché
              Industries Private Limited. In any case, Royalé Touché Industries
              Private Limited shall not be liable:
              <ul className={styles.list}>
                <li>
                  To pay for any costs of removal of the defective or damaged
                  product;
                </li>
                <li>
                  To pay for any costs for re-installation of the new product;
                </li>
                <li>To pay for any labour costs;</li>
                <li>
                  To pay for any costs and/or replacement of the frame or
                  structure or any hardware supporting the Product;
                </li>
                <li>
                  To pay for any other monetary or non-monetary losses incurred
                  by the customer
                </li>
              </ul>
            </p>
          </div>

          <div className={styles.description}>
            <p>
              16. The customer/end user expressly agrees that all claims,
              disputes or differences between the parties hereto arising out of
              relating to the terms herein shall be resolved by arbitration
              before a Sole Arbitrator which shall be nominated by Royalé Touché
              Industries Private Limited. The provisions of the Arbitration and
              Conciliation Act, 1996 as amended from time to time, shall apply
              to the arbitration between the parties. The arbitration
              proceedings, including the Arbitral Award, shall be in English
              language. The award of the Arbitrator shall be final, conclusive
              and binding upon the parties. The venue and seat of arbitration
              shall be at Ahmedabad. The courts of Ahmedabad shall have
              exclusive jurisdiction over the matter barring all other courts.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              17. This warranty applies to all the warrantied products
              manufactured by Royalé Touché Industries Private Limited after 1st
              January, 2024.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Page;
