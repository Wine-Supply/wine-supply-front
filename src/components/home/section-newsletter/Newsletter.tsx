import React from "react";
import { Section } from "./Section";

export default function Newsletter() {
  return (
    <Section>
      <div className="text-container">
        <h2 className="secondary-heading">Receive discounts and news</h2>
        <p>by subscribing to our news letter</p>
      </div>
      <form className="email-container">
        <input
          className="email-input"
          type="email"
          placeholder="Enter your email..."
        />
      </form>
    </Section>
  );
}
