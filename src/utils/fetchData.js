import axios from "axios";

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 3,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
export const exerciseOptions = {
  method: "GET",
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);

  const data = await res.json();

  return data;
};
