import { api } from '../../libs/api';
import { getInitialScreen } from '../../libs/screen';
import { makeRequest, setAuthToken } from '../../services';

export const otp = {
  name: 'otp',
  state: {
    mobile: '',
    serverOtp: '',
    clientOtp: '',
    otpVerified: false,
    errors: null
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    },
    setOtp(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async requestOtp(payload) {
        const { mobile, navigation } = payload;

        try {
          const response = await makeRequest(api.requestOtp, { mobile });
          const { data } = response;

          dispatch.otp.setOtp({ serverOtp: data.otp });
          navigation.replace('VerifyOtp');
        } catch (error) {
          dispatch.otp.setOtp({ error: error.response.data });
        }
      },

      async verifyOtp(payload) {
        const { mobile, otp, navigation } = payload;

        try {
          const response = await makeRequest(api.verifyOtp, {
            mobile,
            otp
          });

          const { data } = response;
          const { user, access_token } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          await setAuthToken(access_token);

          navigation.replace(getInitialScreen(user));
        } catch (error) {
          dispatch.otp.setOtp({ error: error.response.data });
        }
      }
    };
  }
};
