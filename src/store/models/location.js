import { api } from '../../libs/api';
import { getInitialScreen } from '../../libs/screen';
import { makeRequest } from '../../services';

export const location = {
  name: 'location',

  state: {
    list: []
  },

  reducers: {
    setLocation(state, payload) {
      return { ...state, ...payload };
    }
  },

  effects: dispatch => {
    return {
      async getLocation(payload) {
        const { navigation, authUser } = payload;

        try {
          const response = await makeRequest(api.updateUserProfile, {
            ...authUser,
            status: true
          });

          const { data } = response;
          const { list } = data;

          dispatch.auth.setLocation({ list });
          navigation.replace(getInitialScreen(user));
        } catch (error) {
          dispatch.auth.setLocation({ list: [] });
        }
      }
    };
  }
};
