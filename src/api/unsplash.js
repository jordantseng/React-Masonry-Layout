import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RcFMWg_l8YAJy3uYZFy61_JWesnWWm8TUWm31CwJUG8",
  },
});
