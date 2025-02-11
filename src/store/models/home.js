import { api } from '../../libs/api';
import { makeRequest } from '../../services';

export const home = {
  name: 'home',
  state: {
    banners: [],
    top_brands: [],
    best_offers: [],
    locations: [],
    professions: []
  },
  reducers: {
    setInitialData(state, payload) {
      return { ...state, ...payload };
    }
  },

  effects: dispatch => {
    return {
      async getInitialData(payload, rootState) {
        try {
          const { data } = await makeRequest(api.getInitialData, {});
          dispatch.home.setInitialData(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
  }
};
