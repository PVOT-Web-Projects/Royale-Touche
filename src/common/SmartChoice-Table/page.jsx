// import Image from 'next/image';
import styles from "@/common/SmartChoice-Table/SmartChoice.module.css";

const TickSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 32 32"
    style={{ fill: "#FFFFFF" }}
  >
    <path d="M 28.796875 6.1347656 A 1.0001 1.0001 0 0 0 28.257812 6.2929688 C 22.174649 10.08797 17.189059 15.185127 13.029297 21.216797 C 10.925384 18.33288 8.5825295 15.811668 5.7167969 14.136719 A 1.0001 1.0001 0 1 0 4.7089844 15.863281 C 7.5979308 17.551798 10.05178 20.18558 12.244141 23.419922 A 1.0001 1.0001 0 0 0 13.90625 23.408203 C 18.081279 17.074764 23.131242 11.848869 29.316406 7.9902344 A 1.0001 1.0001 0 0 0 28.796875 6.1347656 z"></path>
  </svg>
);

const CrossSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-x"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    style={{ fill: "#FFFFFF" }}
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);
const Page = () => {
  return (
    <div>
      <div className={styles.SmartChoice_section}>
        <div className={styles.SmartChoice_table}>
          <table>
          <thead>
            <tr>
              <td colspan="4">
                <span> SMART CHOICE:</span> KNOW YOUR PRODUCT
              </td>
            </tr>
            <tr>
              <th>PLYWOOD QUALITY </th>
              <th>Royalé Touché</th>
              <th>
                OTHER <span>BRANDS</span>
              </th>
              <th>NON- BRANDED</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>PRESERVATIVE TREATMENT FOR BORER & TERMITE</td>
              <td>4 Stages</td>
              <td>2 Stages</td>
              <td>Single Stage</td>
            </tr>
            <tr>
              <td>VACUUM PRESSURE TREATMENT ALL OF VENEERS</td>
              <td>
                <TickSVG />
              </td>
              <td>
                <CrossSVG />
              </td>
              <td>
                <CrossSVG />
              </td>
            </tr>
            <tr>
              <td>FIRE RETARDANT</td>
              <td>
                {" "}
                <TickSVG />{" "}
              </td>
              <td>Limited Products</td>
              <td>
                <CrossSVG />
              </td>
            </tr>
            <tr>
              <td>BOILING WATERPROOF FOR ALL PRODUCTS</td>
              <td>
                {" "}
                <TickSVG />{" "}
              </td>
              <td>Limited Products</td>
              <td>Very Few Products</td>
            </tr>
            <tr>
              <td>LIFETIME WARRANTY FOR ALL PRODUCTS</td>
              <td>
                {" "}
                <TickSVG />{" "}
              </td>
              <td>Select Few Products</td>
              <td>No Lifetime Warrenty</td>
            </tr>
            <tr>
              <td>GURJAN FACE</td>
              <td>
                {" "}
                <TickSVG />{" "}
              </td>
              <td>Select Few Products</td>
              <td>
                <CrossSVG />
              </td>
            </tr>
            <tr>
              <td>CALIBRATED PLY</td>
              <td>
                {" "}
                <TickSVG />{" "}
              </td>
              <td>Select Few Products</td>
              <td>Non - Calibrated </td>
            </tr>
            <tr>
              <td>ALL PRODUCTION IN COMPANY’S OWN FACTORY</td>
              <td>100%</td>
              <td>Select Few Products</td>
              <td>Very Few Products or Job Work</td>
            </tr>
            <tr>
              <td>E0 FORMALDEHYDE EMISSION COMPLIANCE</td>
              <td>
                {" "}
                <TickSVG />{" "}
              </td>
              <td>Select Few Products</td>
              <td>
                <CrossSVG />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
