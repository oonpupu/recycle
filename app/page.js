"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  function showInfo(item) {
    if (item === "plastic") setText("Rinse it and put it in the plastic recycling bin.");
    else if (item === "paper") setText("Remove staples or tape, then recycle as paper.");
    else if (item === "can") setText("Rinse the can and recycle it with metal waste.");
    else if (item === "battery") setText("Do NOT throw away. Use a special battery recycling box.");
    else setText("");
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>♻ Recycling Helper</h1>
        <p style={styles.subtitle}>
          Learn how to recycle common items correctly
        </p>

        <select style={styles.select} onChange={(e) => showInfo(e.target.value)}>
          <option value="">Select an item</option>
          <option value="plastic">Plastic Bottle</option>
          <option value="paper">Paper</option>
          <option value="can">Can</option>
          <option value="battery">Battery</option>
        </select>

        {text && <div style={styles.result}>{text}</div>}
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "360px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "16px",
  },
  result: {
    marginTop: "20px",
    padding: "12px",
    background: "#f1f8e9",
    borderRadius: "8px",
    fontSize: "14px",
  },
};
