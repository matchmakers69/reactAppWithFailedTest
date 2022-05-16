import path from "path";
import { Pact } from "@pact-foundation/pact";

import {
  boolean,
  eachLike,
  email,
  iso8601DateTimeWithMillis,
  somethingLike,
  term,
} from "@pact-foundation/pact/src/dsl/matchers";

import {
  IMemberApi,
  MemberAddress,
  MemberApiClient,
  MemberBasicDetails,
  MemberEmploymentSummary,
} from "../MemberApiClient";

// Mock aws-amplify
jest.mock("aws-amplify");

const EXPECTED_MEMBER_REF = 301089;

const EXPECTED_EMPLOYMENT_SUMMARY: MemberEmploymentSummary = {
  employmentReference: 1,
  jobTitle: "missing-job-title?",
  payId: "missing-payId?",
  payReference: "IDENT2",
  scheme: "001",
  schemeName: "SCHEME 001 (LG)",
  status: 1,
};

const EXPECTED_MEMBER_ADDRESS: MemberAddress = {
  line1: "My first line 35",
  line2: "Member address 35",
  line3: "Cheshire",
  line4: "missing-line-04?",
  line5: "missing-line-05?",
  postcode: "WA14 4DA",
  phoneNumber: "07706000135",
  faxNumber: "+447706000135",
  email: "test_user_35@test.com",
  overseas: true,
};

const EXPECTED_MEMBER_DETAILS: MemberBasicDetails = {
  title: "Ms",
  initials: "A A",
  forenames: "Alice Abigail",
  surname: "Anderson",
  dateOfBirth: new Date("1979-02-28"),
  gender: "F",
  niNumber: "AA123456A",
};

const provider = new Pact({
  port: 9090,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  consumer: "MemberApi",
  provider: "MemberWebservices",
});

// see https://medium.com/@jw_ng/contract-testing-with-pactjs-and-jest-f93c1ffe75a0
const telephoneNumberLike = (value: string) =>
  term({
    matcher: "^(\\+|0)[0-9]+$",
    generate: value,
  });

const postcodeLike = (value: string) =>
  term({
    matcher:
      "^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$",
    generate: value,
  });

describe("MemberApiClient test suite", () => {
  // Start the mock service!
  beforeAll(async () => {
    await provider.setup();

    await provider.addInteraction({
      state: "there is a member",
      uponReceiving: "a request for member basic-details",
      withRequest: {
        path: `/altair/member/${EXPECTED_MEMBER_REF}`,
        method: "GET",
      },
      willRespondWith: {
        body: {
          ...EXPECTED_MEMBER_DETAILS,
          dateOfBirth: iso8601DateTimeWithMillis(EXPECTED_MEMBER_DETAILS.dateOfBirth.toISOString()),
        },
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });

    // see https://blog.risingstack.com/advanced-contract-testing-pact-verification-with-pattern-matching/
    await provider.addInteraction({
      state: "there is a member",
      uponReceiving: "a request for contact address",
      withRequest: {
        path: `/altair/member/${EXPECTED_MEMBER_REF}/address`,
        method: "GET",
      },
      willRespondWith: {
        body: {
          line1: somethingLike(EXPECTED_MEMBER_ADDRESS.line1),
          line2: somethingLike(EXPECTED_MEMBER_ADDRESS.line2),
          line3: somethingLike(EXPECTED_MEMBER_ADDRESS.line3),
          line4: somethingLike(EXPECTED_MEMBER_ADDRESS.line4),
          line5: somethingLike(EXPECTED_MEMBER_ADDRESS.line5),
          postcode: postcodeLike(EXPECTED_MEMBER_ADDRESS.postcode),
          telephoneNumber: telephoneNumberLike(EXPECTED_MEMBER_ADDRESS.phoneNumber), // field name differs
          faxNumber: telephoneNumberLike(EXPECTED_MEMBER_ADDRESS.faxNumber),
          emailAddress: email(EXPECTED_MEMBER_ADDRESS.email), // field name differs
          overseas: boolean(EXPECTED_MEMBER_ADDRESS.overseas),
        },
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });

    await provider.addInteraction({
      state: "there are employments",
      uponReceiving: "a request for member employment summaries",
      withRequest: {
        path: `/altair/member/${EXPECTED_MEMBER_REF}/employment`,
        method: "GET",
      },
      willRespondWith: {
        body: eachLike(EXPECTED_EMPLOYMENT_SUMMARY),
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });

    await provider.addInteraction({
      state: "there is a member",
      uponReceiving: "a request to update contact address",
      withRequest: {
        path: `/altair/member/${EXPECTED_MEMBER_REF}/address`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: EXPECTED_MEMBER_ADDRESS,
      },
      willRespondWith: {
        status: 200,
      },
    });
  });

  let client: IMemberApi;

  beforeEach(() => {
    client = MemberApiClient(provider.mockService.baseUrl);
  });

  afterAll(async () => {
    // Stop the mock service!
    await provider.finalize();
  });

  it("should receive member basic-details", async () => {
    const result: MemberBasicDetails = await client.getMemberDetails(EXPECTED_MEMBER_REF);
    expect(result).toEqual(EXPECTED_MEMBER_DETAILS);
  });

  it("should receive contact address", async () => {
    const result: MemberAddress = await client.getContactAddress(EXPECTED_MEMBER_REF);
    expect(result).toEqual(EXPECTED_MEMBER_ADDRESS);
  });

  it("should receive employment summaries", async () => {
    const result: MemberEmploymentSummary[] = await client.getEmploymentSummaries(
      EXPECTED_MEMBER_REF,
    );
    expect(result).toEqual([EXPECTED_EMPLOYMENT_SUMMARY]);
  });

  it("should update contact address", async () => {
    await client.postContactAddress(EXPECTED_MEMBER_REF, EXPECTED_MEMBER_ADDRESS);
  });
});
