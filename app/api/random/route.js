import { OrbitportSDK } from "@spacecomputer-io/orbitport-sdk-ts";

export async function GET() {
  try {
    const sdk = new OrbitportSDK({
      config: {
        clientId: process.env.ORBITPORT_CLIENT_ID,
        clientSecret: process.env.ORBITPORT_CLIENT_SECRET,
      },
    });

    const result = await sdk.ctrngService.random();

    return Response.json({
      success: true,
      data: result
    });

  } catch (err) {
    return Response.json({
      error: err.message
    });
  }
}
