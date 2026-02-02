"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  function showInfo(item) {
    if (item === "plastic") setText("Rinse and recycle in plastic bin.");
    else if (item === "paper") setText("Remove staples and recycle as paper.");
    else if (item === "can") setText("Rinse and recycle with metal cans.");
    else if (item === "battery") setText("Use special battery recycling bins.");
    else setText("");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Recycling Helper</h1>

      <select onChange={(e) => showInfo(e.target.value)}>
        <option value="">-- choose item --</option>
        <option value="plastic">Plastic Bottle</option>
        <option value="paper">Paper</option>
        <option value="can">Can</option>
        <option value="battery">Battery</option>
      </select>

      <p>{text}</p>
    </main>
  );
}
