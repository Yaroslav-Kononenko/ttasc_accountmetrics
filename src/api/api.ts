import { post, get, put } from "./methods";
import { SignInDataType } from "../types/general";

export const signInUsingPost = async ( data: SignInDataType) => {
  try {
    const response = await post("/auth", data);
    localStorage.setItem('accessToken', response?.data.accessToken);
    localStorage.setItem('refreshToken', response?.data.refreshToken);
  } catch (e: any) {
    console.warn(e);
  }
};

export const refreshTokenUsingPUT = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const response = await put("/refresh", {
      refreshToken: refreshToken,
    });
    localStorage.setItem('accessToken', response?.data.accessToken);
    localStorage.setItem('refreshToken', response?.data.refreshToken);
  } catch (e: any) {
    console.warn(e);
  }
};

export const obtainStatisticsUsingGet = async () => {
  try {
    return await get("/statistics_info");
  } catch (e: any) {
    console.warn(e);
  }
};

export const obtainAditionalCardDataUsingGet = async () => {
  try {
    return await get("/cards_info");
  } catch (e: any) {
    console.warn(e);
  }
};

export const coursesDataUsingGet = async () => {
  try {
    return await get("/main_courses");
  } catch (e: any) {
    console.warn(e);
  }
};

export const logoutUsingPOST = async () => {
  try {
    const response = await post("/logout");
    localStorage.clearItem('accessToken', response?.data.accessToken);
    localStorage.clearItem('refreshToken', response?.data.refreshToken);
    return response;
  } catch (e: any) {
    console.warn(e);
  }
}
