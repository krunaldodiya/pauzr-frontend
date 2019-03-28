import { normalize } from 'normalizr';
import { api } from '../../libs/api';
import { makeRequest } from '../../services';
import { userListSchema } from '../schema';

export const users = {
  name: 'users',

  state: {
    users: [],
    locations: [],
    professions: []
  },

  reducers: {
    setInitialdata(state, payload) {
      const { locations, professions } = payload;

      return { ...state, locations, professions };
    },

    setUsers(state, payload) {
      const data = normalize(payload.users.data, userListSchema);

      return { ...state, data: data.entities.users };
    }
  },

  effects: dispatch => {
    return {
      async getInitialData(payload) {
        try {
          const { data } = await makeRequest(api.getInitialDataForUser);
          const { locations, professions } = data;

          dispatch.users.setInitialdata({ locations, professions });
        } catch (error) {
          console.log(error);
        }
      },

      async getUsers(payload, rootState) {
        const { page, filters } = payload;

        try {
          const response = await makeRequest(api.getUsers, { page, filters });

          const { data } = response;
          const { users } = data;

          dispatch.users.setUsers({ users });
        } catch (error) {
          dispatch.users.setUsers({ errors: error.response.data });
        }
      }
    };
  }
};
