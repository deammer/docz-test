import React from "react";
import { Playground as OriginalPlayground } from "gatsby-theme-docz/src/components/Playground";

export const Playground = props => (
  <div style={{ background: "red", padding: 15 }}>
    <div>Here's a custom Playground component:</div>
    <OriginalPlayground {...props} />
  </div>
);
