import { OrbitportSDK } from "@spacecomputer-io/orbitport-sdk-ts";

export async function GET() {
  try {
    const sdk = new OrbitportSDK({
      config: {
        clientId: process.env.ORBITPORT_CLIENT_ID,
        clientSecret: process.env.ORBITPORT_CLIENT_SECRET,
      },
    });

    const methods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(sdk.ctrngService)
    );

    return Response.json({
      methods
    });

  } catch (err) {
    return Response.json({
      error: err.message
    });
  }
}
