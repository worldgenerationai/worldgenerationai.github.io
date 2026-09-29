import React, { useContext } from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";
import { footerSection } from "../../portfolio";
import oxfordCsLogo from "../../assets/images/logos/oxford-cs-pos.svg";
import oxfordCsLogoDark from "../../assets/images/logos/oxford-cs-neg.svg";
import ieaiLogo from "../../assets/images/logos/ieai-light.svg";
import ieaiLogoDark from "../../assets/images/logos/ieai-dark.svg";
import uclLogo from "../../assets/images/logos/ucl.svg";
import uclLogoDark from "../../assets/images/logos/ucl-inverted.svg";
import ukriLogo from "../../assets/images/logos/ukri.svg";
import ukriLogoDark from "../../assets/images/logos/ukri-inverted.svg";

// Each partner supplies a light and a dark variant, so the strip stays
// legible in both themes.
//
// Heights are per-logo, not uniform: the marks differ in aspect ratio and in
// how much of their canvas the artwork fills, so matching on height alone
// makes them look unequal. These values equalise the *ink* area, which is
// what UCL's co-branding rules mean by equal visual weight.
const partners = [
  {
    name: "University of Oxford, Department of Computer Science",
    logo: oxfordCsLogo,
    logoDark: oxfordCsLogoDark,
    url: "https://www.cs.ox.ac.uk/",
    height: "79px"
  },
  {
    name: "University of Oxford, Institute for Ethics in AI",
    logo: ieaiLogo,
    logoDark: ieaiLogoDark,
    url: "https://www.oxford-aiethics.ox.ac.uk/",
    height: "75px"
  },
  {
    name: "UCL Knowledge Lab",
    logo: uclLogo,
    logoDark: uclLogoDark,
    url: "https://www.ucl.ac.uk/ioe/departments-and-centres/centres/ucl-knowledge-lab",
    height: "54px"
  },
  {
    name: "UK Research and Innovation (UKRI)",
    logo: ukriLogo,
    logoDark: ukriLogoDark,
    url: "https://www.ukri.org/",
    height: "59px"
  }
];

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const year = new Date().getFullYear();

  return (
    <footer className="footer-div fade-in-up">
      <ul className="footer-partner-logos">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              title={partner.name}
            >
              <img
                style={{ "--logo-h": partner.height }}
                src={isDark ? partner.logoDark : partner.logo}
                alt={partner.name}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Names the partners in the order their logos appear above. UKRI's
          guidelines require partner logos to run either alphabetically or in
          order of mention; this line is what establishes the order. */}
      <p className="footer-text">{footerSection.partnership}</p>

      <p className="footer-text">
        {footerSection.grantName} (
        <a href={footerSection.grantUrl} target="_blank" rel="noreferrer">
          {footerSection.grantRef}
        </a>
        )
      </p>

      <p className="footer-text footer-disclaimer">
        {footerSection.disclaimer}
      </p>

      <p className="footer-text">
        © {year} {footerSection.copyrightName}
      </p>
    </footer>
  );
}
