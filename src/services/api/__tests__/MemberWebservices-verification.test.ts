import { Verifier } from "@pact-foundation/pact";

describe("Pact Verification", () => {
  test.skip("should validate the expectations of our consumer", () => {
    const opts = {
      provider: "MemberWebservices",
      providerBaseUrl: "http://localhost:8080",
      pactBrokerUrl: process.env.PACT_BROKER_URL,
      pactBrokerToken: process.env.PACT_BROKER_TOKEN,
      publishVerificationResult: true,
      providerVersion: "1.0.0",
    };

    return new Verifier(opts).verifyProvider();
  });
});
