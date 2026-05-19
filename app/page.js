"use client";

import { useState } from "react";

export default function Home() {
  const [random, setRandom] = useState("");

  const getRandom = async () => {
    const res = await fetch("/api/random");
    const data = await res.json();

    setRandom(data.random);
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}
    >
      <h1>SpaceComputer Demo</h1>

      <button onClick={getRandom}>
        Generate
      </button>

      <div>{random}</div>
    </main>
  );
}
