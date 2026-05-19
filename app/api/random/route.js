import { OrbitportSDK } from "@spacecomputer-io/orbitport-sdk-ts";

export async function GET() {
  try {
    const sdk = new OrbitportSDK({
      config: {
        clientId: process.env.ORBITPORT_CLIENT_ID,
        clientSecret: process.env.ORBITPORT_CLIENT_SECRET,
      },
    });

    return Response.json({
      sdkKeys: Object.keys(sdk),
      ctrngType: typeof sdk.ctrng,
      ctrngValue: sdk.ctrng
    });

  } catch (err) {
    return Response.json({
      error: err.message
    });
  }
}
