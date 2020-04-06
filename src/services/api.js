import axios from "axios";

export const key = "ffea8b568af75026111811cef0e1ff27";
export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});
