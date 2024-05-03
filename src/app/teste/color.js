"use client";

import { useState } from "react";

export default function ColorProvider({ children }) {
  const [color, setColor] = useState("red");

  return (
    <div style={{ backgroundColor: color }}>
      <>{children}</>
    </div>
  );
}
