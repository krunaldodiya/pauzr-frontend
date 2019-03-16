import { httpUrl } from './vars';

const resource = {
  web: {
    terms: `${httpUrl}/terms`
  },

  api: {
    me: `${httpUrl}/api/users/me`,
    requestOtp: `${httpUrl}/api/otp/request-otp`,
    verifyOtp: `${httpUrl}/api/otp/verify-otp`,
    getLocations: `${httpUrl}/api/locations/list`,
  }
};

const { api, web } = resource;

export { web, api };
