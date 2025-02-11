import { httpUrl } from './vars';

const resource = {
  web: {
    terms: `${httpUrl}/terms`
  },

  api: {
    me: `${httpUrl}/api/users/me`,
    requestOtp: `${httpUrl}/api/otp/request-otp`,
    verifyOtp: `${httpUrl}/api/otp/verify-otp`,
    updateUserProfile: `${httpUrl}/api/users/update`,
    getInitialData: `${httpUrl}/api/home/init`
  }
};

const { api, web } = resource;

export { web, api };
