import { Auth } from "aws-amplify";
import axiosClient from "axios";

export const awsClient = axiosClient.create({});

awsClient.interceptors.request.use(
  async (config) => {
    const awsSession = await Auth.currentSession(); // auto refreshes token if expired
    const jwtToken = awsSession?.getAccessToken().getJwtToken();

    if (jwtToken) {
      config.headers = {
        ...config.headers,
        Authorization: jwtToken,
      };
    }

    return config;
  },

  (error) => {
    Promise.reject(error);
  },
);
