import { OrbitportSDK } from "@spacecomputer-io/orbitport-sdk-ts";

const planets = [
  {
    name: "Mars",
    rarity: "Common",
    color: "Red"
  },
  {
    name: "Venus",
    rarity: "Common",
    color: "Yellow"
  },
  {
    name: "Jupiter",
    rarity: "Rare",
    color: "Orange"
  },
  {
    name: "Saturn",
    rarity: "Rare",
    color: "Gold"
  },
  {
    name: "Neptune",
    rarity: "Epic",
    color: "Blue"
  },
  {
    name: "Xenon Prime",
    rarity: "Legendary",
    color: "Purple"
  }
];

export async function GET() {
  try {
    const sdk = new OrbitportSDK({
      config: {
        clientId: process.env.ORBITPORT_CLIENT_ID,
        clientSecret: process.env.ORBITPORT_CLIENT_SECRET,
      },
    });

    let randomNumber;

    try {
      const result = await sdk.ctrngService.random();

      randomNumber =
        Date.now() +
        Math.floor(Math.random() * planets.length);

    } catch {
      randomNumber =
        Date.now() +
        Math.floor(Math.random() * planets.length);
    }

    const index = randomNumber % planets.length;

    return Response.json({
      success: true,
      planet: planets[index],
    });

  } catch (err) {
    return Response.json({
      error: err.message
    });
  }
}
