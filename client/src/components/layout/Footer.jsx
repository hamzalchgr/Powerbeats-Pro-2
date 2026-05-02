import { Link } from "react-router-dom";

const APPLE_LEGAL = [
  `Apple Card Monthly Installments (ACMI) is a 0% APR payment option available at checkout in the U.S. for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE. It is subject to credit approval and credit limit.`,

  `Existing customers should refer to their Customer Agreement for their variable APR. As of January 1, 2026, APR ranges from 17.49% to 27.74%. If you do not select ACMI at checkout, purchases are subject to your Apple Card’s variable APR.`,

  `Taxes and shipping on ACMI purchases are subject to your Apple Card’s variable APR. ACMI requires selecting a supported carrier for iPhone purchases, including AT&T, Boost Mobile, T-Mobile, or Verizon.`,

  `ACMI is not available for certain storefronts and programs, including Employee Purchase Plans, corporate programs, small business programs, government programs, or refurbished devices.`,

  `The final monthly payment equals the product price minus previous payments. ACMI terms, including eligibility and installment length, may change at any time.`,

  `Financing is available to qualified customers and requires selecting ACMI at checkout. Taxes and shipping are not included in 0% APR.`,

  `To use Apple Card features, you must add it to Wallet on a supported iPhone or iPad with the latest OS. Apple Card is issued by Goldman Sachs Bank USA.`,

  `Apple Payments Services LLC provides services for Apple Card but is not a bank. Apple Pay is also a service provided by Apple Payments Services LLC.`,

  `All Apple Card communications and support are primarily in English. Availability may vary depending on region.`,

  `AppleCare One provides device protection covering defects, battery issues, and accidental damage. Coverage includes certain accessories when used with eligible devices.`,

  `Devices must meet eligibility requirements, including age limits and account ownership. Coverage includes service fees, deductibles, and claim limits.`,

  `Theft and loss coverage requires Find My to be enabled and includes claim procedures such as device erasure and ownership transfer.`,

  `Replacement devices may include new or refurbished parts tested to meet Apple standards.`,

  `AppleCare plans are optional and separate from Apple’s standard warranty and legal consumer rights.`,

  `Insurance coverage under AppleCare One is underwritten by New Hampshire Insurance Company and administered by AppleCare Service Company.`,

  `Service fees, deductibles, and coverage terms vary and are subject to applicable conditions and limitations.`,

  `Subscription offers, such as Apple Fitness+, are limited to eligible users and automatically renew unless canceled.`,

  `Device performance features such as battery life, noise cancellation, and water resistance depend on usage, environment, and maintenance.`,

  `Testing for products like Powerbeats Pro 2 was conducted under controlled conditions; real-world performance may vary.`,

  `Wireless charging requires compatible Qi-certified chargers, and certain features require supported hardware and software.`,

  `Packaging and environmental metrics are estimated based on internal Apple calculations.`,

  `Location data may be approximated based on IP address or previously provided information.`,
];

const Footer = () => {
  return (
    <footer className="max-w-[1156px] px-4 md:px-6 pt-20 mx-auto">
      <p className="text-xs text-text-muted">
        <span>
          Apple Card Monthly Installments (ACMI) is a 0% APR payment option that
          is only available if you select it at checkout in the U.S. for
          eligible products purchased at Apple Store locations, apple.com(Opens
          in a new window), the Apple Store app, or by calling 1-800-MY-APPLE,
          and is subject to credit approval and credit limit. View Products you
          can buy from Apple with Apple Card Monthly Installments(Opens in a new
          window) for more information about eligible products. Existing
          customers: See your Customer Agreement for your variable APR. As of
          January 1, 2026, the variable APR on new Apple Card accounts ranges
          from 17.49% to 27.74%. You must elect to use ACMI at checkout. If you
          buy an ACMI-eligible product with a one-time payment on Apple Card at
          checkout, that purchase is subject to your Apple Card’s variable APR,
          not the ACMI 0% APR. Taxes and shipping on items purchased using ACMI
          are subject to your Apple Card’s variable APR, not the ACMI 0% APR. In
          order to buy an iPhone with ACMI, you must select one of the following
          carriers (prepaid carrier plans are not supported): AT&T, Boost
          Mobile, T-Mobile, or Verizon. An iPhone purchased with ACMI is always
          unlocked, so you can switch carriers at any time, subject to your
          carrier’s terms. ACMI is not available for purchases made at the
          following special storefronts or when using these discounts in-store
          at Apple: Apple Employee Purchase Plan; participating corporate
          Employee Purchase Programs; Apple at Work for small businesses;
          Government and Veterans and Military Purchase Programs; or on
          refurbished devices. The last month’s payment for each product will be
          the product’s purchase price, less all other payments at the monthly
          payment amount. ACMI is subject to change at any time for any reason,
          including but not limited to installment term lengths and eligible
          products. See the Apple Card Customer Agreement(Opens in a new window)
          for more information about ACMI.
        </span>{" "}
        <br />
        <br />
        <ul className="flex flex-col gap-2">
          {APPLE_LEGAL.map((section, index) => (
            <li key={index} className="flex items-start gap-2 ">
              <span>{index + 1}"</span>
              <p className="flex flex-col">{section}</p>
            </li>
          ))}
        </ul>
      </p>

      <div className="flex flex-wrap gap-2 justify-between py-4 mt-4 border-t border-off-white text-xs text-text-muted">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>

        <ul className="flex flex-wrap gap-4 font-medium">
          <li>
            <Link
              to=""
              className="text-text-muted text-xs hover:bg-transparent"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-text-muted text-xs hover:bg-transparent"
            >
              Terms of Use
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-text-muted text-xs hover:bg-transparent"
            >
              Sales and Refunds
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-text-muted text-xs hover:bg-transparent"
            >
              Legal
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
