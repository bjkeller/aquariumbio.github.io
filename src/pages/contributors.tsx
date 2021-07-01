import React from "react";
import { contributorsData } from '../pagedata/contributors-data';
import Contributor from '../components/contributor';
import FooterPage from '../components/footerpage';

export default function Contributors() {
  const contributors = contributorsData.map((contributor, i) => {
        return <Contributor contributor={contributor} divider={ i === contributorsData.length - 1 ? false : true} key={contributor.name} />
      })

  return (
    <FooterPage
      currentPage="contributors"
      pageLeft="support"
      pageRight="license"
    >
      {contributors}
    </FooterPage>
  )
}
