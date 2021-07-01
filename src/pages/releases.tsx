import React from "react";
import ReleaseDetails from '../components/releasedetails';
import FooterPage from '../components/footerpage';

export default function releases() {
  return (
    <FooterPage
        currentPage="releases"
        pageLeft="license"
        pageRight="support"
      >
      <ReleaseDetails />
    </FooterPage>
  )
}
