import React from "react";
import logo from "./images/linkedin.png";
import styled from "styled-components";

const FOOTER = styled.footer`

.logo-linkedin {
    height: 30px
}
.footer-desc {
    display: flex;
    justify-content: center;
    color: white;
}
`;

const Footer = () => (
<FOOTER>
  <div className="footer">
    <p className="footer-desc">
      Designed and developed by: Francois -{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/fdelourme2344/"
      >
        <img className="logo-linkedin" src={logo} alt="logo"></img>
      </a>
    </p>
  </div>
</FOOTER>
);

export default Footer;
