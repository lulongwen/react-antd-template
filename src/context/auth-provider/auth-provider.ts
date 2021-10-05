/**
 * 模拟第三方服务的登录注册
 */
const AUTH_KEY = "__AUTH_PROVIDER_TOKEN__";
const apiURL = process.env.REACT_APP_API_URL || "";

const { localStorage, fetch } = window;

interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

// 获取 token
export const getToken = () => localStorage.getItem(AUTH_KEY);

export const userResponse = ({ user }: { user: User }) => {
  localStorage.setItem(AUTH_KEY, user.token || "");
  return user;
};

// 登录
export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return userResponse(await res.json());
    }
    return Promise.reject();
  });
};

// 注册
export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return userResponse(await res.json());
    }
    return Promise.reject();
  });
};

// 退出，清除 token
export const logout = async () => {
  return localStorage.removeItem(AUTH_KEY);
};
