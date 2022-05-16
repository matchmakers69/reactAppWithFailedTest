import { parseAsDateOnly } from "utils/dates/parseAsDate";
import { awsClient } from "../../config/axios/AwsClient";

type AltairAddress = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  postcode: string;
  telephoneNumber: string;
  faxNumber: string;
  emailAddress: string;
  overseas: boolean;
};

type AltairMemberBasicDetails = {
  title: string;
  initials: string;
  forenames: string;
  surname: string;
  niNumber: string;
  dateOfBirth: string; // ISO date
  gender: string;
  memberRef: number;
};

export type MemberAddress = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  postcode: string;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  overseas: boolean;
};

export type MemberBasicDetails = {
  title: string;
  initials: string;
  forenames: string;
  surname: string;
  niNumber: string;
  dateOfBirth: Date;
  gender: string;
};

export type MemberEmploymentSummary = {
  employmentReference: number;
  jobTitle: string;
  payId: string;
  payReference: string;
  scheme: string;
  schemeName: string;
  status: number;
};

export type IMemberApi = {
  getMemberDetails: (memberRef: number) => Promise<MemberBasicDetails>;
  getContactAddress: (memberRef: number) => Promise<MemberAddress>;
  getEmploymentSummaries: (memberRef: number) => Promise<MemberEmploymentSummary[]>;
  postContactAddress: (memberRef: number, newAddress: MemberAddress) => Promise<void>;
};

export const MemberApiClient = (baseUrl = process.env.REACT_APP_WEBSERVICES_BASE_URL) => ({
  getContactAddress: async (memberRef: number) => {
    const { status, data } = await awsClient.get<AltairAddress>(
      `${baseUrl}/altair/member/${memberRef}/address`,
    );

    if (status !== 200) {
      throw new Error("Cannot load member address");
    }

    return {
      line1: data.line1,
      line2: data.line2,
      line3: data.line3,
      line4: data.line4,
      line5: data.line5,
      postcode: data.postcode,
      phoneNumber: data.telephoneNumber, // delta
      faxNumber: data.faxNumber,
      email: data.emailAddress, // delta
      overseas: data.overseas,
    };
  },

  getEmploymentSummaries: async (memberRef: number) => {
    const { status, data } = await awsClient.get<MemberEmploymentSummary[]>(
      `${baseUrl}/altair/member/${memberRef}/employment`,
    );

    if (status !== 200) {
      throw new Error("Cannot load employment summaries");
    }

    return data;
  },

  getMemberDetails: async (memberRef: number) => {
    const { status, data } = await awsClient.get<AltairMemberBasicDetails>(
      `${baseUrl}/altair/member/${memberRef}`,
    );

    if (status !== 200) {
      throw new Error("Cannot load member details");
    }

    return {
      ...data,
      dateOfBirth: parseAsDateOnly(data.dateOfBirth),
    };
  },

  postContactAddress: async (memberRef: number, newAddress: MemberAddress) => {
    const { status } = await awsClient.post(
      `${baseUrl}/altair/member/${memberRef}/address`,
      newAddress,
    );

    if (status !== 200) {
      throw new Error("Cannot update contact address");
    }
  },
});
