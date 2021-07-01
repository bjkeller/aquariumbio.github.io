import React from "react";
import ContactForm from '../components/contactform';
import FooterPage from '../components/footerpage';

export default function Support() {
  return (
    <FooterPage
      currentPage="support"
      subtitle="Need help or have questions? Send us a message — we're here for you."
      pageLeft="releases"
      pageRight="contributors"
    >
      <ContactForm commentField={true} />
    </FooterPage>
  )
}
