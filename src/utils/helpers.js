export const getUser = () => {
  return sessionStorage.getItem("user");
};

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};
