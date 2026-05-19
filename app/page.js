"use client";

import { useState } from "react";

export default function Home() {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);

  const explorePlanet = async () => {
    setLoading(true);

    const res = await fetch("/api/random");
    const data = await res.json();

    setPlanet(data.planet);

    setLoading(false);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
        background: "black",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <h1>🚀 Space Explorer</h1>

      <button
        onClick={explorePlanet}
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "8px"
        }}
      >
        {loading ? "Scanning Galaxy..." : "Explore Planet"}
      </button>

      {planet && (
        <div
          style={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "250px"
          }}
        >
          <h2>{planet.name}</h2>

          <p>
            <strong>Rarity:</strong> {planet.rarity}
          </p>

          <p>
            <strong>Color:</strong> {planet.color}
          </p>
        </div>
      )}
    </main>
  );
}
