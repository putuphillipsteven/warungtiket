import axios from "axios";

export const fetchEvent = async (provinceId) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/event?provinceId=${provinceId}`
    );
    return res;
  } catch (err) {
    console.log("error", err);
  }
};
