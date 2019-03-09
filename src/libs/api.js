import { httpUrl } from './vars';

const resource = {
  web: {
    terms: `${httpUrl}/terms`
  },

  api: {
    me: `${httpUrl}/api/users/me`
  }
};

const { api, web } = resource;

export { web, api };
