export const getUserIdFromLocalStorage = () => {
    let details = JSON.parse(localStorage.getItem("userszpuolk1289") || "");
    return details?.id;
  };
  export const adminlogIn = (token: string) => {
    return localStorage.setItem("adminszpuolk1289", token);
  };;
  export const adminLogOut = () => {
    localStorage.removeItem("adminszpuolk1289");
    return (window.location.href = "/login");
  };
  
  export const getAccessTokenFromLocalStorage = () => {
    let accessToken = localStorage.getItem("userszpuolk1289");
    return accessToken;
  };
  export const getAdminAccessTokenFromLocalStorage = () => {
    let accessToken = localStorage.getItem("adminszpuolk1289");
    return accessToken;
  };
  
  export const setAdminAccessTokenToLocalStorage = (token: string) => {
    let accessToken = localStorage.setItem("adminszpuolk1289", token);
    return accessToken;
  };
  
  export const getAdminRefreshTokenFromLocalStorage = () => {
    let refreshToken = localStorage.getItem("adminszpuolk1289");
    return refreshToken;
  };