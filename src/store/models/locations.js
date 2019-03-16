import { api } from '../../libs/api';
import { makeRequest } from '../../services';

export const location = {
  name: 'locations',

  state: {
    list: []
  },

  reducers: {
    setLocations(state, payload) {
      return { ...state, ...payload };
    }
  },

  effects: dispatch => {
    return {
      async getLocations(payload) {
        try {
          const { data } = await makeRequest(api.getLocations);
          dispatch.locations.setLocations({ list: data.locations });
        } catch (error) {
          console.log(error);
        }
      }
    };
  }
};
