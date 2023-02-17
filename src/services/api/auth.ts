import axiosClient from "services/axiosClient";

const LOGIN_API_URI = `/login`;
const VERIFY_AUTH_API_URI = `/verify_auth`;
const SIGNUP_AUTH_API_URI = `/users`;
const LOGOUT_AUTH_API_URI = `/logout`;

const login = async (user) => {
  const res = await axiosClient.post(LOGIN_API_URI, {
    email: user.email,
    password: user.password,
  });
  return res.data;
};

const signup = async (newUser) => {
  const res = await axiosClient.post(SIGNUP_AUTH_API_URI, {
    civilian_id: newUser.civilianId,
    phone: newUser.phoneNumber,
    email: newUser.email,
    name: newUser.name,
    type: newUser.type,
    group: newUser.group,
    password: newUser.password,
  });
  return res.data;
};

const logout = async (refreshToken) => {
  const res = await axiosClient.post(LOGOUT_AUTH_API_URI, {
    refresh_token: refreshToken,
  });

  return res.data;
};

const verifyAuth = async () => {
  const res = await axiosClient.get(VERIFY_AUTH_API_URI);
  return res.data;
};

export { login, signup, logout, verifyAuth };
