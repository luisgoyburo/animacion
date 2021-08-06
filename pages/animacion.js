import React from "react";
import ScrollToButton from "../components/ScrollToButton.js";
import Section from "../components/Section";

const sections = ["intro", "description", "contact", "footer"];

export default function Animacion() {
  const descriptionRef = React.useRef(null);

  return (
    <div className="App">
      <h1>Hello World.</h1>
      <h2>Click on the button see some magic happen!</h2>
      <ScrollToButton toId="contact">Scroll To Contact!</ScrollToButton>

      <Section title={sections[0]} />
      <Section ref={descriptionRef} title={sections[1]} />

      <Section id={sections[2]} title={sections[2]}>
        <ScrollToButton duration={1500} toRef={descriptionRef}>
          Scroll To Description!
        </ScrollToButton>
      </Section>

      <Section title={sections[3]} />
    </div>
  );
}
