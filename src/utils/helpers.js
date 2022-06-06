export const getIsAdmin = () => {
  return localStorage.getItem("isAdmin");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const getToken = () => {
  return localStorage.getItem("token") || null;
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("isAdmin");
};

export const setUserSession = (token, user, isAdmin) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", user);
  localStorage.setItem("isAdmin", isAdmin);
};
