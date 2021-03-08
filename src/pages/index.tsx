import React from "react"
import Layout from "../components/layout"
import Splash from "../components/splash"
import Feature from "../components/feature"
import Features from "../components/features"
import Content from "../components/content"
import Support from "../components/support"

export default function IndexRoute() {
  return (
    <Layout>

      <Splash />
      <Features>
        <Feature
          headline="Compose  Experiments With Confidence"
          text="Build experimental plans from modular protocols that yield precise 
          and predictable directions at the bench. Aquarium protocols increase reproducibility, reduce mistakes, and seamlessly track metadata. "
        />
        <Feature
          headline="Manage Your Lab in One Place"
          text="Realize lab efficiencies by managing research scientists’ inbound experiments, organizing jobs around similar protocol operations, and assigning and overseeing bench work."
        />
        <Feature
          headline="Experiment with Detailed Protocols"
          text="Aquarium gives you context-specific, step-by-step instructions in real time.  That means no more looking for samples, making mistakes in calculations, or forgetting steps."
        />
        <Feature
          headline="Put Your Data Where It Belongs"
          text="Aquarium captures everything—from imported sample history to job tracking to experiment results—as you go. "
        />
      </Features>
      <Content
        headline="Open Content Science"
        text="We believe that the future of research will see coupling the creative energy of small labs
      with the power and efficiency of experimentation at scale. With Aquarium, scientists can use existing protocols, 
      create their own new ones, and share them with peers around the world. "
      />
      <Support
        headline="Ready To Dive In?"
        text="We’re excited to walk you through how Aquarium can meet the needs of your lab."
      />

    </Layout>
  )
}